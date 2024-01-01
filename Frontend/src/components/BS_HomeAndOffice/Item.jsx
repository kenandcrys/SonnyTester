import PropTypes from "prop-types";

export const Item = ({ src, description, price }) => {


  return (
      <a
      href="#"
      className="flex flex-col pb-5 pt-1 px-[10px] justify-between bg-[#FBFDFE] shadow-lg rounded-md hover:shadow-gray-700"
    >
      <img
        src={src}
        alt=""
        className="w-[250px] h-[275px] rounded-md justify-between items-center"
        style={{ borderRadius: "10px", marginTop: "10px" }}
      />
      <div className="text-[16px] pt-2 pb-2 font-[Roboto]">
        {description}
      </div>
      <div className="flex items-start font-[Roboto] text-left">
        <span>{`from`}</span>
        <p className="text-blue-500 font-semibold text-lg pl-1">{`$${price}`}</p>
      </div>
    </a>
    
    
  );
};

Item.propTypes = {
  src: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};
