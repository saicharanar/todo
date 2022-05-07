const tests = [];

const partByPass = function (partitions, newTest) {
  newTest.passed ? partitions[0].push(newTest) : partitions[1].push(newTest);
  return partitions;
};

const partition = function (results) {
  return results.reduce(partByPass, [[], []]);
};

const makeTest = (message, test) => {
  tests.push({ message, test });
};

const runTest = function ({ test, message }) {
  let passed = true;
  let err;
  try {
    test();
  } catch (error) {
    err = { ...error };
    err.stack = error.stack;
    passed = false;
  }
  return { passed, ...err, message };
};

const runTests = function () {
  return this.map(runTest);
};

const printPassed = function (testResult) {
  console.log('✓ -', testResult.message);
};

const printFailed = function (testResult) {
  console.log('x -', testResult.message);
  console.log({ actual: testResult.actual, expected: testResult.expected, operator: testResult.operator });
};

const generateReport = function (testResults) {
  const [passedTests, failedTests] = partition(testResults);
  passedTests.forEach(printPassed);
  console.log();
  failedTests.forEach(printFailed);
  console.log();
  return { failed: failedTests.length, total: testResults.length };
};

exports.makeTest = makeTest;
exports.generateReport = generateReport;
exports.runTests = runTests.bind(tests);
