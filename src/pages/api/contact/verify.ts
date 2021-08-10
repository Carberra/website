import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

interface UserData {
  token: string;
}

interface VerificationResult {
  status: number;
  message: string;
}

interface RecaptchaData {
  secret: string;
  response: string;
}

const verifyUser = async (data: UserData): Promise<VerificationResult> => {
  let req_data: RecaptchaData = {
    secret: process.env.RECAPTCHA_SECRET_KEY!,
    response: data.token,
  };

  axios
    .post(
      'https://www.google.com/recaptcha/api/siteverify',
      new URLSearchParams(Object.entries(req_data)).toString(),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    )
    .then((res) => {
      if (!res.data.success)
        return {
          status: 400,
          message: 'Verification failed',
        };

      if (res.data.score <= 0.5 || res.data.action !== 'contactSubmission')
        return { status: 403, message: 'Minimum score was not met.' };

      return { status: 200, message: 'Verification successful.' };
    })
    .catch(() => {
      return {
        status: 400,
        message: 'Verification failed',
      };
    });

  return {
    status: 500,
    message: 'Verification failed due to unknown error.',
  };
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    return res.status(200).json({ status: 'No data to return.' });
  }

  if (req.method === 'POST') {
    let result: VerificationResult = await verifyUser(req.body.data);

    return res.status(result.status).json({ message: result.message });
  }

  return res.status(405).json({ message: 'Request type is not allowed.' });
};
