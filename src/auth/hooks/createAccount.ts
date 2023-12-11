import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, firestore } from "../firebaseConfig";
import { collection, doc, setDoc } from "firebase/firestore";
const createAccount = async (
  email: string,
  password: string,
  name: string,
  bac: string,
  bornYear: string,
  fname: string,
  adress: string
) => {
  try {
    const userCredential: any = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    // Add a new document in Firestore with the user's UID
    // get user data from the auth trigger
    const userUid = user.uid; // The UID of the user.
    await updateProfile(user, { displayName: name + " " + fname });

    // set account  doc
    const account = {
      useruid: userUid,
      nom: name + " " + fname,
      email: email,
      role: "student",

      bornYear: bornYear,
      adress: adress,
      bac: bac,
    };
    await setDoc(doc(collection(firestore, "users"), userUid), { account });

    console.log("Account created and user document added to Firestore");
    // Additional logic after successful account creation and Firestore document addition
  } catch (error) {
    console.error("Error creating account: ", error);
    // Error handling
  }
};

export default createAccount;
