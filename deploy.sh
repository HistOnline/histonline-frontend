#!/bin/bash
yarn build
ncftp -u lopes.filipe -p GeneralUFBA ftp://www.histonline.ics.ufba.br/histonline.ics.ufba.br/public_html <<EOF
# Remove arquivos de build anterior
rm .htaccess
rm asset-*
rm favicon.ico
rm precache-*
rm logo_white.png
rm manifest.json
rm service-worker.js
rm -rf img
rm -rf static

lcd build
put -R *
lcd ..
put .htaccess
quit