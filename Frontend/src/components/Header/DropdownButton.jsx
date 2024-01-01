import PropTypes from 'prop-types';
import { FaCaretDown, FaCaretUp } from 'react-icons/fa';
import { useState } from 'react';

const DropdownButton = (props) => {
  const { title } = props;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="p-4  flex items-center justify-end "
      >
        {title}
        {!isOpen ? <FaCaretDown /> : <FaCaretUp />}
      </button>
    </div>
  );
};

DropdownButton.propTypes = {
  title: PropTypes.string.isRequired,
};

export default DropdownButton;