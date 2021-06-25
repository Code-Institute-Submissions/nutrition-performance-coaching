const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async (req, res) => {
  const { name, email } = req.body;

  const sender = name && email ? `${name} <${email}>` : `${name || email}`;

  const message = {
    from: "hello@sammcnally.dev",
    to: "hello@sammcnally.dev",
    subject: `New message from ${sender}`,
    text: `${name} has just registered interest in a nutrition appointment. Click "reply" to this email to reply to ${email}`,
    replyTo: sender,
  };

  const userFeedback = {
    from: "hello@sammcnally.dev",
    to: sender,
    subject: `Thank you for your form submission`,
    text: `Hi, ${name}. Thank you for your form submission, we will reply to you as soon as possible`,
    replyTo: sender,
  };


  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  try {
    await sgMail.send(message);
    await sgMail.send(userFeedback);
    return res.status(201).json({ error: "" });
  } catch (error) {
      console.log(error)
    return res.status(500).json({ error: error.message || error.toString() });
  }
};
