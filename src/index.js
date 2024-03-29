var overall = document.querySelector('input[id="EnchTbl"]');
var ingredients = document.querySelectorAll("ul input");

overall.addEventListener("click", function(e) {
  e.preventDefault();
});

for (var i = 0; i < ingredients.length; i++) {
  ingredients[i].addEventListener("click", updateDisplay);
}

function updateDisplay() {
  var checkedCount = 0;
  for (var i = 0; i < ingredients.length; i++) {
    if (ingredients[i].checked) {
      checkedCount++;
    }
  }

  console.log(checkedCount);

  if (checkedCount === 0) {
    overall.checked = false;
    overall.indeterminate = false;
  } else if (checkedCount === ingredients.length) {
    overall.checked = true;
    overall.indeterminate = false;
  } else {
    overall.checked = false;
    overall.indeterminate = true;
  }
}
