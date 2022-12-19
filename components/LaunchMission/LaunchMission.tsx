import styles from './LaunchMission.module.scss';
import type { FC } from 'react';
import { formatUTCDate } from '../../utils/dates';
import { LaunchMissionSection } from './LaunchMissionSection';
import { LaunchMissionTitle } from './LaunchMissionTitle';
import { LaunchMissionDetails } from './LaunchMissionDetials';

export const LaunchMission: FC<Launch> = ({
  mission_name,
  rocket,
  launch_site,
  launch_date_utc
}) => {

  return (
    <div className={styles.launchMission}>
      <LaunchMissionTitle mission_name={ mission_name } />
      <LaunchMissionDetails>
        <LaunchMissionSection 
          title='Rocket'
          description={ rocket.rocket_name }
        />
        <LaunchMissionSection 
          title='Date'
          description={ formatUTCDate(launch_date_utc) }
        />
        <LaunchMissionSection 
          title='Location'
          description={ launch_site.site_name }
        />
      </LaunchMissionDetails>
    </div>
  );
};
