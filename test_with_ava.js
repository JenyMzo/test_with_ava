#!/usr/bin/env node

var adventure = require('adventure')

process.noDeprecation = true

var shop = adventure({
  title: 'TEST WITH AVA',
  name: 'test_with_ava'
})

shop.add('» LOG THE ICON',
function () { return require('./exercises/log_the_icon') })
shop.add('» THE FRIDAY 13TH',
  function () { return require('./exercises/friday-the-thirteen') })
shop.add('» ROCKING WITH AVA',
  function () { return require('./exercises/rocking-with-ava') })
shop.add('» LET\'S PREPARE PIZZA',
  function () { return require('./exercises/pizza-time') })

shop.execute(process.argv.slice(2))