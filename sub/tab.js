//Tab Menu
// Tab Menu의 DOM 요소 변수 선언
const $tabNav = document.querySelectorAll(".tab-menu");
const $tabContent = document.querySelectorAll(".tab-info");

$tabNav.forEach((item, index) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    
    //selected 삭제
    $tabContent.forEach((content) => {
      content.classList.remove("selected");
    })
    $tabNav.forEach((nav) => {
      nav.classList.remove("selected");
    })

    $tabNav[index].classList.add("selected");
    $tabContent[index].classList.add("selected");
  });
});