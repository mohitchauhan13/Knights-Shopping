import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { doc, getFirestore, getDoc, setDoc } from "firebase/firestore";

const {
  REACT_APP_FIREBASE_API_KEY,
  REACT_APP_FIREBASE_AUTH_DOMAIN,
  REACT_APP_FIREBASE_PROJECT_ID,
  REACT_APP_FIREBASE_STORAGE_BUCKET,
  REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  REACT_APP_FIREBASE_APP_ID,
} = process.env;

const firebaseConfig = {
  apiKey: REACT_APP_FIREBASE_API_KEY,
  authDomain: REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: REACT_APP_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);

/** To add Google Sign In Option :
 * 1. Create a provider instance of GoogleAuthProvider class
 * 2. Set custom parameters to configure goggle auth provider
 * 3. Create an instance of auth using getAuth method.
 * 4. Use a sign-in method using signInWithPopup or signInWithRedirect methods passing in the auth and provider instances.
 * 5. Now go to authentication tab -> sign-in method -> choose google as provider -> click the enable button and select a support email
 * ALL DONE!
 */

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account", // prompt user to select a account
});

const auth = getAuth();
const authenticateWithGoogle = () => signInWithPopup(auth, provider);

/** Configure firestore database :
 *  1. Create an instance of the firestore database
 *  2. Add a method to create users in the firestore db when they sign-up on the app
 *
 *
 *  Go to Firestore in tab -> create database -> select region -> DB CREATED!
 *  Now navigate to rules tab and set read and write permission to true if false.
 */

const db = getFirestore();

const createUserInDB = async (userAuth) => {
  if (!userAuth) return;
  const userDocRef = doc(db, "users", userAuth.uid);

  console.log("---doc ref", userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log("---userSnapshot", userSnapshot);

  if (!userSnapshot.exists()) {
    const { displayName, email, photoURL } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        photoURL,
        createdAt,
      });
    } catch (error) {
      throw new Error("Unable to create User, Please try again later");
    }
  }

  return userDocRef;
};

const authenticateWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

const SignInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

const signOutUser = async () => await signOut(auth);

const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);

export {
  auth,
  authenticateWithGoogle,
  db,
  createUserInDB,
  authenticateWithEmailAndPassword,
  SignInAuthUserWithEmailAndPassword,
  signOutUser,
  onAuthStateChangedListener,
};
