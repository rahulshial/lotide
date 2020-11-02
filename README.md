# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @rahulshial/lotide`

**Require it:**

`const _ = require('@rahulshial/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(array1, array2)`: asserts if two arrays are equals
* `assertEqual(value1, value2)`: asserts if two values are equals
* `assertObjectsEqual(object1, object2)`: asserts if two objects are equals
* `eqArrays(array1, array2)`: compares for equality between two arrays. Recursive for arrays within arrays.
* `eqObjects(object1, object2)`: compares for equality between two objects. Recursive for objects within objects.
* `countLetters(string)`: returns the count of each letter within the string
* `countOnly(array, object)`: counts and returns occurrence of object within the array.
* `findKey(object, callback)`: scans the object and return the first key for which the callback returns a truthy
* `findKeyByValue(object, objectValue)`: takes an obeject and returns the key of the object value.
* `flatten(array)`: flattens an array of arrays into a single-level array
* `head(array)`: returns the 1st element of an array
* `letterPositions(string)`: returns all the indices/position of each character in the string
* `map(array, callback)`: returns a new array with the applied callback on the original array
* `middle(array)`: returns the middle element of an array
* `tail(array)`: returns the entire array minus the first element.
* `takeUntil(array, callback)`: returns an array with elements upto the callback provided
* `without(list, filter)`: returns a new array without the filter list
