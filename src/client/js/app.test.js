
import event from './app'
import getGeoInfo from './app'

test("Check weatherinfo", () => {
    expect(getGeoInfo().toBeCalled())
})
