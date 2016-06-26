export class LinkSquashAppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('lsq-root h1')).getText();
  }
}
