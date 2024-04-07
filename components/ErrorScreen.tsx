import React from 'react';

interface Props {
    errorMessage: string;
}

const ErrorScreen = (props: Props) => {
    return (
        <div>
            <p>{props.errorMessage}</p>
        </div>
    );
};

export default ErrorScreen;
