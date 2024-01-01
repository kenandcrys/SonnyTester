import womensIcon from './assets/Icons/womens-dress.svg';
import mensIcon from './assets/Icons/Mens-Fashion.svg';
import phoneIcon from './assets/Icons/Phones-and-Telecommunication.svg';
import autoIcon from './assets/Icons/Automobiles-and-Motorcycle.svg';
import bagsIcon from './assets/Icons/Bag-and-Shoes.svg';
import computerIcon from './assets/Icons/Computer-Office-and-Security.svg';
import homeIcon from './assets/Icons/Home-Pet-and-Appliances.svg';
import jewelryIcon from './assets/Icons/Jewelry-and-Watches.svg';
import outdoorsIcon from './assets/Icons/Outdoor-fun-and-sport.svg';
import toolIcon from './assets/Icons/Tools-and-Home-Improvement.svg';
import toysIcon from './assets/Icons/Toys-Kids-and-Babies.svg';
import consumerIcon from './assets/Icons/Consumer-Electronics.svg'


const Menu = () => {
  const categories = [
    {
      id: 'Womens fashion',
      img: womensIcon,
      title: "Women's Fashion",
    },
    {
      id: 'mens',
      img: mensIcon,
      title: "Men's Fashion",
    },
    {
      id: 'phone',
      img: phoneIcon,
      title: 'Phones & Accessories',
    },
    {
      id: 'office',
      img: computerIcon,
      title: 'Computer, Office & Security',
    },
    {
      id: 'electronics',
      img: consumerIcon,
      title: 'Consumer Electronics',
    },
    {
      id: 'jewelry',
      img: jewelryIcon,
      title: 'Jewelry & Watches',
    },
    {
      id: 'furniture',
      img: homeIcon,
      title: 'Home & Appliances',
    },
    {
      id: 'bagsAndShoes',
      img: bagsIcon,
      title: 'Bags & Shoes',
    },
    {
      id: 'kids',
      img: toysIcon,
      title: 'Toys, Kids & Babies',
    },
    {
      id: 'outdoor',
      img: outdoorsIcon,
      title: 'Outdoor, Fun & Sports',
    },
    {
      id: 'automotive',
      img: autoIcon,
      title: 'Automotive',
    },
    {
      id: 'tools',
      img: toolIcon,
      title: 'Tools & Home Improvement',
    },
  ];

  return (
    <div className="w-[20%] flex flex-col rounded-[10px] pr-3 bg-white pl-3 mb-16 mt-6">
      <p className="pt-2 pb-4 ml-4 text-lg font-bold">Categories</p>
      {categories.map((item, index) => (
        <div key={index} className="flex items-center ml-4 pb-4">
          <img src={item.img} alt={item.title} className="w-6 h-6 mr-2" />
          <div>{item.title}</div>
        </div>
      ))}
    </div>
  );
};

export default Menu;