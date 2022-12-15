import Head from 'next/head';
import { LaunchMission, Stack } from '../../components';
import { client } from '../../lib';
import { gql } from '@apollo/client';
import styles from './Launches.module.scss';
import { Launch } from '../../types';
import type { NextPage } from 'next';
import { PageTitle } from '../../components/PageTitle';

export const Launches: NextPage<{ launches: Launch[] }> = ({ launches }) => {

  return (
    <div className={styles.container}>
      <Head>
        <title>SpaceX GraphQL demo</title>
        <meta name='description' content='A demo application to show how GraphQL and NextJS can be used together' />
        <link rel='icon' href='/favicon.ico' />
      </Head> 

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


export const getStaticProps = async () => {
  const { data }: { data: { launches: Launch[] } } = await client.query({
    query: gql`
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
    `,
  });

  return {
    props: {
      launches: data.launches.filter(launch => launch.upcoming),
    },
    revalidate: 60 * 5,  // in seconds (5 minutes)
  };
};

export default Launches;
