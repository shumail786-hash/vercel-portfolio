import React, { useEffect, useState } from "react";
import { quotes } from "../../utils/constant";
import ContentWrapper from "../ContentWrapper/ContentWrapper";
import { motion } from "framer-motion";

const Quotes = () => {
  const [randomQuote, setRandomQuote] = useState({});

  useEffect(() => {
    const renderRandomQuote = () => {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      console.log(randomIndex);
      setRandomQuote(quotes[randomIndex]);
    };

    renderRandomQuote();
  }, []);
  return (
    <ContentWrapper className={"flex items-center justify-center"}>
      <div
        className="w-full lg:w-3/4 xl:w-3/5 p-5 lg:p-10 border-b-4 border-r-4 rounded-lg border-secondaryColor"
        style={{
          backgroundImage:
            "linear-gradient(to right bottom, rgba(0,0,0,.1), rgba(0,0,0,.1)), url(/quote.png)",
          backgroundSize: "cover",
        }}
      >
        <p className="text-start md:text-center leading-tight text-neutral-200 font-exo text-[1.89rem] lg:text-[2.5rem]  ">
          {'" ' + randomQuote.quote + ' "' + " -"}
          <span className="font-bold text-backgroundColor">
            {" "}
            {randomQuote.name}
          </span>
        </p>
      </div>
    </ContentWrapper>
  );
};

export default Quotes;
