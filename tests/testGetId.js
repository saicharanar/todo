const { makeTest, runTests, generateReport } = require('./testLib/testLib.js');
const { deepEqual } = require('assert').strict;
const { getId } = require('../src/todoLib.js');

makeTest('gives 1', () => deepEqual(getId([]), 1));
makeTest('gives 2', () => deepEqual(getId([{ id: 1 }]), 2));
makeTest('gives 10', () => deepEqual(getId([{ id: 8 }, { id: 9 }]), 10));

console.log(generateReport(runTests()));
