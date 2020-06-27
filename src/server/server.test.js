import { listen } from './server'

test('listen', () => {
    expect(listen().toBeCalled())
});