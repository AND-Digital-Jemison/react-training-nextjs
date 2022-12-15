import { CSSProperties, FC, ReactNode } from 'react';
import styles from './Stack.module.scss';

type FlexDirection = 
  'column' 
  | 'inherit'
  | '-moz-initial'
  | 'initial'
  | 'revert'
  | 'unset'
  | 'column-reverse'
  | 'row'
  | 'row-reverse'
  | undefined;

export const Stack: FC<{ direction?: FlexDirection, children?: ReactNode }> = ({ direction='row', children }) => {

  const variants: CSSProperties = {
    flexDirection: direction,
  };

  return (
    <div className={styles.stack} 
      style={variants}
    >
      { children }
    </div>
  )
};
