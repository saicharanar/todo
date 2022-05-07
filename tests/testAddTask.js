const { makeTest, runTests, generateReport } = require('./testLib/testLib.js');
const { deepEqual } = require('assert').strict;
const { addTask } = require('../src/todo.js');

makeTest(
  'Should add the first task',
  () => {
    const actual = addTask([], 'buy ballon');
    const expected = [{ id: 1, task: 'buy ballon', done: false }];

    return deepEqual(actual, expected);
  }
);

makeTest(
  'Should add the second task',
  () => {
    const actual = addTask(
      [{ id: 1, task: 'buy ballon', done: false }],
      'buy cake'
    );

    const expected = [
      { id: 1, task: 'buy ballon', done: false },
      { id: 2, task: 'buy cake', done: false }
    ];

    return deepEqual(actual, expected);
  }
);

console.log(generateReport(runTests()));
