import React from 'react';

interface ChildrenProps {
    children: React.ReactNode;
    title?: string;
    classes?: string;
}

const GreyedCard = ({ children, classes }: ChildrenProps): JSX.Element => {
    return (
        <div
            className={`p-10 rounded-[35px] bg-greyedCardBg shadow-main col-span-1 ${classes}`}
        >
            {children}
        </div>
    );
};

export default GreyedCard;
