export class Angular2PaypalPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('angular2-paypal-app h1')).getText();
  }
}
