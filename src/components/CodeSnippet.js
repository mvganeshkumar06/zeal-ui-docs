import React, { useState } from "react";
import styled from "styled-components";
import Highlight, { defaultProps } from "prism-react-renderer";
import lightTheme from "prism-react-renderer/themes/github";
import darkTheme from "prism-react-renderer/themes/oceanicNext";
import { Button, Container, useStyles, useThemeContext } from "@zeal-ui/core";

const Pre = styled.pre`
    width: 85vw;
    margin: 0.5rem 0rem;
    padding: 2.25rem 0.5rem;
    overflow: auto;
    border-radius: 0.25rem;
    letter-spacing: 0.25px;
    @media (min-width: 1024px) {
        width: 60vw;
        padding: 2rem 0.5rem;
    }
`;

const Line = styled.div`
    display: table-row;
`;

const LineNo = styled.span`
    display: table-cell;
    text-align: right;
    padding-right: 0.75rem;
    user-select: none;
    opacity: 0.5;
`;

const LineContent = styled.span`
    display: table-cell;
`;

const CodeSnippet = ({ code, language, disableLineNumber }) => {

    const styles = useStyles((style, theme) => `
        position:relative;
        margin:0rem;
        
        .btn{
            position:absolute;
            top:0.5rem;
            right:0.5rem;
            box-shadow:${style.common.boxShadow};
            background-color:${style.colors.blue[3]};
        }
    `);

    const [copyText, setCopyText] = useState("Copy");

    const copyCode = () => {
        navigator.clipboard.writeText(code);
        setCopyText("Copied");
        setTimeout(() => {
            setCopyText("Copy");
        }, 2000);
    };

    const { theme } = useThemeContext();

    return (
        <Container type="col" customStyles={styles}>
            <Button className="btn" onClick={copyCode}>
                {copyText}
            </Button>
            <Highlight
                {...defaultProps}
                theme={theme === "light" ? lightTheme : darkTheme}
                code={code ? code.trim() : ""}
                language={language ? language : "jsx"}
            >
                {({
                    className,
                    style,
                    tokens,
                    getLineProps,
                    getTokenProps,
                }) => (
                    <Pre className={className} style={style}>
                        {tokens.map((line, i) => (
                            <Line key={i} {...getLineProps({ line, key: i })}>
                                {!disableLineNumber && <LineNo>{i + 1}</LineNo>}
                                <LineContent>
                                    {line.map((token, key) => (
                                        <span
                                            key={key}
                                            {...getTokenProps({ token, key })}
                                        />
                                    ))}
                                </LineContent>
                            </Line>
                        ))}
                    </Pre>
                )}
            </Highlight>
        </Container>
    );
};

export default CodeSnippet;
