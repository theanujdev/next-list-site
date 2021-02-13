import Navbar from "./Navbar";
import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Next.js List App</title>
      </Head>
      <Navbar />
      {children}
    </>
  );
};

export default Layout;
