import { CSSProperties } from 'react';

interface IProps {
  classes?: string,
  styles?: CSSProperties, 
}

interface ICollapseProps {
  openDefault?: boolean,
  trigger?: JSX.Element,
}

interface IHeaderProps {
  trigger?: JSX.Element, 
  open?: boolean,
  setOpen?: (status: boolean) => void;
}

export type TContentProps = IProps;
export type THeaderProps = IProps & IHeaderProps;
export type TProps = IProps & ICollapseProps;