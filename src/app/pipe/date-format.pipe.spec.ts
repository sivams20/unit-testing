import { DateFormatPipe } from './date-format.pipe';

describe('DateFormatPipe', () => {
  let pipe;

  beforeEach(() => {
    pipe = new DateFormatPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('transforms "mm/dd/yyyy" to "yyyy-mm-dd"', () => {
    expect(pipe.transform('09/20/2020', 'yyyy-MM-dd')).toBe('2020-09-20');
  });

  it('transforms "yyyy-mm-dd" to "mm-dd-yyyy"', () => {
    expect(pipe.transform('2020/09/20', 'MM-dd-yyyy')).toBe('09-20-2020');
  });

  it('transforms to default "yyyy-mm-dd"', () => {
    expect(pipe.transform('09/20/2020')).toBe('2020-09-20');
  });

});
