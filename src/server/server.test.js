const startupMessage = require('./server');
test('listen', () => {
    expect(startupMessage).toBeDefined();
});