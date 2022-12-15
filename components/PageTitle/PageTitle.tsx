import { FC } from 'react';
import styles from './PageTitle.module.scss';

export const PageTitle: FC<{ title: string }> = ({ title }) => {
  return (
    <div className={styles.pageTitle}>
      <h3>
        { title }
      </h3>
    </div>
  )
};
