const Page = require("./Page")

class MainPage extends Page {

    get btnQueryButton () { return $("#query-button") }

    open() {
        super.open("weather-app-react/")
    }
}

module.exports = new MainPage()