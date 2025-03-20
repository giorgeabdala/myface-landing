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
            type={props.type || 'button'}
            onClick={props.onClick}
            className={clsx(
                props.className,
                'rounded-full',          // bordas arredondadas
                'bg-rose-gold-bold',     // cor de fundo personalizada
                'text-white',            // cor do texto
                'text-3xl',              // aumenta o tamanho do texto
                'px-12',                  // aumenta o padding horizontal
                'py-4',                  // aumenta o padding vertical
                'shadow-md',             // adiciona uma sombra sutil para profundidade
                'transition',            // ativa transição para efeitos de hover
                'duration-200',
                'ease-in-out',
                'hover:opacity-90',      // leve alteração de opacidade no hover
                'hover:bg-black',        // altera a cor de fundo no hover
                'hover:scale-105'        // efeito de expansão sutil ao passar o mouse
            )}
        >
            {props.text}
        </button>
    );
}