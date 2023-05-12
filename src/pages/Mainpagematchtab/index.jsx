import React from "react";

import { useNavigate } from "react-router-dom";

import { Img, Text } from "components";

const MainpagematchtabPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray_900 flex sm:flex-col md:flex-col flex-row font-ggsans sm:gap-10 md:gap-10 gap-[295px] items-center mx-auto md:pr-10 sm:pr-5 pr-[242px] w-full">
        <aside className="bg-gray_900_01 flex flex-col md:hidden justify-start md:px-5 w-[361px]">
          <div
            className="common-pointer flex flex-row gap-[5px] items-center justify-center md:ml-[0] ml-[43px] mr-[87px] mt-[23px] w-[64%]"
            onClick={() => navigate("/firstpage")}
          >
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
          <div className="flex flex-col gap-[55px] justify-start mb-[322px] md:ml-[0] ml-[26px] mr-[90px] mt-[137px] w-[68%]">
            <div className="flex flex-col gap-[55px] items-center justify-start ml-1.5 md:ml-[0] w-[79%] md:w-full">
              <div className="flex flex-row gap-[11px] items-center justify-start w-full">
                <Img
                  src="images/img_user.svg"
                  className="h-[65px] w-[65px]"
                  alt="user"
                />
                <Text
                  className="text-blue_gray_100 text-left w-auto"
                  as="h4"
                  variant="h4"
                >
                  Profile
                </Text>
              </div>
              <div className="flex flex-row gap-[11px] items-start justify-start w-[98%] md:w-full">
                <Img
                  src="images/img_icon.svg"
                  className="h-[65px] w-[65px]"
                  alt="icon"
                />
                <Text
                  className="mt-[3px] text-blue_gray_100 text-left w-auto"
                  as="h4"
                  variant="h4"
                >
                  Match
                </Text>
              </div>
            </div>
            <div className="flex flex-col gap-[55px] items-start justify-start w-full">
              <div className="flex flex-row gap-[11px] items-end justify-start w-full">
                <Img
                  src="images/img_car.svg"
                  className="h-[65px] w-[65px]"
                  alt="car"
                />
                <Text
                  className="mt-[9px] text-blue_gray_100 text-left w-auto"
                  as="h4"
                  variant="h4"
                >
                  Messages
                </Text>
              </div>
              <div className="flex flex-row gap-[11px] items-end justify-start w-[79%] md:w-full">
                <Img
                  src="images/img_calendar.svg"
                  className="h-[65px] w-[65px]"
                  alt="calendar"
                />
                <Text
                  className="mt-[9px] text-blue_gray_100 text-left w-auto"
                  as="h4"
                  variant="h4"
                >
                  Events
                </Text>
              </div>
            </div>
          </div>
        </aside>
        <div className="bg-blue_gray_100_01 flex flex-1 flex-col items-center justify-end md:mt-0 my-40 md:px-5 py-[204px] rounded-[66px] w-full">
          <div className="h-[243px] mt-[9px] relative w-full">
            <Text
              className="mb-[-13.08px] mx-auto text-black_900 text-center w-auto z-[1]"
              as="h1"
              variant="h1"
            >
              Start swiping now!
            </Text>
            <Text
              className="mt-auto mx-auto text-black_900 text-center"
              as="h6"
              variant="h6"
            ></Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainpagematchtabPage;
