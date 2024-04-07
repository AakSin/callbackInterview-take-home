import React from 'react';

interface Props {
    errorMessage: string;
}

const ErrorScreen = (props: Props) => {
    return (
        <div className="flex items-center justify-center text-center">
            <p className="text-2xl">{props.errorMessage}</p>
        </div>
    );
};

export default ErrorScreen;
