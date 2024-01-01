
import PropTypes from 'prop-types';


const TopPicks = ({ title, children }) => {
  return (
    <div className="flex flex-col items-start gap-4 px-7 py-9">
      <div className="font-[Arial] text-xl font-bold tracking-[0.18px] text-black">
        {title}
      </div>
      <div className="grid w-full max-sm:grid-flow-col max-sm:pl-0 max-sm:overflow-x-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-9 items-center pl-10 pr-2.5 overscroll-contain overflow-clip">
        {children}
      </div>
    </div>
  );
};

TopPicks.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default TopPicks;
