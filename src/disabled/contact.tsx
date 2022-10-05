import Head from 'next/head';
import React, { Component } from 'react';

import { ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';

import { Navbar } from '@ui/Navbar';
import { Footer } from '@ui/Footer';
import { Button } from '@ui/Button';
import { Spinner } from '@ui/Spinner';
import { muiTheme } from '@styles/theme';
import API from '@api';

type Props = {};
type States = {
  invalidFields: {
    name: InvalidFieldStatus;
    email: InvalidFieldStatus;
    subject: InvalidFieldStatus;
    message: InvalidFieldStatus;
  };
  formValues: FormValues;
  formSubmittedMessage: string;
  formSubmittedError: boolean;
  formSubmitting: boolean;
};

interface InvalidFieldStatus {
  invalid: boolean;
  reason: string;
}

interface FormValues {
  name: string;
  email: string;
  emailMobile: string;
  subject: string;
  message: string;
}

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default class Contact extends Component<Props, States> {
  constructor(props: Props) {
    super(props);
    this.state = {
      invalidFields: {
        name: { invalid: false, reason: '' },
        email: { invalid: false, reason: '' },
        subject: { invalid: false, reason: '' },
        message: { invalid: false, reason: '' },
      },
      formValues: {
        name: '',
        email: '',
        emailMobile: '',
        subject: '',
        message: '',
      },
      formSubmittedMessage: '',
      formSubmittedError: false,
      formSubmitting: false,
    };
  }

  setFormDisabled = (disabled: boolean) => {
    let formElements = [
      document.getElementById('contactName') as HTMLInputElement,
      document.getElementById('contactEmail') as HTMLInputElement,
      document.getElementById('contactEmailMobile') as HTMLInputElement,
      document.getElementById('contactSubject') as HTMLInputElement,
      document.getElementById('contactMessage') as HTMLTextAreaElement,
      document.getElementById('contactSubmit') as HTMLButtonElement,
    ];

    for (let element of formElements) element.disabled = disabled;
  };

  handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let formData: FormData & { emailMobile: string } = {
      name: this.state.formValues.name,
      email: this.state.formValues.email,
      emailMobile: this.state.formValues.emailMobile,
      subject: this.state.formValues.subject,
      message: this.state.formValues.message,
    };

    this.setState({
      invalidFields: {
        ...this.state.invalidFields,
        name: {
          invalid: !formData.name,
          reason: !formData.name ? 'Please provide a name.' : '',
        },
        email: {
          invalid: !formData.email && !formData.emailMobile,
          reason:
            !formData.email && !formData.emailMobile
              ? 'Please provide a email.'
              : '',
        },
        subject: {
          invalid: !formData.subject,
          reason: !formData.subject ? 'Please provide a subject.' : '',
        },
        message: {
          invalid: !formData.message,
          reason: !formData.message ? 'Please provide a message.' : '',
        },
      },
    });

    if (
      !formData.name ||
      (!formData.email && !formData.emailMobile) ||
      !formData.subject ||
      !formData.message
    )
      return;

    let data: FormData = {
      ...(({ emailMobile, ...o }) => o)(formData),
      email: formData.email || formData.emailMobile,
    };

    this.verifySubmission(data);
  };

  submitFormData = async (data: FormData) => {
    let formDataResponse: boolean = true;

    await API.post('contact', { data: data })
      .then((res) => {
        !res.status.toString().startsWith('2') && (formDataResponse = false);
      })
      .catch(() => (formDataResponse = false));
    if (!formDataResponse) {
      this.setState({
        formSubmittedMessage:
          'There was an error submitting the form. Please try again.',
        formSubmittedError: true,
        formSubmitting: false,
      });
      return;
    }

    this.setState({
      formValues: {
        name: '',
        email: '',
        emailMobile: '',
        subject: '',
        message: '',
      },
      formSubmittedMessage: 'Form successfully submitted.',
      formSubmitting: false,
    });
  };

  verifySubmission = (data: FormData) => {
    let verified: boolean = true;

    this.setFormDisabled(true);
    this.setState({
      formSubmitting: true,
      formSubmittedError: false,
      formSubmittedMessage: '',
    });

    try {
      // @ts-ignore: grecaptcha undefined
      grecaptcha.ready(() => {
        // @ts-ignore: grecaptcha undefined
        grecaptcha
          .execute(process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY, {
            action: 'contactSubmission',
          })
          .then(async (token: string) => {
            await API.post('contact/verify', { data: { token: token } })
              .then((res) => {
                res.status !== 200 && (verified = false);
              })
              .catch(() => (verified = false))
              .finally(() => {
                !verified &&
                  this.setState({
                    formSubmittedMessage:
                      'There was an error submitting the form. Please try again.',
                    formSubmittedError: true,
                    formSubmitting: false,
                  });

                this.setFormDisabled(false);
              });
            this.submitFormData(data);
          });
      });
    } catch {
      this.setState({
        formSubmittedMessage:
          'There was an error submitting the form. Please try again.',
        formSubmittedError: true,
        formSubmitting: false,
      });

      this.setFormDisabled(false);
    }
  };

  handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let direct = e.target.offsetParent as HTMLDivElement;
    let container = direct.offsetParent as HTMLDivElement;

    if (!direct || !container) return;

    this.setState({
      formValues: {
        ...this.state.formValues,
        [container.dataset.state as keyof FormValues]: e.target.value,
      },
    });

    let invalidFieldKey =
      container.dataset.state === 'emailMobile'
        ? 'email'
        : container.dataset.state;

    this.setState({
      invalidFields: {
        ...this.state.invalidFields,
        [invalidFieldKey as keyof InvalidFieldStatus]: {
          invalid: !e.target.value,
          reason: !e.target.value ? `Please provide a ${invalidFieldKey}.` : '',
        },
      },
    });
  };

  render() {
    return (
      <div className="bg-brand-black">
        <Head>
          <title>Contact | Carberra Tutorials</title>
          <meta
            name="description"
            content="Get in touch with Carberra Tutorials"
          />
        </Head>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <Spinner
            className={`fixed w-full h-screen bottom-0 left-0 ${
              !this.state.formSubmitting && 'hidden'
            }`}
            spinnerClassName="md:absolute md:top-72"
          />
          {!this.state.formSubmitting && this.state.formSubmittedMessage && (
            <div
              className={`w-full py-1 ${
                this.state.formSubmittedError ? 'bg-red-600' : 'bg-green-600'
              } flex items-center justify-center`}
            >
              <p className="text-white font-sans text-md">
                {this.state.formSubmittedMessage}
              </p>
            </div>
          )}

          <div className="flex justify-center">
            <h1 className="text-brand-gradient font-brand text-4xl text-center mt-10 mb-5 uppercase">
              Get in Touch
            </h1>
          </div>
          <form
            onSubmit={this.handleFormSubmit}
            id="contactForm"
            className="w-11/12 md:w-9/12 lg:w-7/12 xl:w-6/12 2xl:w-5/12 mx-auto px-3 md:px-10 grow mt-4"
          >
            <ThemeProvider theme={muiTheme}>
              <div className="flex justify-center py-1">
                <TextField
                  id="contactName"
                  label="Name"
                  type="text"
                  value={this.state.formValues.name}
                  onChange={this.handleValueChange}
                  data-state="name"
                  inputProps={{ 'aria-label': 'name' }}
                  className="w-full mr-0 sm:mr-1"
                  error={this.state.invalidFields.name.invalid}
                  helperText={this.state.invalidFields.name.reason}
                />
                <TextField
                  id="contactEmail"
                  label="Email"
                  type="email"
                  value={this.state.formValues.email}
                  onChange={this.handleValueChange}
                  data-state="email"
                  inputProps={{ 'aria-label': 'email' }}
                  className="hidden sm:flex w-full ml-0 sm:ml-1"
                  error={this.state.invalidFields.email.invalid}
                  helperText={this.state.invalidFields.email.reason}
                />
              </div>
              <div className="flex sm:hidden justify-center py-1">
                <TextField
                  id="contactEmailMobile"
                  label="Email"
                  type="email"
                  value={this.state.formValues.emailMobile}
                  onChange={this.handleValueChange}
                  data-state="emailMobile"
                  inputProps={{ 'aria-label': 'email' }}
                  className="w-full"
                  error={this.state.invalidFields.email.invalid}
                  helperText={this.state.invalidFields.email.reason}
                />
              </div>
              <div className="flex justify-center py-1">
                <TextField
                  id="contactSubject"
                  label="Subject"
                  type="text"
                  value={this.state.formValues.subject}
                  onChange={this.handleValueChange}
                  data-state="subject"
                  inputProps={{ 'aria-label': 'subject' }}
                  className="w-full"
                  error={this.state.invalidFields.subject.invalid}
                  helperText={this.state.invalidFields.subject.reason}
                />
              </div>
              <div className="flex justify-center py-1">
                <TextField
                  id="contactMessage"
                  label="Message"
                  type="text"
                  value={this.state.formValues.message}
                  onChange={this.handleValueChange}
                  data-state="message"
                  multiline
                  minRows={6}
                  maxRows={6}
                  inputProps={{ 'aria-label': 'message' }}
                  className="w-full"
                  error={this.state.invalidFields.message.invalid}
                  helperText={this.state.invalidFields.message.reason}
                />
              </div>
            </ThemeProvider>
            <p className="text-xs text-gray-500 font-sans text-center mt-1">
              This site is protected by reCAPTCHA and the Google{' '}
              <a
                href="https://policies.google.com/privacy"
                className="hover:underline text-brand-blue"
              >
                Privacy Policy
              </a>{' '}
              and{' '}
              <a
                href="https://policies.google.com/terms"
                className="hover:underline text-brand-blue"
              >
                Terms of Service
              </a>{' '}
              apply.
            </p>
            <div className="flex justify-center mt-5 z-0 relative">
              <Button type="submit" id="contactSubmit">
                Submit
              </Button>
            </div>
          </form>
          <p className="text-sm text-gray-400 font-sans text-center mt-6 mx-4">
            Form not working? Get in touch via email at{' '}
            <a
              href={`mailto:${process.env.NEXT_PUBLIC_EMAIL_TO}?subject=Contact Request | Subject Here`}
              className="text-brand-blue hover:underline"
            >
              {process.env.NEXT_PUBLIC_EMAIL_TO}
            </a>
          </p>
          <Footer className="w-full" />
        </div>
      </div>
    );
  }
}
