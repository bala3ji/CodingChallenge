'use strict';

define("dice-roller/tests/integration/components/roll-dice-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | roll-dice', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "jkoGhLaW",
        "block": "{\"symbols\":[],\"statements\":[[5,\"roll-dice\",[],[[],[]]]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "CuRIAEJz",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n      \"],[5,\"roll-dice\",[],[[],[]],{\"statements\":[[0,\"\\n        template block text\\n      \"]],\"parameters\":[]}],[0,\"\\n    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("dice-roller/tests/lint/app.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | app');
  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });
  QUnit.test('components/roll-dice.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/roll-dice.js should pass ESLint\n\n4:16 - Use import Component from \'@ember/component\'; instead of using Ember.Component (ember/new-module-imports)\n13:11 - Use closure actions (ember/closure-actions)');
  });
  QUnit.test('models/roll.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/roll.js should pass ESLint\n\n');
  });
  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });
  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });
  QUnit.test('routes/index.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/index.js should pass ESLint\n\n3:16 - Use import Route from \'@ember/routing/route\'; instead of using Ember.Route (ember/new-module-imports)');
  });
  QUnit.test('routes/roll.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/roll.js should pass ESLint\n\n');
  });
});
define("dice-roller/tests/lint/templates.template.lint-test", [], function () {
  "use strict";

  QUnit.module('TemplateLint');
  QUnit.test('dice-roller/templates/application.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'dice-roller/templates/application.hbs should pass TemplateLint.\n\ndice-roller/templates/application.hbs\n  2:4  error  Incorrect indentation for `<div>` beginning at L2:C4. Expected `<div>` to be at an indentation of 2 but was found at 4.  block-indentation\n  3:8  error  Incorrect indentation for `<a>` beginning at L3:C8. Expected `<a>` to be at an indentation of 6 but was found at 8.  block-indentation\n  7:8  error  Incorrect indentation for `<ul>` beginning at L7:C8. Expected `<ul>` to be at an indentation of 6 but was found at 8.  block-indentation\n  4:12  error  Incorrect indentation for `<i>` beginning at L4:C12. Expected `<i>` to be at an indentation of 10 but was found at 12.  block-indentation\n  11:9  error  Incorrect indentation for `ul` beginning at L7:C8. Expected `</ul>` ending at L11:C9 to be at an indentation of 8 but was found at 4.  block-indentation\n  8:8  error  Incorrect indentation for `{{#link-to}}` beginning at L8:C8. Expected `{{#link-to}}` to be at an indentation of 10 but was found at 8.  block-indentation\n  9:12  error  Incorrect indentation for `<a>` beginning at L9:C12. Expected `<a>` to be at an indentation of 10 but was found at 12.  block-indentation\n  16:4  error  Incorrect indentation for `{{outlet}}` beginning at L16:C4. Expected `{{outlet}}` to be at an indentation of 2 but was found at 4.  block-indentation\n  8:19  error  you must use double quotes in templates  quotes\n');
  });
  QUnit.test('dice-roller/templates/components/roll-dice.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'dice-roller/templates/components/roll-dice.hbs should pass TemplateLint.\n\ndice-roller/templates/components/roll-dice.hbs\n  9:0  error  Incorrect indentation for `<div>` beginning at L9:C0. Expected `<div>` to be at an indentation of 2 but was found at 0.  block-indentation\n  21:4  error  Incorrect indentation for `<div>` beginning at L21:C4. Expected `<div>` to be at an indentation of 2 but was found at 4.  block-indentation\n  8:6  error  Incorrect indentation for `div` beginning at L2:C2. Expected `</div>` ending at L8:C6 to be at an indentation of 2 but was found at 0.  block-indentation\n  3:2  error  Incorrect indentation for `<div>` beginning at L3:C2. Expected `<div>` to be at an indentation of 4 but was found at 2.  block-indentation\n  4:6  error  Incorrect indentation for `<!-- This replaces the <input> tag for "roll_name" -->` beginning at L4:C6. Expected `<!-- This replaces the <input> tag for "roll_name" -->` to be at an indentation of 4 but was found at 6.  block-indentation\n  5:6  error  Incorrect indentation for `{{input}}` beginning at L5:C6. Expected `{{input}}` to be at an indentation of 4 but was found at 6.  block-indentation\n  6:6  error  Incorrect indentation for `<label>` beginning at L6:C6. Expected `<label>` to be at an indentation of 4 but was found at 6.  block-indentation\n  11:6  error  Incorrect indentation for `<!-- This replaces the <input> tag for "number_of_dice" -->` beginning at L11:C6. Expected `<!-- This replaces the <input> tag for "number_of_dice" -->` to be at an indentation of 4 but was found at 6.  block-indentation\n  12:6  error  Incorrect indentation for `{{input}}` beginning at L12:C6. Expected `{{input}}` to be at an indentation of 4 but was found at 6.  block-indentation\n  13:6  error  Incorrect indentation for `<label>` beginning at L13:C6. Expected `<label>` to be at an indentation of 4 but was found at 6.  block-indentation\n  16:6  error  Incorrect indentation for `<!-- This replaces the <input> tag for "number_of_sides" -->` beginning at L16:C6. Expected `<!-- This replaces the <input> tag for "number_of_sides" -->` to be at an indentation of 4 but was found at 6.  block-indentation\n  17:6  error  Incorrect indentation for `{{input}}` beginning at L17:C6. Expected `{{input}}` to be at an indentation of 4 but was found at 6.  block-indentation\n  18:6  error  Incorrect indentation for `<label>` beginning at L18:C6. Expected `<label>` to be at an indentation of 4 but was found at 6.  block-indentation\n  22:8  error  Incorrect indentation for `<button>` beginning at L22:C8. Expected `<button>` to be at an indentation of 6 but was found at 8.  block-indentation\n  22:81  error  Incorrect indentation for `\n            Roll Dice\n            ` beginning at L22:C81. Expected `\n            Roll Dice\n            ` to be at an indentation of 10 but was found at 12.  block-indentation\n  24:12  error  Incorrect indentation for `<i>` beginning at L24:C12. Expected `<i>` to be at an indentation of 10 but was found at 12.  block-indentation\n  4:6  error  HTML comment detected  no-html-comments\n  11:6  error  HTML comment detected  no-html-comments\n  16:6  error  HTML comment detected  no-html-comments\n  1:40  error  you must use double quotes in templates  quotes\n');
  });
  QUnit.test('dice-roller/templates/index.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'dice-roller/templates/index.hbs should pass TemplateLint.\n\ndice-roller/templates/index.hbs\n  2:4  error  Incorrect indentation for `<thead>` beginning at L2:C4. Expected `<thead>` to be at an indentation of 2 but was found at 4.  block-indentation\n  9:4  error  Incorrect indentation for `<tbody>` beginning at L9:C4. Expected `<tbody>` to be at an indentation of 2 but was found at 4.  block-indentation\n  3:8  error  Incorrect indentation for `<tr>` beginning at L3:C8. Expected `<tr>` to be at an indentation of 6 but was found at 8.  block-indentation\n  4:12  error  Incorrect indentation for `<th>` beginning at L4:C12. Expected `<th>` to be at an indentation of 10 but was found at 12.  block-indentation\n  5:12  error  Incorrect indentation for `<th>` beginning at L5:C12. Expected `<th>` to be at an indentation of 10 but was found at 12.  block-indentation\n  6:12  error  Incorrect indentation for `<th>` beginning at L6:C12. Expected `<th>` to be at an indentation of 10 but was found at 12.  block-indentation\n  10:4  error  Incorrect indentation for `{{#each}}` beginning at L10:C4. Expected `{{#each}}` to be at an indentation of 6 but was found at 4.  block-indentation\n  11:8  error  Incorrect indentation for `<tr>` beginning at L11:C8. Expected `<tr>` to be at an indentation of 6 but was found at 8.  block-indentation\n  12:12  error  Incorrect indentation for `<td>` beginning at L12:C12. Expected `<td>` to be at an indentation of 10 but was found at 12.  block-indentation\n  13:12  error  Incorrect indentation for `<td>` beginning at L13:C12. Expected `<td>` to be at an indentation of 10 but was found at 12.  block-indentation\n  14:12  error  Incorrect indentation for `<td>` beginning at L14:C12. Expected `<td>` to be at an indentation of 10 but was found at 12.  block-indentation\n');
  });
  QUnit.test('dice-roller/templates/roll.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'dice-roller/templates/roll.hbs should pass TemplateLint.\n\ndice-roller/templates/roll.hbs\n  2:4  error  Incorrect indentation for `{{roll-dice}}` beginning at L2:C4. Expected `{{roll-dice}}` to be at an indentation of 2 but was found at 4.  block-indentation\n');
  });
});
define("dice-roller/tests/lint/tests.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | tests');
  QUnit.test('integration/components/roll-dice-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/roll-dice-test.js should pass ESLint\n\n');
  });
  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });
  QUnit.test('unit/models/roll-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/roll-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/roll-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/roll-test.js should pass ESLint\n\n');
  });
});
define("dice-roller/tests/test-helper", ["dice-roller/app", "dice-roller/config/environment", "@ember/test-helpers", "ember-qunit"], function (_app, _environment, _testHelpers, _emberQunit) {
  "use strict";

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _emberQunit.start)();
});
define("dice-roller/tests/unit/models/roll-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Model | roll', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let model = store.createRecord('roll', {});
      assert.ok(model);
    });
  });
});
define("dice-roller/tests/unit/routes/roll-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | roll', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:roll');
      assert.ok(route);
    });
  });
});
define('dice-roller/config/environment', [], function() {
  var prefix = 'dice-roller';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('dice-roller/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
