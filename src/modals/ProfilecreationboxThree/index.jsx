import React from "react";
import { default as ModalProvider } from "react-modal";

import { useNavigate } from "react-router-dom";

import { Text } from "components";

const ProfilecreationboxThreeModal = (props) => {
  const navigate = useNavigate();

  return (
    <ModalProvider
      appElement={document.getElementById("root")}
      className="m-auto !w-[63%]"
      overlayClassName="bg-gray_900_4c fixed flex h-full inset-y-[0] w-full"
      {...props}
    >
      <div className="max-h-[97vh] overflow-y-auto sm:w-full md:w-full">
        <div className="bg-gray_900 border-4 border-blue_gray_100 border-solid flex flex-col items-center justify-end max-w-[939px] mx-auto p-[55px] md:px-5 w-full">
          <Text
            className="mt-[30px] text-center text-white_A700 w-auto"
            as="h4"
            variant="h4"
          >
            Lastly, let’s see you!
          </Text>
          <div className="bg-gray_900 border-4 border-blue_gray_100 border-solid flex flex-col items-center justify-center mt-[45px] p-[82px] md:px-10 sm:px-5 w-auto md:w-full">
            <Text
              className="mt-[139px] text-center text-white_A700 w-auto"
              as="h4"
              variant="h4"
            >
              Upload a photo here
            </Text>
            <Text
              className="mb-[107px] text-center text-white_A700 w-auto"
              variant="body4"
            >
              Don’t forget to smile!
            </Text>
          </div>
          <div
            className="common-pointer bg-cover bg-no-repeat flex flex-col h-[82px] items-center justify-end mt-[41px] p-5 rounded-[41px] w-auto md:w-full"
            style={{ backgroundImage: "url('images/img_loginbutton.svg')" }}
            onClick={() => navigate("/mainpagematchtab")}
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
    </ModalProvider>
  );
};

export default ProfilecreationboxThreeModal;
