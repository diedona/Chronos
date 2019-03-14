// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  baseApiURL: "https://localhost:7890/api",
  firebase: {
    apiKey: "AIzaSyAGOGqtD0QTDshiv2AdSQ45ae1ZkS7Fh4s",
    authDomain: "chronos-1f0fc.firebaseapp.com",
    databaseURL: "https://chronos-1f0fc.firebaseio.com",
    projectId: "chronos-1f0fc",
    storageBucket: "chronos-1f0fc.appspot.com",
    messagingSenderId: "283294941120"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
