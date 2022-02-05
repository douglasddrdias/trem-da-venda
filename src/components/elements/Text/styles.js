import styled, { css } from 'styled-components';

export const TextLabel = styled.p`
font-weight:bold;    
    ${({ type }) => type === 'h1'
        && css`
            font-size: 28px;
            color: black;
        `
}
`;
