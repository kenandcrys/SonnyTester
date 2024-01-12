import LowerRectangle from "./LowerRectangle";
import Rectangle from "./Rectangle";
import Pagerow from "./Pagerow";
function UpperBody(){
    return(
        <div className="pt-[13px] lg:pt-[19px]">
            <Rectangle></Rectangle>
            <LowerRectangle></LowerRectangle>
            <Pagerow></Pagerow>
        </div>
    );
}

export default UpperBody;