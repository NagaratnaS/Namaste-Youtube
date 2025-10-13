import Button from "./Button";
const ButtonList = () => {
  const list = [
    "All",
    "News",
    "Music",
    "Sports",
    "Live",
    "Cricket",
    "Cooking",
    "Soccer",
    "Gaming",
    "Movies",
    "Technology",
  ];
  return (
    <div className="flex gap-3">
      {list.map((item) => (
        <Button key={item} name={item} />
      ))}
    </div>
  );
};

export default ButtonList;
