import '../styles/globals.css'
import Layout from "../components/layout/Layout";
import React, { useState, createContext } from "react";

export const Context = createContext();


function MyApp({ Component, pageProps }) {
  const [loggedin, setLoggedIn] = useState(false)

  return (
    <div>
      <Context.Provider value={[loggedin, setLoggedIn]}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Context.Provider>
    </div>
  )
}

export default MyApp


