console.log("hello world");

const ages = [12, 17, 18, 20, 15, 30, 25];

// Define the filter function
function filterAdults(ageArray) {
    return ageArray.filter(function (age) {
        return age >= 18;  // Keep only ages 18 or above
    });
}

// Call the function
const adultAges = filterAdults(ages);
console.log(adultAges);


// console.log(filterAdults(ages)); or write like this 

//filter out the ones less than 30
function filterAges(givenArray) {
    return givenArray.filter(function (age) {
        return age <= 30;
    });
}

const lessThan30 = filterAges(ages);
console.log(lessThan30);

// console.log(filterAges(ages));



//less then 18

const lessThan18 = ages.filter(function (nums) {
    return nums < 18;
})

console.log(lessThan18)




for (num = 1; num >= -10; num -= 2) {
    console.log(num)
}


//map practice 

const number = [2, 3, 4, 5, 6, 7]

function multiply(number) {
    return number.map()
}


function addNum(num1, num2) {

    return num1 + num2;
}

console.log(addNum(2, 4));


// when we don't wanna write the function, this is fucntion as a variable

const mulNum = (num1, num2) => {

    return num1 * num2;
}

console.log(mulNum(2, 4));

ar = [1, 2, 3, 4, 5, 6, 7]

ar.forEach((iterate) => {

    console.log(iterate)

});

const person = {

    hobbies: ['music', 'movies', 'sports'],

    address: {

        streen: '123',
        city: "dhaka"


    }
}

function Dev(name, profession, duration) {
    return console.log(`Name is: ${name}, works as: ${profession}, has been coding for: ${duration} years`)
}

Dev("Shamim", "devoloper", 3);

// const name = prompt("Type your name:")
// const year = prompt("Type the duration:")
// const profession =prompt("Type you profession:")

// Dev(name , year, profession);


const color = x > 10 ? 'red' : 'blue';

switch (color) {

    case 'red':
        console.log('the color is red');
        break;
    case 'blue'    
}