import { NextApiRequest, NextApiResponse } from 'next';

import fs from 'fs';

import NodeMailer from 'nodemailer';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const sendEmail = async (data: FormData) => {
  let transport = NodeMailer.createTransport({
    // @ts-ignore: werid no overload only after using env vars (tsserver 2769)
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
  });

  const contactMessage = {
    from: process.env.EMAIL_FROM,
    to: process.env.NEXT_PUBLIC_EMAIL_TO,
    subject: `Contact Request | ${data.subject}`,
    text: `Name: ${data.name}

Email: ${data.email}

Subject: ${data.subject}

Message: ${data.message}`,
    html: fs
      .readFileSync(`${process.cwd()}/src/emails/contact-request.html`, 'utf8')
      .replaceAll('${name}', data.name)
      .replaceAll('${email}', data.email)
      .replaceAll('${subject}', data.subject)
      .replaceAll('${message}', data.message),
  };

  const submittedMessage = {
    from: process.env.EMAIL_FROM,
    to: data.email,
    subject: `Contact Submission | ${data.subject}`,
    text: `Hi ${data.name}, your contact submission to Carberra has been received. A copy of your submission has been left below.

Name: ${data.name}

Email: ${data.email}

Subject: ${data.subject}

Message: ${data.message}`,
    html: fs
      .readFileSync(
        `${process.cwd()}/src/emails/contact-submission-recieved.html`,
        'utf8'
      )
      .replaceAll('${name}', data.name)
      .replaceAll('${email}', data.email)
      .replaceAll('${subject}', data.subject)
      .replaceAll('${message}', data.message),
  };

  transport.sendMail(contactMessage, (err: any) => {
    if (err) throw err;
  });

  transport.sendMail(submittedMessage, (err: any) => {
    if (err) return err;
  });
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    return res.status(200).json({ status: 'No data to return.' });
  }

  if (req.method === 'POST') {
    try {
      await sendEmail(req.body.data);
    } catch {
      return res.status(502).json({ status: 'Failed to submit data.' });
    }

    return res.status(201).json({ status: 'Data submitted.' });
  }

  return res.status(405).json({ message: 'Request type is not allowed.' });
};
