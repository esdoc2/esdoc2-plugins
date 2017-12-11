const fs = require('fs');
const path = require('path');
const assert = require('assert');
const glob = require('glob');

class Plugin {
  onHandleDocs(ev) {
    this._docs = ev.data.docs;
    this._option = ev.data.option;

    this._exec();
  }

  _exec(){
    this._setDefault();

    const docs = this._generateDocs();
    this._docs.push(...docs);
  }

  _setDefault() {
    if (!this._option) return;

    assert(this._option.files);
    if (!('coverage' in this._option)) this._option.coverage = true;
  }

  _generateDocs() {
    const manual = this._option;
    const results = [];

    if (!this._option) return results;

    if (manual.index) {
      results.push({
        kind: 'manualIndex',
        globalIndex: manual.globalIndex,
        content: fs.readFileSync(manual.index).toString(),
        longname: path.resolve(manual.index),
        name: manual.index,
        static: true,
        access: 'public'
      });
    } else {
      results.push({
        kind: 'manualIndex',
        globalIndex: false,
        content: null,
        longname: '', // longname does not must be null.
        name: manual.index,
        static: true,
        access: 'public'
      });
    }

    if (manual.asset) {
      results.push({
        kind: 'manualAsset',
        longname: path.resolve(manual.asset),
        name: manual.asset,
        static: true,
        access: 'public'
      });
    }

    for (const filePath of manual.files) {
      const matches = glob.sync(filePath);
      for (const match of matches) {
        results.push({
          kind: 'manual',
          longname: path.resolve(match),
          name: match,
          content: fs.readFileSync(match).toString(),
          static: true,
          access: 'public'
        });
      };
    }

    return results;
  }
}

module.exports = new Plugin();
