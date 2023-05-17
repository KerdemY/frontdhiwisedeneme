import React from "react";

import { Text } from "components";
import Sidebar from "components/Sidebar";

const ProfiletabPage = () => {
  return (
    <>
      <div className="bg-gray_900 flex flex-col font-ggsans items-start justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between max-w-[1383px] mx-auto md:px-5 w-full">
          <Sidebar className="flex flex-col md:hidden justify-start w-[361px]" />
          <div className="flex flex-1 flex-col md:gap-10 gap-[116px] justify-start md:mt-0 mt-[228px] w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-col gap-1.5 items-start justify-start w-full">
                <div className="flex flex-col gap-[19px] items-center justify-start w-full">
                  <div className="flex md:flex-col flex-row md:gap-[52px] items-start justify-between w-[99%] md:w-full">
                    <div className="flex flex-col items-center justify-start w-[69%] md:w-full">
                      <div className="flex sm:flex-col flex-row gap-[25px] items-center justify-between w-full">
                        <div className="bg-blue_gray_100_01 h-[195px] rounded-[97px] w-[195px]"></div>
                        <div className="flex sm:flex-1 flex-col items-center justify-start w-auto sm:w-full">
                          <Text
                            className="text-blue_gray_100_01 text-left w-auto"
                            as="h1"
                            variant="h1"
                          >
                            Kemal, 20
                          </Text>
                          <Text
                            className="font-medium text-blue_gray_100_01 text-left w-auto"
                            as="h5"
                            variant="h5"
                          >
                            Kadir Has, CS
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-[66px] items-center justify-start md:mt-0 mt-[72px] p-[15px] rounded-[33px] w-auto md:w-full"
                      style={{
                        backgroundImage: "url('images/img_loginbutton.svg')",
                      }}
                    >
                      <Text
                        className="font-bold text-center text-gray_900 w-auto"
                        variant="body1"
                      >
                        Edit Profile
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start w-full">
                    <Text
                      className="font-bold text-blue_gray_100_01 text-left w-auto"
                      as="h5"
                      variant="h5"
                    >
                      About me:
                    </Text>
                    <Text
                      className="font-medium text-blue_gray_100_01 text-left w-full"
                      as="h5"
                      variant="h5"
                    >
                      Ben çok ilginç biriyim. Hadi keşfedelim.{" "}
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col gap-[5px] items-start justify-start w-auto md:w-full">
                  <Text
                    className="font-bold text-blue_gray_100_01 text-left w-auto"
                    as="h5"
                    variant="h5"
                  >
                    Interests:
                  </Text>
                  <Text
                    className="font-medium text-blue_gray_100_01 text-left w-auto"
                    as="h5"
                    variant="h5"
                  >
                    gezmek, herhangi bir hobi, spor
                  </Text>
                </div>
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfiletabPage;
