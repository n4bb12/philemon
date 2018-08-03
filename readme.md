# philemon

Shortens `npm` commands to mimic how `yarn` runs scripts.

| |
|-|
| *The module is named Philemon because it is the third shortest book of the bible. [Read the whole Story.](https://www.bibleserver.com/text/ESV/Philemon1)* |

## Why

### npm / pnpm

Scripts need to be prefixed with `run` (with few exceptions) and arguments need to be separated with double dashes:
```
npm run lint -- --help
```

Unfortunately `npx` only runs bins but doesn't improve scripts.  

Docs: https://docs.npmjs.com/cli/run-script

### Yarn

Yarn is more concise and allows directly running scripts and passing arguments:
```
yarn lint --help
```

Docs: https://yarnpkg.com/lang/en/docs/cli/run

### Conclusion

To use npm with the same brevity as Yarn, use Philemon as a wrapper.

## Install

Philemon assumes you have a [Bash](https://www.google.de/search?q=Install+Bash)  installed.

```
npm i -g philemon
```

Create an alias of your choice. Some examples:

```
alias ph="philemon npm"
alias npm="philemon npm"
alias pnpm="philemon pnpm"
```

## Usage

Depending on your alias you can now use npm with the short syntax:

```
npm lint --help
```

Built-in commands are preserved:

```
npm bin
npm -v
```

## License

MIT © Abraham Schilling
