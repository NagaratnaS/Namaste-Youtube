const commentsData = [
  {
    name: "Nagaratna Hegde",
    text: "Great video! Learned a lot about React components.",
    replies: [
      {
        name: "John Doe",
        text: "I agree! The explanation was very clear.",
      },
    ],
  },
  {
    name: "Jane Smith",
    text: "Can someone explain the useEffect hook in more detail?",
    replies: [
      {
        name: "Emily Johnson",
        text: "Sure! The useEffect hook lets you perform side effects in function components.",
      },
    ],
  },
  {
    name: "Michael Brown",
    text: "I found the Redux section a bit confusing. Any recommendations for beginners?",
    replies: [
      {
        name: "Chris Lee",
        text: "Check out the official Redux documentation and some beginner tutorials on YouTube.",
      },
    ],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg my-2">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s"
        alt="Profile"
        className="w-12 h-12 rounded-full"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments?.map((comment, index) => (
    <div>
      <Comment key={index} data={comment} />
      <div className="pl-5 border-l-black ml-5">
        <CommentsList comments={comment?.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments:</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
