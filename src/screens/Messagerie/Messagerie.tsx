import React, { useEffect, useState } from "react";
import MainContentPage from "../../components/MainContent";
import {
  collection,
  query,
  orderBy,
  limit,
  getDocs,
  where,
} from "firebase/firestore";
import { auth, firestore } from "../../auth/firebaseConfig"; // Adjust based on your project structure
import Conversation from "./Conversation";
import { IChatMessagesProps } from "../../interface/chatMessages";
import CardChat from "./components/CardChat";
import { ChatProvider, useChat } from "../../context/ChatContext";

export interface IMessagerieProps {
  conv: Array<string>;
}

const Messagerie: React.FunctionComponent<IMessagerieProps> = (props) => {
  const { conv, setConv } = useChat();
  const [messages, setMessages] = useState<Array<string>>();
  const [error, setError] = useState<any>();
  const [fm, setFm] = useState<Array<IChatMessagesProps>>([]);

  useEffect(() => {
    props.conv.forEach((mes) => {
      setFm((oldArray) => [...oldArray, getConv(mes)]);
    });
  }, []);
  const getFm = async();
  const getConv = async (mid: string | undefined) => {
    const convRef = collection(firestore, "messages");
    const convQuery = query(
      convRef,
      orderBy("createdAt"),
      limit(25),
      where("mid", "==", mid)
    );
    const res = await getDocs(convQuery);
    const a: Array<IChatMessagesProps | undefined> = [];
    res.forEach((doc) => {
      const { createdAt, mid, sid, uid, text } = doc.data();
      a.push({ createdAt, mid, sid, uid, text });
    });
    setConv(a as Array<IChatMessagesProps>);
  };

  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <ChatProvider>
        <MainContentPage>
          <div className="flex row mt-9">
            <div className="w-1/3 flex flex-col gap-1">
              {messages?.map((element) => {
                return <CardChat message={element} />;
              })}
            </div>
            <div className="w-2/3 h-full">
              {conv && <Conversation conv={conv} />}
            </div>
          </div>
        </MainContentPage>
      </ChatProvider>
    </div>
  );
};

export default Messagerie;
