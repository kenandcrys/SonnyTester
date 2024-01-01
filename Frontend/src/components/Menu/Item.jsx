import PropTypes from 'prop-types';

const Item = ({ children }) => {
  return (
    <div className="flex gap-5 w-[316px] px-2 py-3 items-center">
      <input type="checkbox" name="" id="" className="w-6 h-6" />
      <span className="font-[Roboto] font-normal text-base">{children}</span>
    </div>
  );
};

Item.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Item;