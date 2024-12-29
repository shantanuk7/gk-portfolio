import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import upRight from "./up-right.svg";

export const Component = ({
    property1,
    className,
    divClassName,
    text = "Hire me",
    iconOutlinedClassName,
    iconOutlined = "image.svg",
}) => {
    const [state, dispatch] = useReducer(reducer, {
        property1: property1 || "frame-31",
    });

    return (
        <div
            className={`w-[202px] flex items-center px-5 py-2.5 overflow-hidden rounded-[60px] justify-center bg-orange-400 relative ${className}`}
            onMouseLeave={() => {
                dispatch("mouse_leave");
            }}
            onMouseEnter={() => {
                dispatch("mouse_enter");
            }}
        >
            <div
                className={`[font-family:'Lufga-Medium',Helvetica] w-fit tracking-[-0.39px] text-[25.7px] text-variable-collection-white font-medium leading-[normal] relative ${divClassName}`}
            >
                {text}
            </div>

            <img
                className={`w-[42px] h-[42px] relative ${iconOutlinedClassName}`}
                alt="Icon outlined"
                src={state.property1 === "variant-2" ? iconOutlined : upRight}
            />
        </div>
    );
};

function reducer(state, action) {
    switch (action) {
        case "mouse_enter":
            return {
                ...state,
                property1: "variant-2",
            };

        case "mouse_leave":
            return {
                ...state,
                property1: "frame-31",
            };
    }

    return state;
}

Component.propTypes = {
    property1: PropTypes.oneOf(["variant-2", "frame-31"]),
    text: PropTypes.string,
    iconOutlined: PropTypes.string,
};
