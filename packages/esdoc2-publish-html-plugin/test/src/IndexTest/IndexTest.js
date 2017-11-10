import {readDoc, assert} from './../util.js';

/** @test {IndexDocBuilder} */
describe('test index', ()=> {
  const doc = readDoc('index.html');

  it('has README.md', ()=>{
    assert.includes(doc, '[data-ice="index"]', 'this is esdoc2 Test Fixture README.');
  });
});
