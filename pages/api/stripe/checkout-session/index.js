const stripe = require("stripe")(process.env.STRIPE_API_SECRET)
const host = process.env.NEXT_PUBLIC_HOST
const appFee = process.env.STRIPE_APP_FEE

const checkoutSession = async (req, res) => {
  const {
    account_id: accountId,
    amount,
    title,
    currency = "eur",
    quantity,
  } = req.query
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      {
        name: title,
        amount: Math.round(amount) * 100, // conversion for stripe
        currency,
        quantity,
      },
    ],
    payment_intent_data: {
      application_fee_amount: appFee * 100,
      transfer_data: {
        destination: accountId,
      },
    },
    mode: "payment",
    success_url: `${host}/pay-out?result=success`,
    cancel_url: `${host}/pay-out?result=failure`,
  })
  res.status(200).json({ session })
}

export default checkoutSession
