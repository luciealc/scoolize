import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";

interface Props {
  property1: "big-one" | "big-one-light" | "default";
}

export const SearchBartest = ({ property1 }: Props): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  return (
    <div className={`flex items-start relative ${state.property1 === "default" ? "w-[397px]" : "w-[522px]"}`}>
      <div
        className={`[border-bottom-style:solid] border-[#000091] flex items-center gap-[10px] px-[16px] py-[8px] rounded-[4px_0px_0px_0px] border-b bg-[#eeeeee] relative ${
          ["big-one-light", "big-one"].includes(state.property1) ? "w-[357px]" : ""
        } ${state.property1 === "default" ? "grow" : ""} ${state.property1 === "default" ? "flex-1" : ""} ${
          state.property1 === "default" ? "h-[38px]" : "h-[49px]"
        }`}
      >
        <p
          className={`[font-family:'Marianne-ThinItalic',Helvetica] w-fit italic text-[16px] tracking-[-0.13px] text-[#161616] relative font-thin whitespace-nowrap leading-[24px] ${
            state.property1 === "default" ? "mt-[-2.00px]" : ""
          }`}
        >
          Ex : Bts Droit Lyon
        </p>
      </div>
      <div
        className={`items-center gap-[10px] px-[24px] py-[8px] rounded-[0px_4px_0px_0px] justify-end relative ${
          ["big-one-light", "big-one"].includes(state.property1) ? "w-[165px]" : ""
        } ${state.property1 === "default" ? "inline-flex" : "flex"} ${
          state.property1 === "default" ? "flex-[0_0_auto]" : ""
        } ${["big-one-light", "big-one"].includes(state.property1) ? "h-[49px]" : ""} ${
          state.property1 === "big-one-light" ? "bg-[#1212ff]" : "bg-button"
        }`}
        onMouseLeave={() => {
          dispatch("mouse_leave");
        }}
        onMouseEnter={() => {
          dispatch("mouse_enter");
        }}
      >
        <img
          className={`w-[19px] h-[19px] relative ${
            ["big-one-light", "big-one"].includes(state.property1) ? "ml-[-1.00px]" : ""
          }`}
          alt="Vector"
          src={
            state.property1 === "big-one"
              ? "vector.svg"
              : state.property1 === "big-one-light"
              ? "image.svg"
              : "vector-2.svg"
          }
        />
        <div
          className={`[font-family:'Marianne-Regular',Helvetica] w-fit tracking-[0] text-[16px] text-white relative font-normal leading-[normal] ${
            state.property1 === "default" ? "mt-[-1.00px]" : ""
          }`}
        >
          Rechercher
        </div>
      </div>
    </div>
  );
};

function reducer(state: any, action: any) {
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        property1: "big-one-light",
      };

    case "mouse_leave":
      return {
        ...state,
        property1: "big-one",
      };
  }

  return state;
}

SearchBartest.propTypes = {
  property1: PropTypes.oneOf(["big-one", "big-one-light", "default"]),
};
export default SearchBartest