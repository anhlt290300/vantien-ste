import React, { useEffect, useState } from "react";
import { BsArrowUp } from "react-icons/bs";
const ButtonScroll = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 1000) setOpen(true);
      else setOpen(false);
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);
  const scroll = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <button
      onClick={() => scroll()}
      className={
        open
          ? "fixed w-[6rem] h-[6rem] right-[25px] tablet:bottom-[100px] bottom-[50px] z-[999] border border-black-primary hover:bg-black-second hover:text-white-primary flex items-center justify-center hover:text-hover-a"
          : "hidden"
      }
    >
      <BsArrowUp size={30} />
    </button>
  );
};

export default ButtonScroll;
