
"use client";
import React, { useState, useEffect } from 'react';

const TypingEffect = ({ text, ...props }) => {
    const [content, setContent] = useState('');
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if (index === text.length) {
                setContent('');
                setIndex(0);
            } else {
                setContent((prevContent) => prevContent + text.charAt(index));
                setIndex((prevIndex) => prevIndex + 1);
            }
        }, 100);

        return () => clearTimeout(timeoutId);
    }, [content, text, index]);

    return <span {...props}>{content}</span>;
};

export default TypingEffect;