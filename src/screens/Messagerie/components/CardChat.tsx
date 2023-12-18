import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { firestore } from "../../../auth/firebaseConfig";
import { Iusers } from "../../../interface/users";
import { IChat } from "../../../components/ChatMessages";
import { IChatMessagesProps } from "../../../interface/chatMessages";

const CardChat: React.FunctionComponent<IChat> = (props) => {
  const [sName, setSName] = useState<string>();
  useEffect(() => {
    const getSchoolName = async () => {
      const schoolName = doc(firestore, "users", props.message.sid);
      const schoolNameSnap = await getDoc(schoolName);

      if (schoolNameSnap) {
        const data: Iusers = schoolNameSnap.data() as Iusers;
        setSName(data.nom);
      }
    };

    getSchoolName();
  }, []);
  const handleClick = async () => {
    const convRef = collection(firestore, "messages");
    const convQuery = query(convRef, where("mid", "==", props.message.mid));
    const convSnap = await getDocs(convQuery);
    let messages: IChatMessagesProps[] = [];
    if (convSnap) {
      convSnap.forEach((snap) => {
        const data = snap.data() as IChatMessagesProps;
        messages.push(data);
      });
    }
  };
  return (
    <>
      <button
        className="w-[236px] h-20 px-3 py-[30px] bg-dark-blue shadow justify-center items-center gap-2.5 inline-flex"
        // onClick={(e) => getConv(props.nom)}
      >
        <div className="text-white text-[27px] font-bold font-['Marianne'] leading-tight">
          {sName}
        </div>
      </button>
    </>
  );
};

export default CardChat;
