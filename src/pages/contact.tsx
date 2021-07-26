import Head from 'next/head';
import React, { Component } from 'react';

import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import twConfig from '@base/tailwind.config';

import { Navbar } from '@ui/Navbar';
import { Footer } from '@ui/Footer';
import { Button } from '@ui/Button';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1987bd',
    },
    secondary: {
      main: '#9e1cf3',
    },
    type: 'dark',
  },
  typography: {
    fontFamily: twConfig.theme.fontFamily.sans.join(','),
  },
});

type Props = {};
type States = {
  invalidFields: {
    name: InvalidFieldStatus;
    email: InvalidFieldStatus;
    subject: InvalidFieldStatus;
    message: InvalidFieldStatus;
  };
  formValues: FormValues;
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
    };
  }

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

    this.setState({
      formValues: {
        name: '',
        email: '',
        emailMobile: '',
        subject: '',
        message: '',
      },
    });
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
          <h1 className="text-brand-gradient font-brand text-3xl text-center mt-10 mb-5 lowercase">
            Get in Touch
          </h1>
          <form
            onSubmit={this.handleFormSubmit}
            id="contactForm"
            className="w-11/12 md:w-9/12 lg:w-7/12 xl:w-6/12 2xl:w-5/12 mx-auto px-3 md:px-10 flex-grow"
          >
            <ThemeProvider theme={theme}>
              <div className="flex justify-center py-1">
                <TextField
                  id="contactName"
                  label="Name"
                  type="text"
                  value={this.state.formValues.name}
                  onChange={this.handleValueChange}
                  data-state="name"
                  inputProps={{ 'aria-label': 'name' }}
                  className="w-full mr-0 sm:mr-5"
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
                  className="hidden sm:flex w-full ml-5"
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
            <div className="flex justify-center mt-6">
              <Button type="submit">Submit</Button>
            </div>
          </form>
          <Footer className="w-full" />
        </div>
      </div>
    );
  }
}
