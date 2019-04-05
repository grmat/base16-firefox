// ----------------- Internationalization ------------------
// for (let node of document.querySelectorAll('[data-i18n]')) {
//   let [text, attr] = node.dataset.i18n.split('|');
//   text = chrome.i18n.getMessage(text);
//   attr ? node[attr] = text : node.appendChild(document.createTextNode(text));
// }
// ----------------- /Internationalization -----------------
// from https://github.com/erosman/HTML-Internationalization

function handleError(error) {
  console.log(`Error: ${error}`);
}

function loadTheme(themeName, callback) {
  var xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");
  xobj.open('GET', 'firefox/themes/' + themeName.toLowerCase() + '.json', true);
  console.log(themeName + " selected");
  xobj.onreadystatechange = function () {
    if (xobj.readyState == 4 && xobj.status == "200") {
      callback(xobj.responseText);
    }
  };
  xobj.send(null);  
}

function updateTheme(event) {
  var themeName = event.target.value;
  loadTheme(themeName, function(text){
    var theme = JSON.parse(text);
    // strip author info from JSON data
    delete theme["info"];
    browser.theme.update(theme);
  });
}

document.addEventListener('DOMContentLoaded',function() {
  document.querySelector('select[id="theme"]').onchange=updateTheme;
},false);
