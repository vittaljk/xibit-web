// need to submit contact form

import { NextApiRequest, NextApiResponse } from "next";

// import { sendEmail } from "../../utils/sendEmail";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === "POST") {
    console.log("req.body", req.body);

    // const emailRes = await sendEmail({
    //   email,
    //   name,
    //   text: message,
    // });

    // if (emailRes.error) {
    //   return res.status(500).json({ error: emailRes.error });
    // }

    return res.status(200).json({ success: true });
  }

  return res.status(404).json({
    error: `Invalid HTTP method: ${req.method}`,
  });
}
