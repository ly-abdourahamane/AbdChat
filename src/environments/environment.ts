// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBl3mAnmGF8rv1kJ-LHNfwIDVLjWwVZ9Ww',
    authDomain: 'chat-angular-18f8a.firebaseapp.com',
    databaseURL: 'https://chat-angular-18f8a.firebaseio.com',
    projectId: 'chat-angular-18f8a',
    storageBucket: 'chat-angular-18f8a.appspot.com',
    messagingSenderId: '218876998441'
  }
};
