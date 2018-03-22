require('@babel/register');

const path = require('path');
const fs = require('fs');
const ESDoc = require('esdoc2/out/src/ESDoc').default;
function generateDocs (configPath) {
  return ESDoc.generate(require(path.resolve(configPath)))
}

generateDocs('./test/fixture/esdoc.json').then(() => {
  console.log(`== finish ==`)
  global.docs = JSON.parse(fs.readFileSync('./test/fixture/out/index.json').toString())
}).catch((e) => {
  console.log('== init.js | ESDoc.generate | catch ==', e)
})
