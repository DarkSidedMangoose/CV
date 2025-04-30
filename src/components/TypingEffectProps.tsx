import React, { useState, useEffect } from "react";

type TypingEffectProps = {
  text: string;
  speed?: number; // Optional typing speed in milliseconds
  Element: React.ElementType; // Optional element type for the text
  handleAddNextState: () => void; // Function to call when typing is complete
  className: string;
};

const TypingEffect: React.FC<TypingEffectProps> = ({
  text,
  speed = 20,
  Element,
  handleAddNextState,
  className
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text[index]);

        setIndex((prev) => prev + 1);
      } else {
        clearInterval(interval);
        clearInterval(cursorInterval);
        setShowCursor(false);
        handleAddNextState();
      }
    }, speed);
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev); // Toggle cursor visibility
    }, speed);

    return () => {
      clearInterval(interval);
      clearInterval(cursorInterval);
    }; // Cleanup on unmount
  }, [text, speed, index]);

  return (
    <Element
      className={`${
        Element === "h1" ? "text-3xl" : Element === "p" && ""
      }${className} font-bold text-gray-800 font-serif`}
    >
      {displayedText}
      {showCursor && <span className="w-[2px] h-full ">|</span>}
    </Element>
  );
};

export default TypingEffect;
