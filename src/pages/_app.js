// pages/_app.js
import "../app/styles/global.css"; // Adjust the path if needed
import Layout from "./Layout";
// import Header
import NavBar from "../components/nav";
import Footer from "../components/footer";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <NavBar />
      <Component {...pageProps} />
      {/* Your other components */}
      <Footer />
    </Layout>
  );
}

export default MyApp;
