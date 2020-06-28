import { allDone } from './app';
test('listen', () => {
    global.document.body.innerHTML = `<div><button id="go" class="go"/></div>`
    expect(allDone).toBeDefined();
});