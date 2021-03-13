const Page = require("./Page");

class MainPage extends Page {
    
    get textHelloWorldElement () { return $("#App") }

    open() {
        super.open("weather-app-react/");
    }
}

module.exports = new MainPage();