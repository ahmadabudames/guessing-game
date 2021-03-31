'use strict';
let score = 0;
let username = prompt('what is your name?');
while (!username) {
    username = prompt('please write your name');
}
alert(`hello ${username} nice too meet you`);


// Question 1
function questionOne() {
    let ready = prompt('do i  ready?');

    switch (ready.toLowerCase()) {
        case 'yes':
            // console.log('lets start');
            alert('lets start');
            score++;
            break;
        case 'y':
            // console.log('lets start');
            alert('lets start');
            score++;
            break;
        case 'no':
            // console.log('take your time to be ready');
            alert('take your time to be ready');
            break;
        case 'n':
            // console.log('take your time to be ready');
            alert('take your time to be ready');
    }
}

//Question 2
function questionTwo()
{
let enthusiastic = prompt('do i enthusiastic?');

switch (enthusiastic.toLowerCase()) {
    case 'yes':
        // console.log('nice to hear that');
        alert('nice to hear that');
        score++;
        break;
    case 'y':
        // console.log('nice to hear that');('nice to hear that');
        alert('nice to hear that');
        score++;
        break;
    case 'no':
        //  console.log('oh you looked like you had difficult day');
        alert('oh you looked like you had difficult day');
        break;
    case 'n':
        // console.log('oh you looked like you had difficult day');
        alert('oh you looked like you had difficult day');
}
}

// let feelgood = prompt('do i  feel good?');

// switch (feelgood.toLowerCase()) {
//     case 'yes':
//         // console.log('nice to hear that');
//         alert('nice to hear that');
//         score++;
//         break;
//     case 'y':
//         // console.log('nice to hear that');
//         alert('nice to hear that');
//         score++;
//         break;
//     case 'no':
//         // console.log('sorry for hear that');
//         alert('sorry for hear that');
//         break;
//     case 'n':

//         // console.log('sorry for hear that');
//         alert('sorry for hear that');
// }


// let experience = prompt('do i have any previous experience?');

// switch (experience.toLowerCase()) {
//     case 'yes':
//         // console.log('we need you to be with us');
//         alert('we need you to be with us');
//         score++;
//         break;
//     case 'y':
//         // console.log('we need you to be with us');
//         alert('we need you to be with us');
//         score++;
//         break;
//     case 'no':

//         // console.log('better you have ');
//         alert('better you have ');
//         break;
//     case 'n':
//         // console.log('better you have');
//         alert('better you have ');
// }


// let withus = prompt('do i like blue color?');

// switch (withus.toLowerCase()) {
//     case 'yes':
//         // console.log('nice color');
//         alert('nice color');
//         score++;
//         break;
//     case 'y':
//         // console.log('nice color');
//         alert('nice color');
//         score++;
//         break;
//     case 'no':
//         // console.log('i dont like it');
//         alert('i dont like it ');
//         break;
//     case 'n':
//         //             console.log('i dont like it ');
//         alert('i dont like it ');
// }

// let bMonth = prompt('which month i was born?');

// for (let q = 0; q < 4; q++) {
//     if (bMonth === 11) {
//         alert('correct answer')
//         score++
//         break;
//     }

//     else if (bMonth > 11) {
//         bMonth = prompt('too high,try again');

//     } else if (bMonth < 11) {
//         bMonth = prompt('too low,try again');
//     }
//     else {
//         alert('the correct answer is 11')
//         break;
//     }
// }
// let color = 0;
// let arrayofColor = ['red', 'black', 'blue'];
// let attempts = 6;

// hasAttempts: while (attempts) {
//     color = prompt('which color i like it?');
//     attempts = attempts - 1;
//     for (let i = 0; i < arrayofColor.length; i++) {

//         if (color === arrayofColor[i]) {
//             alert('correct here the answer' + arrayofColor);
//             break hasAttempts;
//         }
//     }
//     alert('sorry incorrect answer');
// }
// if (!attempts) {
//     alert('sorry your chance its over , here are the answer' + arrayofColor);
// }







questionOne()
questionTwo()