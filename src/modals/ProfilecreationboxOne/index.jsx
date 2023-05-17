import React from "react";
import { default as ModalProvider } from "react-modal";
import { useNavigate } from "react-router-dom";
import { Text } from "components";

const ProfilecreationboxOneModal = (props) => {
  const navigate = useNavigate();

  return (
    <ModalProvider
      isOpen={props.isOpen}
      onRequestClose={props.onRequestClose}
      appElement={document.getElementById("root")}
      className="m-auto !w-[63%]"
      overlayClassName="bg-gray_900_4c fixed flex h-full inset-y-[0] w-full"
    >
      <div className="max-h-[97vh] overflow-y-auto sm:w-full md:w-full">
        <div className="bg-gray_900 border-4 border-blue_gray_100 border-solid flex flex-col items-center justify-end max-w-[939px] mx-auto p-[55px] md:px-5 w-full">
          <div className="flex flex-col items-start justify-start mt-[30px] w-[96%] md:w-full">
            <div className="flex flex-col gap-[51px] items-center justify-start w-full">
              <Text
                className="text-center text-white_A700 w-auto"
                as="h4"
                variant="h4"
              >
                Let’s get to know you!
              </Text>
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                <div className="flex md:flex-1 flex-col gap-[5px] items-start justify-start w-auto md:w-full">
                  <Text
                    className="font-bold text-center text-white_A700 w-auto"
                    variant="body2"
                  >
                    Your name:
                  </Text>
                  <Text
                    className="bg-gray_900 border-2 border-blue_gray_100_01 border-solid font-extrabold h-[72px] md:ml-[0] ml-[3px] pl-[7px] sm:pr-5 pr-[35px] py-[18px] text-left text-white_A700_66 w-[304px]"
                    variant="body1"
                  >
                    Name
                  </Text>
                </div>
                <div className="flex md:flex-1 flex-col items-start justify-start w-auto md:w-full">
                  <Text
                    className="font-bold text-center text-white_A700 w-auto"
                    variant="body2"
                  >
                    Your birthday:
                  </Text>
                  <Text
                    className="bg-gray_900 border-2 border-blue_gray_100_01 border-solid font-extrabold h-[72px] mt-[3px] pb-[17px] pl-[7px] sm:pr-5 pr-[35px] pt-5 text-left text-white_A700_66 w-[304px]"
                    variant="body1"
                  >
                    DD/MM/YYYY
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-1.5 items-start justify-start ml-0.5 md:ml-[0] mt-[54px] w-auto md:w-full">
              <Text
                className="font-bold text-center text-white_A700 w-auto"
                variant="body2"
              >
                Gender:
              </Text>
              <Text
                className="bg-gray_900 border-2 border-blue_gray_100_01 border-solid font-extrabold h-[72px] pb-4 pl-[7px] sm:pr-5 pr-[35px] pt-[21px] text-left text-white_A700_66 w-[304px]"
                variant="body1"
              >
                Select one (drop list)
              </Text>
            </div>
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between md:ml-[0] ml-[3px] mt-14 w-[99%] md:w-full">
              <div className="flex flex-col items-start justify-start w-auto md:w-full">
                <Text
                  className="font-bold text-center text-white_A700 w-auto"
                  variant="body2"
                >
                  Your university:
                </Text>
                <Text
                  className="bg-gray_900 border-2 border-blue_gray_100_01 border-solid font-extrabold h-[72px] mt-[3px] pb-4 pl-[7px] sm:pr-5 pr-[35px] pt-[21px] text-left text-white_A700_66 w-[304px]"
                  variant="body1"
                >
                  University name
                </Text>
              </div>
              <div className="flex flex-col items-start justify-start w-auto md:w-full">
                <Text
                  className="font-bold text-center text-white_A700 w-auto"
                  variant="body2"
                >
                  Your department:
                </Text>
                <Text
                  className="bg-gray_900 border-2 border-blue_gray_100_01 border-solid font-extrabold h-[72px] mt-[3px] pb-4 pl-[7px] sm:pr-5 pr-[35px] pt-[21px] text-left text-white_A700_66 w-[304px]"
                  variant="body1"
                >
                  Department
                </Text>
              </div>
            </div>
            <div
              className="common-pointer bg-cover bg-no-repeat flex flex-col h-[82px] items-center justify-end md:ml-[0] ml-[124px] mt-[77px] p-5 rounded-[41px] w-auto md:w-full"
              style={{ backgroundImage: "url('images/img_loginbutton.svg')" }}
              onClick={() => navigate("/profilecreationboxtwo")}
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
    </ModalProvider>
  );
};

export default ProfilecreationboxOneModal;
