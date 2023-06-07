import Footer from "../components/Footer";
import Header from "../components/Header";

const Layout = ({ children }) => {
  return (
    <>
      <div>
        <Header />
        {children}
      </div>
      <Footer />
    </>
  );
};

export default Layout;
