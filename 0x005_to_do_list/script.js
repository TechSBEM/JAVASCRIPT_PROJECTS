"use strict";

//-------
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Event function for the button
function add() {
  if (inputBox.value === "") {
    alert("Please enter your future event to be store");
  } else {
    // Creating a list item
    let li = document.createElement("li");
    // Assignin values of the input box to the list item variable created
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);

    // Creating an element for th close button
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  //   clear input box after adding te list
  inputBox.value = "";
  saveData();
}

listContainer.addEventListener("click", function (e) {
  if (e.target.tagName == "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData(); 
  }
}, false);


// Saving data locally
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

// Function for showing items always when the browser is opened
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();