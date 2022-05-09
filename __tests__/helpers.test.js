const { format_date } = require('../utils/helpers');
test('format_date() returns a date string', () => {
    const date = new Date('2022-05-08 23:56:45');
    expect(format_date(date)).toBe('5/08/2022');
});