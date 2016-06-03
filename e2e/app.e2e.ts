import { Angular2PaypalPage } from './app.po';

describe('angular2-paypal App', function() {
  let page: Angular2PaypalPage;

  beforeEach(() => {
    page = new Angular2PaypalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('angular2-paypal works!');
  });
});
