// for loop

// for (let index = 1; index < 6; index++) {
//     console.log(`loop ${index}`);
    
// };
//  console.log(`loop is over!`);

// const pronouns = ["I", "You", "Him", "Her", "Their"];

// for (let i = 0; i < pronouns.length; i++) {
//     // console.log(i, pronouns[i]);
//     // console.log(`${i}. ${pronouns[i]}`);
//     let html = `<div>${pronouns[i]}</div>`
//     console.log(html);
// }


// While Loop

// let index = 0;
// while (index < 6) {
//     console.log(`loop ${index}`);
//     index++;
// };

// const names = ["َSirvan","Daniel", "Aqil", "Jasem", "Hantoush"];

// let i=0;
// while (i < names.length) {

//     console.log(`loop ${names[i]}`);
//     i++;

// };


// do while

// do {
//     console.log(`loop ${names[i]}`);
//     i++;
// } while (i < names.length);


// if statements

// const age = 20
// const age = 25

// if (age > 20) {
//     console.log(`u r over 20!`);
// }


// it can also use if with some counting attributes that can count like .length!


// if and else if and else
// when a condition is pass, if statement will go for another one. "if sth didn't work out, try sth else; otherwise return sth by default if nth expected"

// for adding some other condition or command, can use && or || 


// Logic not true (!);
// if we write "!true", it means "false".



// break and continue

const score = [50, 25, 0, 32, 90, 8];

for (let i = 0; i < score.length; i++) {

    if (score[i]===0) {
        continue;
    }
    console.log(`your score is ${score[i]}`);

    if (score[i]===100) {
        console.log(`congrats! u've claimed the top score ever!!!`);
        break;
    }
}