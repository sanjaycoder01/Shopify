import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { BG_URL } from "./utils/constants";
import { checkValidData } from "./utils/validate";
// import { Link } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "./utils/firebase";
import { USER_AVATAR } from "./utils/constants";
import { useDispatch } from "react-redux";
import { addUser } from "./utils/userslice";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [up, setUp] = useState(true);
  const dispatch = useDispatch();
  const [errormessage, seterrormessage] = useState(null);
  const email1 = useRef(null);
  const password1 = useRef(null);
  const handleButtonClick = () => {
    // Handle button click logic here
    checkValidData(email, password);
    // console.log(email1.current.value);
    // console.log(password1);
    const message = checkValidData(
      email1.current.value,
      password1.current.value
    );
    console.log(message);
    seterrormessage(message);
    if (message) return;
    //sign in sign up logic
    if (!up) {
      createUserWithEmailAndPassword(
        auth,
        email1.current.value, // Access value through email1.current
        password1.current.value // Access value through password1.current
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name,
            photoURL: USER_AVATAR,
          })
            .then((userCredential) => {
              const user = userCredential;
              console.log(user);
            })
            .catch((error) => {
              seterrormessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errormessage = error.message;
          seterrormessage(errorCode + " " + errormessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email1.current.value,
        password1.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errormessage = error.message;
          seterrormessage(errorCode + " " + errormessage);
        });
    }
  };

  const toggle = () => {
    setUp(!up);
  };

  return (
    <div className=" flex items-center bg-cover bg-center bg-neutral-950 bg-fixed max-w-screen-2xl">
      <div className="bg-gradient-to-l hover:bg-gradient-to-r mx-[500px] my-[140px]">
        <div className="w-full max-w-sm bg-black px-16 xs:px-12 sm:py-10 py-12 bg-opacity-10 rounded">
          <h1 className="text-3xl text-white font-medium mb-8 xs:mb-6">
            {up ? "Sign In" : "Sign Up"}
          </h1>
          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col">
            {!up ? (
              <input
                value={name}
                type="text"
                placeholder="Full Name"
                className="mb-8 px-4 py-3 rounded validationform"
                onChange={(e) => setName(e.target.value)}
              />
            ) : (
              ""
            )}

            <input
              ref={email1}
              value={email}
              type="text"
              placeholder="Email Address"
              className="mb-8 px-4 py-3 rounded focus:outline-none"
              onChange={(e) => setEmail(e.target.value)}
            />
            <p className=" text-red-500 font-bold text-lg py-2">
              {errormessage}
            </p>
            <input
              ref={password1}
              value={password}
              type="password"
              placeholder="Password"
              className="mb-8 px-4 py-3 rounded focus:outline-none -mt-3"
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              onClick={handleButtonClick}
              className=" bg-red-600 text-white px-4 py-3 rounded font-medium text-base"
            >
              <Link to="/"> {up ? "Sign In" : "Sign Up"}</Link>
            </button>
          </form>
          <h2 className="text-white my-4 cursor-pointer" onClick={toggle}>
            {up ? "New to Shopify? SignUp Here" : "Already Registered? Sign In"}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Login;
