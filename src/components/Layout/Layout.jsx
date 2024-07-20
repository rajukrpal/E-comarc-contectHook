// import { Navbar } from "@material-tailwind/react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Nevbar";

// eslint-disable-next-line react/prop-types
function Layout({ children }) {
  return (
    <>
      <div>
        <Navbar />
        <div className="main-content min-h-screen">{children}</div>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
