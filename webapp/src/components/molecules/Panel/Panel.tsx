import { FC, ReactNode } from 'react';
import { PanelWrapper, PanelLink } from './Panel.styles';

interface PanelcomponentProps {
  children: ReactNode;
  to?: string;
}

export const PanelComponent: FC<PanelcomponentProps> = ({ children, to }) => {
  if (to) {
    return (
      <PanelWrapper
        as={PanelLink}
        to={to}
      >
        {children}
      </PanelWrapper>
    );
  }

  return <PanelWrapper>{children}</PanelWrapper>;
};