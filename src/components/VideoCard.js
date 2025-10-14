const VideoCard = ({ info }) => {
  // console.log("**********info**********", info);
  const { snippet, statistics } = info || {};
  const { title, channelTitle, thumbnails } = snippet || {};

  return (
    <div className="p-2 m-2 shadow-lg w-[300px]">
      <img className="rounded-lg" src={thumbnails?.high?.url} alt="thumbnail" />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li className="text-gray-600">{channelTitle}</li>
        <li className="text-gray-600">{statistics?.viewCount} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
