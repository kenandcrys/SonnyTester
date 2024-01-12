function Button() {
  return (
    <div className="font-Roboto min-w-[279px] sm:min-w-[413px] h-[79px] sm:h-[131px] bg-[#F6FAFC] rounded-[8px] p-2 sm:px-6 sm:py-3 flex justify-between border border-[#E6E0E9] border-solid">
      <div className="flex flex-col justify-between gap-1">
        <div>
          <h1 className=" text-xl text-[25px] font-semibold sm:font-bold leading-7 sm:leading-[30px] text-[#55A0C7]">Tour $5 off</h1>
          <p className="text-[9px] font-normal leading-[14px] sm:text-base sm:leading-[19.2px] text-[#79767D]">Orders over $180</p>
        </div>
        <p className="text-xs sm:text-base sm:leading-[19.2px] text-[#48464C]">valid till 02/24</p>
      </div>
      <div className="flex flex-col justify-between items-end self-stretch">
        <div className="p-[10px]">
          <p className="text-[#48464C] text-xs sm:text-base sm:leading-[19.2px]">**978</p>
        </div>
        <div className="bg-[#55A0C7] text-[#F5F5F9] rounded-[400px] py-[6px] px-3 text-xs sm:text-base sm:leading-[19.2px]">Copy</div>
      </div>
    </div>
  );
}

export default Button;
