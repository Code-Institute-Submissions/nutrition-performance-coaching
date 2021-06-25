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
              name: "8 Week Meal Plan",
              images: [
                "https://res.cloudinary.com/dmoomgx4p/image/upload/v1624615616/mealplan_ulmtv8.jpg",
              ],
            },
            unit_amount: 4900,
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
        text: `A checkout session for the a coaching program has just been initiated by ${email}. You will receive a confirmation email in this thread once their payment has been approved.`,
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
