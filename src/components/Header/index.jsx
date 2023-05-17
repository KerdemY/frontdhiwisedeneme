import React from "react";

import { useNavigate } from "react-router-dom";

import { Img, Text } from "components";

const Header = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <header className={props.className}>
        <div className="absolute block flex-col h-auto items-center justify-start left-[3%] md:ml-[0] ml-[26px] md:mt-0 my-1 w-[18%] md:w-full">
          <Img
            src={props?.unionLogoImage}
            className="flex flex-row h-auto items-start justify-start object-cover w-3/5"
            alt="unionlogoEleven"
          />
        </div>
        <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-center mb-[26px] md:ml-[0] ml-[29px] md:mt-0 mt-[39px] w-1/4 md:w-full">
          <Text
            className="font-extrabold font-ggsans text-3xl text-center text-white_A700 w-auto"
            variant="body1"
          >
            {props?.aboutUsText}
          </Text>
          <Text
            className="font-extrabold font-ggsans sm:ml-[0] ml-[50px] mt-0 text-3xl text-center text-white_A700 w-auto"
            variant="body1"
          >
            {props?.supportText}
          </Text>
          <Text
            className="font-extrabold font-ggsans mb-auto sm:ml-[0] ml-[50px] text-3xl text-center text-white_A700 w-auto"
            variant="body1"
          >
            {props?.downloadText}
          </Text>
        </div>
        <Img
          src="images/img_minimize.svg"
          className="h-[50px] md:ml-[0] ml-[205px] md:mt-0 my-[26px] w-[50px]"
          alt="minimize"
        />
        <div
          className="common-pointer bg-cover bg-no-repeat flex flex-col h-auto items-center justify-start md:ml-[0] ml-[19px] md:mt-0 my-[18px] p-[9px] rounded-[33px] w-auto md:w-full"
          style={{
            backgroundImage: "url('images/img_topbarcreateaccount.svg')",
          }}
          onClick={() => navigate("/registerbox")}
        >
          <Text
            className="font-ggsans text-center text-white_A700 w-auto"
            as="h4"
            variant="h4"
          >
            {props?.createAccountText}
          </Text>
        </div>
        <div
          className="common-pointer bg-cover bg-no-repeat flex flex-col h-auto items-center justify-end md:ml-[0] ml-[19px] md:mt-0 my-[18px] p-[9px] rounded-[33px] w-auto md:w-full"
          style={{ backgroundImage: "url('images/img_loginbutton.svg')" }}
          onClick={() => navigate("/loginbox")}
        >
          <Text
            className="font-ggsans mt-0 text-center text-gray_900 w-auto"
            as="h4"
            variant="h4"
          >
            {props?.loginText}
          </Text>
        </div>
      </header>
    </>
  );
};

Header.defaultProps = {
  unionLogoImage: "images/img_unionlogo11.png",
  aboutUsText: "About Us",
  supportText: "Support",
  downloadText: "Download",
  createAccountText: "Create Account",
  loginText: "Log in",
};

export default Header;
