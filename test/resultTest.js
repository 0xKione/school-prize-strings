// test/sampleTest.js

import { expect } from 'chai';
import App from '../src/App';

const inst = new App(4);

describe('Correct solution for 4-day span', () => {
  it('should return 43 \'prize\' strings', () => {
    const expectedResult = 43;

    expect(inst.run()).to.equal(expectedResult);
  });
});

describe('Correct solution for 30-day span', () => {
  it('should return 1918080160 \'prize\' strings', () => {
    const expectedResult = 1918080160;
    inst.setTotalDays(30);

    expect(inst.run()).to.equal(expectedResult);
  });
});
