import { FC } from 'react';
import styles from './LaunchMissionSection.module.scss';

export const LaunchMissionSection: FC<{ title: string, description: string }> = ({ title, description }) => {
  return (
    <div className={styles.launchMissionSection}>
      <h5>{ title }</h5>
      <p>{ description }</p>
    </div>
  )
};
