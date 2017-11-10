const path = require('path');
const fs = require('fs');
const ESDocCLI = require('esdoc2/out/src/ESDocCLI.js').default;

function cli() {
  const cliPath = path.resolve('./node_modules/esdoc2/out/ESDocCLI.js');
  const argv = ['node', cliPath, '-c', './test/esdoc.json'];
  const cli = new ESDocCLI(argv);
  cli.exec();
  global.docs = JSON.parse(fs.readFileSync('./test/out/index.json').toString());
}

cli();
