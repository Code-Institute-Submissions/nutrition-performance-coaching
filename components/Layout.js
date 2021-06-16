import Head from "next/head";
import PropTypes from "prop-types";

import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Nutrition Performance Coaching</title>
        <meta name="description" content="Nutrition Performance Coaching" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
