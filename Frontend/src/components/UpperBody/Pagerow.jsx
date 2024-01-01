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
      className="pagerow w-[95%] h-auto my-[60px] mx-auto flex justify-between items-center font-normal text-[25px] text-[#48464C] leading-[30px]"
    >
      <Form></Form>
      <Topsview></Topsview>
      <Bottomsview></Bottomsview>
      <Dressesview></Dressesview>
      <Jumpsuitsview></Jumpsuitsview>
      <Activewearview></Activewearview>
      <Swimwearview></Swimwearview>
    </div>
  );
}

export default Pagerow;
