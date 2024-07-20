// import { Button } from "@material-tailwind/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import NoPage from "./pages/noPage/NoPage";
import ProductInfo from "./pages/productInfo/ProductInfo";
import ScrollTop from "./components/scrollTop/ScrollTop";
import CartPage from "./pages/cart/CartPage";
import AllProduct from "./pages/allProduct/AllProduct";
import Login from "./pages/registration/Login";
import Signup from "./pages/registration/Signup";
import UserDashboard from "./pages/user/UserDashboard";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AddProductPage from "../src/pages/admin/AddProductPage";
import UpdateProductPage from "./pages/admin/UpdateProductPage";
import MyState from "./context/myState";
import { Toaster } from "react-hot-toast";
import { ProtectedRouteForUser } from "./protectedRoute/ProtectedRouteForUser";
import { ProtectedRouteForAdmin } from "../src/protectedRoute/ProtectedRouteForAdmin";
import CategoryPage from "./pages/category/CategoryPage";

function App() {
  return (
    <>
      <MyState>
        <Router>
          <ScrollTop />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/*" element={<NoPage />} />
            <Route path="/productInfo/:id" element={<ProductInfo />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/allproduct" element={<AllProduct />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/category/:categoryname" element={<CategoryPage />} />
            {/* use route ko protect karnwe ke liye  */}
            <Route
              path="/user-dashboard"
              element={
                <ProtectedRouteForUser>
                  <UserDashboard />
                </ProtectedRouteForUser>
              }
            />

            {/* Admin route ko protect karne ke liye */}
            <Route
              path="/admin-dashboard"
              element={
                <ProtectedRouteForAdmin>
                  <AdminDashboard />
                </ProtectedRouteForAdmin>
              }
            />
            {/* product add sirf Admin hi kar skta hai is liye addproduct page ko bhi protect karege */}
            <Route
              path="/addproduct"
              element={
                <ProtectedRouteForAdmin>
                  <AddProductPage />
                </ProtectedRouteForAdmin>
              }
            />

            <Route
              path="/updateproduct/:id"
              element={
                <ProtectedRouteForAdmin>
                  <UpdateProductPage />
                </ProtectedRouteForAdmin>
              }
            />
          </Routes>
          <Toaster />
        </Router>
        {/* <Button>click</Button> */}
      </MyState>
    </>
  );
}

export default App;
