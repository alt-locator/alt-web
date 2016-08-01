export class AltWebPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('alt-web-app h1')).getText();
  }
}
