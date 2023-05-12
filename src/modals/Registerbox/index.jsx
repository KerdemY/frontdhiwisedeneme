import React from "react";
import { default as ModalProvider } from "react-modal";

import { Text } from "components";

const RegisterboxModal = (props) => {
  return (
    <ModalProvider
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
          <Text
            className="bg-gray_900 border-2 border-blue_gray_100_01 border-solid h-12 mt-2.5 pb-[5px] pl-1.5 sm:pr-5 pr-[35px] pt-2 text-left text-white_A700_66 w-[420px]"
            variant="body2"
          >
            {" "}
            mail@stu.uni.edu
          </Text>
          <div
            className="bg-cover bg-no-repeat flex flex-col h-[54px] items-center justify-end mb-[123px] mt-[13px] p-1.5 rounded-[27px] w-auto md:w-full"
            style={{ backgroundImage: "url('images/img_loginbutton.svg')" }}
          >
            <Text className="text-center text-gray_900 w-auto" variant="body1">
              Create Account
            </Text>
          </div>
        </div>
      </div>
    </ModalProvider>
  );
};

export default RegisterboxModal;
