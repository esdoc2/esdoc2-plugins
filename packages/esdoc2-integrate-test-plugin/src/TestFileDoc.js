// hack: depends on esdoc2 internal class
const FileDoc = require('esdoc2/out/src/Doc/FileDoc').default;

/**
 * Doc class for test code file.
 */
class TestFileDoc extends FileDoc {
  /** set ``testFile`` to kind. */
  _$kind() {
    this._value.kind = 'testFile';
  }
}

module.exports = TestFileDoc;
