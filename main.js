// Edgar Reyes , Seth Bullock , Lakwanjala Williams

const main = document.querySelector('main');
const sampleArray = [
    469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 
    456, 21, 398, 339, 882, 848, 179, 535, 940, 472,
];
// setup

const sections = [];

for(let i = 0; i < 23 ; i++){
let heading = document.createElement('h3')
let section = document.createElement('section')
heading.append(`KATA ${i +1}`);

main.append(heading)
main.append(section)

sections.push(section)
}
 // Kata 1 

 for (let i = 1; i <=20; i++){
     let answer = document.createElement('div');
     answer.append(i)
     sections[0].append(answer)
 }

 // Kata 2 

 for (let i = 2; i <= 20; i+= 2){
 let answer = document.createElement('div');
 answer.append(i)
 sections[1].append(answer)
}

//Kata 3

for (let i = 1; i < 20; i+= 2){
    let answer = document.createElement('div');
    answer.append(i)
    sections[2].append(answer)
}

// Kata 4

for (let i = 1; i <=20; i++){
    let answer = document.createElement('div');
    answer.append(5*i)
    sections[3].append(answer)
}

// Kata 5

for (let i=1; i<=10;i++){
    let answer = document.createElement('div');
    answer.append(i*i)
    sections[4].append(answer)
}

// Kata 6
for (let i = 20; i > 0; i--){
    let answer = document.createElement('div');
    answer.append(i)
    sections[5].append(answer)
}

// Kata 7
for (let i=20 ; i > 2;i -= 2){
    let answer = document.createElement('div');
    answer.append(i)
    sections[6].append(answer)
}

//Kata 8
for (let i=19; i>0 ;i-= 2){
    let answer = document.createElement('div');
    answer.append(i)
    sections[7].append(answer)
}

//Kata 9
for (let i=20; i>0;i--){
    let answer = document.createElement('div');
    answer.append(5*i)
    sections[8].append(answer)
}

//Kata 10
for (let i = 10; i > 0;i--){
    let answer = document.createElement('div');
    answer.append(i*i)
    sections[9].append(answer)
}
//Kata 11

for (let value of sampleArray){
    let answer = document.createElement('div');
    answer.append(value)
    sections[10].append(answer)
}

//Kata 12
for (let value of sampleArray){
    if (value % 2 === 0){
 let answer = document.createElement('div')
 answer.append(value)
 sections[11].append(answer)
    }
}

//Kata 13


for (let value of sampleArray){
    if (value % 2 !== 0){
 let answer = document.createElement('div')
 answer.append(value)
 sections[12].append(answer)
    }
}

//Kata 14

for (let value of sampleArray){
    let answer = document.createElement('div');
    answer.append(value * value)
    sections[13].append(answer)

}

//Kata 15
let kata15sum = 0
let kata15answer = document.createElement('div')
for(let i =1; i<= 20; i++){
    kata15sum += i
}
kata15answer.append(kata15sum)
sections[14].append(kata15answer)


//Kata 16
let kata16sum = 0;
let kata16answer = document.createElement('div');

for (let value of sampleArray){
    kata16sum += value
}

kata16answer.append(kata16sum)
sections[15].append(kata16answer)

//kata 17

let kata17answer = document.createElement('div')
kata17answer.append(Math.min(...sampleArray))
sections[16].append(kata17answer)

//kata 18 
let kata18answer = document.createElement('div')
kata18answer.append(Math.max(...sampleArray))
sections[17].append(kata18answer)

//kata 19
for (let i = 0; i < 20; i++){
    let rect = document.createElement('div')
    rect.style.height = '20px'
    rect.style.width = '100px'
    rect.style.backgroundColor = 'grey'
    sections[18].append(rect)
}
//kata 20

for (let i = 1; i < 20; i++){
    let rect = document.createElement('div')
    rect.style.height = '20px'
    rect.style.width= `${100 + 5*i}px`
    rect.style.backgroundColor = 'grey'
    sections[19].append(rect)
}

//kata 21
for (let value of sampleArray){
    let rect = document.createElement('div')
    rect.style.height = '20px'
    rect.style.width= `${value}px`
    rect.style.backgroundColor = 'grey'
    sections[20].append(rect)
}
//kata 22
for (let i = 0; i< sampleArray.length; i++){
    let rect = document.createElement('div')
    rect.style.height = '20px'
    rect.style. width =`${sampleArray[i]}px`
    if (i % 2 !==0){
        rect.style.backgroundColor = 'red'
    }else{
        rect.style.backgroundColor = 'gray'
    }
    sections[21].append(rect)
}
//kata 23

for (let i = 0; i < sampleArray.length; i++) {
    let rect = document.createElement ('div')
    rect.style.height = '20px'
    rect.style.width = `${sampleArray[i]}px`
    if (sampleArray[i] % 2 === 0){
        rect.style.backgroundColor = 'red'
    }else{
        rect.style.backgroundColor = 'grey'
    }
    sections[22].append(rect)
}

