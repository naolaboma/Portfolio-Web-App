import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'All fields are required.' });
    }

    const endpoint = process.env.FORMSPREE_ENDPOINT;
    if (!endpoint) {
      // No Formspree endpoint configured — return 501 to indicate not wired
      return res.status(501).json({
        error: 'Contact form not configured. Set FORMSPREE_ENDPOINT in environment to enable sending.',
      });
    }

    try {
      const rsp = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (!rsp.ok) {
        const txt = await rsp.text().catch(() => '');
        return res.status(502).json({ error: `Form provider error (${rsp.status})`, detail: txt?.slice(0, 500) });
      }

      const data = await rsp.json().catch(() => ({}));
      return res.status(200).json({ message: 'Message sent successfully!', provider: data });
    } catch (e: any) {
      return res.status(500).json({ error: e?.message || 'Failed to send message.' });
    }
  } else {
    // Handle any other HTTP method
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}