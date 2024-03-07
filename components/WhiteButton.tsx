import React from 'react';

interface IWhiteButton {
    text: string;
    onClick: () => void;
    isDisabled?: boolean;
}

const WhiteButton = ({
    text,
    onClick,
    isDisabled = false,
}: IWhiteButton) => {

    return (
        <button
            className={`flex w-full justify-center items-center duration-150 text-black border-[#979797] border-2 ${
                isDisabled
                    ? 'bg-[#6D6D6D] text-[#BDBDBD]'
                    : 'bg-white hover:scale-[1.03] active:scale-[0.97]'
            } uppercase cursor-pointer text-lg rounded-full py-2 px-8 shadow-primary-button min-h-[50px]`}
            onClick={() => {
                if (isDisabled) return;
                onClick();
            }}
        >
            {text}
        </button>
    );
};
export default WhiteButton;
