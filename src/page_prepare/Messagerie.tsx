import React, { useEffect, useState } from "react";
import MainContentPage from "./components/MainContent";
import {
  collection,
  query,
  orderBy,
  limit,
  getDocs,
  where,
} from "firebase/firestore";
import { auth, firestore } from "../auth/firebaseConfig"; // Adjust based on your project structure
import ChatMessages from "../components/ChatMessages";


export interface IMessageriePageProps {}

const MessageriePage: React.FunctionComponent<IMessageriePageProps> = (
  props
) => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>();

  useEffect(() => {
    const messagesRef = collection(firestore, "messages");
    const messagesQuery = query(
      messagesRef,
      orderBy("createdAt"),
      limit(25),
      where("uid", "==", auth.currentUser?.uid)
    );
    console.log(auth.currentUser?.uid);

    getDocs(messagesQuery)
      .then((snapshot) => {
        const msgs = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log(msgs);

        setMessages(msgs as any);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <MainContentPage>
        {messages.map((msg: any) => (
          <ChatMessages key={msg.id} message={msg} />
        ))}
      </MainContentPage>
    </div>
  );
};

export default MessageriePage;
