import tick from "../../assets/ICONS/successful.svg"
const PaymentSuccessful = () => {
  return (
    <div className="font-Roboto flex flex-col min-h-[678px] sm:min-h-[985px] items-center sm:mt-[58px]">
      <figure className="w-[175px] h-[175px] p-[14px]  sm:w-[217px] sm:h-[217px] sm:[18px]">
        <img src={tick} alt="Successful Icon"/>
      </figure>
      <p className="mt-[45px] text-[#0F1111] text-xl font-semibold sm:mt-8 sm:text-[40px] sm:font-bold sm:leading-[60px]">Payment Successful!</p>
      <p className="mt-[37px] text-[#313133] text-base font-medium sm:mt-7 sm:text-xl sm:leading-[30px]">Your order has been processed successfully.</p>
      <p className="mt-[34px] text-[#313133] text-base font-medium sm:mt-7 sm:text-xl sm:leading-[30px]">Your tracking number is: {123456}</p>
      <p className="mt-[34px] text-[#313133] text-base font-medium sm:mt-7 sm:text-xl sm:leading-[30px]">Thank you for shopping see you soon!</p>
      <div className="mt-[51px] inline-flex flex-col items-center gap-[34px] sm:gap-7">
        <button className="flex justify-center items-center w-[358px] h-[48px] py-[14px] px-[30px] bg-[#EEC643] rounded-[5px] text-[#313133] text-sm font-semibold sm:w-[462px] sm:h-[52px] sm:text-xl sm:font-medium sm:leading-[30px]">Shop Again</button>
        <button className="flex justify-center items-center w-[358px] h-[48px] py-[14px] px-[30px] border border-[#2284B6] border-solid rounded-[5px] text-[#09618E] text-sm font-semibold sm:w-[462px] sm:h-[52px] sm:text-xl sm:font-medium sm:leading-[30px]">Print Receipt</button>
      </div>
    </div>
  );
};

export default PaymentSuccessful;
