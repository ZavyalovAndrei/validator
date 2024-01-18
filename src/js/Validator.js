export class Validator {
   validateUsername(userName) {
       if (/^[a-z][a-z_\-\d]*[a-z]$/gi.test(userName)){
           return !/\d{4,}/.test(userName);
       } else {
           return false;
       }
   } 
}
