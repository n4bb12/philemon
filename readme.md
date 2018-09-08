<h1 align="center">
  <img alt="Logo" src="https://image.flaticon.com/icons/svg/826/826934.svg" height="48">
  Philemon
</h1>

<p align="center">
  Shortens <code>npm</code> commands to mimic how <code>yarn</code> runs scripts
</p>

<center>
  <table style="border: 2px solid red">
    <tr>
      <td border="0">
        <i>
          Philemon is the third shortest book of the Bible, but an all the more interesting story. My npm commands should be just as short. <a href="https://www.bibleserver.com/text/ESV/Philemon1">Philemon?</a>
        </i>
      </td>
    </tr>
  </table>
</center>

<p align="center">
  <!-- <a href="https://circleci.com/gh/n4bb12/workflows/philemon">
    <img alt="CircleCI" src="https://flat.badgen.net/circleci/github/n4bb12/philemon?icon=circleci">
  </a> -->
  <a href="https://www.npmjs.com/package/philemon">
    <img alt="Version" src="https://flat.badgen.net/npm/v/philemon?icon=npm">
  </a>
  <a href="https://raw.githubusercontent.com/n4bb12/philemon/master/LICENSE">
    <img alt="License" src="https://flat.badgen.net/github/license/n4bb12/philemon?icon=github">
  </a>
  <a href="https://github.com/n4bb12/philemon/issues/new/choose">
    <img alt="Issues" src="https://flat.badgen.net/badge/github/create issue/pink?icon=github">
  </a>
</p>

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

#

Logo made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/free-icon/pineapple_826934" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a>
