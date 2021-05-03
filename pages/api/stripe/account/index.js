const stripe = require("stripe")(process.env.STRIPE_API_SECRET)
const host = process.env.NEXT_PUBLIC_HOST

const stripeAccount = async (req, res) => {
  const { method } = req
  if (method === "GET") {
    // CREATE CONNECTED ACCOUNT
    const { mobile } = req.query
    const account = await stripe.accounts.create({
      type: "express",
    })
    const accountLinks = await stripe.accountLinks.create({
      account: account.id,
      refresh_url: `${host}/api/stripe/account/reauth?account_id=${account.id}`,
      return_url: `${host}/register${mobile ? "-mobile" : ""}?account_id=${
        account.id
      }&result=success`,
      type: "account_onboarding",
    })
    if (mobile) {
      // In case of request generated from the flutter app, return a json response
      res.status(200).json({ success: true, url: accountLinks.url })
    } else {
      // In case of request generated from the web app, redirect
      res.redirect(accountLinks.url)
    }
  } else if (method === "DELETE") {
    // Delete the Connected Account having provided ID
    const {
      query: { id },
    } = req
    console.log(id)
    const deleted = await stripe.accounts.del(id)
    res.status(200).json({ message: "account deleted successfully", deleted })
  } else if (method === "POST") {
    // Retrieve the Connected Account for the provided ID
    // I know it shouldn't be a POST call. Don't judge :D I had a lot on my plate
    const account = await stripe.accounts.retrieve(req.query.id)
    res.status(200).json({ account })
  }
}

export default stripeAccount
