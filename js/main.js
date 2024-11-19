const inputFunction = document.getElementsByClassName('input_function')[0]
const ourUl = document.getElementsByClassName('our_ul')[0]

function Add() {
  const Text = inputFunction.value.trim();
  if (Text !== '') {
    const newLi = document.createElement('li');
    newLi.textContent = Text;
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