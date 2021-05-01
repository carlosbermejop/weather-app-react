class Page {

    open(path) {
        browser.url(`${browser.options.baseUrl}/${path}`)
        browser.maximizeWindow()
    }
}

module.exports = Page