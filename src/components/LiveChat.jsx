import React, { useEffect } from "react";
import UserChat from "./UserChat";
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "../utils/chatSlice";
import { generate } from "../utils/helper";
import { sentence } from "../utils/helper";

const LiveChat = () => {
  const user_details = useSelector((store) => store.chat.message);
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(
        updateUser({
          user: generate(),
          message: sentence(),
        })
      );
    }, 1000);

    return () => clearInterval(interval);
  });

  return (
    <>
      <div className="live_chat_heading">Live Chat 🔴</div>
      <div className="live_chat_container">
        {user_details.map((element) => {
          return (
            <UserChat user_name={element.user} message={element.message} />
          );
        })}
      </div>
    </>
  );
};

export default LiveChat;
