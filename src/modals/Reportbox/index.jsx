import React from "react";
import { default as ModalProvider } from "react-modal";

import { Img, Text } from "components";

const ReportboxModal = (props) => {
  return (
    <ModalProvider
      appElement={document.getElementById("root")}
      className="m-auto !w-[48%]"
      overlayClassName="bg-gray_900_4c fixed flex h-full inset-y-[0] w-full"
      {...props}
    >
      <div className="max-h-[97vh] overflow-y-auto sm:w-full md:w-full">
        <div className="bg-gray_900 border-4 border-blue_gray_100 border-solid flex flex-col gap-1.5 items-center justify-end p-[43px] md:px-5 w-full">
          <Text
            className="mt-5 text-center text-white_A700 w-auto"
            as="h4"
            variant="h4"
          >
            Report this user
          </Text>
          <div className="flex flex-col items-center justify-start w-[91%] md:w-full">
            <div className="flex flex-col items-start justify-start w-full">
              <Text
                className="font-medium ml-0.5 md:ml-[0] text-left text-white_A700 w-auto"
                variant="body2"
              >
                What is your report reason?
              </Text>
              <Text
                className="bg-gray_900 border-2 border-blue_gray_100_01 border-solid font-extrabold h-[59px] pl-[5px] sm:pr-5 pr-[35px] py-3 text-left text-white_A700_66 w-[569px]"
                variant="body1"
              >
                {" "}
                Select one
              </Text>
            </div>
            <div className="flex flex-col items-start justify-start mt-5 w-full">
              <Text
                className="font-medium ml-0.5 md:ml-[0] text-left text-white_A700 w-auto"
                variant="body2"
              >
                Give more info here (you can also add screenshots):
              </Text>
              <div className="bg-gray_900 border-2 border-blue_gray_100_01 border-solid flex flex-col md:gap-10 gap-[197px] items-start justify-start p-[7px] w-full">
                <Text
                  className="font-extrabold ml-0.5 md:ml-[0] text-left text-white_A700_66 w-auto"
                  variant="body1"
                >
                  Type here...
                </Text>
                <Img
                  src="images/img_settings_blue_gray_100_01.svg"
                  className="h-[45px] mb-1 md:ml-[0] ml-[3px] w-[45px]"
                  alt="settings"
                />
              </div>
            </div>
            <div
              className="bg-cover bg-no-repeat flex flex-col h-[67px] items-center justify-end mt-4 p-2.5 rounded-[33px] w-auto md:w-full"
              style={{ backgroundImage: "url('images/img_loginbutton.svg')" }}
            >
              <Text
                className="mt-1 text-center text-gray_900 w-auto"
                as="h6"
                variant="h6"
              >
                Send Report
              </Text>
            </div>
          </div>
        </div>
      </div>
    </ModalProvider>
  );
};

export default ReportboxModal;
