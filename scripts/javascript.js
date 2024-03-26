const el = document.querySelector('.click')
const menu = document.querySelector('.menu');

el.onclick = function(){
  menu.classList.toggle("showmenu");
}

window.onclick = function(event) {
  if (!event.target.matches('.click')&&!(event.target.matches('.menu')||event.target.matches('.item'))) {
    menu.classList.remove('showmenu')
  }
}