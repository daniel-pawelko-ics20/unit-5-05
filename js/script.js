// Copyright (c) 2021 Daniel Pawelko All rights reserved
//
// Created by: Daniel Pawelko
// Created on: May 2021
// This file contains the JS functions for index.html

"use strict"


// Defining function that actives when user presses "Check" Button
function userInputClick() {
  // Get input from user and store it in variable
  const age = parseInt(document.getElementById("age-entered").value)
  const weekday = document.getElementById('weekday').checked
  const weekend = document.getElementById('weekend').checked

  // Checks what user should do
  if (weekday) {
    if (age < 18) {
      document.getElementById('output').innerHTML = "Time for School!"
    } else if (age >= 18) {
      document.getElementById('output').innerHTML = "Time for Work!"
    }
  } else if (weekend) {
    document.getElementById('output').innerHTML = "Time to relax for the weekend!"
  }
}