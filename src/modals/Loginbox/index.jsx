import React, { useState } from "react";
import { default as ModalProvider } from "react-modal";

import { useNavigate } from "react-router-dom";

import { Text } from "components";

const LoginboxModal = (props) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Replace with your server-side API endpoint
    const apiUrl = "https://your-api-endpoint.com/login";

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        // Perform necessary actions with the returned data
        navigate("/mainpagematchtab");
      } else {
        const errorData = await response.json();
        // Update the error message with server response
        setErrorMessage(errorData.message || "An error occurred.");
      }
    } catch (error) {
      setErrorMessage("An error occurred while processing your request.");
    }
  };

  return (
    <ModalProvider
      appElement={document.getElementById("root")}
      className="m-auto !w-[35%]"
      overlayClassName="bg-gray_900_4c fixed flex h-full inset-y-[0] w-full"
      {...props}
    >
      <div className="max-h-[97vh] overflow-y-auto sm:w-full md:w-full">
        <div className="bg-gray_900 border-4 border-blue_gray_100 border-solid flex flex-col items-center justify-center p-[53px] md:px-5 w-full">
          <Text
            className="mt-[106px] text-center text-white_A700 w-auto"
            as="h5"
            variant="h5"
          >
            Already an user?
          </Text>
          <Text className="text-center text-white_A700 w-auto" variant="body3">
            Welcome back!
          </Text>
          <form onSubmit={handleSubmit} className="flex flex-col gap-[11px] items-center justify-start mb-[93px] mt-3 w-full">
            <input
              type="email"
              placeholder="Mail address"
              value={email}
              onChange={handleEmailChange}
              className="bg-gray_900 border-2 border-blue_gray_100_01 border-solid h-12 pl-[5px] sm:pr-5 pr-[35px] py-1.5 text-left text-white_A700_66 w-[420px]"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
              className="bg-gray_900 border-2 border-blue_gray_100_01 border-solid h-12 pl-[5px] sm:pr-5 pr-[35px] py-1.5 text-left text-white_A700_66 w-[420px]"
            />
            <button
              type="submit"
              className="common-pointer bg-cover bg-no-repeat flex flex-col h-[58px] items-center justify-end p-[5px] rounded-[29px] w-auto md:w-full"
              style={{ backgroundImage: "url('images/img_loginbutton.svg')" }}
            >
              <Text
                className="mt-1.5 text-center text-gray_900 w-auto"
                variant="body1"
              >
                Log in
              </Text>
            </button>
            {errorMessage && (
              <div className="mt-4 p-2 text-red-600 bg-red-100 rounded-md">
                {errorMessage}
              </div>
            )}
          </form>
        </div>
      </div>
    </ModalProvider>
  );
};

export default LoginboxModal;
