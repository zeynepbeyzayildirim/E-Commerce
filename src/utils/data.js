import I1 from "../asset/img/i1.png";
import F1 from "../asset/img/f1.png";
import B1 from "../asset/img/b4.png";
import V1 from "../asset/img/v1.png";
import { IoFastFood } from "react-icons/io5";
 export const heroData = [
  {
    id: 1,
    name: "Icecream",
    decp: "Chocolate & vanilla",
    price: "5.25",
    imageSrc: I1,
  },
  {
    id: 2,
    name: "Strawberries",
    decp: "Fresh Strawberries",
    price: "10.25",
    imageSrc: F1,
  },
  {
    id: 3,
    name: "Muffin",
    decp: "Bakery-Muffin",
    price: "2.25",
    imageSrc: B1,
  },
  {
    id: 4,
    name: "Fish Kebab",
    decp: "Mixed Fish Kebab",
    price: "5.25",
    imageSrc: V1,
  },
];

export const categories =[
  {
    id:1,
    name: "Greengrocery",
    urlParamName:"greengrocery",
    icon: {IoFastFood},
  },
  {
    id:2,
    name: "Dairy Products",
    urlParamName:"dairy products",
    icon: {IoFastFood},
  },
  {
    id:3,
    name: "Snack",
    urlParamName:"snack",
    icon: {IoFastFood},
  },
  {
    id:4,
    name: "Bakery",
    urlParamName:"bakery",
    icon: {IoFastFood},
  },
  {
    id:5,
    name: "Meat, Poultry & Fish",
    urlParamName:"meat poultry fish",
    icon: {IoFastFood},
  },
  {
    id:6,
    name: "Frozen Food",
    urlParamName:"frozen food",
    icon: {IoFastFood},
  },
  {
    id:7,
    name: "Drinks",
    urlParamName:"drinks",
    icon: {IoFastFood},
  },
]