/*
This component acts as the man content to the ExplorItem.jsx card.
This is currently as dynamic as I can get for the time being and still be able to display the information as required by figma. 
*/
import { ExploreItem } from "./ExploreItem";
import { BaseImagesAndCategories } from "./BaseImagesAndCategories";

export const Explore = () => {
  const exploreItems = BaseImagesAndCategories.map((item, i) => {
    return (
      <span key={i}>
        <ExploreItem key={i} src={item.img} title={item.category} />
      </span>
    );
  });

  return (

    <section className="flex pb-6 flex-col items-start justify-center gap-[18px] flex-1 bg-emerald-300">
      <div className="text-zinc-800 text-xl font-bold font-'Arial' leading-normal tracking-tight pb-2 pt-6 pl-3">

        Explore our Top Categories
      </div>

      <div className="grid gap-2 md:gap-5 grid-cols-6 w-max xl:w-full md:pl-10 md:pr-3">
        {exploreItems}
      </div>
    </section>
  );
};

export default Explore;
