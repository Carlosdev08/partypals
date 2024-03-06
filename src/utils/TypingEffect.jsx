"use client";
import React, { useState, useEffect, useRef } from 'react';

const TypingEffect = ({ text, ...props }) => {
    const [content, setContent] = useState('');
    const [index, setIndex] = useState(0);
    const prevText = useRef(text);

    useEffect(() => {
        if (index < text.length) {
            const timeoutId = setTimeout(() => {
                setContent((prevContent) => prevContent + text.charAt(index));
                setIndex((prevIndex) => prevIndex + 1);
            }, 100);

            return () => clearTimeout(timeoutId);
        } else if (text !== prevText.current) {
            // Reinicia el contenido y el índice sólo si el texto ha cambiado
            setTimeout(() => {
                setContent('');
                setIndex(0);
            }, 2000); // Espera 2 segundos antes de reiniciar
        }

        prevText.current = text;
    }, [content, text, index]);

    return <span {...props}>{content}</span>;
};

export default TypingEffect;