import styled, { css } from 'styled-components';

export const Label = styled.label`
  ${({ theme }) => css`
    font-family: ${theme.fontFamily};
    color: ${theme.fontColor};
    font-size: ${theme.fontSize};
  `}
`;

export const Input = styled.input`
  display: block;
  line-height: 30px;
  ${({ theme }) => css`
    font-family: ${theme.fontFamily};
    color: ${theme.fontColor};
    font-size: ${theme.fontSize};
  `}
`;
