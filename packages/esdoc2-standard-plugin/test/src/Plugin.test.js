const assert = require('assert');
const path = require('path');

describe('test standard plugin:', ()=>{
  it('dynamically load plugins', ()=>{
    const plugins = require('../spy-plugin.js').testTargetPlugins;

    assert.deepEqual(plugins, [
      {name: './src/Plugin.js', option: {
        brand: {
          title: 'My Library'
        },
        manual: {
          files: ['./test/manual/overview.md']
        },
        test: {
          source: "./test/test",
          includes: ["Test.js$"]
        }
      }},
      {name: './test/spy-plugin.js'},
      {name: 'esdoc2-lint-plugin'},
      {name: 'esdoc2-coverage-plugin'},
      {name: 'esdoc2-accessor-plugin'},
      {name: 'esdoc2-type-inference-plugin'},
      {name: 'esdoc2-external-ecmascript-plugin'},
      {name: 'esdoc2-brand-plugin', option: {title: 'My Library'}},
      {name: 'esdoc2-undocumented-identifier-plugin'},
      {name: 'esdoc2-unexported-identifier-plugin'},
      {name: 'esdoc2-integrate-manual-plugin', option: {
        coverage: true,
        files: ['./test/manual/overview.md']
      }},
      {name: 'esdoc2-integrate-test-plugin', option: {
        source: "./test/test",
        interfaces: ["describe", "it", "context", "suite", "test"],
        includes: ["Test.js$"],
        excludes: ["\\.config\\.js$"]
      }},
      {name: 'esdoc2-publish-html-plugin'},
    ]);

  });
});
