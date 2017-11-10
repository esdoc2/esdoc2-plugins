# esdoc2 Standard Plugin
## Install
```bash
npm install esdoc2-standard-plugin
```

## Config
```json
{
  "source": "./src",
  "destination": "./doc",
  "plugins": [
    {
      "name": "esdoc2-standard-plugin",
      "option": {
        "lint": {"enable": true},
        "coverage": {"enable": true},
        "accessor": {"access": ["public", "protected", "private"], "autoPrivate": true},
        "undocumentIdentifier": {"enable": true},
        "unexportedIdentifier": {"enable": false},
        "typeInference": {"enable": true},
        "brand": {
          "logo": "./logo.png",
          "title": "My Library",
          "description": "this is awesome library",
          "repository": "https://github.com/foo/bar",
          "site": "http://my-library.org",
          "author": "https://twitter.com/foo",
          "image": "http://my-library.org/logo.png"
        },
        "manual": {
          "index": "./manual/index.md",
          "globalIndex": true,
          "asset": "./manual/asset",
          "files": [
            "./manual/overview.md",
            "./manual/design.md",
            "./manual/installation.md",
            "./manual/usage1.md",
            "./manual/usage2.md",
            "./manual/tutorial.md",
            "./manual/configuration.md",
            "./manual/example.md",
            "./manual/advanced.md",
            "./manual/faq.md",
            "./CHANGELOG.md"
          ]
        },
        "test": {
          "source": "./test/",
          "interfaces": ["describe", "it", "context", "suite", "test"],
          "includes": ["(spec|Spec|test|Test)\\.js$"],
          "excludes": ["\\.config\\.js$"]
        }
      }
    }
  ]
}
```

The `esdoc2-standard-plugin` is a glue plugin. The following plugins are used by this.
- [esdoc2-lint-plugin](https://github.com/esdoc2/esdoc2-plugins/tree/master/esdoc2-lint-plugin)
- [esdoc2-coverage-plugin](https://github.com/esdoc2/esdoc2-plugins/tree/master/esdoc2-coverage-plugin)
- [esdoc2-accessor-plugin](https://github.com/esdoc2/esdoc2-plugins/tree/master/esdoc2-accessor-plugin)
- [esdoc2-type-inference-plugin](https://github.com/esdoc2/esdoc2-plugins/tree/master/esdoc2-type-inference-plugin)
- [esdoc2-external-ecmascript-plugin](https://github.com/esdoc2/esdoc2-plugins/tree/master/esdoc2-external-ecmascript-plugin)
- [esdoc2-brand-plugin](https://github.com/esdoc2/esdoc2-plugins/tree/master/esdoc2-brand-plugin)
- [esdoc2-undocumented-identifier-plugin](https://github.com/esdoc2/esdoc2-plugins/tree/master/esdoc2-undocumented-identifier-plugin)
- [esdoc2-unexported-identifier-plugin](https://github.com/esdoc2/esdoc2-plugins/tree/master/esdoc2-unexported-identifier-plugin)
- [esdoc2-integrate-manual-plugin](https://github.com/esdoc2/esdoc2-plugins/tree/master/esdoc2-integrate-manual-plugin)
- [esdoc2-integrate-test-plugin](https://github.com/esdoc2/esdoc2-plugins/tree/master/esdoc2-integrate-test-plugin)
- [esdoc2-publish-html-plugin](https://github.com/esdoc2/esdoc2-plugins/tree/master/esdoc2-publish-html-plugin)

## LICENSE
MIT

## Author
[Ryo Maruyama@h13i32maru](https://github.com/h13i32maru)
