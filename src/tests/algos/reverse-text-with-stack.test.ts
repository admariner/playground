import { reverseTextWithStack } from '../../algos/reverse-text-with-stack';

describe('reverseTextWithStack', () => {
  it('should reverse text', () => {
    expect('').toBe(reverseTextWithStack(''));
    expect('a').toBe(reverseTextWithStack('a'));
    expect('abcdefg').toBe(reverseTextWithStack('gfedcba'));
    expect('A B C D E').toBe(reverseTextWithStack('E D C B A'));
  });
});
