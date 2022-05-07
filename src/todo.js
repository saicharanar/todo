const getId = function (tasks) {
  return tasks.length ? tasks.slice(-1).pop().id + 1 : 1;
};

const addTask = function (tasks, taskToAdd) {
  const id = getId(tasks);
  tasks.push({ id, task: taskToAdd, done: false });

  return tasks;
};

const markDone = function (tasks) {
  // if (!tasks.length) {
  //   throw 'id not found';
  // }
}([]);

exports.markDone = markDone;
exports.addTask = addTask;
exports.getId = getId;
