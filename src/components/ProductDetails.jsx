import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const [product, setProduct] = useState({});

  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    const fetchASingleProduct = async () => {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      console.log(data);
      setProduct(data);
    };
    fetchASingleProduct();
  }, [id]);

  !Object.keys(product).length > 0 && (
    <div
      className="no-products w-1/2 bg-greyish/50
    mx-auto p-4 border border-brownish/70"
    >
      No products Found
    </div>
  );
  return (
    <section className="text-gray-600 body-font overflow-hidden pt-12">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt="ecommerce"
            className="lg:w-1/2 w-full lg:h-96 h-64 object-contain object-center rounded"
            src={product.image}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 flex flex-col items-cen justify-center">
            <h2
              className="text-xs text-white text-center title-font tracking-widest 
          bg-brownish/70 p-2 rounded-2xl uppercase w-24"
            >
              {product.category}
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium my-3">
              {product.title}
            </h1>
            <div className="flex my-6">
              <span className="flex items-center">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 text-brownish/70"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>

                <span className="text-gray-600 ml-3">
                  {product.rating.rate} |{" "}
                </span>
                <span className="text-gray-600 ml-3">
                  {product.rating.count} Reviews
                </span>
              </span>
            </div>
            <p className="leading-relaxed pb-5 border-b-2 border-gray-100 mb-8">
              {product.description}
            </p>

            <div className="flex">
              <span className="title-font font-medium text-2xl text-gray-900">
                KSh. {product.price}
              </span>
              <button
                className="flex ml-auto text-white hover:bg-brownish/70 border-0 py-2 px-6 focus:outline-none
              bg-black/90 rounded"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
