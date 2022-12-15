import type { NextPage } from 'next';
import { LaunchMission, Stack } from '../../components';
import { Launch } from '../../types';
import { PageTitle } from '../../components/PageTitle';
import { useQuery } from 'urql';
import { urqlClient, ssrCache } from '../../lib/urqlClient';
import styles from '../launches/Launches.module.scss';

const LAUNCHES_QUERY = `
  query Launches {
    launches {
      mission_name,
      rocket {
        rocket_name
      }
      launch_site {
        site_name
      },
      launch_date_utc,
      upcoming
    }
  }
`;

const Launches: NextPage = () => {

  const [result] = useQuery({
    query: LAUNCHES_QUERY,
    variables: { },
  });

  const { data }: { data?: { launches?: Launch[] } } = result;
  const launches = data?.launches?.filter(launch => launch.upcoming) || [];

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <PageTitle
          title='View the upcoming SpaceX launches and information about them'
        />
      
        <Stack direction='column'>
          { launches.map((launch, index) => (
            <LaunchMission 
              key={`launch-${index}`}
              {...launch}
            />
          ))}
        </Stack>
      </main>
    </div>
  )
};

export const getServerSideProps = async () => {

  await urqlClient.query(LAUNCHES_QUERY, { })
    .toPromise();

  return {
    props: {
      urqlState: ssrCache.extractData(),
    },
  }
};

export default Launches;
