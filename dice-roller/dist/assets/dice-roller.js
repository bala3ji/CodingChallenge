'use strict';



;define("dice-roller/app", ["exports", "dice-roller/resolver", "ember-load-initializers", "dice-roller/config/environment"], function (_exports, _resolver, _emberLoadInitializers, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const App = Ember.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });
  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);
  var _default = App;
  _exports.default = _default;
});
;define("dice-roller/components/roll-dice", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    rollName: '',
    numberOfDice: 1,
    numberOfSides: 6,

    didRender() {
      Materialize.updateTextFields();
    },

    actions: {
      triggerRoll() {
        this.sendAction('roll', this.rollName, this.numberOfDice, this.numberOfSides);
        return false;
      }

    }
  });

  _exports.default = _default;
});
;define("dice-roller/components/welcome-page", ["exports", "ember-welcome-page/components/welcome-page"], function (_exports, _welcomePage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
;define("dice-roller/helpers/app-version", ["exports", "dice-roller/config/environment", "ember-cli-app-version/utils/regexp"], function (_exports, _environment, _regexp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.appVersion = appVersion;
  _exports.default = void 0;

  function appVersion(_, hash = {}) {
    const version = _environment.default.APP.version; // e.g. 1.0.0-alpha.1+4jds75hf
    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility

    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;
    let match = null;

    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      } // Fallback to just version


      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }

  var _default = Ember.Helper.helper(appVersion);

  _exports.default = _default;
});
;define("dice-roller/helpers/pluralize", ["exports", "ember-inflector/lib/helpers/pluralize"], function (_exports, _pluralize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _pluralize.default;
  _exports.default = _default;
});
;define("dice-roller/helpers/singularize", ["exports", "ember-inflector/lib/helpers/singularize"], function (_exports, _singularize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _singularize.default;
  _exports.default = _default;
});
;define("dice-roller/initializers/app-version", ["exports", "ember-cli-app-version/initializer-factory", "dice-roller/config/environment"], function (_exports, _initializerFactory, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  let name, version;

  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  var _default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
  _exports.default = _default;
});
;define("dice-roller/initializers/container-debug-adapter", ["exports", "ember-resolver/resolvers/classic/container-debug-adapter"], function (_exports, _containerDebugAdapter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'container-debug-adapter',

    initialize() {
      let app = arguments[1] || arguments[0];
      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }

  };
  _exports.default = _default;
});
;define("dice-roller/initializers/ember-data", ["exports", "ember-data/setup-container", "ember-data"], function (_exports, _setupContainer, _emberData) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    ```app/services/store.js
    import DS from 'ember-data';
  
    export default DS.Store.extend({
      adapter: 'custom'
    });
    ```
  
    ```app/controllers/posts.js
    import { Controller } from '@ember/controller';
  
    export default Controller.extend({
      // ...
    });
  
    When the application is initialized, `ApplicationStore` will automatically be
    instantiated, and the instance of `PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */
  var _default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
  _exports.default = _default;
});
;define("dice-roller/initializers/export-application-global", ["exports", "dice-roller/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.initialize = initialize;
  _exports.default = void 0;

  function initialize() {
    var application = arguments[1] || arguments[0];

    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;

      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;
        application.reopen({
          willDestroy: function () {
            this._super.apply(this, arguments);

            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  var _default = {
    name: 'export-application-global',
    initialize: initialize
  };
  _exports.default = _default;
});
;define("dice-roller/instance-initializers/ember-data", ["exports", "ember-data/initialize-store-service"], function (_exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'ember-data',
    initialize: _initializeStoreService.default
  };
  _exports.default = _default;
});
;define("dice-roller/models/roll", ["exports", "ember-data"], function (_exports, _emberData) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = _emberData.default.Model.extend({
    rollName: _emberData.default.attr('string'),
    numberOfDice: _emberData.default.attr('number'),
    numberOfSides: _emberData.default.attr('number'),
    result: _emberData.default.attr('number')
  });

  _exports.default = _default;
});
;define("dice-roller/resolver", ["exports", "ember-resolver"], function (_exports, _emberResolver) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _emberResolver.default;
  _exports.default = _default;
});
;define("dice-roller/router", ["exports", "dice-roller/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const Router = Ember.Router.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });
  Router.map(function () {
    this.route('roll');
  });
  var _default = Router;
  _exports.default = _default;
});
;define("dice-roller/routes/index", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({
    model() {
      return this.get('store').findAll('roll');
    }

  });

  _exports.default = _default;
});
;define("dice-roller/routes/roll", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({
    actions: {
      saveRoll: function (rollName, numberOfDice, numberOfSides) {
        alert("Rolling ".concat(numberOfDice, "D").concat(numberOfSides, " as \"").concat(rollName, "\""));
        let result = 0;

        for (let i = 0; i < numberOfDice; ++i) {
          result += 1 + parseInt(Math.random() * numberOfSides);
        }

        const store = this.get('store'); // This requests that the store give us an instance of our "roll" model with the given data

        const roll = store.createRecord('roll', {
          rollName,
          numberOfDice,
          numberOfSides,
          result
        }); // This tells our model to save itself to our backend

        roll.save();
      }
    }
  });

  _exports.default = _default;
});
;define("dice-roller/services/ajax", ["exports", "ember-ajax/services/ajax"], function (_exports, _ajax) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _ajax.default;
    }
  });
});
;define("dice-roller/templates/application", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "LdNqSHxw",
    "block": "{\"symbols\":[],\"statements\":[[7,\"nav\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"nav-wrapper\"],[9],[0,\"\\n        \"],[7,\"a\"],[11,\"href\",\"#\"],[11,\"class\",\"brand-logo\"],[9],[0,\"\\n            \"],[7,\"i\"],[11,\"class\",\"material-icons\"],[9],[0,\"filter_6\"],[10],[0,\"\\n            Dice Roller\\n        \"],[10],[0,\"\\n        \"],[7,\"ul\"],[11,\"id\",\"nav-mobile\"],[11,\"class\",\"right hide-on-med-and-down\"],[9],[0,\"\\n\"],[4,\"link-to\",null,[[\"tagName\",\"route\"],[\"li\",\"roll\"]],{\"statements\":[[0,\"            \"],[7,\"a\"],[11,\"href\",\"roll\"],[9],[0,\"Roll Dice\"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[7,\"div\"],[11,\"class\",\"container\"],[9],[0,\"\\n    \"],[1,[23,\"outlet\"],false],[0,\"\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "dice-roller/templates/application.hbs"
    }
  });

  _exports.default = _default;
});
;define("dice-roller/templates/components/roll-dice", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "wutHpMXq",
    "block": "{\"symbols\":[\"&default\"],\"statements\":[[7,\"form\"],[11,\"class\",\"col s12\"],[12,\"onsubmit\",[29,\"action\",[[24,0,[]],\"triggerRoll\"],null]],[9],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"input-field col s12\"],[9],[0,\"\\n      \"],[2,\" This replaces the <input> tag for \\\"roll_name\\\" \"],[0,\"\\n      \"],[1,[29,\"input\",null,[[\"placeholder\",\"id\",\"class\",\"value\"],[\"Name\",\"roll_name\",\"validate\",[29,\"mut\",[[25,[\"rollName\"]]],null]]]],false],[0,\"\\n      \"],[7,\"label\"],[11,\"for\",\"roll_name\"],[9],[0,\"Name of Roll\"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"input-field col s6\"],[9],[0,\"\\n      \"],[2,\" This replaces the <input> tag for \\\"number_of_dice\\\" \"],[0,\"\\n      \"],[1,[29,\"input\",null,[[\"placeholder\",\"id\",\"type\",\"class\",\"value\"],[\"Number of dice\",\"number_of_dice\",\"number\",\"validate\",[29,\"mut\",[[25,[\"numberOfDice\"]]],null]]]],false],[0,\"\\n      \"],[7,\"label\"],[11,\"for\",\"number_of_dice\"],[9],[0,\"Number of Dice\"],[10],[0,\"\\n  \"],[10],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"input-field col s6\"],[9],[0,\"\\n      \"],[2,\" This replaces the <input> tag for \\\"number_of_sides\\\" \"],[0,\"\\n      \"],[1,[29,\"input\",null,[[\"placeholder\",\"id\",\"type\",\"class\",\"value\"],[\"Number of sides\",\"number_of_sides\",\"number\",\"validate\",[29,\"mut\",[[25,[\"numberOfSides\"]]],null]]]],false],[0,\"\\n      \"],[7,\"label\"],[11,\"for\",\"number_of_sides\"],[9],[0,\"Number of Sides\"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n        \"],[7,\"button\"],[11,\"class\",\"btn waves-effect waves-light\"],[11,\"name\",\"action\"],[11,\"type\",\"submit\"],[9],[0,\"\\n            Roll Dice\\n            \"],[7,\"i\"],[11,\"class\",\"material-icons right\"],[9],[0,\"send\"],[10],[0,\"\\n        \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\"],[10],[0,\"\\n\\n\\n\"],[15,1],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "dice-roller/templates/components/roll-dice.hbs"
    }
  });

  _exports.default = _default;
});
;define("dice-roller/templates/index", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "3ousDeI3",
    "block": "{\"symbols\":[\"roll\"],\"statements\":[[7,\"table\"],[9],[0,\"\\n    \"],[7,\"thead\"],[9],[0,\"\\n        \"],[7,\"tr\"],[9],[0,\"\\n            \"],[7,\"th\"],[9],[0,\"Name\"],[10],[0,\"\\n            \"],[7,\"th\"],[9],[0,\"Dice Rolled\"],[10],[0,\"\\n            \"],[7,\"th\"],[9],[0,\"Result\"],[10],[0,\"\\n        \"],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"tbody\"],[9],[0,\"\\n\"],[4,\"each\",[[25,[\"model\"]]],null,{\"statements\":[[0,\"        \"],[7,\"tr\"],[9],[0,\"\\n            \"],[7,\"td\"],[9],[1,[24,1,[\"rollName\"]],false],[10],[0,\"\\n            \"],[7,\"td\"],[9],[1,[24,1,[\"numberOfDice\"]],false],[0,\"D\"],[1,[24,1,[\"numberOfSides\"]],false],[10],[0,\"\\n            \"],[7,\"td\"],[9],[1,[24,1,[\"result\"]],false],[10],[0,\"\\n        \"],[10],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"    \"],[10],[0,\"\\n\"],[10],[0,\"\\n\\n\\n\"],[1,[23,\"outlet\"],false],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "dice-roller/templates/index.hbs"
    }
  });

  _exports.default = _default;
});
;define("dice-roller/templates/roll", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "AIJOn8/a",
    "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n    \"],[1,[29,\"roll-dice\",null,[[\"roll\"],[\"saveRoll\"]]],false],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[1,[23,\"outlet\"],false],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "dice-roller/templates/roll.hbs"
    }
  });

  _exports.default = _default;
});
;

;define('dice-roller/config/environment', [], function() {
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

;
          if (!runningTests) {
            require("dice-roller/app")["default"].create({"name":"dice-roller","version":"0.0.0+1e7c4aa7"});
          }
        
//# sourceMappingURL=dice-roller.map
