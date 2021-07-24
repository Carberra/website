import { NextApiRequest, NextApiResponse } from 'next';

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
    to: process.env.EMAIL_TO,
    subject: data.subject,
    text: data.message,
  };

  const submittedMessage = {
    from: process.env.EMAIL_FROM,
    to: data.email,
    subject: 'Contact Submission Recieved',
    text: 'Your contact submission to Carberra Tutorials has been recieved.',
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
