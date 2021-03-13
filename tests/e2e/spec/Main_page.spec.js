const mainPage = require("../pageobject/main.page");

describe("Main Page tests", () => {
    it("should test that the text displayed is correct", testHelloWorld);
})

function testHelloWorld() {
    mainPage.open();
    expect(mainPage.textHelloWorldElement.getText()).toBe("Hello World!");
}