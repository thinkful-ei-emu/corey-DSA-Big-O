/* 
-Number 1---------------------------------------------------------------

1) Determine the Big O for the following algorithm: 
    You are sitting in a room with 15 people. 
    You want to find a playmate for your dog, 
    preferably of the same breed. So you want to know 
    if anyone out of the 15 people have the same breed as your dog. 
    You stand up and yell out, who here has a golden retriever and 
    would like to be a playdate for my golden. 
    Someone yells - "I do, be happy to bring him over"

A) Constant time O(1), one person is searching through 15 people at once. 
    The persons search is the function and the 15 people are the array.
    The search is being done one time.

2) Determine the Big O for the following algorithm: 
    You are sitting in a room with 15 people. You want to 
    find a playmate for your dog who is of the same breed. 
    So you want to know if anyone out of the 15 people have 
    the same breed as your dog. You start with the first 
    person and ask him if he has a golden retriever. 
    He says no, then you ask the next person, and the next, 
    and the next until you find someone who has a golden or 
    there is no one else to ask.

A) O(n) one person is searching through 15 people at once. 
    The persons search is the function and the 15 people are the array.
    The search is being iteratively, one by one.


-Number 2---------------------------------------------------------------

function isEven(value) {
    if (value % 2 == 0) {   O(1)
        return true;        O(1)
    }
    else
        return false;       O(1)
    }
}

A) This function is constant time O(1), the modulo if statement will only ever
    output true or false.


-Number 3---------------------------------------------------------------

function areYouHere(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {       O(n^k)
        const el1 = arr1[i];                      O(1)
        for (let j = 0; j < arr2.length; j++) {   O(n^k)
            const el2 = arr2[j];                  O(1)
            if (el1 === el2) return true;         O(1)
        }
    }
    return false;
}

A) This function is Polynomial time O(n^k), beacuse the itteration happening 
    within nested arrays.


-Number 4---------------------------------------------------------------

function doubleArrayValues(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] *= 2;
    }
    return array;
}

A) This function is Linear time O(n). The array is being doubled, which
    will take different amounts of time depending on the size but it is 
    still a linear search.


-Number 5---------------------------------------------------------------

function naiveSearch(array, item) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            return i;
        }
    }
}

A) This function is Linear time O(n), as it searchs through the array for the item.
    the amount of time will only vary depending on how large the array is.


-Number 6---------------------------------------------------------------

function createPairs(arr) {
    for (let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            console.log(arr[i] + ", " +  arr[j] );
        }
    }
}

A) This function is Polynomial time O(n^2) as it has a nested itteration of an 
    arrray inside another array itteration.


-Number 7---------------------------------------------------------------

function compute(num) {
    let result = [];
    for (let i = 1; i <= num; i++) {

        if (i === 1) {
            result.push(0);
        }
        else if (i == 2) {
            result.push(1);
        }
        else {
            result.push(result[i - 2] + result[i - 3]);
        }
    }
    return result;
}

A) This function takes in a number as a parameter and itterates over it. This looks
    alot like the fibinacci sequence algorythem. This function would be O(n)
    The output is exponential but it will be the same no matter what.


-Number 8---------------------------------------------------------------

function efficientSearch(array, item) {
    let minIndex = 0;
    let maxIndex = array.length - 1;
    let currentIndex;
    let currentElement;

    while (minIndex <= maxIndex) {
        currentIndex = Math.floor((minIndex + maxIndex) / 2);
        currentElement = array[currentIndex];

        if (currentElement < item) {
            minIndex = currentIndex + 1;
        }
        else if (currentElement > item) {
            maxIndex = currentIndex - 1;
        }
        else {
            return currentIndex;
        }
    }
    return -1;
}

A) This function is Logarithmic time o(log(n)), it is a search function with some
    built in efficiancies like finding the center of the array. Then compares
    the middle of the array to the item passed in. So instead of searching from
    beginning to end, this search starts in the middle and works outwards,
    effectivly cutting the runtime in half.


-Number 9---------------------------------------------------------------

function findRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

A)


-Number 10---------------------------------------------------------------

A)


-Number 11---------------------------------------------------------------

A)



*/



 
