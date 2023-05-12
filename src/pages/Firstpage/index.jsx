import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";

const FirstpagePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray_900 border border-black_900 border-solid font-ggsans h-[982px] mx-auto relative w-full">
        <div
          className="bg-cover bg-no-repeat flex flex-col h-full items-center justify-end w-full"
          style={{ backgroundImage: "url('images/img_group3.png')" }}
        >
          <div className="bg-gray_900_7f border border-solid border-white_A700_19 flex flex-col gap-[18px] items-center justify-center mt-[641px] p-[25px] md:px-5 rounded-sm w-[53%] md:w-full">
            <Text
              className="mt-1.5 text-center text-white_A700 w-full"
              as="h3"
              variant="h3"
            >
              A place you can find your university crush.
            </Text>
            <Button
              className="common-pointer cursor-pointer font-extrabold leading-[normal] mb-[19px] min-w-[356px] sm:text-[31px] md:text-[33px] text-[35px] text-center text-gray_900 w-auto"
              onClick={() => navigate("/registerbox")}
              shape="CircleBorder37"
              size="sm"
              variant="FillGray100"
            >
              Create Account
            </Button>
          </div>
        </div>
        <header className="absolute bg-gray_900_7f border border-solid border-white_A700_19 flex md:flex-col flex-row md:gap-5 inset-x-[0] items-center justify-center mx-auto md:px-5 rounded-sm top-[0] w-full">
          <div className="flex md:flex-1 flex-row gap-[5px] items-center justify-center mb-2.5 ml-10 md:ml-[0] md:mt-0 mt-[18px] w-[16%] md:w-full">
            <Img
              src="images/img_icon512x512normal2x.png"
              className="h-[70px] md:h-auto object-cover w-[70px]"
              alt="icon512x512norm"
            />
            <Text
              className="text-center text-gray_100 w-auto"
              as="h2"
              variant="h2"
            >
              UniOn
            </Text>
          </div>
          <div className="flex md:flex-1 sm:flex-col flex-row sm:gap-5 items-start justify-center mb-[26px] ml-12 md:ml-[0] md:mt-0 mt-[39px] w-1/4 md:w-full">
            <Text
              className="text-center text-white_A700 w-auto"
              variant="body2"
            >
              About Us
            </Text>
            <Text
              className="sm:ml-[0] ml-[34px] sm:mt-0 mt-[3px] text-center text-white_A700 w-auto"
              variant="body2"
            >
              Support
            </Text>
            <Text
              className="mb-[3px] sm:ml-[0] ml-[31px] text-center text-white_A700 w-auto"
              variant="body2"
            >
              Download
            </Text>
          </div>
          <Img
            src="images/img_minimize.svg"
            className="h-[50px] md:ml-[0] ml-[205px] md:mt-0 my-[26px] w-[50px]"
            alt="minimize"
          />
          <div
            className="common-pointer bg-cover bg-no-repeat flex md:flex-1 flex-col h-[66px] items-center justify-start md:ml-[0] ml-[19px] md:mt-0 my-[18px] p-[9px] rounded-[33px] w-auto md:w-full"
            style={{
              backgroundImage: "url('images/img_topbarcreateaccount.svg')",
            }}
            onClick={() => navigate("/registerbox")}
          >
            <Text
              className="text-center text-white_A700 w-auto"
              as="h5"
              variant="h5"
            >
              Create Account
            </Text>
          </div>
          <div
            className="common-pointer bg-cover bg-no-repeat flex md:flex-1 flex-col h-[66px] items-center justify-end md:ml-[0] ml-[19px] mr-10 md:mt-0 my-[18px] p-1.5 rounded-[33px] w-auto md:w-full"
            style={{ backgroundImage: "url('images/img_loginbutton.svg')" }}
            onClick={() => navigate("/loginbox")}
          >
            <Text
              className="flex p-2 relative text-center text-gray_900 w-auto"
              as="h5"
              variant="h5"
            >
              Log in
            </Text>
          </div>
        </header>
      </div>
    </>
  );
};

export default FirstpagePage;
