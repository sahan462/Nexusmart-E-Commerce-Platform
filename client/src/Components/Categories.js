import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTv,
  faShirt,
  faHouseChimney,
  faBurger,
  faFootball,
} from "@fortawesome/free-solid-svg-icons";
import CategoryList from "./CategoryList";

export default function Categories() {
  return (
    <div>
      <span className="font-medium">Categories</span>

      <div>
        <CategoryList />
      </div>
    </div>
  );
}
