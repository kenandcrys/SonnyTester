import LeftArrow from '../../assets/ICONS/LeftArrow.svg'
import RightArrow from '../../assets/ICONS/RightArrow.svg'
import Ratings from '../../assets/ICONS/Ratings.svg'

function FeedDetail() {
    return (
        <div className="self-center flex w-full max-w-full flex-col items-stretch mt-4 px-5 overflow-hidden">
            <div className="flex flex-col py-0 px-0 max-md:max-w-full max-md:px-0">
                <div className="self-center flex w-full max-w-full items-center justify-between gap-5 mt-2.5 px-10 max-md:max-w-full max-md:flex-wrap">
                    <div className="text-stone-950 text-xl font-medium leading-8 grow whitespace-nowrap my-auto">
                        Product Name : Facial Moisturizer {""}
                    </div>
                    <div className="self-stretch z-[1] flex items-stretch justify-between gap-5">
                        
                        <button className="text-stone-950 text-xs leading-4 whitespace-nowrap items-stretch border border-[color:var(--text-black-2,#313133)] grow justify-center pl-8 pr-11 py-4 border-solid max-md:px-5">
                            Publish/Unpublish
                        </button>
                        <button className="text-stone-950 text-xs leading-4 whitespace-nowrap items-stretch border border-[color:var(--text-black-2,#313133)] grow justify-center pl-8 pr-11 py-4 border-solid max-md:px-5">
                            Delete Product
                        </button>
                    </div>
                </div>
                <div className="self-center flex w-full max-w-full items-center justify-between gap-5 mt-2.5 px-10 max-md:max-w-full max-md:flex-wrap">
                    <div className="self-stretch flex items-stretch justify-start">
                        <div className="text-stone-950 text-xl font-medium leading-8 whitespace-nowrap">
                            PRODUCT ID :
                        </div>
                        <div className="text-stone-950 text-base ml-3 mt-1.5 leading-6 whitespace-nowrap">
                            9999999 {" "}
                        </div>
                    </div>
                </div>
                <div className="self-center flex w-full max-w-full items-center justify-between gap-5 mt-2.5 px-10 max-md:max-w-full max-md:flex-wrap">
                    <div className=" gap-10 flex max-md:flex-col max-md:items-stretch max-md:gap-0 ">
                        <div className="flex flex-col items-stretch w-[29%] max-md:w-full max-md:ml-0 ">
                            <div className="flex flex-col max-md:mt-0">
                                <div className="bg-stone-300 self-center flex w-[246px] shrink-0 h-[250px] flex-col" />
                                <div className=" w-full max-w-full justify-center items-center self-stretch flex gap-5 mt-7 max-md:justify-center">
                                    <img
                                        loading="lazy"
                                        src={LeftArrow}
                                        className="aspect-[1.07] object-contain object-center w-4 overflow-hidden shrink-0 max-w-full my-auto"
                                    />
                                    <div className="bg-stone-300 self-stretch flex w-[61px] shrink-0 h-[61px] flex-col" />
                                    <div className="bg-stone-300 self-stretch flex w-[62px] shrink-0 h-[61px] flex-col" />
                                    <div className="bg-stone-300 self-stretch flex w-[61px] shrink-0 h-[61px] flex-col" />
                                    <img
                                        loading="lazy"
                                        src={RightArrow}
                                        className="aspect-[1.07] object-contain object-center w-4 overflow-hidden shrink-0 max-w-full my-auto"
                                    />
                                </div>
                                <div className="self-stretch justify-between items-start py-2  max-md:mt-10">

                                    <div className="self-stretch flex items-stretch justify-start pt-5">
                                        <div className="text-black text-2xl font-semibold leading-10 whitespace-nowrap">
                                            Price :
                                        </div>
                                        <div className="text-black text-left text-2xl mt-1 ps-36 font-medium leading-8 self-stretch whitespace-nowrap">
                                            $999 {" "}
                                        </div>
                                    </div>
                                    <div className="self-stretch flex items-stretch justify-start pt-5">
                                        <div className="text-black text-xl leading-10 whitespace-nowrap">
                                            Type :
                                        </div>
                                        <div className="text-black text-xl mt-1 ps-36  leading-8 self-stretch whitespace-nowrap">
                                            Beauty {" "}
                                        </div>
                                    </div>
                                    <div className="self-stretch flex items-stretch justify-start pt-5">
                                        <div className="text-black text-xl leading-10 whitespace-nowrap">
                                            Ratings:
                                        </div>
                                        <div className="leading-6 self-stretch mt-3.5 ms-32 whitespace-nowrap">
                                            <img
                                                loading="lazy"
                                                src={Ratings}
                                                className="aspect-[5.67] overflow-hidden"
                                            /> {" "}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-stretch w-[71%] max-md:w-full max-md:ml-0">
                            
                                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0 ">
                                    <div className="flex flex-col items-center w-full max-md:w-full max-md:ml-0">
                                        <div className="justify-center bg-white flex grow flex-col w-full pl-4 pr-6 pb-5 rounded items-center max-md:mt-8 max-md:px-5">
                                            <div className="bg-zinc-200 flex w-[80%] shrink-0 h-2.5 flex-col max-md:ml-2" />
                                            <div className="text-stone-950 text-base leading-8 self-stretch whitespace-nowrap mt-2.5">
                                                RATINGS
                                            </div>
                                            <div className="text-zinc-800 text-base  leading-8 self-center whitespace-nowrap mt-2.5">
                                                4.8
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-center w-full max-md:w-full max-md:ml-0">
                                        <div className="justify-center bg-white flex grow flex-col w-full pl-4 pr-6 pb-5 rounded items-center max-md:mt-8 max-md:px-5">
                                            <div className="text-stone-950 text-base  leading-8 self-stretch whitespace-nowrap mt-2.5">
                                                FEEDBACK
                                            </div>
                                            <div className="text-zinc-800 text-base leading-8 self-center whitespace-nowrap mt-2.5">
                                                999
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-center w-full max-md:w-full max-md:ml-0">
                                        <div className="justify-center bg-white flex grow flex-col w-full pl-4 pr-6 pb-5 rounded items-center max-md:mt-8 max-md:px-5">
                                            <div className="text-stone-950 text-base leading-8 self-stretch whitespace-nowrap mt-2.5">
                                                FEEDBACK
                                            </div>
                                            <div className="text-zinc-800 text-base leading-8 self-center whitespace-nowrap mt-2.5">
                                                999
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-center w-full max-md:w-full max-md:ml-0">
                                        <div className="justify-center bg-white flex grow flex-col w-full pl-4 pr-6 pb-5 rounded items-center max-md:mt-8 max-md:px-5">
                                            <div className="text-stone-950 text-base leading-8 self-stretch whitespace-nowrap mt-2.5">
                                                FEEDBACK
                                            </div>
                                            <div className="text-zinc-800 text-base leading-8 self-center whitespace-nowrap mt-2.5">
                                                999
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-center w-full max-md:w-full max-md:ml-0">
                                        <div className="justify-center bg-white flex grow flex-col w-full pl-4 pr-6 pb-5 rounded items-center max-md:mt-8 max-md:px-5">
                                            <div className="text-stone-950 text-base leading-8 self-stretch whitespace-nowrap mt-2.5">
                                                FEEDBACK
                                            </div>
                                            <div className="text-zinc-800 text-base leading-8 self-center whitespace-nowrap mt-2.5">
                                                999
                                            </div>
                                        </div>
                                    </div>
                                    
                                    
                                    
                                </div>
                                <div className="bg-white self-center flex w-[594px] max-w-full flex-col items-stretch mt-14 pl-9 pr-10 py-9 rounded max-md:mt-10 max-md:px-5">
                                    <div className="bg-white shrink-0 h-[356px] max-md:max-w-full" />
                                </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeedDetail;