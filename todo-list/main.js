"use strict";

// 1. +버튼 클릭 시 아이템 추가 ㅇ
// 2. enter 시 아이템 추가
// 3. trash btn 클릭시 아이템 제거 ㅇ
// 4. 오늘 할 일, 내일 할 일 필터링

const inputs = document.querySelectorAll("input");
const plusBtns = document.querySelectorAll(".plusBtn");
const items = document.querySelectorAll(".todo__items");
const nav = document.querySelector("nav");
const navBtn = document.querySelectorAll("nav > button");
const todos = document.querySelectorAll(".todo");
const allDeleteButton = document.querySelectorAll(".allDelete");

nav.addEventListener("click", (e) => {
  if (e.target.tagName !== "BUTTON") return;
  // nav의 빈 공간을 눌렀을 때는 아무 일이 발생하지 않도록 한다.

  // 3가지 버튼의 클릭 결과를 하나의 함수에 넣기 위해 switch 함수를 사용한다.
  switch (e.target.className) {
    case "nav__today":
      todos[0].classList.add("open");
      todos[1].classList.remove("open");
      break;
    case "nav__tomorrow":
      todos[0].classList.remove("open");
      todos[1].classList.add("open");
      break;
    case "nav__together":
      todos[0].classList.add("open");
      todos[1].classList.add("open");
      break;
  }
});

// plusBtn 버튼을 눌렀을 때 onAdd 함수 실행
plusBtns.forEach((btn, index) =>
  btn.addEventListener("click", () => onAdd(index))
);

// enter를 눌렀을 때 onAdd 함수 실행
inputs.forEach((input, index) =>
  input.addEventListener("keyup", (e) => {
    if (e.key == "Enter") {
      onAdd(index);
    }
  })
);

allDeleteButton.forEach((btn, index) =>
  btn.addEventListener("click", () => generateDelete(index))
) 



// 새로운 to-do-item을 추가하는 함수이다.
function createItem(text, index) {
  const li = document.createElement("li");

  const heart = document.createElement("span");
  heart.classList.add("material-icons");
  heart.classList.add("todo__items-like");
  heart.innerText = "favorite_border";
  heart.addEventListener("click", () => { 
    if (heart.innerText === "favorite_border") {
      heart.innerText = "favorite"
    } else {
      heart.innerText = "favorite_border"
    }
  });

  const title = document.createElement("span");
  title.innerText = text;
  title.classList.add("todo__items-title");

  const check = document.createElement("span");
  check.classList.add("material-icons");
  check.classList.add("todo__items-check");  
  check.innerText = "check";
  check.addEventListener("click", (e) => {
    const wow = e.target.parentNode;  
    wow.classList.add('done');
    console.log(wow)
  })

  const trash = document.createElement("span");
  trash.classList.add("material-icons");
  trash.classList.add("todo__items-trash"); 
  trash.classList.add("trashBtn"); 
  // trash.setAttribute("class", "material-icons", "todo__items-trash", "trashBtn");
  trash.innerText = "close";

  li.appendChild(heart);
  li.appendChild(title);
  li.appendChild(check);
  li.appendChild(trash);

  trash.addEventListener("click", () => {
    items[index].removeChild(li);
  });
  // tranBtn을 눌렀을 때는 해당 li를 삭제한다.

  return li;
}

function onAdd(index) {
  const text = inputs[index].value;
  if (!text) return;
  // text가 없을 때는 추가하지 않는다.

  const item = createItem(text, index);
  items[index].appendChild(item);
  inputs[index].value = "";
  inputs[index].focus();
  // 입력이 완료 된 후, input에 다시 focus가 가도록 한다.

  // 아래를 일반화한 코드가 위 코드이다.
  //   if (btn == plusBtns[0]) {
  //     console.log(`inputs[0].innerText`, inputs[0].value);
  //     inputs[0].value = "";
  //   } else {
  //     console.log(`inputs[1].innerText`, inputs[1].value);
  //     inputs[0].value = "";
  //   }
}

function generateDelete(index) {
  items[index].innerHTML = "";
}
