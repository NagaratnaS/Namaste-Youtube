import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  return (
    <div className="p-5 w-48">
      <h2>Main Content</h2>
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
