function init(){
//add your javascrip between these two lines of code
const button = document.getElementById('entrybutton');
const input = document.getElementById('entryinput');
const output = document.getElementById('textoutput');

button.addEventListener('click', function() {
  const message = input.value.trim();

  alert("Zoha: " + message);

  output.textContent = message;
});
}


window.addEventListener('load', init);
