#!/usr/bin/env node

var adventure = require('adventure')

process.noDeprecation = true

var shop = adventure({
  title: 'TEST WITH AVA',
  name: 'test_with_ava'
})

shop.add('» THE FRIDAY 13TH',
  function () { return require('./exercises/friday-the-thirteen') })
shop.add('» LET\'S PREPARE PIZZA',
  function () { return require('./exercises/pizza-time') })

shop.execute(process.argv.slice(2))
