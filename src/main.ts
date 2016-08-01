import {bootstrap} from '@angular/platform-browser-dynamic';
import {enableProdMode} from '@angular/core';
import {ROUTER_PROVIDERS} from '@angular/router';
import {
  FIREBASE_PROVIDERS,
  defaultFirebase,
  firebaseAuthConfig,
  AuthMethods,
  AuthProviders
} from 'angularfire2';

import { AltWebAppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(AltWebAppComponent, [
  ROUTER_PROVIDERS,
  FIREBASE_PROVIDERS,
  defaultFirebase({
    apiKey: '',
    authDomain: '',
    databaseURL: 'alt-github.firebaseio.com',
    storageBucket: ''
  })
]);
