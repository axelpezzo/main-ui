import { CSSProperties } from 'react';

interface IProps {
  children: Array<React.ReactNode>,
  classes?: string,
  styles?: CSSProperties, 
}

interface IContentProps {
  currentIndex?: number,
}

interface IHeaderProps {
  currentIndex?: number,
  setCurrentIndex?: (index: number) => void;
}

export type TContentProps = IProps & IContentProps;
export type THeaderProps = IProps & IHeaderProps;
export type TProps = IProps;