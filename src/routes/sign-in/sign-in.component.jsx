import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    // console.log(user);

    const userDocRef = await createUserDocumentFromAuth(user);
  };
  return (
    <div>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
      <h1>Sign in Page</h1>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
