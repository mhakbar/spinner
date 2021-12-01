//process.stdout.write('hello from spinner1.js...\rheyyy\n');

let sentence = 'hello from spinner1.js...\rheyyy\n   ';
process.stdout.write(sentence);
let sentence2 = '\r|\r/\r-\r\\\r|'

let delay = 0;
for (const char of sentence2) {

  

  setTimeout(() => {
    process.stdout.write(char);// print the char here
    //console.log(char);
    //process.stdout.write("\n"); 
  }, delay); // <= 1s delay to make it noticeable. Can dial it down later.
  delay += 100; 
};


// setTimeout(() => {
//   process.stdout.write('\r|   \n'),10000;
 
// },100 );

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 300);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 500);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\\   '); 
// }, 700);

// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 900);

// ... fill in the rest yourself//