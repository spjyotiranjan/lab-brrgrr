// Write your code on this file. Please don't change the existing code
// unless absolutely needed.

//Initial price of the burger
var wholeWheatBun = 10;

//Ingredients of the burger along with the price
// Clue: the name is same as the textcontent of the button. Will be useful later on :)
var ingredients = {
  Patty: 80,
  Cheese: 10,
  Tomatoes: 20,
  Onions: 20,
  Lettuce: 20
};

//Current state of the ingredients in the burger
var state = {
  Patty: true,
  Cheese: true,
  Tomatoes: true,
  Onions: true,
  Lettuce: true
};

// This function renders the entire screen everytime the state changes accordingly
function renderAll() {
  renderPatty();
  renderCheese();
  renderTomatoes();
  renderOnions();
  renderLettuce();
  renderButtons();
  renderIngredientsBoard();
  renderPrice();
}

function renderPatty() {
  let patty = document.querySelector("#patty");
  //you can also use getElementById
  if (state.Patty) {
    patty.style.display = "inherit";
  } else {
    patty.style.display = "none";
  }
}

function renderCheese() {
  //Trial 1 - Change the visibility of cheese based on state by manipulating the DOM
  let cheese = document.querySelector("#cheese");
  if (state.Cheese) {
    cheese.style.display = "inherit";
  } else {
    cheese.style.display = "none";
  }
}

function renderTomatoes() {
  //Trial 1 - Change the visibility of Tomatoes based on state by manipulating the DOM
  let tomatoes = document.querySelector("#tomato");
  if (state.Tomatoes) {
    tomatoes.style.display = "inherit";
  } else {
    tomatoes.style.display = "none";
  }
}

function renderOnions() {
  //Trial 1 - Change the visibility of Onions based on state by manipulating the DOM
  let onions = document.querySelector("#onion");
  if (state.Onions) {
    onions.style.display = "inherit";
  } else {
    onions.style.display = "none";
  }
}

function renderLettuce() {
  //Trial 1 - Change the visibility of Lettuce based on state by manipulating the DOM
  let lettuce = document.querySelector("#lettuce");
  if (state.Lettuce) {
    lettuce.style.display = "inherit";
  } else {
    lettuce.style.display = "none";
  }
}

document.querySelector(".btn-patty").onclick = function () {
  state.Patty = !state.Patty;
  renderAll();
};

// Trial 2 - Setup event listener for the cheese button
document.querySelector(".btn-cheese").addEventListener("click",function(){
  state.Cheese = !state.Cheese;
  renderAll();
})

// Trial 2 - Setup event listener for the tomatoes button
document.querySelector(".btn-tomatoes").addEventListener("click",function(){
  state.Tomatoes = !state.Tomatoes;
  renderAll();
})

// Trial 2 - Setup event listener for the onion button
document.querySelector(".btn-onions").addEventListener("click",function(){
  state.Onions = !state.Onions;
  renderAll();
})

// Trial 2 - Setup event listener for the lettuce button
document.querySelector(".btn-lettuce").addEventListener("click",function(){
  state.Lettuce = !state.Lettuce;
  renderAll();
})

//Challenge 1 - Add/Remove the class active to the buttons based on state
function renderButtons() {
  document.querySelector(".btn-patty").classList.toggle("active",state.Patty)
  document.querySelector(".btn-cheese").classList.toggle("active",state.Cheese)
  document.querySelector(".btn-tomatoes").classList.toggle("active",state.Tomatoes)
  document.querySelector(".btn-onions").classList.toggle("active",state.Onions)
  document.querySelector(".btn-lettuce").classList.toggle("active",state.Lettuce)
}

//Challenge 2 - Render only the items selected in the ingredients board based on the state
function renderIngredientsBoard() {
  var items = document.getElementsByClassName("items")
  if (!state.Patty) {
    items[0].innerHTML = ""
  } else {
    items[0].innerHTML = "Patty"
  }
  if (!state.Cheese) {
    items[1].innerHTML = ""
  } else {
    items[1].innerHTML = "Cheese"
  }
  if (!state.Tomatoes) {
    items[2].innerHTML = ""
  } else {
    items[2].innerHTML = "Tomatoes"
  }
  if (!state.Onions) {
    items[3].innerHTML = ""
  } else {
    items[3].innerHTML = "Onions"
  }
  if (!state.Lettuce) {
    items[4].innerHTML = ""
  } else {
    items[4].innerHTML = "Lettuce"
  }
}

//Judgement 1
//In the p element having price-details as the class, display the calculated
//price based on ingredients
function renderPrice() {
  var price = document.querySelector(".price-details")
  var sum = wholeWheatBun*2
  if (state.Patty) {
    sum+=ingredients.Patty
  }
  if (state.Cheese) {
    sum+=ingredients.Cheese
  }
  if (state.Tomatoes) {
    sum+=ingredients.Tomatoes
  }
  if (state.Onions) {
    sum+=ingredients.Onions
  }
  if (state.Lettuce) {
    sum+=ingredients.Lettuce
  }
  price.innerHTML = "INR " + sum
}