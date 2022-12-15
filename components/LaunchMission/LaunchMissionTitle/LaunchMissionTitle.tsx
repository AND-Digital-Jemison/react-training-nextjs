import { FC } from 'react';
import styles from './LaunchMissionTitle.module.scss';
import { Rocket as RocketIcon } from '../../icons';

export const LaunchMissionTitle: FC<{ mission_name: string }> = ({ mission_name }) => {
  return (
    <div className={styles.launchMissionName}>
      <RocketIcon />
      <h4>{ mission_name }</h4>
    </div>
  );
};
