const config = {
    development: 'http://localhost:3000/oauth2/redirect/google',
    staging: 'http://localhost:3000/oauth2/redirect/google',
    production: 'http://localhost:3000/oauth2/redirect/google',
  };
  
  export const GOOGLE_CALLBACK_URL = config[process.env.NODE_ENV];
  