let message = '';
const user = {
  age: 20,
  hobby: 'html',
  name: 'Mango',
  premium: true,
  mood: 'happy',
  'full time': true,
};
 
//Write code under this line  
 user.premium = false;
user.hobby = 'skydiving';

//console.log(user);
 
const keys = Object.keys(user);
// Write code under this line
 for (const key of keys) {
   message += `${key}: ${user[key]}\n`;
 }
 
console.log(message); 
/*
'age : 20 
hobby : skydiving 
name : Mango 
premium : false 
mood : happy 
"full time" : true 
' */