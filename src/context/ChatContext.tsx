import React, { createContext, useState, useContext } from "react";
import { IChatMessagesProps } from "../interface/chatMessages";

interface IChatContext {
  conv: Array<IChatMessagesProps>;
  setConv: React.Dispatch<React.SetStateAction<Array<IChatMessagesProps>>>;
}

export const ChatContext = createContext<IChatContext | undefined>(undefined);

export const useChat = () => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error("useChat must be used within a ChatProvider");
  }
  return context;
};

export const ChatProvider: React.FC<any> = ({ children }) => {
  const [conv, setConv] = useState<Array<IChatMessagesProps>>([]);

  return (
    <ChatContext.Provider value={{ conv, setConv }}>
      {children}
    </ChatContext.Provider>
  );
};
