// Please tidy this file up until line 43 where it says "⛔ STOP"

/* 						👀 Expected output:

							Bart
							Lisa
							Maggie
							Result: ✅ SUCCESS
*/

const people = [
  {
    name: "Bart",
    age: 12,
  },
  {
    name: "Lisa",
    age: 10,
  },
  {
    name: "Maggie",
    age: 1,
  },
];

let result = 0;

function printNames(people) {
  people.map((person) => console.log(person.name));
}

printNames(people);

function compareInputAges(people) {
  people.forEach((person) => {
    if (person.age === getInputAge(person)) result += 1;
  });
}

// check all the inputs match
compareInputAges(people);

// ⛔🚫 STOP TIDYING! You're done ✅

// ⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️
// ⚠️ DO NOT MODIFY BELOW  ⚠️
// ⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️

// PRINT SUCCESS IF EXACTLY 2 INPUTS MATCH
console.log(`Result: ${result === 2 ? "✅ SUCCESS" : "❌ FAIL"}`);

function getInputAge(person) {
  switch (person.name) {
    case "Bart":
      return 12;
    case "Lisa":
      return 10;
    case "Maggie":
      return "1"; // she's a baby, she's allowed to get this type wrong!
    default:
      return 0;
  }
}
