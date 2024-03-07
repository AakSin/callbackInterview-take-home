import React from 'react';

interface ISingleLineTextInput {
    text: string;
    onChange: (newValue: string) => void;
    placeholder?: string;
    containerClasses?: string;
    type?: 'text' | 'password';
    id?: string;
    disabled?: boolean;
}

const SingleLineTextInput = ({
    text,
    onChange,
    placeholder,
    containerClasses,
    type = 'text',
    id,
    disabled = false,
}: ISingleLineTextInput): JSX.Element => {
    return (
        <input
            type={type}
            value={text}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder ?? 'Ex. Callback'}
            className={`focus:outline-none focus:ring-0 p-4 text-white placeholder:text-tertiary rounded-xl w-full border-2 bg-primary border-prototype7ary ${containerClasses}`}
            id={id ?? ''}
            disabled={disabled}
        />
    );
};

export default SingleLineTextInput;
