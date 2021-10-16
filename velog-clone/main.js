const filter = document.querySelector('.filter')
const filterItems = document.querySelector(".filter-content")
const filterItem = document.querySelectorAll('.filter-content li')


// filter 클릭 시, filter-content가 drop.
// classList.toggle로도 구현 가능하지만 다른 방법으로 해봄.
const clickFilter = () => {
  if(filterItems.style.display === "none"){
      filterItems.style.display = "block";
  } else {
      filterItems.style.display = "none";
  }
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
        filterItems.style.display = "none";
      })
    }
  }
}

filter.addEventListener("click", clickFilter);
for (const item of filterItem) {
  item.addEventListener("click", (e) => {activeFilter(e)});
}


