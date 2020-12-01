function onPageLoaded() {

  let newTodoInput = document.querySelector('input');
  let ul = Array.from(document.querySelector('ul').childNodes).filter;

  function createToDo() {
    const li = document.createElement('li');
    const spanText = document.createElement('span');
    spanText.classList.add("todo__text");
    const newTodo = newTodoInput.value;
    spanText.append(newTodo);
    ul.push(li).append(spanText);
  }

  newTodoInput.onkeypress = function (event) {
    if (event.code === "KeyEnter") {
      createToDo();
    }
  };
}

document.addEventListener("DOMContentLoaded", onPageLoaded);
