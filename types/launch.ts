export interface Launch {
  mission_name: string;
  rocket: {
    rocket_name: string;
  },
  launch_site: {
    site_name: string;
  },
  launch_date_utc: string,
  upcoming: boolean
};
