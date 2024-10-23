import React, { useState } from "react";
import { Helmet } from "react-helmet";
import ContentWrapper from "../../components/ContentWrapper/ContentWrapper";
import LoginUser from "../../assets/working.png";
import Loader from "../../components/Loader/Loader";
import { adminLogin } from "../../api/admin.api";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [inputValues, setInputValues] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleInputChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const loginAdmin = async () => {
    try {
      if (!inputValues.email && !inputValues.password) {
        return alert("Input Fields are required");
      }
      setLoading(true);
      const response = await adminLogin(inputValues);
      if (response.data.statusCode >= 400) {
        setLoading(false);
        alert(response.data.message);
      } else {
        setLoading(false);
        Cookies.set("_adm_2v", JSON.stringify(response.data.data), {
          expires: 8 / 24,
          secure: true,
        });
        navigate("/createProject");
      }
    } catch (error) {
      setLoading(false);
    }
  };
  return (
    <div>
      <Helmet>
        <title>Login | Shumail</title>
      </Helmet>
      <ContentWrapper className={"bg-slate-600"}>
        <div className="min-h-screen flex justify-center items-center">
          <div className="border border-black md:py-10 rounded-[4px] w-5/6 sm:w-3/4 shadow-lg">
            <div className="w-full h-32 relative flex justify-center">
              <img
                src={LoginUser}
                alt="user login"
                loading="lazy"
                className="absolute w-36 h-full"
              />
            </div>
            <ContentWrapper className={"p-2 text-sm"}>
              <div className="pb-1 font-medium">
                <p className="text-slate-200">Email</p>
              </div>
              <input
                type="email"
                name="email"
                className="border border-gray-800 bg-transparent text-slate-300 outline-none py-1 px-2 font-medium w-full"
                required
                value={inputValues.email}
                onChange={(event) => handleInputChange(event)}
              />

              <div className="pb-1 font-medium mt-5">
                <p className="text-slate-200">Password</p>
              </div>
              <input
                type="password"
                name="password"
                className="border border-gray-800 bg-transparent text-slate-300 outline-none py-1 px-2 font-medium w-full"
                required
                value={inputValues.password}
                onChange={(event) => handleInputChange(event)}
              />

              <div className="pb-1 font-medium mt-5">
                <button
                  className={
                    loading
                      ? "w-full outline-none"
                      : "w-full bg-logoBgColor p-2 text-white outline-none"
                  }
                  onClick={loginAdmin}
                >
                  {loading ? (
                    <Loader className={"border border-white w-5 h-5"} />
                  ) : (
                    "Login"
                  )}
                </button>
              </div>
            </ContentWrapper>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default Login;
