/**
 * Not using Webhooks as of now. Maybe something for a later tutorial.
 */
const stripe = require("stripe")(process.env.STRIPE_API_SECRET)
export const config = {
  api: {
    bodyParser: false,
  },
}

const webhookPayloadParser = (req) =>
  new Promise((resolve) => {
    let data = ""
    req.on("data", (chunk) => {
      data += chunk
    })
    req.on("end", () => {
      resolve(Buffer.from(data).toString())
    })
  })

const checkoutSessionWebhook = async (req, res) => {
  const webhook_secret = process.env.STRIPE_WH_SECRET
  if (req.method !== "POST") {
    return
  }
  const body = await webhookPayloadParser(req)
  const sig = req.headers["stripe-signature"]

  let event

  // Verify webhook signature and extract the event.
  // See https://stripe.com/docs/webhooks/signatures for more information.
  try {
    event = stripe.webhooks.constructEvent(body, sig, webhook_secret)
  } catch (err) {
    console.log(err)
    return res.status(400).send(`Webhook Error: ${err.message}`)
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object
    console.log("Checkout Session completed successfully")
    console.log(session)
  }

  res.json({ received: true })
}

export default checkoutSessionWebhook
