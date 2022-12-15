import { FC, ReactNode } from 'react';
import styles from './LaunchMissionDetails.module.scss';

export const LaunchMissionDetails: FC<{ children?: ReactNode }> = ({ children }) => {
  return (
    <div className={styles.launchMissionDetails}>
      { children }
    </div>
  )
};