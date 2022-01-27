import styled from 'styled-components';
import { Container } from '@zeal-ui/core';

export const CodeContainer = styled(Container)`
    .preview {
        width: 100%;
        margin: 0.5rem 0rem;
        padding: 0.25rem;
    }

    .editorContainer {
        width: 100%;
        position: relative;
    }

    .editor .npm__react-simple-code-editor__textarea,
    pre {
        padding: 2rem 0.5rem 0.5rem 0.5rem !important;
    }

    .editorHeader {
        padding: 0rem;
        margin: 0rem;
        position: absolute;
        top: 0.125rem;
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        color: var(--zeal-color-white);
        z-index: var(--zeal-z-index-float);
        user-select: none;
        opacity: 0.95;
        font-size: 0.875rem;
        text-transform: uppercase;
    }

    .copyBtn {
        margin: 0rem;
        position: absolute;
        top: 0rem;
        right: 0rem;
        padding: 0.25rem;
        z-index: var(--zeal-z-index-float);
        border-radius: 0rem;
    }

    .error {
        display: none;
    }

    @media (min-width: ${({ theme }) => theme.breakpoint.tabletPotrait}) {
        .error {
            display: block;
            width: auto;
            color: var(--zeal-color-on-error);
            background-color: var(--zeal-color-error);
            margin: 0.5rem 0rem;
            padding: 0.25rem;
            border-radius: 0.25rem;
        }
    }
`;
