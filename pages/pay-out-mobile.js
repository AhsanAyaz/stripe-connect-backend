import { useRouter } from "next/router"
import { useEffect } from "react"
import { toast } from "react-toastify"

const APP_SCHEME = process.env.NEXT_PUBLIC_APP_SCHEME

export default function RegisterMobile() {
  const router = useRouter()
  const { query, isReady } = router

  const redirectToApp = () => {
    const { result } = query
    window.open(`${APP_SCHEME}://deeplinks/pay-out-success?result=${result}`)
  }

  const showToast = (query) => {
    const { result } = query
    if (result) {
      switch (result) {
        case "success":
          toast.success("Payment completed")
          break
        case "failure":
          toast.error("Payment failed or cancelled")
          break
      }
    }
  }

  useEffect(() => {
    if (isReady) {
      showToast(query)
    }
  }, [isReady])

  return (
    <div className="container">
      <main className="main">
        <button className="btn btn-primary" onClick={redirectToApp}>
          Continue in App
        </button>
      </main>
    </div>
  )
}
