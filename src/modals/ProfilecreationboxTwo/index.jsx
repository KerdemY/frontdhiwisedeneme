import React from "react";
import { default as ModalProvider } from "react-modal";

import { useNavigate } from "react-router-dom";

import { Text } from "components";

const ProfilecreationboxTwoModal = (props) => {
  const navigate = useNavigate();

  return (
    <ModalProvider
      appElement={document.getElementById("root")}
      className="m-auto !w-[63%]"
      overlayClassName="bg-gray_900_4c fixed flex h-full inset-y-[0] w-full"
      {...props}
    >
      <div className="max-h-[97vh] overflow-y-auto sm:w-full md:w-full">
        <div className="bg-gray_900 border-4 border-blue_gray_100 border-solid flex flex-col items-start justify-end max-w-[939px] mx-auto p-[55px] md:px-5 w-full">
          <div className="flex flex-col gap-[50px] justify-start md:ml-[0] ml-[22px] mt-[30px] w-[90%] md:w-full">
            <Text
              className="md:ml-[0] ml-[161px] text-center text-white_A700 w-auto"
              as="h4"
              variant="h4"
            >
              So, what are you looking for?
            </Text>
            <div className="flex flex-col items-start justify-start w-full">
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                <div className="flex md:flex-1 flex-col gap-1.5 items-start justify-start w-[42%] md:w-full">
                  <Text
                    className="font-bold text-center text-white_A700 w-auto"
                    variant="body2"
                  >
                    Sexual orientation:
                  </Text>
                  <div className="h-[73px] ml-0.5 md:ml-[0] relative w-full">
                    <div className="absolute bg-gray_900 border-2 border-blue_gray_100_01 border-solid h-[72px] inset-[0] justify-center m-auto w-full"></div>
                    <Text
                      className="absolute font-extrabold h-full inset-[0] justify-center m-auto text-left text-white_A700_66 w-[96%] sm:w-full"
                      variant="body1"
                    >
                      Select one (dropdown list hetero gay bi yapsak yeter)
                    </Text>
                  </div>
                </div>
                <div className="flex md:flex-1 flex-col items-start justify-start w-auto md:w-full">
                  <Text
                    className="font-bold text-center text-white_A700 w-auto"
                    variant="body2"
                  >
                    What is your purpose here?
                  </Text>
                  <Text
                    className="bg-gray_900 border-2 border-blue_gray_100_01 border-solid font-extrabold h-[72px] mt-[3px] pb-4 pl-[7px] sm:pr-5 pr-[35px] pt-[21px] text-left text-white_A700_66 w-[304px]"
                    variant="body1"
                  >
                    Select one (drop list)
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start mt-14 w-auto md:w-full">
                <Text
                  className="font-bold text-center text-white_A700 w-auto"
                  variant="body2"
                >
                  Which city are you in?
                </Text>
                <Text
                  className="bg-gray_900 border-2 border-blue_gray_100_01 border-solid font-extrabold h-[72px] mt-[3px] pb-4 pl-[7px] sm:pr-5 pr-[35px] pt-[21px] text-left text-white_A700_66 w-[304px]"
                  variant="body1"
                >
                  Select one (drop list)
                </Text>
              </div>
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between ml-0.5 md:ml-[0] mt-[54px] w-full">
                <div className="flex md:flex-1 flex-col gap-1.5 items-start justify-start w-auto md:w-full">
                  <Text
                    className="font-bold text-center text-white_A700 w-auto"
                    variant="body2"
                  >
                    Universities of disinterest:
                  </Text>
                  <Text
                    className="bg-gray_900 border-2 border-blue_gray_100_01 border-solid font-extrabold h-[72px] pl-[7px] sm:pr-5 pr-[35px] py-[18px] text-left text-white_A700_66 w-[304px]"
                    variant="body1"
                  >
                    Universities
                  </Text>
                </div>
                <div className="flex md:flex-1 flex-col items-center justify-start w-auto md:w-full">
                  <Text
                    className="font-bold text-center text-white_A700 w-auto"
                    variant="body2"
                  >
                    Departments of disinterest:
                  </Text>
                  <Text
                    className="bg-gray_900 border-2 border-blue_gray_100_01 border-solid font-extrabold h-[72px] mt-1 pb-4 pl-[7px] sm:pr-5 pr-[35px] pt-[21px] text-left text-white_A700_66 w-[304px]"
                    variant="body1"
                  >
                    Departments
                  </Text>
                </div>
              </div>
              <div
                className="common-pointer bg-cover bg-no-repeat flex flex-col h-[82px] items-center justify-end md:ml-[0] ml-[123px] mt-[77px] p-5 rounded-[41px] w-auto md:w-full"
                style={{ backgroundImage: "url('images/img_loginbutton.svg')" }}
                onClick={() => navigate("/profilecreationboxthree")}
              >
                <Text
                  className="text-center text-gray_900 w-auto"
                  as="h6"
                  variant="h6"
                >
                  Continue
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ModalProvider>
  );
};

export default ProfilecreationboxTwoModal;
