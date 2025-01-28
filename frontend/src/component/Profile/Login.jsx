import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import { uri } from "../../api/service";
import SectionWrapper from "../Wrapper/SectionWrapper";
import SuccessModal from "../Wrapper/SuccessModal";
import { Eye, EyeOff } from "lucide-react";

const initModelObj = {
  header: "",
  msg: "",
  trigger: false,
};

const initUser = {
  email: "",
  password: "",
};

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(initUser);
  const [showPwd, setShowPwd] = useState(false);
  const [modelObj, setModelObj] = useState(initModelObj);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password);

    try {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      };
      const data = await fetch(`${uri}/auth/login`, options);

      const response = await data.json();
      console.log("response", response);

      if (response.token) {
        console.log(response.message);
        setModelObj({
          header: "Success",
          msg: "User logged in successfully!",
          trigger: true,
        });
        localStorage.setItem("token", response.token);
        localStorage.setItem("user", JSON.stringify(response.user));
        setTimeout(navigate("/"), 1000);
      } else {
        console.log(response.message);
        setModelObj({
          header: "Error",
          msg: response.message,
          trigger: true,
        });
      }
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
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <>
      <SuccessModal
        modalObj={modelObj}
        clickFunction={() => setModelObj(initModelObj)}
      />
      <SectionWrapper>
        <div className="place-items-center grid min-h-[90vh]">
          <form
            onSubmit={handleSubmit}
            className="space-y-4 border-1 border-primary dark:border-gray-300 p-8 rounded-md w-96"
          >
            <h1 className="mb-8 text-4xl text-center t">Login</h1>
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
                placeholder="Your email..."
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
                placeholder="Your password..."
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
              Login
            </button>

            <p className="text-center">or</p>
            <p className="text-center">
              <Link
                to={"/register"}
                className="text-blue-600 text-center hover:underline"
              >
                Click here{" "}
              </Link>
              to create account
            </p>
          </form>
        </div>
      </SectionWrapper>
    </>
  );
};

export default Login;
