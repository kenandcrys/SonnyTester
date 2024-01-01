/*
This component created to house the base images and categories of the explore.jsx page.
*/

import beauty from "./assets/beauty.png";
import bagsAndShoes from './assets/bagsAndShoes.png';
import accessories from './assets/accessories.png';
import electronics from './assets/electronics.png';
import fashion from './assets/fashion.png'
import furniture from './assets/furniture.png';
import groceries from './assets/groceries.png';
import otherCategories from './assets/otherCategories.png';
import skinCare from './assets/skinCare.png';
import wristWatches from './assets/wristWatches.png'
import mensSneakers from './assets/mens_sneakers.png' // Added correct photo
import health from './assets/health.png'

export const BaseImagesAndCategories = [
  {
    category: 'Beauty',
    img: beauty,
  },
  {
    category: 'Fashion',
    img: fashion,
  },
  {
    category: 'Accessories',
    img: accessories,
  },
  {
    category: 'Furniture',
    img: furniture,
  },
  {
    category: 'Watches',
    img: wristWatches,
  },
  {
    category: `Men's Shoes`,
    img: mensSneakers,
  },
  {
    category: 'Grocery',
    img: groceries,
  },
  {
    category: 'Health',
    img: health,
  },
  {
    category: 'Tech',
    img: electronics,
  },
  {
    category: 'Skincare',
    img: skinCare,
  },
  {
    category: `Women's Shoes`,
    img: bagsAndShoes,
  },
  {
    category: 'Other',
    img: otherCategories,
  },
  
]