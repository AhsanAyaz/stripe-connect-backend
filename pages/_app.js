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
        <title>Panda Gums</title>
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
            Built by
            <img
              src="/profile-image.jpeg"
              alt="Profile Image"
              className="logo"
            />{" "}
            Muhammad Ahsan Ayaz with ❤️
          </a>
          <a
            title="Like Ahsan's work? Buy him a coffee"
            className="bmac"
            href="https://www.buymeacoffee.com/muhd.ahsanayaz"
          >
            <img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=muhd.ahsanayaz&button_colour=BD5FFF&font_colour=ffffff&font_family=Comic&outline_colour=000000&coffee_colour=FFDD00" />
          </a>
        </footer>
      </div>
    </>
  )
}

export default MyApp
