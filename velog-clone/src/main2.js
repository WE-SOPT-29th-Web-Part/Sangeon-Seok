const filter = document.querySelector('.filter')
const filterItems = document.querySelector(".filter-content")
const filterItem = document.querySelectorAll('.filter-content li')
const cardWrapper = document.querySelector('.card__wrapper')
const cards = document.querySelectorAll('.card')
const modal = document.querySelector(".modal")
const modalItem = document.querySelector(".modal-item")
const modalCloseBtn = document.querySelector(".modal-close")

const prevBtn = document.querySelector('#previousBtn')
const nextBtn = document.querySelector('#nextBtn')

let counter = 1;
let size = cards[0].clientWidth;

// cardWrapper.style.transform = `translateX(${-size * counter}px) `


// filter 클릭 시, filter-content가 drop.
const clickFilter = () => {
  filterItems.classList.toggle("visible");

  // if (filterItems.style.display === "none") {
  //     filterItems.style.display = "block";
  // } else {
  //     filterItems.style.display = "none";
  // } 오류 떴던 부분 - 두 번째 클릭부터 filterItems가 등장
}

// filter-content의 li 클릭 시, filter 글자 변경 및 li 색 변경
// 하나의 함수 안에 두개의 기능이 있어 좋지않은 느낌..?
const activeFilter = (e) => {
  filter.firstElementChild.innerText = e.target.innerText
  if (e.target.innerText === filter.firstElementChild.innerText) { 
    e.target.classList.add("active");
    if (e.target.classList.contains("active") === true) {
      filterItem.forEach((item)=>{
        item.classList.remove("active");
        e.target.classList.add("active");
        filterItems.classList.remove("visible");
      })
    }
  }
}

// card 클릭 시, modal 생성
const clickCard = (e) => {
    modal.classList.remove("hidden");
    document.body.style.overflow = "hidden";

    if (modalItem.children.length === 1) {
    const modalCard = document.createElement("div");
    modalCard.classList.add("card");
    modalItem.appendChild(modalCard);
  
    const currentCard = e.target.closest(".card")
    modalCard.innerHTML = currentCard.innerHTML ;
  }
}

// modal-close 클릭 시, modal 닫기
const closeModal = () => {
  modal.classList.add("hidden")
  document.body.style.overflow = "visible";
  modalItem.lastChild.remove();
}


// eventListener 모음
filter.addEventListener("click", clickFilter);

for (const item of filterItem) {
  item.addEventListener("click", activeFilter);
}

for (const card of cards) {
  card.addEventListener("click", clickCard);
}

modalCloseBtn.addEventListener("click", closeModal);

prevBtn.addEventListener('click', () => {
  const viewWidth = document.body.parentElement.offsetWidth

  if (767 < viewWidth && viewWidth <= 1056) {
    if (counter < -cards.length + 3) return; 

    size + viewWidth / 43;
    cardWrapper.style.transition = "transform 0.4s ease-in-out";
    counter--;
    cardWrapper.style.transform = `translateX(${size * counter}px)`
    return;
  } 

  if (viewWidth <= 767) {
    if (counter < -cards.length + 2) return; 
    console.log('hii')
    size + viewWidth / 24;
    cardWrapper.style.transition = "transform 0.4s ease-in-out";
    counter--;
    cardWrapper.style.transform = `translateX(${size * counter}px)`
    return;
  }

  if (counter < -cards.length + 4) return; 
  cardWrapper.style.transition = "transform 0.4s ease-in-out";
  counter--;
  cardWrapper.style.transform = `translateX(${(size + 30) * counter}px)`
})

nextBtn.addEventListener('click', () => {
  if (document.body.parentElement.offsetWidth <= 1056) {
    size + document.body.parentElement.offsetWidth / 43;
  } else if (document.body.parentElement.offsetWidth <= 767) {
    size + document.body.parentElement.offsetWidth / 25;
  }

  if (counter >= 0) return;
  cardWrapper.style.transition = "transform 0.4s ease-in-out";
  counter++;
  cardWrapper.style.transform = `translateX(${size * counter}px)`
})