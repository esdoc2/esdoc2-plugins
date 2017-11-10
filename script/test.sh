#!/bin/bash -e

for plugin in $(ls -1 -d esdoc2-*)
do
  echo $plugin
  (cd $plugin && npm run test)
  echo ========================================================================
done
