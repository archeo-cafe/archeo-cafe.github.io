function renderMenu(jsonAddress) {
 
  getJSON(jsonAddress, function(err, data) {
    if (err !== null) {
      //alert('Something went wrong: ' + err);
    } else {
      var template = document.getElementById('menuTemplate').innerHTML;
      var rendered = Mustache.render(template, data);
      document.getElementById('target').innerHTML = rendered;
    }
  });
}

function getJSON(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.responseType = 'json';
  xhr.onload = function() {
    var status = xhr.status;
    if (status === 200) {
      callback(null, xhr.response);
    } else {
      callback(status, xhr.response);
    }
  };
  xhr.send();
};

function changeLanguage() {
  var jsonAddress = '/menu/data_en.json';
  var oldLanguage = document.getElementById('preferredLanguage').innerHTML;
  var newLanguage = 'TR'
  if (oldLanguage == 'TR'){
    newLanguage = 'EN'
    jsonAddress = '/menu/data.json';
  } 
  document.getElementById('preferredLanguage').innerHTML = newLanguage;
  renderMenu(jsonAddress)
};
