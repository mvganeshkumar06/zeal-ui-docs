import React, { useState } from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import theme from 'prism-react-renderer/themes/oceanicNext';
import { CodeContainer } from '../styles/CodeStyled';
import { Text, Button } from '@zeal-ui/core';
import styled from 'styled-components';
import * as zealUIComponents from '@zeal-ui/core';
import prettier from 'prettier/standalone';
import babelParser from 'prettier/parser-babel';

const CodeBlock = ({ code, language, noInline, live }) => {
    const scope = { styled, ...zealUIComponents };

    const [copyText, setCopyText] = useState('Copy');

    const copyCode = () => {
        navigator.clipboard.writeText(code);
        setCopyText('Copied');
        setTimeout(() => {
            setCopyText('Copy');
        }, 2000);
    };

    let formattedCode = code;
    if (language !== 'bash') {
        formattedCode = prettier.format(code, {
            parser: 'babel',
            plugins: [babelParser],
            printWidth: 100,
            tabWidth: 4,
            useTabs: false,
            semi: true,
            singleQuote: true,
            quoteProps: 'as-needed',
            jsxSingleQuote: false,
            trailingComma: 'all',
            bracketSpacing: true,
            bracketSameLine: false,
            arrowParens: 'always',
            embeddedLanguageFormatting: 'auto',
        });
    }

    return (
        <CodeContainer type="col" width="100%">
            <LiveProvider
                theme={theme}
                scope={scope}
                language={language ? language : 'jsx'}
                code={formattedCode}
                noInline={noInline}
                disabled={!live}
            >
                {live && <LivePreview className="preview" />}
                <div className="editorContainer">
                    {live && <Text className="editorHeader">Editable Code</Text>}
                    <Button color="accent" onClick={copyCode} className="copyBtn">
                        {copyText}
                    </Button>
                    <LiveEditor className="editor" />
                </div>
                {live && <LiveError className="error" />}
            </LiveProvider>
        </CodeContainer>
    );
};

export default CodeBlock;
