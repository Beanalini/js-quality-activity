// Please tidy this file up until line 43 where it says "⛔ STOP"

/* 						👀 Expected output:

							Bart
							Lisa
							Maggie
							Result: ✅ SUCCESS
*/

// Declare variables
var x = { name: "Bart", age: 12 };
var y = { name: "Lisa", age: 10 };

// put into array
var a = [x, y, { name: "Maggie", age: 1 }];

// create the function
function p(p) {
  console.log(p.name);
}

// show all the names first
p(x);
p(y);
p(a[2]);

var result = 0;

function cmpInpt(p) {
  // check the input matches
  if (p.age === getInputAge(p)) {
    // add to result
    result += 1; // increment for each correctly input age
  }
}

// check all the inputs match
cmpInpt(x);
cmpInpt(y);
cmpInpt(a[2]);

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
