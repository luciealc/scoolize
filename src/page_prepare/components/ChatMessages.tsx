import React from "react";
import { IChatMessagesProps } from "../../interface/chatMessages";

const ChatMessages: React.FunctionComponent<IChatMessagesProps> = (props) => {
  const { text, uid } = props.message;
  return <div>{text}</div>;
};

export default ChatMessages;
