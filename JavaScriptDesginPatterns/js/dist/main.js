;

(function () {
  "use strict";

  function OnDOMLoaded() {
    var clearDisplay = function clearDisplay() {
      document.querySelector('.data-display').innerHTML = "";
      document.querySelector('#constructor').style.display = 'none';
      document.querySelector('#callback').style.display = 'none';
    };

    var renderData = function renderData(session, json) {
      switch (session) {
        case 'designPatternsTab':
          clearDisplay();
          document.querySelector('.data-display').innerHTML = Handlebars.templates['designPatterns'](json);
          break;

        case 'prototypeTab':
          clearDisplay();
          document.querySelector('.data-display').innerHTML = Handlebars.templates['prototype'](json);
          break;

        case 'sourcesTab':
          clearDisplay();
          document.querySelector('.data-display').innerHTML = Handlebars.templates['source'](json);
          break;

        case 'constructorTab':
          clearDisplay();
          document.querySelector('.data-display').innerHTML = Handlebars.templates['instanceConstructor'](json);
          document.querySelector('#constructor').style.display = 'inline';
          break;

        case 'prototypeChainTab':
          clearDisplay();
          document.querySelector('.data-display').innerHTML = Handlebars.templates['prototypeChain'](json);
          break;

        case 'callbackTab':
          clearDisplay();
          document.querySelector('#callback').style.display = 'inline';
          break;

        default:
          console.log(session);
          break;
      }
    };

    var fetchRender = function fetchRender(input) {
      var render = input || 'designPatternsTab';
      fetch('writeup-data.json').then(function (data) {
        return data.json();
      }).then(function (json) {
        json = json.query.results.groupF;
        renderData(render, json);
      }).catch(function (err) {
        return console.error(err);
      });
    };

    fetchRender();
    document.querySelector('div>.pure-menu').addEventListener('click', function (e) {
      e.preventDefault();
      console.log(e.target.id);
      fetchRender(e.target.id);
    });
  }

  document.addEventListener('DOMContentLoaded', OnDOMLoaded);
})();
