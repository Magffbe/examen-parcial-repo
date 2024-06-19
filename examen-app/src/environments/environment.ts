// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import { initializeApp } from '@angular/fire/app';
import 'firebase/storage';
import 'firebase/auth';
import 'firebase/firestore';

export const firebaseConfig = {
  apiKey: 'AIzaSyAkxG5fJyZIlUEIhISOy-GigqDzoC6up1c',
  authDomain: 'dmovil2-f3351.firebaseapp.com',
  projectId: 'dmovil2-f3351',
  storageBucket: 'dmovil2-f3351.appspot.com',
  messagingSenderId: '1096886435437',
  appId: '1:1096886435437:web:f3a1e6faeaf12221be8964',
};

export const environment = {
  production: true,
  firebaseConfig,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
