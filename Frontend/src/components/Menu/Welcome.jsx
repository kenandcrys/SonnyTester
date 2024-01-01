import userIcon from '../../assets/ICONS/user/prof_user.png';

const Welcome = () => {
  return (
    <div className=" flex flex-col pb-3 items-center rounded-[10px] pr-3 bg-white pl-3 mb-16 mt-6 ml-7">
      <img src={userIcon} alt="user_icon" className="w-[70px] mx-auto pt-2" />
      <p className="pt-2 pb-8 text-lg font-bold">Welcome to SONNY</p>
      <div className='bg-gray-300 h-full w-[271px] rounded-[10px]'>
        {/* Content goes here */}
      </div>
    </div>
  );
};

export default Welcome;