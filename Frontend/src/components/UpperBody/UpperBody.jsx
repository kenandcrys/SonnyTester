import LowerRectangle from "./LowerRectangle";
import Rectangle from "./Rectangle";
import Pagerow from "./Pagerow";
function UpperBody(){
    return(
        <div>
            <Rectangle></Rectangle>
            <LowerRectangle></LowerRectangle>
            <Pagerow></Pagerow>
        </div>
    );
}

export default UpperBody;