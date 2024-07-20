import React, { useContext, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import { useNavigate, useParams } from "react-router-dom";
import myContext from "../../context/myContext";
import Loader from "../../components/loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart } from "../../redux/cartSlice";
import toast from "react-hot-toast";

function CategoryPage() {
  const { categoryname } = useParams();
  const context = useContext(myContext);
  const { loading, getAllProduct } = context;
  const navigate = useNavigate();

  // product ko filter karne ke liye categorywise
  const filterProduct = getAllProduct.filter((obj) =>
    obj.category.includes(categoryname)
  );
  // console.log(filterProduct);

  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const addCart = (item) => {
    dispatch(addToCart(item));
    toast.success("Delete Cart");
  };

  const deleteCart = (item) => {
    dispatch(deleteFromCart(item));
    toast.success("Delete Cart");
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);
  return (
    <div>
      <Layout>
        <div>
          <div className="">
            <h1 className=" text-center mt-4 mb-5 text-2xl font-semibold">
              {categoryname}
            </h1>
          </div>
          {loading ? (
            <div className="flex justify-center">
              <Loader />
            </div>
          ) : (
            <section className="text-gray-600 body-font">
              {/* main 2 */}
              <div className="container px-5 py-5 mx-auto">
                {/* main 3 */}
                <div className="flex flex-wrap justify-center -m-4">
                  {filterProduct.length > 0 ? (
                    <>
                      {filterProduct.slice(0, 8).map((item, index) => {
                        const { id, productImageUrl, title, price } = item;
                        return (
                          <div key={index} className="p-4 w-full md:w-1/4">
                            <div className="h-full border border-gray-300 rounded-xl overflow-hidden shadow-md cursor-pointer">
                              <img
                                onClick={() => navigate(`/productInfo/${id}`)}
                                className="lg:h-80  h-96 w-full"
                                src={productImageUrl}
                                alt="blog"
                              />
                              <div className="p-6">
                                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                                  E-bharat
                                </h2>
                                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                  {title.substring(0, 25)}...
                                </h1>
                                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                  ₹{price}
                                </h1>

                                <div className="flex justify-center ">
                          {cartItems.some((p) => p.id == item.id) ? (
                            <button
                              onClick={() => deleteCart(item)}
                              className=" bg-pink-500 hover:bg-pink-600 w-full text-white py-[4px] rounded-lg font-bold"
                            >
                              Delet To Cart
                            </button>
                          ) : (
                            <button
                              onClick={() => addCart(item)}
                              className=" bg-pink-500 hover:bg-pink-600 w-full text-white py-[4px] rounded-lg font-bold"
                            >
                              Add To Cart
                            </button>
                          )}
                        </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </>
                  ) : (
                    <div>
                      <div className="flex justify-center">
                        <img
                          className=" mb-2 justify-center"
                          src="https://cdn-icons-png.flaticon.com/128/2748/2748614.png"
                          alt=""
                        />
                      </div>
                      <h1 className=" text-black text-xl">
                        No {categoryname} product found
                      </h1>
                    </div>
                  )}
                </div>
              </div>
            </section>
          )}
        </div>
      </Layout>
    </div>
  );
}

export default CategoryPage;
