import React from '$veda-ui/react'
import styled from "$veda-ui/styled-components";


const QuoteContainer = styled.div`
    border-left: 4px solid #ccc;
    padding: 6px 16px;
    margin: 14px 0;
    font-style: italic;
    color: #555;
    background-color: #f9f9f9;
    position: relative;
`;

const QuoteText = styled.p`
    font-size: 1.5rem;
    line-height: 1.6;
    margin-left: 20px;

    &:after {
        content: '”';
        font-size: 3.5rem;
        color: #ccc;
        position: absolute;
        right: -8px;
        bottom: 8px;
    }
`;

const QuoteStart = styled.div`
    font-size: 5rem;
    color: #ccc;
    position: absolute;
    left: 0;
    top: -40px;
`;

const QuoteAuthor = styled.p`
    margin-top: 10px;
    font-size: 1rem;
    font-weight: bold;
    text-align: right;
`;

const QuoteSubtitle = styled.p`
    // margin-top: 5px;
    font-size: 0.875rem;
    font-style: normal;
    text-align: right;
    color: #777;
`;


// Usage example
const QuoteComponent = ({ text, author, subtitle }) => (
    <>
    <QuoteContainer>
        <QuoteStart>“</QuoteStart>
        <QuoteText>{`${text}`}</QuoteText>
        <QuoteAuthor>{author}</QuoteAuthor>
        {subtitle && <QuoteSubtitle>{subtitle}</QuoteSubtitle>}
    </QuoteContainer>
    </>
);

export default QuoteComponent;
