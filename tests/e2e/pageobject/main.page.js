const Page = require("./Page");

class MainPage extends Page {
    
    get textHelloWorldElement () { return $("#App") }
}

module.exports = new MainPage();