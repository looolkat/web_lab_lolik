let modal = document.querySelector(".Modal-Window");
let drag_zone = document.querySelector(".Title");

drag_zone.onmousedown = function(event) {
    let x = event.pageX - getcoordnats(modal).left;
    let y = event.pageY - getcoordnats(modal).top;
  document.body.appendChild(modal);
  document.onmousemove = function(event) {
    modal.style.left = event.pageX - x + 'px';
    modal.style.top = event.pageY - y + 'px';
  };
  drag_zone.onmouseup = function() {
    document.onmousemove = null;
    drag_zone.onmouseup = null;
  };
};
drag_zone.ondragstart = function() {
  return false;
};
function getcoordnats(window) {   
    let i = window.getBoundingClientRect();
  return {
    top: i.top + pageYOffset,
    left: i.left + pageXOffset
  };
};