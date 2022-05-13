import { ReactNode } from 'react';
import styled, { DefaultTheme, css } from 'styled-components';
import { darken, transparentize } from 'color2k';

export type Size = 'small' | 'medium' | 'large';
export type Type = 'button' | 'submit';
export type ButtonColors = 'blue' | 'pink' | 'gray' | 'silver' | 'white';

const defaultProps = {
  type: 'button' as Type,
  size: 'medium' as Size,
  color: 'blue' as ButtonColors,
  fontWeight: 400,
};

type ButtonProps = {
  children: ReactNode;
  size?: Size;
  type?: Type;
  color?: ButtonColors;
  fontWeight?: keyof DefaultTheme['font']['weight'];
} & typeof defaultProps;

const StyledButton = styled.button<ButtonProps>`
  display: block;
  width: fit-content;
  border: none;
  position: relative;
  transition: 0.2s all;

  ${({ size, theme, color, fontWeight }) =>
    css`
      font-size: ${theme.button.size[size].fontSize};
      background-color: ${theme.button.color[color].background};
      color: ${theme.button.color[color].font};
      box-shadow: 7px 6px 28px 1px ${transparentize(theme.button.color[color].background, 0.76)};
      padding: ${theme.button.size[size].padding.map(p => p).join(' ')};
      font-weight: ${fontWeight};
      border-radius: ${theme.radius.primary};

      &:hover {
        cursor: pointer;
        transition-duration: 0.1s;
        background-color: ${darken(theme.button.color[color].background, 0.05)};
      }

      &:active {
        transform: scale(0.98);
        box-shadow: 3px 2px 22px 1px ${transparentize(theme.button.color[color].background, 0.76)};
      }
    `}
`;

export const Button = ({ children, type, size, color, fontWeight }: ButtonProps): JSX.Element => (
  <StyledButton
    type={type}
    size={size}
    color={color}
    fontWeight={fontWeight}
  >
    {children}
  </StyledButton>
);

Button.displayName = 'Button';

Button.defaultProps = defaultProps;
