import React, { useEffect, useState } from "react";
import { BsArrowUp } from "react-icons/bs";
const ButtonScroll = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 500) setOpen(true);
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
          ? "fixed desktop:w-[5rem] desktop:h-[5rem] tablet:w-[4rem] tablet:h-[4rem] h-12 w-12 tablet:rounded-none rounded-full tablet:bg-white-primary bg-black-second tablet:text-black-second text-white right-[25px] tablet:bottom-[200px] bottom-[50px] z-[9998] border border-black-primary hover:bg-black-second hover:text-white-primary flex items-center justify-center opacity-70 hover:opacity-100"
          : "hidden"
      }
    >
      <BsArrowUp className=" tablet:w-7 tablet:h-7 w-5 h-5" />
    </button>
  );
};

export default ButtonScroll;
