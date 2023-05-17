import React, { useState } from "react";
import Modal from "react-modal";
import { Text } from "components";

const RegisterboxModal = ({ onRequestClose, ...props }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);

    const emailParts = e.target.value.split('@');

    if (emailParts.length === 2 && emailParts[1].includes('stu') && emailParts[1].endsWith('edu.tr')) {
      setEmailError(null);
    } else {
      setEmailError("Please enter a valid university e-mail.");
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);

    if (e.target.value.length < 8) {
      setPasswordError("Password must be at least 8 characters long.");
    } else {
      setPasswordError(null);
    }
  };

  const handleSubmit = () => {
    if (!emailError && !passwordError && email && password) {
      // Handle form submission logic here (e.g., send data to server)
      setSubmitSuccess(true);
    }
  };

  return (
    <Modal
      isOpen={props.isOpen}
      onRequestClose={onRequestClose}
      appElement={document.getElementById("root")}
      className="m-auto !w-[35%]"
      overlayClassName="bg-gray_900_4c fixed flex h-full inset-y-[0] w-full"
      {...props}
    >
      <div className="max-h-[97vh] overflow-y-auto sm:w-full md:w-full">
        <div className="bg-gray_900 border-4 border-blue_gray_100 border-solid flex flex-col items-center justify-center p-[53px] md:px-5 w-full">
          <div className="h-[65px] mt-[134px] relative w-[68%]">
            <Text
              className="mb-[-8.23px] mx-auto text-center text-white_A700 w-auto z-[1]"
              as="h5"
              variant="h5"
            >
              New user?
            </Text>
            <Text
              className="mt-auto mx-auto text-center text-white_A700 w-auto"
              variant="body3"
            >
              Start with your university e-mail.
            </Text>
          </div>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            className="bg-gray_900 border-2 border-blue_gray_100_01 border-solid h-12 mt-2.5 pb-[5px] pl-1.5 sm:pr-5 pr-[35px] pt-2 text-left text-white_A700_66 w-[420px]"
            placeholder="mail@stu.uni.edu"
          />
          {emailError && (
            <div className="mt-2 text-red-500">
              {emailError}
            </div>
          )}
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            className="bg-gray_900 border-2 border-blue_gray_100_01 border-solid h-12 mt-2.5 pb-[5px] pl-1.5 sm:pr-5 pr-[35px] pt-2 text-left text-white_A700_66 w-[420px]"
            placeholder="Password"
          />
          {passwordError && (
            <div className="mt-2 text-red-500">
              {passwordError}
            </div>
          )}
          <div
            className="bg-cover bg-no-repeat flex flex-col h-[54px] items-center justify-end mb-[123px] mt-[13px] p-1.5 rounded-[27px] w-auto md:w-full cursor-pointer"
            style={{ backgroundImage: "url('images/img_loginbutton.svg')" }}
            onClick={handleSubmit}
          >
            <Text className="text-center text-gray_900 w-auto" variant="body1">
              Create Account
            </Text>
          </div>
          {submitSuccess && (
            <div className="mt-2 text-green-500">
              Account created successfully!
            </div>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default RegisterboxModal;
