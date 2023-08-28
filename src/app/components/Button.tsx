'use client'
import React from 'react';
import clsx from 'clsx';
interface ButtonProps {
    className?: string;
    text: string;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
}

export default function ButtonDefault(props: ButtonProps) {
    return (
        <button
            className={clsx(
                props.className,
                'rounded-full',
                'border-0',
                'btn',
                'bg-rose-gold-bold',
                'text-white',
                'hover:opacity-80',
                'hover:bg-black'
            )}
            onClick={props.onClick} type={"submit"}>
            {props.text}
        </button>
    );
}
