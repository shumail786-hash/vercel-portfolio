import React from "react";
import ContentWrapper from "../../../components/ContentWrapper/ContentWrapper";
const Header = () => {
  return (
    <div className="bg-bodyColor">
      <ContentWrapper className={"flex flex-wrap"}>
        <div className="flex items-center flex-col">
          <p
            className="font-sans tracking-[1.3px] my-5 bg-backgroundColor pl-2 pr-4 rounded-lg py-1 text-[.85rem] text-backgroundColor"
            style={{
              background: "rgba(20, 233, 88, .157)",
              lineHeight: "2.4rem",
            }}
          >
            {" "}
            <span className="px-2 inline-block text-2xl animate-rotating">
              👋🏻
            </span>
            Hi there! I'm Shumail
          </p>
          <p className="text-[2.21rem] text-white font-semibold capitalize text-center leading-relaxed my-2 font-exo">
            A{" "}
            <span className="text-backgroundColor tracking-widest font-cyborg">
              MERN Stack Developer
            </span>{" "}
            . I help startups to{" "}
            <span className="text-backgroundColor font-cyborg tracking-widest">
              launch
            </span>{" "}
            &
            <span className="text-backgroundColor font-cyborg tracking-widest">
              {" "}
              grow{" "}
            </span>
            Their products.
          </p>
        </div>
        <div></div>
      </ContentWrapper>
    </div>
  );
};

export default Header;
