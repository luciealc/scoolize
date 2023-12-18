import React from "react";
import { IChatMessagesProps } from "../../interface/chatMessages";

export interface IConversationProps {
  conv: Array<IChatMessagesProps>;
}

const Conversation: React.FunctionComponent<IConversationProps> = (props) => {
  return <></>;
};

export default Conversation;
