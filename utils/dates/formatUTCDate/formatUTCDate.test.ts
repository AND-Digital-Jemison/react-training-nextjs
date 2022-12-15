import { formatUTCDate } from './';

describe('formatUTCDate', () => {
  it('should return a formatted date', () => {
    const date = '2020-01-01T00:00:00.000Z';
    const formattedDate = formatUTCDate(date);
    expect(formattedDate).toEqual('1 January 2020');
  });
});
