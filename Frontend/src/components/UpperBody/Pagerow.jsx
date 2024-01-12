import Form from "./Pageviews/WomensFashionview";
import Topsview from "./Pageviews/Topsview";
import Bottomsview from "./Pageviews/Bottomsview";
import Dressesview from "./Pageviews/Dressesview";
import Jumpsuitsview from "./Pageviews/Jumpsuitsview";
import Activewearview from "./Pageviews/Activewearview";
import Swimwearview from "./Pageviews/Swimwearview";

function Pagerow() {
  return (
    <div
      className="bg-[#FFFFFF] w-full h-auto sm:h-[99px] sm:mt-[62px] flex flex-col sm:flex-row items-center font-normal text-[25px] text-[#48464C] leading-[30px] sm:gap-[102px] sm:overflow-x-auto p-2 sm:px-[54px] sm:py-4 max-sm:ml-[5px]"
    >
      <Form></Form>
      <div className="max-sm:w-full flex justify-between items-center gap-[22px] sm:gap-[102px] text-[#48464C] font-Roboto text-base font-medium sm:text-[25px] sm:font-normal sm:leading-[30px] max-sm:overflow-x-auto">
        <Topsview></Topsview>
        <Bottomsview></Bottomsview>
        <Dressesview></Dressesview>
        <Jumpsuitsview></Jumpsuitsview>
        <Activewearview></Activewearview>
        <Swimwearview></Swimwearview>
      </div>
    </div>
  );
}

export default Pagerow;
