#!/usr/bin/env node

const args = process.argv.slice(2)

if (args.length === 0) {
  const red = "\x1b[31m"
  const reset = "\x1b[0m"
  console.log(`${red}Invalid usage: Pass npm/pnpm as the first argument.${reset}`)
  console.log(`${red}Example: alias npm=\"philemon npm\"${reset}`)
  process.exit(1)
}

const spawnSync = require("child_process").spawnSync
const builtInCommands = `access, adduser, audit, bin, bugs, c, cache, ci, cit,
clean-install, clean-install-test, completion, config,
create, ddp, dedupe, deprecate, dist-tag, docs, doctor,
edit, explore, get, help, help-search, hook, i, init,
install, install-ci-test, install-test, it, link, list, ln,
login, logout, ls, org, outdated, owner, pack, ping, prefix,
profile, prune, publish, rb, rebuild, repo, restart, root,
run, run-script, s, se, search, set, shrinkwrap, star,
stars, start, stop, t, team, test, token, tst, un,
uninstall, unpublish, unstar, up, update, v, version, view,
whoami`.split(",").map(String.prototype.trim)

const pmBinary = args[0]
const pmCommand = args[1] || ""
const pmArgs = args.slice(2)

const spawnCommand = pmBinary
const spawnArgs =
  !pmCommand || pmCommand[0] === "-" || builtInCommands.includes(pmCommand)
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
