describe("countWords", function() {
  
  it("should return an object", function() {
    expect(typeof countWords("ask a bunch try a bunch get a bunch")).toBe("object");
  });

  it("should return an object where each property gives a word in the string, with its number of appearances", function() {
    var result = {
      ask: 1,
      a: 2,
      bunch: 2,
      get: 1
    };
    expect(countWords("ask a bunch get a bunch")).toEqual(result);
  });

  it("should return an empty object if passed an empty string", function() {
    expect(countWords("")).toEqual({});
  });

});

/*
function countWords(a){
  if(a === ""){
    return {}
  } else {
    return "string";
  }
}
*/


/*

QUESTION SET NUMBER 1: (on the "countWords" function)

* How many tests are there?
* On test number 1, what is expected?
* On test number 1, what is the actual
* On test number 2, what is the expected?

* Uncomment out the countWords function. Which (if any) tests would this function pass?

*/

//--------------------------------------------------------//

describe("repeatString", function() {
  it("should return a string", function() {
    expect(typeof(repeatString("what", 3))).toBe("string");
  });
  it("should repeat a string a given number of times", function() {
    expect(repeatString("what", 3)).toBe("whatwhatwhat");
  });
  it("should repeat a string 0 number of times", function() {
    expect(repeatString("what", 0)).toBe("");
  });
});

/*
function repeatString(string, num){
  return string + string + string;
}
*/

/*

QUESTION SET NUMBER 2: (on the "repeatString" function)

* How many tests are there?
* On test number 2, what is the expected?
* On test number 2, what is the actual?
* On test number 3, what is the expected?
* On test number 3, what is the actual?

* Uncomment out the repeatString function. Which (if any) tests would this function pass?

*/



describe('uniq', function() {
  it('should return all unique values contained in an unsorted array', function() {
    var numbers = [1, 2, 1, 3, 1, 4];
    expect(uniq(numbers)).to.eql([1, 2, 3, 4]);
  });

  it('should produce a brand new array instead of modifying the input array', function() {
    var numbers = [1, 2, 1, 3, 1, 4];
    var uniqueNumbers = uniq(numbers);

    expect(uniqueNumbers).to.not.equal(numbers);
  });
});

/*
function uniq(nums){ 
  return [nums[0]];
}
*/

/*

QUESTION SET NUMBER 3: 

* What is the name of the function we are testing here?
* How many tests are there?
* On test number 2, what is the expected?
* On test number 2, what is the actual?

* Uncomment the uniq function. Which (if any) - tests will this function uniq pass?

*/



describe('Bee class functionality', function() {

  it('should have an `age` property that is set to `5`', function() {
    expect(bee.age).to.equal(5);
  });

  it('should have a `color` property that is set to `yellow`', function() {
    expect(bee.color).to.equal('yellow');
  });

});

/*

QUESTION SET NUMBER 4: 

* How many tests are there?
* What is the actual on test 2?
* what is the expected on test 2?

* Write a bee object that would pass the tests

*/
