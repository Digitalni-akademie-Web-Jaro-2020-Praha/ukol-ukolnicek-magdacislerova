'use strict';

console.log('funguju!');

const tasks = ['Vyprat ponožky', 'Naučit se funkce vyššího řádu', 'Nakoupit na víkend', 'Upéct dort', 'Udělat prezentaci na pokrok v dizertační práci'];

const toDoList = document.querySelector('.todo__tasks');

const updateTasks = () => {
  for (let i = 0; i < tasks.length; i += 1) {
    toDoList.innerHTML += `<div class = "task"> ${tasks[i]} </div>`;
  };
  console.log(tasks);
};

updateTasks();

const btnElm = document.querySelector('.btn-add');
const inputElm = document.querySelector('.new-task');
btnElm.addEventListener('click', () => {
  tasks.push(inputElm.value);
  toDoList.innerHTML = '';
  updateTasks();
});