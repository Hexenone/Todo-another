const inputFunction = document.getElementsByClassName('input_function')[0]
const ourUl = document.getElementsByClassName('our_ul')[0]

const OurAddButton = document.getElementsByClassName('add_button')[0];
OurAddButton.addEventListener('click', Add);

function Add() {
  const Text = inputFunction.value.trim();
  if (Text !== '') {
    const newLi = document.createElement('li');
    newLi.textContent = Text;
    newLi.addEventListener('click', Change);
    ourUl.appendChild(newLi);

    const DeleteTask = document.createElement('button');
    DeleteTask.className = "deleteButton"
    DeleteTask.addEventListener('click', Delete);
    newLi.appendChild(DeleteTask);

    inputFunction.value = '';
  } else {
    alert("You must write something!");
  }
}

function Delete(event) {
  const task = event.target.parentElement;
  ourUl.removeChild(task);
}

function Change(event) {
  const li = event.target;
  let previoustext = li.textContent;
  const textInput = document.createElement('input');
  textInput.type = "text";
  textInput.value = previoustext;
  li.textContent = "";
  console.log(previoustext)
  textInput.className = "changeInput";
  li.prepend(textInput);
  textInput.addEventListener('keypress', saveChange);
  textInput.select();
}

function toggleDone(event) {
	event.srcElement.classList.toggle('done');
};

function saveChange(event) {
  let inputValue = event.target.value.trim();
  let our_grief = event.target.parentElement;
  if (event.target.value.length > 0 && event.keyCode === 13) {
    our_grief.textContent = inputValue;
    console.log(inputValue);
    event.target.remove();

    const DeleteTask = document.createElement('button');
    DeleteTask.className = "deleteButton"
    DeleteTask.addEventListener('click', Delete);
    our_grief.appendChild(DeleteTask);
  }
}