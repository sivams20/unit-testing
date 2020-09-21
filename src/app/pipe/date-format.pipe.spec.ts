import { DateFormatPipe } from './date-format.pipe';

describe('DateFormatPipe', () => {
  const pipe = new DateFormatPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('transforms "mm/dd/yyyy" to "yyyy-mm-dd"', () => {
    expect(pipe.transform('09/20/2020')).toBe('2020-09-20');
  });

  it('transforms to default "yyyy-mm-dd"', () => {
    expect(pipe.transform('09/20/2020')).toBe('2020-09-20');
  });

});
