/* Challenge 1: Famous Writers
Did you know you can also have an array of objects? We've created one for you here. Loop through the array, 
and for each object, `console.log()` out the sentence:

"Hi, my name is {firstName} {lastName}. I am {age} years old, and work as a {occupation}."

Here is the array:

*/ 

var writers = [
  {
    firstName: "Virginia",
    lastName: "Woolf",
    occupation: "writer",
    age: 59,
    alive: false
  },
  {
    firstName: "Zadie",
    lastName: "Smith",
    occupation: "writer",
    age: 41,
    alive: true
  },
  {
    firstName: "Jane",
    lastName: "Austen",
    occupation: "writer",
    age: 41,
    alive: false
  },
  {
    firstName: "bell",
    lastName: "hooks",
    occupation: "writer",
    age: 64,
    alive: true
  },
];

// solution 1 - for loop
// function writerName(element) {
//   for (i = 0; i < writers.length; i++) {
//     if(writers[i].alive === true) {
//       console.log("Hi, my name is " +
//     writers[i].firstName + 
//     " " + 
//     writers[i].lastName + 
//     " " + "I am " + 
//     writers[i].age + 
//     " " + "years old " + 
//     "and work as a " + 
//     writers[i].occupation);
//     //or 
//     //console.log("Hi my name is ${writers[i].firstName}${writers[i].secondName}");
  
//   }


//     }

// }
// writerName(); 

// or

// writers.forEach(function(writer) {
//   if(!writers.alive) {
//     console.log("Hi, my name is ${writer.firstName}");
//   }
// })

// // or
// var livingWriter = writers.filter(function(writer) {
//   return writer.alive;
// }).map(function(writer) {
//   console.log("Hi, my name is ${writer.firstName} ${writer.lastName}.");
// })


//console.log(writers);

/*
If you want an extra challenge, only `console.log()` the writers that are alive.
*/

for (var i = 0; i < writers.length; i++) {
  if (writers[i].alive) {
    console.log(`Hi, my name is ${writers[i].firstName} ${writers[i].lastName}`);
  }
}

writers.forEach(function(writer) {
  if (writer.alive) {
    console.log(`Hi, my name is ${writer.firstName}`);
  }
})

var livingWriters = writers.filter(function(writer) {
  return writer.alive;
}).map(function(writer) {
  console.log(`Hi, my name is ${writer.firstName} ${writer.lastName}.`);
});