import calculator from '../src/calculator';
describe('Calculator 100% coverage', () => {
  // test('it loads without error', () => {
  //   expect(calculator).toBeDefined();
  //   expect(typeof calculator).toBe('function');
  // });
  // test('2 + 2 = 4', () => {
  //   expect(calculator(2, '+', 2)).toBe(4);
  // });
  // test('2 * 2 = 4', () => {
  //   expect(calculator(2, '*', 2)).toBe(4);
  // });
  // test('2 / 2 = 1', () => {
  //   expect(calculator(2, '/', 2)).toBe(1);
  // });
  // test('2 - 2 = 0', () => {
  //   expect(calculator(2, '-', 2)).toBe(0);
  // });
  // test('2 - 2 = 0', () => {
  //   expect(calculator(2, '-', 2)).toBe(0);
  // });

  // // errors
  // test('error A is not a nubmer', () => {
  //   expect(() => calculator('?', '*', 2)).toThrow();
  // });
  // test('error B is not a nubmer', () => {
  //   expect(() => calculator(2, '*', '?')).toThrow();
  // });
  // test('unknown operator', () => {
  //   expect(() => calculator(2, 'Z', 2)).toThrow();
  // });

  // params
  test.each`
    a       | op     | b       | expected
    ${2}    | ${'+'} | ${2}    | ${4}
    ${2.4}  | ${'+'} | ${1.99} | ${4.39}
    ${0}    | ${'+'} | ${0}    | ${0}
    ${0}    | ${'+'} | ${9}    | ${9}
    ${-5}   | ${'+'} | ${10}   | ${5}
    ${-3}   | ${'+'} | ${-3}   | ${-6}
    ${'2'}  | ${'+'} | ${'2'}  | ${'22'}

    ${2}    | ${'-'} | ${2}    | ${0}
    ${-5.9} | ${'-'} | ${-1.2} | ${-4.7}
    ${0}    | ${'-'} | ${0}    | ${0}
    ${0}    | ${'-'} | ${5}    | ${-5}
    ${30}   | ${'-'} | ${60}   | ${-30}

    ${'2'}  | ${'-'} | ${'2'}  | ${0}
    ${2}    | ${'/'} | ${2}    | ${1}
    ${10}   | ${'/'} | ${1}    | ${10}
    ${1}    | ${'/'} | ${10}   | ${0.1}
    ${1}    | ${'/'} | ${-1}   | ${-1}
    ${-1}   | ${'/'} | ${-1}   | ${1}
    ${1}    | ${'/'} | ${0}    | ${Infinity}
    ${'5'}  | ${'/'} | ${'5'}  | ${1}

    ${2}    | ${'*'} | ${2}    | ${4}
    ${1}    | ${'*'} | ${9}    | ${9}
    ${1.5}  | ${'*'} | ${3}    | ${4.5}
    ${0}    | ${'*'} | ${0}    | ${0}
    ${0}    | ${'*'} | ${5}    | ${0}
    ${2}    | ${'*'} | ${-9}   | ${-18}
    ${-4}   | ${'*'} | ${-4}   | ${16}
    ${'5'}  | ${'*'} | ${'5'}  | ${25}
    
    ${2}    | ${'Z'} | ${2}    | ${'error'}
    ${2}    | ${'_'} | ${2}    | ${'error'}
    ${'A'}  | ${'+'} | ${2}    | ${'error'}
    ${2}    | ${'*'} | ${'B'}  | ${'error'}
  `('$a $op $b = $expected', ({ a, op, b, expected }) => {
    if (expected === 'error') {
      expect(() => calculator(a, op, b)).toThrow();
    } else {
      expect(calculator(a, op, b)).toBe(expected);
    }
  });
});