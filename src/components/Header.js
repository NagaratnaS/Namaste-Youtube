import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Header = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png"
          alt="Hamburger Menu"
          className="h-8 cursor-pointer"
          onClick={toggleMenuHandler}
        />
        <a href="/">
          <img
            src="https://1000logos.net/wp-content/uploads/2017/02/YouTube-Logosu.png"
            alt="YouTube Logo"
            className="h-8 mx-2"
          />
        </a>
      </div>

      <div className="col-span-10 px-10">
        <input
          className="w-1/2 border border-gray-400 p-2 rounded-l-full"
          type="text"
          placeholder="Search"
        />
        <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100">
          Search
        </button>
      </div>

      <div className="col-span-1">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s"
          alt="User Avatar"
          className="h-8"
        />
      </div>
    </div>
  );
};

export default Header;
