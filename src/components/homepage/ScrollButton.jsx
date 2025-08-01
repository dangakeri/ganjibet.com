import React from "react";

function ScrollButton({ src, title, onClick }) {
  return (
    <div
      onClick={onClick}
      className="flex gap-3 px-5 items-center bg-secondary rounded-lg border-secondary hover:bg-primary hover:text-black transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md w-max h-[3rem]"
    >
      <img src={src} className="h-5 w-auto" alt={title} />
      <div>
        <h2 className="text-sm font-medium text-textGrey hover:text-black">
          {title}
        </h2>
      </div>
    </div>
  );
}

export default ScrollButton;
