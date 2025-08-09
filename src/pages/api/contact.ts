import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'All fields are required.' });
    }

    // Here you would typically send the data to Formspree or another service
    // For example:
    // const response = await fetch(process.env.FORMSPREE_ENDPOINT, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ name, email, message }),
    // });

    // if (!response.ok) {
    //   return res.status(500).json({ error: 'Failed to send message.' });
    // }

    return res.status(200).json({ message: 'Message sent successfully!' });
  } else {
    // Handle any other HTTP method
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}