// types/AccessToken.ts
export class AccessToken {
    sub: string;
    username: string;
   // roles: string[];
    access_token: string;
 //   iat: number;
  //  exp: number;
  
    constructor(sub: string, username: string,access_token: string) {
      this.access_token = access_token;
      this.sub = sub;
      this.username = username;
    //  this.roles = roles;
    }
  }
  


  