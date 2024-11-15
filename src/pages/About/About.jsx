import React from "react";
import ContentWrapper from "../../components/ContentWrapper/ContentWrapper";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experienceData } from "../../utils/constant";

const About = () => {
  return (
    <div id="about">
      <ContentWrapper className={"mt-10"}>
        <p
          className="font-cyborg text-[2.21rem] sm:text-[3rem] tracking-[.234rem] text-center -skew-y-[3.58deg]"
          style={{
            textShadow:
              "0px 0px 0 #10e956, -1px -1px 0 #10e956, 1px -1px 0 #10e956, -1px 1px 0 #10e956, 1px 1px 0 #10e956",
          }}
        >
          About SHUMAIL
        </p>
        <div className="pt-10">
          <VerticalTimeline lineColor="#10e956">
            {experienceData.map((item, index) => (
              <React.Fragment key={index}>
                <VerticalTimelineElement
                  contentStyle={{
                    background: "black",
                    boxShadow: "0px 5px 10px rgba(0,0,0,.7)",
                    borderRadius: "0px",
                  }}
                  date={item.date}
                  dateClassName="vertical-timeline-dateStyle"
                  contentArrowStyle={{ borderRight: "7px solid  #10e956" }}
                  icon={item.icon}
                  iconStyle={{
                    background: "#10e956",
                    fontSize: "1.5rem",
                    color: "white",
                  }}
                >
                  <div className="bg-gradient-to-t from-[#1A1A1A] to-[#030303] px-2 sm:px-4 md:px-6 lg:px-7 pt-1 pb-2">
                    <h1 className="text-[#e8e8e8] mt-2 text-lg sm:text-2xl font-bold ">
                      {item.title}
                    </h1>
                    <p className="!mt-[5px] text-base sm:text-lg text-[#d5d5d5]">
                      {item.location}
                    </p>
                  </div>
                  <div className="bg-gradient-to-l from-[#1A1A1A] to-[#030303] px-2 sm:px-4 md:px-6 lg:px-7 py-3">
                    <p
                      className="text-[#c8c8c8]"
                      style={{
                        fontSize: "15px",
                        fontWeight: "normal",
                        letterSpacing: "0.31px",
                      }}
                    >
                      {item.description}
                    </p>
                  </div>
                </VerticalTimelineElement>
              </React.Fragment>
            ))}
          </VerticalTimeline>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default About;
