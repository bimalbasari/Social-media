import { useState } from "react";
import Login from "./Login";
import Signup from "./SignUp";

const Resister = () => {
  const [account, setAccount] = useState(true);
  return (
    <>
      {account ? (
        <Login setAccount={setAccount} />
      ) : (
        <Signup setAccount={setAccount} />
      )}
    </>
  );
};

export default Resister;
