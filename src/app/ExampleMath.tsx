'use client'
import {MathJax} from "better-react-mathjax";
import React from "react";

const ExampleMath = () => {
    return (
        <MathJax>
            {"$$\\int_{-\\infty}^\\infty e^{-x^2} dx = \\sqrt{\\pi}$$"}
        </MathJax>
    );
};

export { ExampleMath }
