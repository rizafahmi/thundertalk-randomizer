'use strict'
const _ = require('lodash')

let students = [
  'a',
  'b',
  'c',
  'd',
  'e'
]

// const randomNumber = Math.floor(Math.random() * students.length)
// console.log(randomNumber, students[randomNumber])

students.sort(() => 0.5 - Math.random())
console.log(_.chunk(students, 2))
