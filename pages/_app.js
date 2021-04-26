import "../styles/globals.css"
import "bootstrap/dist/css/bootstrap.css"
import "react-toastify/dist/ReactToastify.css"

import Head from "next/head"
import Header from "../components/Header/Header"
import { ToastContainer } from "react-toastify"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <script src="https://js.stripe.com/v3/"></script>
      </Head>
      <ToastContainer position="top-right" autoClose={5000} />
      <div className="app">
        <Header></Header>
        <Component {...pageProps} />
        <footer className="footer">
          <a
            href="https://twitter.com/muhd_ahsanayaz"
            target="_blank"
            rel="noopener noreferrer"
          >
            Built by{" "}
            <img
              src="/profile-image.jpeg"
              alt="Profile Image"
              className="logo"
            />{" "}
            &nbsp; Muhammad Ahsan Ayaz with ❤️
          </a>
        </footer>
      </div>
    </>
  )
}

export default MyApp
