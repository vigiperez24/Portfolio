import { useState, useEffect } from "react";

const TextType = ({
  text,
  typingSpeed = 75,
  pauseDuration = 1500,
  showCursor = true,
  cursorCharacter = "|",
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let timeout;

    if (isTyping) {
      if (charIndex < text[textIndex].length) {
        timeout = setTimeout(() => {
          setDisplayedText((prev) => prev + text[textIndex][charIndex]);
          setCharIndex((prev) => prev + 1);
        }, typingSpeed);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, pauseDuration);
      }
    } else {
      timeout = setTimeout(() => {
        setIsTyping(true);
        setDisplayedText("");
        setCharIndex(0);
        setTextIndex((prev) => (prev + 1) % text.length);
      }, pauseDuration);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isTyping, textIndex, text, typingSpeed, pauseDuration]);

  return (
    <span>
      {displayedText}
      {showCursor && <span className="cursor">{cursorCharacter}</span>}
    </span>
  );
};

export default TextType;
