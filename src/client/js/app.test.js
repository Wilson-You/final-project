@jest-enviroment jsdom

import { allDone } from './app';
import { JSDOM } from 'jsdom';

test('listen', () => {
    expect(allDone).toBeDefined();
});