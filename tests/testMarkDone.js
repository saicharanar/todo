const { makeTest, runTests, generateReport } = require('./testLib/testLib.js');
const { throws, deepEqual } = require('assert');
const { markDone } = require('../src/todo.js');

makeTest('No tasks', () => throws(markDone([])));

console.log(generateReport(runTests()));
