const Button = ({ name }) => {
  return (
    <div>
      <button className="border border-gray-900 px-5 py-2 m-2 rounded-lg bg-gray-100">
        {name}
      </button>
    </div>
  );
};

export default Button;
