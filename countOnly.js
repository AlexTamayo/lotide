/*
Let's work together to implement countOnly.
This function should take in a collection of items and return counts for a specific subset of those items.
It won't count everything. In order to decide what to count,
it will also be given an idea of which items we care about and it will only count those, ignoring the others.

Items in our case will be limited to Strings.
*/

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  const results = {};

  for (const item of allItems) {
    // console.log(item);

    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
  
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
};

// MODULE EXPORT
module.exports = countOnly;

// TEST CODE
if (require.main === module) {

  console.log(`This is the main module\n`);

}