# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @alextamayo/lotide`

**Require it:**

`const _ = require('@alextamayo/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* **`assertArraysEqual`**: Takes two array and lets the user know whether they have the same content or not.

* **`assertEqual`**: Takes two values and lets the user know whether they have the same or not.

* **`assertObjectsEqual`**: Takes two objects and lets the user know whether they have the same content or not.

* **`countLetters`**: Makes and object with the incidence of each letter of the provided string.

* **`countOnly`**: Takes in a collection of items and return counts for a specific subset of those items.

* **`eqArrays`**: Takes two arrays, return true if the same and false otherwise.

* **`eqObjects`**: Takes two objects, return true if the same and false otherwise.

* **`findKey`**: Takes in an object and a callback.

* **`findKeyByValue`**: Finds a key based on the provided value.

* **`head`**: Returns the first element of a provided array.

* **`letterPositions`**: Takes a string and returns an object with each letter as key and an array of the index(es) of where the letter is present in the string.

* **`map`**: Takes an array and a callback and returns a new array based on the results of the callback function.

* **`middle`**: Takes an array and returns the element in the middle of it if it's an odd length and the two in the middle if it's even.

* **`tail`**: Takes an array and returns everything except for the first value.

* **`takeUntil`**: Takes an array and a callback returns a slice of the array with elements taken from the beginning.

* **`without`**: Takes an array and items to remove and returns the array without the values provided.