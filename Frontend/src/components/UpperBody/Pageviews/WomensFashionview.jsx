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

function WomensFashionview(){
    return(
        <div className="buttonview" >
            {/* Missing Logo */}
            <div className="text-[31px] text-[#313133] leading-[37.2px] whitespace-nowrap font-bold">Women's Fashion</div>
        </div>
    );
}

export default WomensFashionview;
