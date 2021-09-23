import React from "react";
import { AuthForm } from "../components";
import { FaLeaf } from "react-icons/fa";

const Login = (): React.ReactElement => {
  return (
    <div className="bg-brand-secondary ">
      <div className="flex flex-col items-center justify-center max-w-sm min-h-screen m-auto ">
        <div className="flex">
          <FaLeaf className="mt-2 mr-2 text-green-500" size={40} />
          <h1 className="mb-16 text-5xl font-bold text-center text-transparent cursor-default bg-clip-text bg-gradient-to-r from-green-500 to-brand-primary">
            Task.
          </h1>
        </div>
        <AuthForm />
      </div>
    </div>
  );
};

export default Login;
