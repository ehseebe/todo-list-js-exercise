function newTask(title, description) { //can call it with just title, desc wll be undefined
  const task = {
    title: title,
    descriptions: description,
    complete: false,

    logState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`)
    },

    markCompleted: function() {
      this.complete = true;
    }
  };
  return task;
}

const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry", "😨");
const task3 = newTask("Make lunch", "😇");
const tasks = [task1, task2, task3];

//console.log(tasks);

// Mark a task as complete by setting the task's status in the `taskComplete` array to `true`



// DRIVER CODE BELOW

newTask("Clean Cat Litter"); // task 0
newTask("Do Laundry"); // task 1

console.log(task3)
task3.logState(); // Clean Cat Litter has not been completed
task3.markCompleted(); //call the function!!!!
task3.logState(); // Clean Cat Litter has been completed
console.log(task3)
