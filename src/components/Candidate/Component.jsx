import PropTypes from "prop-types";
import React from "react";

export const Component = ({ className, divClassName, text = "Register" }) => {
    return (
        <div className={`relative w-[128px] h-[36px] bg-main-color rounded-[20px] ${className}`}>
            <div
                className={`absolute w-[92px] top-[6px] left-[18px] font-buttons-and-calls-to-action font-[number:var(--buttons-and-calls-to-action-font-weight)] text-[#ffffff] text-[length:var(--buttons-and-calls-to-action-font-size)] text-center tracking-[var(--buttons-and-calls-to-action-letter-spacing)] leading-[var(--buttons-and-calls-to-action-line-height)] [font-style:var(--buttons-and-calls-to-action-font-style)] ${divClassName}`}
            >
                {text}
            </div>
        </div>
    );
};

Component.propTypes = {
    text: PropTypes.string,
};
