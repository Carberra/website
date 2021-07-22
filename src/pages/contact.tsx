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
};

interface InvalidFieldStatus {
  invalid: boolean;
  reason: string;
}

interface FormDataRaw {
  contactName: string;
  contactEmail: string;
  contactEmailMobile: string;
  contactSubject: string;
  contactMessage: string;
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
    };
  }

  handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let formData: FormDataRaw = {
      contactName: '',
      contactEmail: '',
      contactEmailMobile: '',
      contactSubject: '',
      contactMessage: '',
    };

    for (let i: number = 0; i < 5; i++) {
      // @ts-ignore: not accepting number even though looking
      // through the object has the wanted elements
      let input = e.target[i];

      formData[input.id as keyof FormDataRaw] = input.value;
    }

    this.setState({
      invalidFields: {
        ...this.state.invalidFields,
        name: {
          invalid: !formData.contactName,
          reason: !formData.contactName ? 'Please provide a name.' : '',
        },
        email: {
          invalid: !formData.contactEmail && !formData.contactEmailMobile,
          reason:
            !formData.contactEmail && !formData.contactEmailMobile
              ? 'Please provide a email.'
              : '',
        },
        subject: {
          invalid: !formData.contactSubject,
          reason: !formData.contactSubject ? 'Please provide a subject.' : '',
        },
        message: {
          invalid: !formData.contactMessage,
          reason: !formData.contactMessage ? 'Please provide a message.' : '',
        },
      },
    });

    if (
      !formData.contactName ||
      (!formData.contactEmail && !formData.contactEmailMobile) ||
      !formData.contactSubject ||
      !formData.contactMessage
    )
      return;
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
            className="w-11/12 md:w-9/12 lg:w-7/12 xl:w-6/12 2xl:w-5/12 mx-auto px-3 md:px-10 flex-grow"
          >
            <ThemeProvider theme={theme}>
              <div className="flex justify-center py-1">
                <TextField
                  id="contactName"
                  label="Name"
                  type="text"
                  inputProps={{ 'aria-label': 'name' }}
                  className="w-full mr-0 sm:mr-5"
                  error={this.state.invalidFields.name.invalid}
                  helperText={this.state.invalidFields.name.reason}
                />
                <TextField
                  id="contactEmail"
                  label="Email"
                  type="email"
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
                  multiline
                  rows={6}
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
