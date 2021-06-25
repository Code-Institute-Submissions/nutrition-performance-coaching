const stripe = require("stripe")(process.env.STRIPE_SK);
const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async (req, res) => {
  const { email } = req.body;

  const BASE_URL = req.headers.origin || "http://localhost:3000";

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      customer_email: email,
      mode: "payment",
      success_url: `${BASE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${BASE_URL}`,
      line_items: [
        {
          price_data: {
            currency: "eur",
            product_data: {
              name: "ECJJA 8 Week Beginner Course - July 2021",
              images: [
                "https://res.cloudinary.com/dmoomgx4p/image/upload/v1624269694/ECJJA_BLACK_b6s03s.png",
              ],
            },
            unit_amount: 22000,
          },
          quantity: 1,
        },
      ],
    });
    if (session) {

      const message = {
        from: "hello@sammcnally.dev",
        to: "hello@sammcnally.dev",
        subject: `New checkout initiated from ${email}`,
        text: `A checkout session for the a coaching program has just been initiated. You will receive a confirmation email in this thread once their payment has been approved.`,
        replyTo: email,
      };
      await sgMail.send(message);

      return res.status(200).json({ id: session.id });
    }
  } catch (error) {
    const message = {
        from: "hello@sammcnally.dev",
        to: "hello@sammcnally.dev",
        subject: `Urgent notification`,
        text: `Payment Failed ${error.message} for user ${email}`,
        replyTo: "hello@sammcnally.dev",
      };
      await sgMail.send(message);
    return res.status(500).json({ error: error.message || error.toString() });
  }
};
