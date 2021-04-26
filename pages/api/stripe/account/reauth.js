const stripe = require("stripe")(process.env.STRIPE_API_SECRET)
const host = process.env.NEXT_PUBLIC_HOST

const stripeReAuth = async (req, res) => {
  const { account_id: accountId } = req.query

  const accountLinks = await stripe.accountLinks.create({
    account: accountId,
    refresh_url: `${host}/api/stripe/account/reauth?account_id=${accountId}`,
    return_url: `${host}/register?account_id=${accountId}`,
    type: "account_onboarding",
  })
  res.redirect(accountLinks.url)
}

export default stripeReAuth
