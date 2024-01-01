function Button() {
  return (
    <div className="font-sans w-[32%] h-[131px] bg-[#E2EFF6] rounded-[8px] py-[12px] px-[24px] flex justify-between border-[1px] border-[#E6E0E9] leading-[19.2px]">
      <div className="flex flex-col justify-between">
        <div>
          <h1 className="text-[25px] font-bold leading-[30px]">Tour $5 off</h1>
          <p>Orders over $180</p>
        </div>
        <p>valid till 02/24</p>
      </div>
      <div className="flex flex-col justify-between items-center">
        <div className="p-[10px]">
          <p>**978</p>
        </div>
        <div className="bg-[#79767D] rounded-[500px] py-[6px] px-[12px]">Copy</div>
      </div>
    </div>
  );
}

export default Button;
