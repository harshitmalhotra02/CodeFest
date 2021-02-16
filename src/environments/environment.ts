// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  client_id: 'C44a6d71dfc8245cc215a61a73cabad81e3dae5f8d254056188ccc3e062f5f387',
  client_secret: '1df5f5a0ac4f40bdbc29c07cb7d6bc723f1444acef3bce07e3c55f674285e395',
  redirect_uri: 'http://localhost:4200/home',
  scope: 'spark:all spark:kms'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
