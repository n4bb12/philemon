#!/usr/bin/env node

const args = process.argv.slice(2)

if (args.length === 0) {
  const red = "e[31m"
  const reset = "e[39m"
  console.log(
    `${red}Invalid usage: Pass the binary to be wrapped as the first argument.${reset}`,
  )
  console.log(`${red}Example: alias npm=\"philemon npm\"${reset}`)
  process.exit(1)
}

const spawnSync = require("child_process").spawnSync
const builtInCommands = /^(?:access|adduser|login|add-user|audit|bin|bugs|issues|build|bundle|cache|ci|completion|config|c|dedupe|find-dupes|ddp|deprecate|dist-tag|dist-tags|docs|doctor|edit|explore|help|help-search|hook|init|install|i|install-ci-test|cit|install-test|it|link|ln|logout|ls|list|la|ll|outdated|owner|author|pack|ping|prefix|profile|prune|publish|rebuild|rb|repo|restart|root|run-script|run|search|s|se|find|shrinkwrap|star|stars|start|stop|team|test|t|tst|token|uninstall|remove|rm|r|un|unlink|unpublish|update|up|upgrade|version|view|info|show|v|whoami)$/

const pmBinary = args[0]
const pmCommand = args[1] || ""
const pmArgs = args.slice(2)

const spawnCommand = pmBinary
const spawnArgs =
  !pmCommand || pmCommand[0] === "-" || builtInCommands.test(pmCommand)
    ? [pmCommand, ...pmArgs]
    : ["run", pmCommand, "--", ...pmArgs]
const spawnOptions = {
  stdio: "inherit",
  shell: true,
}

const result = spawnSync(spawnCommand, spawnArgs, spawnOptions)

if (result.error) {
  throw result.error
}
