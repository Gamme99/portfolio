// pages/_app.js
import "../app/styles/global.css"; // Adjust the path if needed
import Layout from "../components/MyLayout";
// import Header

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      {/* Your other components */}
    </Layout>
  );
}

export default MyApp;
