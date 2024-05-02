import { useDispatch, useSelector } from "react-redux";
import { selectNameFilter } from "../../redux/filters/selector";
import { changeFilter } from "../../redux/filters/slice";

import css from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <section>
      <span>Find contacts by name</span>
      <br />
      <input
        type="text"
        placeholder="Search..."
        value={filter}
        onChange={handleChange}
      />
    </section>
  );
};

export default SearchBox;