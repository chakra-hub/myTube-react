import React, { useEffect } from "react";
import UserChat from "./UserChat";
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "../utils/chatSlice";
import { generate } from "../utils/helper";
import { sentence } from "../utils/helper";
import { useState } from "react";

const LiveChat = () => {
  const [liveChat, setLiveChat] = useState();
  const user_details = useSelector((store) => store.chat.message);
  const dispatch = useDispatch();
  const handleLiveSubmit = () =>{
    dispatch(
      updateUser({
        user: 'Chakradhar',
        message: liveChat,
      })
    )
  }
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
      <form className="live_input" onSubmit={(e)=>{
        e.preventDefault()
        handleLiveSubmit()
        setLiveChat('')}}>
        <input type="text" className="live_input_field" value={liveChat} onChange={(e)=>setLiveChat(e.target.value)}/>
        <button type="submit" className="live_send">Send</button>
      </form>
    </>
  );
};

export default LiveChat;
