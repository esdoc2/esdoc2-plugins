const path = require('path');
const ESDocCLI = require('esdoc2/out/src/ESDocCLI.js').default;

function cli() {
  const cliPath = path.resolve('./node_modules/esdoc2/out/ESDocCLI.js');
  const argv = ['node', cliPath, '-c', './test/fixture/esdoc.json'];
  const cli = new ESDocCLI(argv);
  cli.exec();
}

cli();
