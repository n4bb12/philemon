#!/usr/bin/env bash

if [[ $# == 0 ]]; then
  red="\e[31m"
  reset="\e[39m"
  echo -e "${red}Invalid usage: Pass the binary to be wrapped as the first argument.${reset}"
  echo -e "${red}Example: alias npm=\"philemon npm\"${reset}"
  exit 1
fi

npm=$1
command=$2
shift 2
args=$@

case $command in
  access|adduser|login|add-user|audit|bin|bugs|issues|build|bundle|cache|ci|completion|config|c|dedupe|find-dupes|ddp|deprecate|dist-tag|dist-tags|docs|doctor|edit|explore|help|help-search|hook|init|install|i|install-ci-test|cit|install-test|it|link|ln|logout|ls|list|la|ll|outdated|owner|author|pack|ping|prefix|profile|prune|publish|rebuild|rb|repo|restart|root|run-script|run|search|s|se|find|shrinkwrap|star|stars|start|stop|team|test|t|tst|token|uninstall|remove|rm|r|un|unlink|unpublish|update|up|upgrade|version|view|info|show|v|whoami)      
    $npm $command $args
    ;;
  *)
    if [[ $command == -* ]]; then
      $npm $command $args
    else
      $npm run $command -- $args
    fi
    ;;
esac
