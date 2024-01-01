import facebook from "../../assets/ICONS/socials/facebook.svg";
import twitter from "../../assets/ICONS/socials/twitter.svg";
import linkedin from "../../assets/ICONS/socials/linkedin.svg";
import instagram from "../../assets/ICONS/socials/instagram.svg";
import dhl from "../../assets/ICONS/payment/dhl.svg";
import visa from "../../assets/ICONS/payment/visa.svg";
import mastercard from "../../assets/ICONS/payment/mastercard.svg";
import paypal from "../../assets/ICONS/payment/paypal.svg";

const PaymentSocial = () => {
  const socialMedia = [facebook, instagram, linkedin, twitter];
  const payments = [visa, dhl, mastercard, paypal];

  return (
    <div className="flex flex-col self-center">
      <div className="flex flex-col items-start gap-8 sm:flex-row sm:items-center sm:justify-between md:gap-12">
        <div className="flex flex-col gap-4">
          <div className="text-[#605D64] font-[Roboto] text-xl font-bold leading-[120%]">Follow us on</div>
          <div className="flex gap-4">
            {socialMedia.map((media, index) => (
              <div key={index}>
                <img src={media} alt="" className="w-8 h-8" />
              </div>
            ))}
          </div>
        </div>
        <div className="mt-4 sm:mt-0">
          <div className="text-[#605D64] font-[Roboto] text-xl font-bold leading-[120%]">PAYMENT METHODS</div>
          <div className="flex gap-4">
            {payments.map((pay, index) => (
              <div key={index}>
                <img src={pay} alt="" className="w-8 h-8" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSocial;
