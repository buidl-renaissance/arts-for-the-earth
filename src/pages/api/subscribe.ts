import { storeEmail } from '@/db/email';
import type { NextApiRequest, NextApiResponse } from 'next';

type ResponseData = {
  success: boolean;
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    const { email } = req.body;

    if (!email || typeof email !== 'string' || !email.includes('@')) {
      return res.status(400).json({ 
        success: false, 
        message: 'Please provide a valid email address' 
      });
    }

    console.log('New subscription:', email);
    await storeEmail(email, 'arts-for-the-earth');

    return res.status(200).json({ 
      success: true, 
      message: 'Thank you for subscribing!' 
    });

  } catch (error) {
    console.error('Subscription error:', error);
    return res.status(500).json({ 
      success: false, 
      message: 'Something went wrong. Please try again later.' 
    });
  }
} 