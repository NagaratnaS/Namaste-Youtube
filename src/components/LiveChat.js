import { useDispatch, useSelector } from "react-redux";
import ChatMessage from "./ChatMessage";
import { useEffect } from "react";
import { addMessage } from "../utils/ChatSlice";

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: "Nagaratna",
          message: "Hello, Nagaratna!",
        })
      );
    }, 5000);
    return () => {
      clearInterval(i);
    };
  }, []);

  return (
    <div className="ml-2 p-2 border border-black w-full h-[600px] bg-slate-100 rounded-lg overflow-y-hidden">
      {chatMessages.map((message, index) => (
        <ChatMessage
          key={index}
          name={message.name}
          message={message.message}
        />
      ))}
      <ChatMessage name="Nagaratna" message="Hello, Nagaratna!" />
    </div>
  );
};

export default LiveChat;
