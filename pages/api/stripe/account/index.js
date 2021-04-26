const stripe = require("stripe")(process.env.STRIPE_API_SECRET)
const host = process.env.NEXT_PUBLIC_HOST

const stripeAccount = async (req, res) => {
  const { method } = req
  if (method === "GET") {
    const account = await stripe.accounts.create({
      type: "express",
    })
    const accountLinks = await stripe.accountLinks.create({
      account: account.id,
      refresh_url: `${host}/api/stripe/account/reauth?account_id=${account.id}`,
      return_url: `${host}/register?account_id=${account.id}`,
      type: "account_onboarding",
    })
    res.redirect(accountLinks.url)
  } else if (method === "DELETE") {
    const {
      query: { id },
    } = req
    console.log(id)
    const deleted = await stripe.accounts.del(id)
    res.status(200).json({ message: "account deleted successfully", deleted })
  } else if (method === "POSt") {
    const account = await stripe.accounts.retrieve(req.query.id)
    res.status(200).json({ account })
  }
}

export default stripeAccount
