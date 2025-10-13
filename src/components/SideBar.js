import { useSelector } from "react-redux";

const SideBar = () => {
  const isMenuOpen = useSelector((state) => state.app.isMenuOpen);
  //early return
  if (!isMenuOpen) return null;
  return (
    <div className="p-5 shadow-lg">
      <ul className="pt-5 pb-5">
        <li>Home</li>
        <li>Shorts</li>
        <li>Videos</li>
        <li>Live</li>
      </ul>
      <h1 className="font-bold">Subscriptions</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>

      <h1 className="font-bold pt-5">Watch Later</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
    </div>
  );
};

export default SideBar;
