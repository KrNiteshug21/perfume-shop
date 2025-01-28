import React, { useState } from "react";
import { Link } from "react-router";
import { uri } from "../../api/service";
import SectionWrapper from "../Wrapper/SectionWrapper";
import SuccessModal from "../Wrapper/SuccessModal";
import { Eye, EyeOff } from "lucide-react";

const initModelObj = {
  header: "",
  msg: "",
  trigger: false,
};

const initUSer = {
  username: "",
  email: "",
  password: "",
};

const Register = () => {
  const [user, setUser] = useState(initUSer);
  const [showPwd, setShowPwd] = useState(false);
  const [modelObj, setModelObj] = useState(initModelObj);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      };
      const data = await fetch(`${uri}/auth/register`, options);
      const response = await data.json();
      console.log("response", response);
    } catch (error) {
      console.log(error.messsage);
      setModelObj({
        header: "Error",
        msg: error.message,
        trigger: true,
      });
    }
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  return (
    <>
      <SuccessModal
        modalObj={modelObj}
        clickFunction={() => setModelObj(initModelObj)}
      />
      <SectionWrapper>
        <div className="place-items-center grid min-h-[90vh] tracking-wide">
          <form
            onSubmit={handleSubmit}
            className="space-y-4 border-1 border-primary dark:border-gray-300 p-8 rounded-md w-96"
          >
            <h1 className="mb-8 text-4xl text-center tracking-wider">
              Register
            </h1>
            <div>
              <label className="hidden" htmlFor="username">
                Name
              </label>
              <input
                className="border-1 border-gray-400 p-2 rounded w-full outline-none"
                value={user.username}
                onChange={handleChange}
                type="text"
                id="username"
                placeholder="username..."
                name="username"
                required
              />
            </div>
            <div>
              <label className="hidden" htmlFor="email">
                Email
              </label>
              <input
                className="border-1 border-gray-400 p-2 rounded w-full outline-none"
                value={user.email}
                onChange={handleChange}
                type="email"
                id="email"
                placeholder="email..."
                name="email"
                required
              />
            </div>
            <div className="relative">
              <label className="hidden" htmlFor="password">
                Password
              </label>
              <input
                className="border-1 border-gray-400 p-2 rounded w-full outline-none"
                value={user.password}
                onChange={handleChange}
                type={showPwd ? "text" : "password"}
                id="password"
                name="password"
                placeholder="password..."
                required
              />
              <div
                onClick={() => setShowPwd(!showPwd)}
                className="top-1/2 right-0 absolute cursor-pointer"
                style={{
                  transform: "translate(-50%, -50%)",
                }}
              >
                {!showPwd ? <Eye size={20} /> : <EyeOff size={20} />}
              </div>
            </div>
            <button
              className="bg-teal-600 px-4 py-2 rounded-md text-lg text-white"
              type="submit"
            >
              Signup
            </button>

            <p className="text-center">or</p>
            <p className="text-center">
              <Link
                to={"/login"}
                className="text-blue-600 text-center hover:underline"
              >
                Click here{" "}
              </Link>
              login to account
            </p>
          </form>
        </div>
      </SectionWrapper>
    </>
  );
};

export default Register;
