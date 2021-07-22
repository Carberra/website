import Head from 'next/head';
import { Component } from 'react';

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
type States = {};

export default class Contact extends Component<Props, States> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

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
          <form className="w-11/12 md:w-9/12 lg:w-7/12 xl:w-6/12 2xl:w-5/12 mx-auto px-3 md:px-10 flex-grow">
            <ThemeProvider theme={theme}>
              <div className="flex justify-center py-1">
                <TextField
                  id="contactName"
                  label="Name"
                  type="text"
                  required
                  inputProps={{ 'aria-label': 'name' }}
                  className="w-full mr-0 sm:mr-5"
                />
                <TextField
                  id="contactEmail"
                  label="Email"
                  type="label"
                  required
                  inputProps={{ 'aria-label': 'email' }}
                  className="hidden sm:flex w-full ml-5"
                />
              </div>
              <div className="flex sm:hidden justify-center py-1">
                <TextField
                  id="contactEmail"
                  label="Email"
                  type="label"
                  required
                  inputProps={{ 'aria-label': 'email' }}
                  className="w-full"
                />
              </div>
              <div className="flex justify-center py-1">
                <TextField
                  id="contactSubject"
                  label="Subject"
                  type="text"
                  required
                  inputProps={{ 'aria-label': 'subject' }}
                  className="w-full"
                />
              </div>
              <div className="flex justify-center py-1">
                <TextField
                  id="contactMessage"
                  label="Message"
                  type="text"
                  multiline
                  required
                  rows={6}
                  maxRows={6}
                  inputProps={{ 'aria-label': 'message' }}
                  className="w-full"
                />
              </div>
            </ThemeProvider>
            <div className="flex justify-center mt-6">
              <Button>Submit</Button>
            </div>
          </form>
          <Footer className="w-full" />
        </div>
      </div>
    );
  }
}
