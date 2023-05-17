import React from "react";

import { useNavigate } from "react-router-dom";

import { Img, Text } from "components";

const Sidebar = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <aside className={props.className}>
        <div className="flex flex-col md:gap-10 gap-[257px] justify-start mb-[18px] ml-[26px] mr-[19px] mt-[7px] w-[88%]">
          <div className="flex flex-col items-start justify-start mr-4 w-[95%] md:w-full">
            <div className="flex flex-col items-start justify-center ml-1 md:ml-[0] self-stretch w-auto">
              <Img
                src="images/img_unionlogo11.png"
                className="h-[109px] md:h-auto object-cover w-[295px]"
                alt="unionlogoEleven"
              />
            </div>
            <div className="flex flex-row gap-[11px] items-center justify-start ml-1.5 md:ml-[0] mt-[119px] w-[64%] md:w-full">
              <Img
                src="images/img_user.svg"
                className="h-[65px] w-[65px]"
                alt="user"
              />
              <Text
                className="font-ggsans text-blue_gray_100 text-left w-auto"
                as="h3"
                variant="h3"
              >
                Profile
              </Text>
            </div>
            <div
              className="common-pointer flex flex-row gap-[11px] items-center justify-start ml-1.5 md:ml-[0] mt-[55px] w-3/5 md:w-full"
              onClick={() => navigate("/mainpagematchtab")}
            >
              <Img
                src="images/img_icon.svg"
                className="h-[65px] w-[65px]"
                alt="icon"
              />
              <Text
                className="font-ggsans text-blue_gray_100 text-left w-auto"
                as="h3"
                variant="h3"
              >
                Home
              </Text>
            </div>
            <div
              className="common-pointer flex flex-row gap-[11px] items-center justify-start mt-[55px] w-[76%] md:w-full"
              onClick={() => navigate("/chattab")}
            >
              <Img
                src="images/img_car.svg"
                className="h-[65px] w-[65px]"
                alt="car"
              />
              <Text
                className="font-ggsans text-blue_gray_100 text-left w-auto"
                as="h3"
                variant="h3"
              >
                Matches
              </Text>
            </div>
            <div className="flex flex-row gap-[11px] items-end justify-start mt-[55px] w-[65%] md:w-full">
              <Img
                src="images/img_calendar.svg"
                className="h-[65px] w-[65px]"
                alt="calendar"
              />
              <Text
                className="font-ggsans mt-[9px] text-blue_gray_100 text-left w-auto"
                as="h3"
                variant="h3"
              >
                Events
              </Text>
            </div>
          </div>
          <Img
            src="images/img_settings.svg"
            className="h-[47px] md:ml-[0] ml-[266px] w-auto"
            alt="settings"
          />
        </div>
      </aside>
    </>
  );
};

Sidebar.defaultProps = {};

export default Sidebar;
