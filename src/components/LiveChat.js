import { useDispatch, useSelector } from "react-redux";
import ChatMessage from "./ChatMessage";
import { useEffect, useState } from "react";
import { addMessage } from "../utils/ChatSlice";
import { generateRandomName, makeRandomMessage } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(20),
        })
      );
    }, 5000);
    return () => {
      clearInterval(i);
    };
  }, []);

  return (
    <>
      <div className="ml-2 p-2 border border-black w-full h-[600px] bg-slate-100 rounded-lg overflow-y-scroll flex-col-reverse">
        <div>
          {chatMessages.map((message, index) => (
            <ChatMessage
              key={index}
              name={message.name}
              message={message.message}
            />
          ))}
        </div>
      </div>

      <form
        className="w-full p-2 ml-2 border border-black rounded-lg flex-col"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Nagaratna Hegde",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          className="w-96 px-2 border border-black"
          type="text"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        ></input>
        <button className="px-2 mx-2 bg-green-100">Send</button>
      </form>
    </>
  );
};

export default LiveChat;
