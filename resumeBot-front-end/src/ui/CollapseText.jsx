import { useState } from "react";

function CollapseText({ children, maxWords = 30, hideDefault = true }) {
  const [isHidden, setIsHidden] = useState(hideDefault);
  return (
    <>
      {!isHidden
        ? children
        : children.split(" ").length <= maxWords
          ? children
          : children.split(" ").slice(0, maxWords).join(" ")}{" "}
      {isHidden && "..."}
      <span
        onClick={() => setIsHidden((h) => !h)}
        className="font-semibold cursor-pointer not-italic"
      >
        {isHidden ? "See More" : "Hide"}
      </span>
    </>
  );
}

export default CollapseText;
