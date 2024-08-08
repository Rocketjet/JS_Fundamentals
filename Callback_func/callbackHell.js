function task1(callback) {
  setTimeout(() => {
    console.log('task 1 completed');
    callback();
  }, 500);
}
function task2(callback) {
  setTimeout(() => {
    console.log('task 2 completed');
    callback();
  }, 1000);
}
function task3(callback) {
  setTimeout(() => {
    console.log('task 3 completed');
    callback();
  }, 3000);
}
function task4(callback) {
  setTimeout(() => {
    console.log('task 4 completed');
    callback();
  }, 200);
}
function task5(callback) {
  setTimeout(() => {
    console.log('task 5 completed');
    callback();
  }, 1300);
}
function task6(callback) {
  setTimeout(() => {
    console.log('task 6 completed');
    callback();
  }, 800);
}
function task7(callback) {
  setTimeout(() => {
    console.log('task 7 completed');
    callback();
  }, 200);
}

task1(() =>
  task2(() =>
    task3(() =>
      task4(() =>
        task5(() =>
          task6(() =>
            task7(() =>
              console.log('all tasks completed'))))))),
);
