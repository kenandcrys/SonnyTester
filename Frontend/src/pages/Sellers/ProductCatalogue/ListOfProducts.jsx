import { useState, useEffect } from "react";
import SearchIcons from "../../assets/ICONS/SearchIcons.svg";
import ArrowDown from "../../assets/ICONS/ArrowDown.svg";
import Filter from "../../assets/ICONS/Filter.svg";
import Sort from "../../assets/ICONS/Sort.svg";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchProductData } from "../../../features/productDataSlice";

function ListOfProducts() {
  const [products, setProducts] = useState([]);
  const productData = useSelector((state) => state.productData.productData);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(fetchProductData());
      setProducts(productData);
    };

    fetchData();
  }, [dispatch, productData]);

  return (
    <div className="self-center flex w-[967px] max-w-full flex-col items-stretch mt-4 px-5">
      <div className="flex flex-col mt-0 px-0 max-md:max-w-full max-md:px-0">
        <div className="self-stretch flex justify-between gap-5 pr-5 items-start max-md:max-w-full max-md:flex-wrap">
          <div className="text-stone-950 text-[20px] font-medium leading-8 grow whitespace-nowrap mt-2">
            All Product
          </div>
          <div className=" mt-2 items-end max-md:px-5 ">
            <Link to="/UploadProduct">
              <button
                type="button"
                className="shadow-sm text-zinc-700 text-center text-sm font-semibold  whitespace-nowrap grow justify-center px-8 py-2 border-[0.75px] border-solid border-black max-md:px-5"
              >
                Add Product
              </button>
            </Link>
          </div>
        </div>
        <div className="self-stretch flex items-stretch justify-between gap-5 mt-6 max-md:max-w-full max-md:flex-wrap">
          <div className="flex grow basis-[0%] flex-col items-stretch max-md:max-w-full justify-center text-center ">
            <div className="flex w-full items-center justify-between space-y-3 max-md:max-w-full max-md:flex-wrap">
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <img
                    loading="lazy"
                    src={SearchIcons}
                    className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full my-auto"
                  />
                </div>
                <input
                  type="search"
                  className="block w-full p-4 ps-10 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50  0 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Search by ..."
                />
              </div>
              <div className="items-stretch self-center flex justify-between gap-5 my-auto">
                <div className="flex justify-between gap-2 items-start">
                  <img
                    loading="lazy"
                    src={ArrowDown}
                    className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full"
                  />
                  <div className="text-stone-950 text-xs font-semibold leading-4 self-stretch grow whitespace-nowrap">
                    ALL
                  </div>
                </div>
                <div className="flex items-center gap-2.5 self-start">
                  <div className="text-zinc-800 text-right text-xs leading-4 grow whitespace-nowrap my-auto">
                    Filter:
                  </div>
                  <img
                    loading="lazy"
                    src={Filter}
                    className="aspect-[0.94] object-contain object-center w-[15px] overflow-hidden self-stretch shrink-0 max-w-full"
                  />
                </div>
                <div className="items-stretch flex gap-2 max-md:justify-center">
                  <img
                    loading="lazy"
                    src={ArrowDown}
                    className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full"
                  />
                  <div className="text-stone-950 text-sm font-semibold leading-4 self-center">
                    A-Z
                  </div>
                  <div className="text-zinc-800 text-xs leading-4 self-center my-auto">
                    SORT:
                  </div>
                  <img
                    loading="lazy"
                    src={Sort}
                    className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Data table */}
        <div className="mt-8 justify-center items-center">
          <table className="w-full border-collapse">
            <thead>
              <tr className="">
                <th className="p-4 ">Action</th>
                <th className="p-4 "></th>
                <th className="p-4 text-zinc-700 text-base leading-6 grow whitespace-nowrap my-auto">
                  PRODUCT ID
                </th>
                <th className="p-4 text-zinc-700 text-base leading-6 self-center grow whitespace-nowrap my-auto">
                  PRODUCT NAME
                </th>
                <th className="p-4 text-zinc-700 text-base leading-6 self-center grow whitespace-nowrap my-auto">
                  TYPE
                </th>
                <th className="p-4 text-zinc-700 text-base leading-6 self-center grow whitespace-nowrap my-auto">
                  INVENTORY
                </th>
                <th className="px-20 "></th>
              </tr>
            </thead>
            <tbody className="bg-white border border-black">
              {products && products > 0 ? (
                <tr className="w-full h-[200px]">
                  <td colSpan="6" className=" justify-center text-center">
                    no product found add product here !!
                    <div className=" mt-2 items-end max-md:px-5 ">
                      <Link to="/UploadProduct">
                        <button
                          type="button"
                          className="shadow-sm bg-zinc-100 text-zinc-700 text-center text-sm font-semibold  whitespace-nowrap grow justify-center px-8 py-2 border-[0.75px] border-solid border-black max-md:px-5"
                        >
                          Add Product
                        </button>
                      </Link>
                    </div>
                  </td>
                </tr>
              ) : (
                products &&
                products.map((product) => (
                  <tr key={product.id}>
                    <td className=" h-[72px] border-r border-black self-center text-center justify-center">
                      <input type="checkbox" className="w-[15px] h-[15px]" />
                    </td>
                    <td className="w-[186px] h-[72px] border-r border-black justify-center text-center">
                      {/* Fetching immage here */}
                      <div className="bg-gray-400 w-[80px] h-[40px]"></div>
                    </td>
                    <td className="w-[186px] h-[72px] border-r border-black self-center text-center justify-center">
                      {product.id}
                    </td>
                    <td className="w-[186px] h-[72px] border-r border-black self-center text-center justify-center">
                      <Link to={`/ProductDetail/${product.id}`}>
                        {product.title}
                      </Link>
                    </td>
                    <td className="w-[186px] h-[72px] border-r border-black self-center text-center justify-center">
                      {product.category}
                    </td>
                    <td className="w-[186px] h-[72px] border-r border-black self-center text-center justify-center">
                      {product.price}
                    </td>
                    <td className="w-[180px] h-[72px] border-r border-black self-center text-center justify-center">
                      <div className="flex">
                        <svg
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="bg-green-600 rounded text-white hover:bg-green-700 ml-5 w-[25px] h-[25px]"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 12.75l6 6 9-13.5"
                          />
                        </svg>

                        <svg
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="bg-red-600 rounded text-white ml-5 w-[25px] h-[25px] hover:bg-red-700"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>

                        <svg
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="bg-yellow-600 rounded text-white ml-5 w-[25px] h-[25px] hover:bg-yellow-700"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
                          />
                        </svg>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>

          {/* Pagination */}
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center gap-1.5">
              <div
                className={`cursor-pointer text-zinc-800 text-sm leading-5 self-center my-auto opacity-50`}
              >
                Prev
              </div>

              {Array.from({ length: 1 }).map((_, i) => (
                <div
                  key={i}
                  className={`cursor-pointer text-white text-center text-base leading-6 whitespace-nowrap bg-zinc-800 self-stretch aspect-square justify-center items-center h-10 pl-3.5 pr-5 rounded-xl`}
                >
                  1
                </div>
              ))}
              <div
                className={`cursor-pointer text-zinc-800 text-sm leading-5 self-center my-auto opacity-50`}
              >
                Next
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListOfProducts;
