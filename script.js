// 1. Change text when button is clicked
document.getElementById('changeTextBtn').onclick = function() {
  document.getElementById('text').textContent = 'The text has changed!';
};

// 2. Hover effect to change color
document.getElementById('hoverDiv').onmouseenter = function() {
  this.style.backgroundColor = 'lightgreen';
};
document.getElementById('hoverDiv').onmouseleave = function() {
  this.style.backgroundColor = 'lightgray';
};

// 3. Keypress detection
document.onkeypress = function(event) {
  document.getElementById('keypressText').textContent = `You pressed: ${event.key}`;
};
