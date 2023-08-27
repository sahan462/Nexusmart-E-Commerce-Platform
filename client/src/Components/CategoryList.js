import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTv,
  faShirt,
  faHouseChimney,
  faBurger,
  faFootball,
} from "@fortawesome/free-solid-svg-icons";

export default function CategoryList() {
  const categoryList = [
    {
      name: "Electronic",
      svg: faTv,
      subCategories: [
        "Phones & Accessories",
        "Computers & Laptops",
        "TVs & Speakers",
        "Cameras",
      ],
    },
    {
      name: "Life Stle",
      svg: faShirt,
      subCategories: [
        "Clothing & Apparel",
        "Shoes & Accessories",
        "Beauty & Personal Care",
        "Jewelry & Watches",
      ],
    },
    {
      name: "Home Equipment",
      svg: faHouseChimney,
      subCategories: [
        "Furniture",
        "Kitchen & Dining",
        "Bedding & Bath",
        "Home Improvement",
      ],
    },
    {
      name: "Foods and Beverages",
      svg: faBurger,
      subCategories: [
        "Groceries",
        "Snacks & Sweets",
        "Beverages",
        "Cooking Ingredients",
      ],
    },
    {
      name: "Sports and Entertainment",
      svg: faFootball,
      subCategories: [
        "Sports Equipment",
        "Fitness & Exercise",
        "Outdoor Recreation",
        "Video Games",
        "Movies & TV Shows",
        "Books & Magazines",
      ],
    },
  ];
  return (
    <div className="text-category_lits">
      {categoryList.map((cat) => (
        <ul className="py-3 ">
          <li key={cat.name}>
            <FontAwesomeIcon
              icon={cat.svg}
              className="pr-2 h-4 w-4"
              style={{ color: "#4f4f4f" }}
            />
            <span className="font-medium cursor-pointer hover:text-primary">
              {cat.name}
            </span>
            <div className="px-6">
              {cat.subCategories.map((subCat) => (
                <li className="cursor-pointer hover:text-primary">{subCat}</li>
              ))}
            </div>
          </li>
        </ul>
      ))}
    </div>
  );
}
