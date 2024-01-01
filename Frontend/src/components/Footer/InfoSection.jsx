import PropTypes from 'prop-types';

const InfoSection = ({ title, children }) => {
  return (
    <div className="flex flex-col items-start gap-6 sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4">
      <div className="text-[#09618E] text-xl font-bold leading-[120%] font-[Roboto] mb-4 sm:mb-0">
        {title}
      </div>
      <div className="flex flex-col items-start gap-2">{children}</div>
    </div>
  );
};

InfoSection.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default InfoSection;