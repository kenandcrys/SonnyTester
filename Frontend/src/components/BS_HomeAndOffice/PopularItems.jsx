import { useState } from "react";
import { Item } from "./Item";
import { Base } from "./Base";
import rightArrow from "../../assets/ICONS/Fill/arrow-right.svg";

export const BS_HomeAndOffice = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const itemsPerSlide = 6;

  const totalSlides = Math.ceil(Base.length / itemsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
  };

  const exploreItems = Array.from({ length: itemsPerSlide }, (_, i) => {
    const index = currentSlide * itemsPerSlide + i;
    return (
      <span
        key={index}
        className={`slide ${index === currentSlide ? "active" : ""}`}
      >
        <Item
          key={index}
          src={Base[index % Base.length].img}
          description={Base[index % Base.length].description}
          price={Base[index % Base.length].price}
        />
      </span>
    );
  });

  return (
    <section className=" h-fit px-0 pb-6 flex-col items-start justify-center gap-[18px] pt-8 flex-1 bg-gray-100">
      <div className="flex w-full">
        <div className=" text-zinc-800 pb-4 text-xl font-bold font-Arial leading-normal tracking-tight pt-3 pl-3">
          Best Sellers Home and Office
        </div>
        <button onClick={nextSlide} className="next-button ml-auto">
          <img src={rightArrow} alt="right-arrow" />
        </button>
      </div>

      <div className="carousel flex gap-6 pl-3 items-center">
        {exploreItems}
      </div>
    </section>
  );
};

export default BS_HomeAndOffice;
