import styles from "../styles/PayOut.module.css"
import { useRouter } from "next/router"
import { useEffect } from "react"
import { toast } from "react-toastify"
import ProductCard from "../components/ProductCard/ProductCard"

const host = process.env.NEXT_PUBLIC_HOST
const publicKey = process.env.NEXT_PUBLIC_STRIPE_API_PUBLIC

export default function Customer() {
  const router = useRouter()

  useEffect(() => {
    const { result } = router.query
    if (result) {
      switch (result) {
        case "success":
          toast.success("Payment completed", {
            onClose: () => {
              router.push("/pay-out", undefined, { shallow: true })
            },
          })
          break
        case "failure":
          toast.info("Payment canceled", {
            onClose: () => {
              router.push("/pay-out", undefined, { shallow: true })
            },
          })
          break
      }
    }
  })

  const products = [
    {
      id: 191,
      amount: 149.95,
      image:
        "https://www.beatsbydre.com/content/dam/beats/web/pdp/beats-x/color_selector/_0003_rgb_MLYE2-RGB-thrqtr-detail_V2.png",
      title: "Beats X",
      currency: "eur",
    },
    {
      id: 193,
      amount: 340,
      image: "/arctis-pro-wireless.png",
      title: "Arctis Pro Wireless",
      currency: "eur",
    },
  ]
  const redirectToCheckout = async (product) => {
    const accountId = window.prompt("Provide account Id")
    if (!accountId) {
      return
    }
    let url = `${host}/api/stripe/checkout-session`
    url += `?account_id=${accountId}&amount=${product.amount}&title=${product.title}`
    url += `&currency=${product.currency}&quantity=1`
    const response = await fetch(url)
    const data = await response.json()
    console.log(data.session)
    var stripe = Stripe(publicKey)
    stripe.redirectToCheckout({ sessionId: data.session.id })
  }
  return (
    <div className="container">
      <main className="main">
        <h1>Pay as a Customer</h1>
        <div className={styles.products}>
          {products.map((product) => {
            return (
              <div className={styles.productsCard} key={product.id}>
                <ProductCard
                  product={product}
                  payForProduct={redirectToCheckout}
                />
              </div>
            )
          })}
        </div>
      </main>
    </div>
  )
}
