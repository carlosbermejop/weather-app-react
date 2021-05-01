const mainPage = require("../pageobject/main.page")

describe("Main Page tests", () => {
    it("should test that the text displayed is correct", testHelloWorld)
})

async function testHelloWorld() {
    await mainPage.open()
    const btnQueryButton = await mainPage.btnQueryButton
    expect(await btnQueryButton.isDisplayed()).toBe(true, "The Query Button could not be found correctly.")
}