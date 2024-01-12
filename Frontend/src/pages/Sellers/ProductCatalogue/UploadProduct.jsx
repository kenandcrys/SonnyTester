
import FileUpload from "../../../assets/ICONS/FileUpload.svg";
import LeftArrow from "../../../assets/ICONS/LeftArrow.svg";
import RightArrow from "../../../assets/ICONS/RightArrow.svg";
import { Link } from "react-router-dom";


function UploadProduct() {
  return (
    <div className="self-center flex w-full max-w-full flex-col items-stretch  px-8">
      <div className="flex flex-col items-stretch max-md:max-w-full">
        <div className="bg-white self-center flex w-full max-w-[1141px] flex-col items-stretch mt-7 pl-12 rounded-3xl max-md:max-w-full max-md:pl-5">
          <div className="flex w-full justify-between gap-5 pr-9 items-start max-md:max-w-full max-md:flex-wrap max-md:pr-5 mt-11">
            <div className="text-stone-950 text-xl font-medium leading-8 grow whitespace-nowrap">
              Adding New Products
            </div>
            <div className="self-stretch flex items-stretch justify-between gap-5">

              <Link to="/ListOfProducts">

                <button
                  type="button"
                  className="shadow-sm text-zinc-700 text-center text-sm  whitespace-nowrap grow justify-center px-8 py-2 border-[0.75px] border-solid border-black max-md:px-5"
                >
                  Cancel
                </button>
              </Link>
              <button
                type="button"
                className="shadow-sm text-zinc-700 text-center text-sm  whitespace-nowrap grow justify-center px-8 py-2 border-[0.75px] border-solid border-black max-md:px-5"
              >
                Upload
              </button>
            </div>
          </div>
          <div className="mt-0 max-md:max-w-full max-md:my-10 p-8 justify-center items-center ">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-5">
              <div className="flex flex-col items-stretch w-[28%] max-md:w-full max-md:ml-0 ">
                <div className="flex flex-col items-center max-md:mt-9">
                  <label
                    htmlFor="dropzone-file"
                    className="bg-stone-300 flex w-[250px] max-w-full flex-col justify-center items-center px-16 py-12 max-md:px-5 cursor-pointer"
                  >
                    <img
                      loading="lazy"
                      src={FileUpload}
                      className="aspect-square object-contain object-center w-[109px] overflow-hidden max-w-full mt-6 mb-5"
                    />
                    <input id="dropzone-file" type="file" className="hidden" />
                  </label>

                  <div className=" w-[250px] max-w-full justify-center items-center self-stretch flex gap-3 mt-7 max-md:justify-center">
                    <img
                      loading="lazy"
                      src={LeftArrow}
                      className="aspect-[1.07] object-contain object-center w-4 overflow-hidden shrink-0 max-w-full my-auto"
                    />
                    <div className="bg-stone-300 self-stretch flex w-[61px] shrink-0 h-[61px] flex-col" />
                    <div className="bg-stone-300 self-stretch flex w-[62px] shrink-0 h-[61px] flex-col" />
                    <div className="bg-stone-300 self-stretch flex w-[61px] shrink-0 h-[61px] flex-col" />
                    <img
                      loading="lazy"
                      src={RightArrow}
                      className="aspect-[1.07] object-contain object-center w-4 overflow-hidden shrink-0 max-w-full my-auto"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-[72%] ml-8 max-md:w-full max-md:ml-0">
                <div className="items-stretch flex grow flex-col pt-2 max-md:max-w-full max-md:mt-9 ">
                  <div className="text-zinc-900 text-xl font-medium leading-8 whitespace-nowrap max-md:max-w-full">
                    Product Details
                  </div>
                  <Input
                    lable=" Product name"
                    type="text"
                    className=""
                    required
                  />
                  <div className="text-stone-950 text-[14px] font-semibold leading-6 whitespace-nowrap mt-5 max-md:max-w-full">
                    Description
                  </div>
                  <textarea
                    id="message"
                    rows="4"
                    className="block p-2.5 w-full h-[216px] text-sm text-gray-900 rounded border border-[color:var(--color-styles-neutral-400,#AEA9B1)]"
                    required
                  ></textarea>
                  <div className="justify-between items-center flex gap-5 mt-5 max-md:max-w-full max-md:flex-wrap">
                    <SelectInput
                      options={["Home accessories"]}
                      label="Type"
                      className=""
                    />
                    <SelectInput
                      options={["Select"]}
                      label="Brand"
                      className=""
                    />
                  </div>
                  <div className="justify-between items-center flex gap-5 mt-5 max-md:max-w-full max-md:flex-wrap">
                    <Input
                      lable="Inventory start at"
                      type="text"
                      className=""
                      required
                    />

                    <Input lable="Price" type="text" className="" required />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UploadProduct;

