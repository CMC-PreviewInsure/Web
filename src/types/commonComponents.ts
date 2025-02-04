import { Dispatch, SetStateAction } from 'react';

export type SearchBarProps = {
  backgroundColor: string;
  icon: any;
  handler: () => void;
};

export type SelectorProps = {
  check: boolean;
  setCheck: (check: boolean) => void;
  type: 'circle' | 'square';
};

type LoadingType = 'blank' | 'balls' | 'bars' | 'bubbles' | 'cubes' | 'cylon' | 'spin' | 'spinningBubbles' | 'spokes';
export type LoadingProps = {
  type: LoadingType;
  color: string;
  width: number;
  height: number;
};

export type ProcessProps = {
  stepNumber: number;
  activeStep: number;
};

export type ButtonType = 'fill' | 'outline' | 'text';
export type ButtonSizeType = 'big' | 'small';
export type ButtonProps = {
  kind: ButtonType;
  disable: boolean;
  text: string;
  size: ButtonSizeType;
  handler: () => void;
};

export type CategoryColorType = 'Primary' | 'Gray';
export type CategoryProps = {
  text: string;
  color: string;
  handler: () => void;
};

export type TabProps = {
  stepText: string[];
  activeStep: number;
  handler: Dispatch<SetStateAction<number>>;
};
