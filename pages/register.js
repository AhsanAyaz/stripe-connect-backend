import { useState } from "react"
import { useRouter } from "next/router"
import { useEffect } from "react"
import { toast } from "react-toastify"
const host = process.env.NEXT_PUBLIC_HOST

export default function ServiceProvider() {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const router = useRouter()

  useEffect(() => {
    const { account_id } = router.query
    console.log(router.query)
    if (account_id) {
      toast.success("Registration completed")
    }
  })

  const register = async (ev) => {
    ev.preventDefault()
    const createAccountUrl = `${host}/api/stripe/account?name=${name}&email=${email}`
    window.location.href = createAccountUrl
  }
  return (
    <div className="container">
      <main className="main">
        <h1 className="page-title">Seller Registration</h1>
        <form onSubmit={register}>
          <div className="mb-3">
            <label htmlFor="emailInput" className="form-label">
              Email address
            </label>
            <input
              type="email"
              onChange={(ev) => setEmail(ev.target.value)}
              className="form-control"
              id="emailInput"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="nameInput" className="form-label">
              Full Name
            </label>
            <input
              onChange={(ev) => setName(ev.target.value)}
              type="text"
              className="form-control"
              id="nameInput"
            />
          </div>
          <button disabled={!name || !email} className="btn btn-primary">
            Connect with <b>Stripe</b>
          </button>
        </form>
      </main>
    </div>
  )
}
