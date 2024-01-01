import { useEffect, useState } from "react";
import eye from "../../../assets/ICONS/eye.svg";
import PropTypes from "prop-types";
import { SET_BUSINESS_DETAILS } from "../../../reducersAndActions/actions";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";

function GetVerified({ setShowModal }) {
  const [isVerified] = useState(false);
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const businessDetailsdata = useSelector(
    (state) => state.businessDetailsReducer
  );

  const businessData = async (data) => {
    dispatch({ type: SET_BUSINESS_DETAILS, payload: data });
    console.log(businessDetailsdata);
  };

  useEffect(() => {
    document.getElementById("modal").showModal();
  }, []);

  return (
    <div className="self-center flex w-[967px] max-w-full flex-col items-stretch mt-0 px-0">
      <dialog
        id="modal"
        className="modal px-10 py-10 bg-[#e3e3e3] border border-5 border-white "
      >
        <div className="modal-box">
          <div className="modal-action ">
            <div className="items-stretch flex justify-between gap-5 mt-0 max-md:max-w-full max-md:flex-wrap">
              <div className="text-zinc-800 text-base leading-6 whitespace-nowrap">
                Welcome Joe,
              </div>
              <div className="text-zinc-800 text-center text-sm font-semibold leading-6 underline whitespace-nowrap">
                <form method="dialog">
                  <button
                    className="btn bg-white text-zinc-800 rounded-full w-5 text-base"
                    onClick={() => setShowModal(false)}
                  >
                    X
                  </button>
                </form>
              </div>
            </div>

            {isVerified && isVerified ? (
              <div className="items-start bg-white flex grow basis-[0%] flex-col mt-10 px-6 py-7 rounded-md max-md:max-w-full max-md:px-5">
                You have already verified
              </div>
            ) : (
              <>
                <div className="text-zinc-800 text-base font-semibold leading-6 whitespace-nowrap mt-5 max-md:max-w-full">
                  Get Verified!
                </div>

                <form
                  onSubmit={handleSubmit(businessData)}
                  className="flex flex-wrap"
                >
                  <div className="items-start bg-white flex grow basis-[0%] flex-col px-6 py-7 rounded-md max-md:max-w-full max-md:px-5">
                    <div className="text-zinc-600 text-base font-medium leading-6 self-stretch whitespace-nowrap max-md:max-w-full">
                      Get yourself verified and start your business as a seller
                    </div>
                    <div className="justify-between items-stretch self-stretch flex gap-5 mt-0 max-md:max-w-full max-md:flex-wrap">
                      <label>
                        Country/Region of incorporation
                        <select name="countryOfIncorporation" required>
                          <option value="" disabled selected hidden>
                            Select Country/Region
                          </option>
                          <option value="United States">United States</option>
                          {/* Add more options as needed */}
                        </select>
                      </label>

                      <label>
                        US Tax ID (TIN)
                        <input type="password" name="taxid" required />
                      </label>
                      <img
                        loading="lazy"
                        src={eye}
                        className="aspect-square object-contain object-center w-6 overflow-hidden max-w-full"
                      />
                    </div>
                    <div className="text-zinc-600 text-xs leading-5 self-stretch whitespace-nowrap mt-5 max-md:max-w-full">
                      Your U.S. Tax classification isW9
                    </div>
                    <div className="bg-zinc-100 self-stretch shrink-0 h-px mt-5 max-md:max-w-full" />

                    <div className="text-zinc-900 text-xl font-medium leading-8 self-stretch whitespace-nowrap mt-5 max-md:max-w-full">
                      Business Details
                    </div>
                    <label>
                      Legal business name
                      <input type="text" name="businessName" required />
                    </label>

                    <label>
                      Business address
                      <input type="text" name="businessAddress" required />
                    </label>

                    <div className="justify-between items-stretch self-stretch flex gap-5 mt-8 max-md:max-w-full max-md:flex-wrap">
                      <label>
                        Country/Region
                        <select name="country" required>
                          <option value="">Select Country/Region</option>
                          <option value="United States">United States</option>
                          {/* Add more options as needed */}
                        </select>
                      </label>

                      <label>
                        State
                        <select name="state" required>
                          <option value="">Select State</option>
                          <option value="Alabama">Alabama</option>
                          <option value="Alaska">Alaska</option>
                          <option value="Arizona">Arizona</option>
                          <option value="Arkansas">Arkansas</option>
                          <option value="California">California</option>
                          <option value="Colorado">Colorado</option>
                          <option value="Connecticut">Connecticut</option>
                          <option value="Delaware">Delaware</option>
                          <option value="Florida">Florida</option>
                          <option value="Georgia">Georgia</option>
                          <option value="Hawaii">Hawaii</option>
                          <option value="Idaho">Idaho</option>
                          <option value="Illinois">Illinois</option>
                          <option value="Indiana">Indiana</option>
                          <option value="Iowa">Iowa</option>
                          <option value="Kansas">Kansas</option>
                          <option value="Kentucky">Kentucky</option>
                          <option value="Louisiana">Louisiana</option>
                          <option value="Maine">Maine</option>
                          <option value="Maryland">Maryland</option>
                          <option value="Massachusetts">Massachusetts</option>
                          <option value="Michigan">Michigan</option>
                          <option value="Minnesota">Minnesota</option>
                          <option value="Mississippi">Mississippi</option>
                          <option value="Missouri">Missouri</option>
                          <option value="Montana">Montana</option>
                          <option value="Nebraska">Nebraska</option>
                          <option value="Nevada">Nevada</option>
                          <option value="New Hampshire">New Hampshire</option>
                          <option value="New Jersey">New Jersey</option>
                          <option value="New Mexico">New Mexico</option>
                          <option value="New York">New York</option>
                          <option value="North Carolina">North Carolina</option>
                          <option value="North Dakota">North Dakota</option>
                          <option value="Ohio">Ohio</option>
                          <option value="Oklahoma">Oklahoma</option>
                          <option value="Oregon">Oregon</option>
                          <option value="Pennsylvania">Pennsylvania</option>
                          <option value="Rhode Island">Rhode Island</option>
                          <option value="South Carolina">South Carolina</option>
                          <option value="South Dakota">South Dakota</option>
                          <option value="Tennessee">Tennessee</option>
                          <option value="Texas">Texas</option>
                          <option value="Utah">Utah</option>
                          <option value="Vermont">Vermont</option>
                          <option value="Virginia">Virginia</option>
                          <option value="Washington">Washington</option>
                          <option value="West Virginia">West Virginia</option>
                          <option value="Wisconsin">Wisconsin</option>
                          <option value="Wyoming">Wyoming</option>
                        </select>
                      </label>
                    </div>
                    <div className="justify-between items-stretch self-stretch flex gap-5 mt-8 max-md:max-w-full max-md:flex-wrap">
                      <label>
                        City
                        <input type="text" name="city" required />
                      </label>

                      <label>
                        Postal/Zip code
                        <input type="text" name="postalCode" required />
                      </label>
                    </div>
                    <div className="justify-between items-stretch self-stretch flex gap-5 mt-8 max-md:max-w-full max-md:flex-wrap">
                      <Input
                        lable="Primary contact number"
                        type="text"
                        className=""
                        {...register("primaryContactNumber", {
                          required: true,
                        })}
                      />
                      <Input
                        lable="Website URL"
                        type="url"
                        className=""
                        placeholder="http://www.example.com"
                        {...register("websiteUrl", {
                          required: true,
                        })}
                      />
                    </div>
                    <div className="justify-between items-stretch self-stretch flex gap-5 mt-8 max-md:max-w-full max-md:flex-wrap">
                      <SelectInput
                        options={["Select"]}
                        label="Yearly gross merchandise value (GMV)"
                        className=""
                        {...register("grossValue", { required: true })}
                      />
                      <SelectInput
                        options={["Select"]}
                        label="Highest performing category"
                        className=""
                        {...register("category", { required: true })}
                      />
                    </div>
                    <div className="bg-zinc-100 self-stretch shrink-0 h-px mt-6 max-md:max-w-full" />
                    <div className="text-zinc-900 text-xl font-medium leading-8 self-stretch whitespace-nowrap mt-5 max-md:max-w-full">
                      Seller profile
                    </div>
                    <div className="text-zinc-600 text-xs leading-5 self-stretch whitespace-nowrap mt-2.5 max-md:max-w-full">
                      This info is public. We share it to build your trust with
                      customers.
                    </div>
                    <Input
                      lable="Display name on Website"
                      type="text"
                      className=""
                      {...register("displayName", {
                        required: true,
                      })}
                    />

                    <div className="justify-between items-stretch self-stretch flex gap-5 mt-8 max-md:max-w-full max-md:flex-wrap">
                      <div className="items-stretch flex grow basis-[0%] flex-col">
                        <div className="items-center flex gap-2.5 border-solid max-md:pr-5">
                          <SelectInput
                            options={["+1"]}
                            label=""
                            className=""
                            {...register("countryCode", { required: true })}
                          />
                          <Input
                            lable="Customer service phone number"
                            type="text"
                            className="relative"
                            {...register("customerServiceNumber", {
                              required: true,
                            })}
                          />
                        </div>
                      </div>
                      <div className="items-stretch flex grow basis-[0%] flex-col">
                        <Input
                          lable="Customer service email address"
                          type="email"
                          className=""
                          {...register("customerServiceEmail", {
                            required: true,
                            validate: {
                              matchPatern: (value) =>
                                /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
                                  value
                                ) || "Email address must be a valid address",
                            },
                          })}
                        />
                      </div>
                    </div>
                    <div className="justify-center items-stretch flex flex-row gap-2 mt-0 p-0 self-start">
                      <Input lable="" type="checkbox" className="" />
                      <div className="text-black text-base self-center grow whitespace-nowrap mt-8">
                        I agree to the terms & conditions
                      </div>
                    </div>
                    <div className="bg-zinc-100 self-stretch shrink-0 h-px mt-8 max-md:max-w-full" />
                    <div className="justify-between items-stretch self-stretch flex gap-5 mt-8 pl-20 max-md:max-w-full max-md:flex-wrap max-md:pl-5">
                      <button
                        type="button"
                        className="shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 text-zinc-700 text-center text-sm font-semibold  whitespace-nowrap border-[color:var(--color-styles-neutral-600,#79767D)] grow justify-center px-8 py-2 rounded-[30px] border-[0.75px] border-solid max-md:px-5"
                        onClick={() => setShowModal(false)}
                      >
                        Save & close
                      </button>

                      <button
                        type="submit"
                        className="shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 text-white text-center text-sm font-semibold  whitespace-nowrap bg-zinc-500 grow justify-center px-8 py-2 rounded-[30px] max-md:px-5"
                      >
                        Submit for riview pointer
                      </button>
                    </div>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </dialog>
    </div>
  );
}

GetVerified.propTypes = {
  setShowModal: PropTypes.string.isRequired,
};

export default GetVerified;
