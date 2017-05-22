'use strict'
const _ = require('lodash')

let students = [
  'a',
  'b',
  'c',
  'd',
  'e'
]

students.sort(() => 0.5 - Math.random())
console.log(_.chunk(students, 2))
