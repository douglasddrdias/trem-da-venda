import styled, { css } from 'styled-components';

export const TextTremLabel = styled.p`
font-weight:bold;    
    ${({ type }) => type === 'h1'
        && css`
            font-size: 28px;
            color: black;
            align-self: flex-start;
            display: inline-block;
        `
}
`;
