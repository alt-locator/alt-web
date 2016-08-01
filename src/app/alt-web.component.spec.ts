import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { AltWebAppComponent } from '../app/alt-web.component';

beforeEachProviders(() => [AltWebAppComponent]);

describe('App: AltWeb', () => {
  it('should create the app',
      inject([AltWebAppComponent], (app: AltWebAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'alt-web works!\'',
      inject([AltWebAppComponent], (app: AltWebAppComponent) => {
    expect(app.title).toEqual('alt-web works!');
  }));
});
