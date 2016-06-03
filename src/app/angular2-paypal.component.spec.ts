import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { Angular2PaypalAppComponent } from '../app/angular2-paypal.component';

beforeEachProviders(() => [Angular2PaypalAppComponent]);

describe('App: Angular2Paypal', () => {
  it('should create the app',
      inject([Angular2PaypalAppComponent], (app: Angular2PaypalAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'angular2-paypal works!\'',
      inject([Angular2PaypalAppComponent], (app: Angular2PaypalAppComponent) => {
    expect(app.title).toEqual('angular2-paypal works!');
  }));
});
