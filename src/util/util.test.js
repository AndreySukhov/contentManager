import { createRandomNum, isHtml, isObj, isValidUrl } from './index';

describe('util functions', () => {

  test('createRandomNum()', () => {
    expect(createRandomNum(100, 200)).toBeGreaterThanOrEqual(100);
    expect(createRandomNum(100, 200)).toBeLessThan(200);
  });

  test('isHtml()', () => {
    expect(isHtml('<div>html string</div>')).toBeTruthy();
    expect(isHtml('<div>html with <span>nested tag</span>string</div>')).toBeTruthy();
    expect(isHtml('regular string')).toBeFalsy();
    expect(isHtml({})).toBeFalsy();
    expect(isHtml([])).toBeFalsy();
    expect(isHtml()).toBeFalsy();
  });

  test('isObj()', () => {
    expect(isObj({})).toBeTruthy();
    expect(isObj([])).toBeFalsy();
    expect(isObj('test str')).toBeFalsy();
  });

  test('isValidUrl()', () => {
    expect(isValidUrl('https://github.com/')).toBeTruthy();
    expect(isValidUrl('http://github.com/')).toBeTruthy();
    expect(isValidUrl('http://localhost:8080')).toBeTruthy();
    expect(isValidUrl('htt://github.com/')).toBeFalsy();
    expect(isValidUrl({})).toBeFalsy();
    expect(isValidUrl(42)).toBeFalsy();
  });
});
