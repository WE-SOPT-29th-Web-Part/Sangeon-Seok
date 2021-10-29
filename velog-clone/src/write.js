const input = document.querySelector("input");

const tags = [];
const enterInput = (e) => {
  if (e.keyCode === 13) {

    if (tags.includes(e.target.value)) {
      e.target.value = "";
      return;
    } // 중복 태그 입력 시 return

    const tag = document.createElement("div");
    tag.classList.add("tag");
    tag.innerText = e.target.value;
    input.before(tag);
    // tag 추가

    tags.push(e.target.value);
    input.value = "";
    // tags 배열 내 tag 추가 및 input 초기화
    
    tag.addEventListener("click", () => {
      tag.remove()
    }) // tag 클릭 시, 태그 삭제
  }
}


input.addEventListener("keypress", enterInput);
