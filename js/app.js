'use strict';

let username = prompt('what is your name?');
while (!username){
username = prompt('please write your name');
}
alert(`hello ${username} nice too meet you`);

let ready=prompt('do i  ready?');

switch(ready.toLowerCase()){
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

let enthusiastic=prompt('do i enthusiastic?');

switch(enthusiastic.toLowerCase()){
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


let feelgood=prompt('do i  feel good?');

switch(feelgood.toLowerCase()){
    case 'yes':
        // console.log('nice to hear that');
       alert('nice to hear that');
       score++;
    break;
    case 'y':
    // console.log('nice to hear that');
    alert('nice to hear that');
    score++;
    break;
    case 'no':
        // console.log('sorry for hear that');
       alert('sorry for hear that');
        break;
        case 'n':
           
            // console.log('sorry for hear that');
           alert('sorry for hear that');
}


let experience=prompt('do i have any previous experience?');

switch(experience.toLowerCase()){
    case 'yes':
    // console.log('we need you to be with us');
   alert('we need you to be with us');
   score++;
    break;
    case 'y':
    // console.log('we need you to be with us');
    alert('we need you to be with us');
    score++;
    break;
    case 'no':
       
        // console.log('better you have ');
       alert('better you have ');
        break;
        case 'n':
            // console.log('better you have');
            alert('better you have ');
}


let withus=prompt('do i like blue color?');

switch(withus.toLowerCase()){
    case 'yes':
    // console.log('nice color');
    alert('nice color');
    score++;
    break;
    case 'y':
    // console.log('nice color');
    alert('nice color');
    score++;
    break;
    case 'no':
        // console.log('i dont like it');
        alert('i dont like it ');
        break;
        case 'n':
//             console.log('i dont like it ');
alert('i dont like it ');
}

let bMonth=prompt('which month i was born?');

for(let q=0;q<4;q++){
    if(bMonth===11){
        alert('correct answer')
        score++
        break;  
    }

else if(bMonth>11){
     bMonth=prompt('too high,try again');
   
}else if(bMonth<11){
    bMonth=prompt('too low,try again');
}
else{
    alert('the correct answer is 11')
    break;
}
}

let arrayofColor=['red','black','blue'];
for(let q=0;q<6;q++){
    let color=prompt('which color i like it?')
// for(let i=0;i<arrayofColor.length;i++){
    if(color=='red'){
        alert('correct answer') 
        break;
    }
    else if(color=='black'){
        alert('correct answer') 
        break;
    }
    else if(color=='blue'){
    alert('correct answer') 
    break;
}
else if(color!='blue'){
    color=prompt('please try again');

}
else if(color!='red'){
    color=prompt('please try again');
}
else if(color!='black'){
    color=prompt('please try again');
}
else{
    alert(`the correct answer is ${arrayofColor}`)
}
}





