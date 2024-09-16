const demo = document.getElementById("demo");

//if else cond.branching
/* const getDay = () => {
    if (new Date().getDay() === 0) {
    return "Sunday";
    }
    if (new Date().getDay() === 1) {
    return "Monday";
    }
    if (new Date().getDay() === 2) {
    return "Tuesday";
    }
    if (new Date().getDay() === 3) {
    return "Wednesday";
    }
    if (new Date().getDay() === 4) {
    return "Thursday";
    }
    if (new Date().getDay() === 5) {
    return "Friday";
    }
    if (new Date().getDay() === 6) {
    return "Saturday";
    }
    };
    const today = getDay();
    demo.innerHTML = `Today is ${today}`; */

//ternary operator --> ? tanda tanya
const today = {
  day: 1,
  name: "Monday",
};

// Single Condition
/* new Date().getDay() === today.day
? (demo.innerHTML = `Today is ${today.name}`)
: (demo.innerHTML = `Today is not ${today.name}`);
const anotherDay = {
day: 5,
name: "Friday",
};

// Multiple Condition
new Date().getDay() === today.day
? (demo.innerHTML = `Today is ${today.name}`)
: new Date().getDay() === anotherDay.day
? (demo.innerHTML = `Today is ${today.anotherDay.day}`)
: (demo.innerHTML = `Today is neither ${today.name} nor ${anotherDay.name}`) */

//switch Case
/* const getDay = () => {
    switch (new Date().getDay()) {
        case 0:
            return "Sunday";
            break;
        case 1:
            return "Monday";
            break;
        case 2:
            return "Tuesday";
            break;
        case 3:
            return "Wednesday";
            break;
        case 4:
            return "Thursday";
            break;
        case 5:
            return "Friday";
            break;
        case 6:
            return "Saturday";
    }
};
const today = getDay();
demo.innerHTML = `Today is ${today}`; */

//CALLBACKS
/* const myNumbers = [4, 1, -20, -7, 5, 9, -6];
// Call removeNeg with a Callback
const posNumbers = removeNeg(myNumbers, (x) => x >= 0);
// Display Result
document.getElementById("demo").innerHTML = posNumbers;
// Remove negative numbers
function removeNeg(numbers, callback) {
const myArray = [];
for (const x of numbers) {
if (callback(x)) {
myArray.push(x);
}
}
return myArray;
} */

//PROMISES
/* const myDisplayer = (some) => {
  document.getElementById("demo").innerHTML = some;
};
let myPromise = new Promise((myResolve, myReject) => {
  let x = 0;
  // some code (try to change x to 5)
  if (x == 0) {
    myResolve("OK"); // mengirimkan flag OK melalui callback
  } else {
    myReject("Error"); // mengirimkan flag Error melalui callback
  }
});
myPromise.then(
  (value) => {
    myDisplayer(value); // menangkap hasil value untuk ditampilkan
  },
  (error) => {
    myDisplayer(error); // menangkap hasil error untuk ditampilkan
  }
); */

//ASYNC
/* const myFunction = async () => {
    return "Hello";
} */

/* const myFunction = () => {
    return Promise.resolve("Hello");
}; */

//async await
/* const myDisplayer = (some) => {
  document.getElementById("demo").innerHTML = some;
};
const myFunction = async () => {
  return "Hello";
};
myFunction().then(
  (value) => {
    myDisplayer(value);
  },
  (error) => {
    myDisplayer(error);
  }
); */

//AWAIT
const myDisplay = async () => {
  const myPromise = new Promise((resolve) => {
    setTimeout(function () {
      resolve("I love You !!");
    }, 3000);
  });
  document.getElementById("demo").innerHTML = await myPromise;
};

myDisplay();