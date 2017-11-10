class Plugin {
  onHandlePlugins(ev) {
    const option = ev.data.option || {};
    const plugins = [
      {name: 'esdoc2-lint-plugin', option: option.lint},
      {name: 'esdoc2-coverage-plugin', option: option.coverage},
      {name: 'esdoc2-accessor-plugin', option: option.accessor},
      {name: 'esdoc2-type-inference-plugin', option: option.typeInference},
      {name: 'esdoc2-external-ecmascript-plugin'},
      {name: 'esdoc2-brand-plugin', option: option.brand},
      {name: 'esdoc2-undocumented-identifier-plugin', option: option.undocumentIdentifier},
      {name: 'esdoc2-unexported-identifier-plugin', option: option.unexportedIdentifier},
      {name: 'esdoc2-integrate-manual-plugin', option: option.manual},
      {name: 'esdoc2-integrate-test-plugin', option: option.test},
      {name: 'esdoc2-publish-html-plugin'}
    ];

    const existPluginNames = ev.data.plugins.map(plugin => plugin.name);
    for (const plugin of plugins) {
      if (existPluginNames.includes(plugin.name)) continue;
      if (plugin.option === undefined) delete plugin.option;
      ev.data.plugins.push(plugin);
    }
  }
}

module.exports = new Plugin();
