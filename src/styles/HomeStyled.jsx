import styled from 'styled-components';
import { Container } from '@zeal-ui/core';

export const HomeStyled = styled(Container)`
    min-height: 100vh;

    .contentContainer {
        padding: 1rem;
    }

    .zealUIIcon {
        width: 5rem;
        height: 5rem;
        background-color: var(--zeal-background-base-xdark);
    }

    .tagline {
        width: 100%;
        line-height: 2rem;
        text-align: center;
    }

    .features {
        text-align: center;
    }

    .footer {
        margin-top: auto;
        margin-bottom: 1rem;
    }

    .heartIcon {
        width: 1.5rem;
        height: 1.5rem;
        position: relative;
        top: 0.25rem;
        margin-right: 0.25rem;
    }

    .socialIcon {
        width: 1.5rem;
        height: 1.5rem;
        margin: 0rem 0.5rem;
    }

    @media (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
        .tagline {
            width: 70%;
        }
    }
`;
