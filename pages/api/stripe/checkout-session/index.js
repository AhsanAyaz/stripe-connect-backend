const stripe = require("stripe")(process.env.STRIPE_API_SECRET)
const host = process.env.NEXT_PUBLIC_HOST
const appFee = process.env.STRIPE_APP_FEE

/**
 * Generates a checkout session based on the Connected Account Id and other
 * data provided. Handles cases for both the flutter app and the web.
 */
const checkoutSession = async (req, res) => {
  const {
    account_id: accountId,
    amount,
    title,
    currency = "eur",
    quantity,
    mobile,
  } = req.query
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      {
        name: title,
        /**
         * Multiplying by 100 because otherwise for example,
         * 149 becomes 1.49 on Stripe
         */
        amount: Math.round(amount) * 100,
        currency,
        quantity,
      },
    ],
    payment_intent_data: {
      /**
       * Multiplying by 100 because otherwise for example,
       * 149 becomes 1.49 on Stripe
       */
      application_fee_amount: appFee * 100,
      transfer_data: {
        destination: accountId,
      },
    },
    mode: "payment",
    success_url: `${host}/pay-out${mobile ? "-mobile" : ""}?result=success`,
    cancel_url: `${host}/pay-out${mobile ? "-mobile" : ""}?result=failure`,
  })
  res.status(200).json({ session })
}

export default checkoutSession
