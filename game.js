function drawShape(e) {
  alert("funcionou!");
}

document.addEventListener("DOMContentLoaded", function(event) {
  var cells = document.getElementsByClassName("cell");
  Array.from(cells).forEach(function(cell) {
    cell.addEventListener('click', drawShape);
  });
});
