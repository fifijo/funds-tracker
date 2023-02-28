import { transparentize } from 'color2k';
import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const List = styled.ul`
  padding: 0;
`;

export const ListItem = styled.li`
  list-style: none;

  .active {
    background-color: ${({ theme }) => transparentize(theme.colors.blue, 0.85)};
  }
`;

export const StyledNavLink = styled(NavLink)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-decoration: none;
  width: 214px;

  ${({ theme }) => css`
    color: ${theme.colors.gray400};
    outline-color: ${theme.colors.blue};
    padding: ${theme.padding.medium};
    border-radius: ${theme.radius.primary};
  `}
`;
