/*export default function Form(){
    function handleSubmit(e) {
        e.preventDefault();    console.log("You clicked women's fashion.");
      }

    return(        
        <form onSubmit={handleSubmit} style={{float: "left", padding: 10}}>
            <button type="submit">Women's Fashion</button>
        </form>
    );
}*/ //this is a click function. Leaving it commented out for now.

import LOGO from "../../../assets/ICONS/location-marker.svg"

function WomensFashionview(){
    return(
        <div className="flex justify-between items-center font-Roboto" >
            <img src={LOGO} className="w-5 h-5"></img>
            <div className="text-xl sm:text-[31px] sm:leading-[31.2px] text-[#09618E] whitespace-nowrap font-semibold sm:font-bold">Women's Fashion</div>
        </div>
    );
}

export default WomensFashionview;
