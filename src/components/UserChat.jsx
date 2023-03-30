import React from "react";

const UserChat = ({ user_name, message }) => {
  return (
    <div className="chat_container">
      <img
        className="chat_user_icon"
        src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
        alt=""
      />
      <span className="user_name">{user_name}</span>
      <span className="chat_message">{message}</span>
    </div>
  );
};

export default UserChat;
