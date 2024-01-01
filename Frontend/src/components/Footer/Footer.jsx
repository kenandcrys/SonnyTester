import InfoSection from "./InfoSection";
import FooterItem from "./FooterItem";
import PaymentSocial from "./PaymentSocial";
import SubscribeForm from "./SubscribeForm";
import country from "../../assets/ICONS/mobileicons/country.svg";
import currency from "../../assets/ICONS/mobileicons/currency.svg";
import globe from "../../assets/ICONS/mobileicons/globe.svg";

const footerSectionsData = [
  {
    title: "LET US HELP YOU",
    items: [
      "Help Center",
      "Contact Us",
      "How to shop on York Shoppers?",
      "Delivery options and timelines",
      "How to return a Product",
      "Ship your package anywhere in New York",
      "Report a Product",
    ],
  },
  {
    title: "ABOUT YORK SHOPPERS",
    items: [
      "About Us",
      "York Shoppers’ Express",
      "Terms and Conditions",
      "Cookie Notice",
      "Privacy Notice",
      "Legal Notice",
      "Flash Sales",
    ],
  },
  {
    title: "MAKE MONEY WITH US",
    items: [
      "Sell on York Shoppers",
      "Become a Sales Consultant",
      "Become a Logistic Service Partner",
      "Delivery options and timelines",
      "Become an Affiliate Member",
      "Buyer Protection",
    ],
  },
  
];

const Footer = () => {
  return (
    <>
      {/* Desktop Version */}
      <div className="hidden px-[30px] py-[50px] items-center  flex-col border-[5px] bg-[#E2EFF6] md:flex gap-10">
        <div className="flex gap-36">
          {footerSectionsData.map((section, index) => (
            <InfoSection key={index} title={section.title}>
              {section.items.map((item, i) => (
                <FooterItem key={i} link={""} title={item} />
              ))}
            </InfoSection>
          ))}
        </div>
        <div className="flex gap-40">
          <PaymentSocial />
          <SubscribeForm />
        </div>

        {/* Add other elements as needed */}
        <div className="w-full h-0 border border-neutral-400"></div>

        <div className="flex flex-col items-center gap-2">
          <div className="text-[#2284B6] flex gap-5">
            <span>Condition of use</span>
            <span>Privacy Notice</span>
            <span>Your Ads Privacy Choices</span>
          </div>
          <div className="text-[#2284B6]">
            &copy; 1998 - 2023, Yorkshoppers.com, Inc, or its affiliates
          </div>
        </div>
      </div>

      {/* Mobile Version */}
      <div className="hidden px-6 py-8  justify-center items-center border-[5px] bg-[#E2EFF6] max-md:flex flex-col gap-10">
        <div className="flex gap-36">
          {footerSectionsData.map((section, index) => (
            <div key={index} className="flex flex-col gap-6">
              {section.items.map((item, i) => (
                <FooterItem key={i} link={""} title={item} />
              ))}
            </div>
          ))}
        </div>

        {/* Add other elements as needed */}
        <div className="w-full h-0 border border-neutral-400"></div>

        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-8">
            <span className="flex gap-1 text-sm w-fit whitespace-nowrap">
              <img src={currency} alt="" />
              USD-U.S Dollar
            </span>
            <span className="flex gap-1 text-sm w-fit whitespace-nowrap">
              <img src={globe} alt="" />
              English
            </span>
            <span className="flex gap-1 text-sm w-fit whitespace-nowrap">
              <img src={country} alt="" />
              United States
            </span>
          </div>
          <div className="text-gray-700 text-base font-medium leading-[24px]">
            Already a customer? <span><button className="text-blue-500">Sign in</button></span>
          </div>
        </div>

        <div className="w-full h-0 border border-neutral-400"></div>

        <div className="flex flex-col items-center gap-2 text-xs font-[Roboto] font-normal">
          <div className="text-[#2284B6] flex gap-5">
            <span>Condition of use</span>
            <span>Privacy Notice</span>
            <span>Your Ads Privacy Choices</span>
          </div>
          <div className="text-[#2284B6]">
            &copy; 1998 - 2023, Yorkshoppers.com, Inc, or its affiliates
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;