#!/usr/bin/env node
require('../../../../index').yargsa(process.argv.slice(2))
  .option('foo', {
    nargs: 1
  })
  .command(
    'bar <baz>',
    'example',
    function (yargs) { return yargs },
    function (argv) {
      console.log(JSON.stringify({ _: argv._, foo: argv.foo, baz: argv.baz }))
    }
  )
  .parse()