import user from "../../assets/ICONS/user/user-fill.svg";
import closeDashboard from "../../assets/ICONS/closeDashboard.svg";
import navigationArrow from "../../assets/ICONS/navigationArrow.svg";
import logOut from "../../assets/ICONS/logOut.svg";
import { useEffect } from "react";
import store from "../../store";
import { useSelector } from "react-redux";
import { setCharLong, setInput } from "../../reducersAndActions/actions/companyServiceAction";

const CompanyService = () => {
  const input = useSelector((state) => state.companyService.input);
  const charLong = useSelector((state) => state.companyService.charLong);

  const inputHandler = (e) => {
    store.dispatch(setInput(e.target.value));
  };

  useEffect(() => {
    // Check if the input length is greater than 2000
    if (input.length > 2000) {
      store.dispatch(setCharLong(true));
    } else {
      store.dispatch(setCharLong(false));
    }
  }, [input]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    store.dispatch(setInput(""));
  };

  return (
    <div className="bg-gray-100 h-screen flex flex-row space-x-12">
      {/* Dashboard */}
      <div className="w-2/5 bg-white flex flex-col space-y-12 ">
        <div className="flex flex-row mx-8 align-middle mt-6">
          <img className="h-12" src={user} alt="user" />
          <div className="ml-7 justify-center  ">
            <h4 className="font-bold text-xl">Hello,Name</h4>
            <div>ID:XXXXXXXXX</div>
          </div>
          <img
            src={closeDashboard}
            className="h-12 ml-20 cursor-pointer"
            alt="close-dashboard"
          />
        </div>
        <div className="flex flex-col align-middle  text-left space-y-2">
          <h3 className="font-bold ml-10">Analytics</h3>
          <div className="ml-20 leading-7 cursor-pointer">
            <h1>Overview</h1>
            <h1>Payments</h1>
            <h1>Activity Feed</h1>
            <h1>Ratings & Reviews</h1>
          </div>
          <h3 className="font-bold ml-10">Product Catalogue</h3>
          <div className="ml-20 leading-7 cursor-pointer">
            <h1>List of products</h1>
            <h1>Upload a Product</h1>
          </div>
          <h3 className="font-bold ml-10">Order Management</h3>
          <div className="ml-20 leading-7 cursor-pointer">
            <h1>Order List</h1>
            <h1>Returns & Refunds</h1>
            <h1>Disputes</h1>
          </div>
        </div>
        <div className="cursor-pointer font-bold ml-10 flex flex-row  space-x-2">
          <h3 className="mt-8">Sign Out</h3>
          <img className="mt-8 " src={logOut} alt="logout-user" />
        </div>
      </div>
      {/* Dashboard */}

      {/* Navigation */}
      <div className="flex flex-col w-full">
        <div className="flex flex-row mt-8 space-x-2">
          <div className="flex flex-row space-x-4">
            <h3>Settings</h3>
            <img src={navigationArrow} alt="" />
          </div>
          <div className="flex flex-row space-x-4">
            <h3>Partner Profile</h3>
            <img src={navigationArrow} alt="" />
          </div>
          <div>
            <h3 className="font-semibold ">Company Service</h3>
          </div>
        </div>
        <h1 className="my-10 text-2xl font-semibold">Company Service</h1>
      {/* Navigation */}


        {/* Company Service form */}
        <div className="w-11/12 h-84   bg-white pl-4 py-4 rounded-md border-t-yellow-500 border-t-4">
          <h2 className="text-xl">
            Visit our help center for assistance:{" "}
            <span className="underline underline-offset-2 cursor-pointer">
              Help to setup company profile
            </span>
          </h2>
          <form onSubmit={handleFormSubmit}>
            <textarea
              type="text"
              onChange={inputHandler}
              id="service-input"
              value={input}
              rows="6"
              placeholder=" Customer Service Policy"
              className="p-2 border mt-4 w-5/6  border-slate-400 rounded-md"
            />
            {charLong ? (
              <h4 className="text-sm font-extralight text-red-500">
                Input is too long
              </h4>
            ) : (
              ""
            )}
            <div className="flex flex-row align-middle space-x-28">
              <div className="text-sm block font-light text-slate-600">
                Please enter your company’s Customer Service Policy. This will
                be shown to customers.
              </div>
              <div className=" text-slate-600">{input.length}/2000</div>
            </div>
            <button className="bg-yellow-500 text-black font-light px-8 py-2 rounded-lg mt-4">
              Save
            </button>
          </form>
        </div>
        {/* Company Service form */}
      </div>
    </div>
  );
};

export default CompanyService;
