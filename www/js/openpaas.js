document.addEventListener('deviceready',listTypes, false);

function listTypes () {
  var am = window.plugins.accountmanager;
  var Boutton = document.getElementById("onclick");
  Boutton.addEventListener('click', getAccounts, false);
  var result = am.getAuthenticatorTypes (function(err, response) {
    console.log(err, response);
  });
  console.log(result);
}

function getAccounts() {
  var am = window.plugins.accountmanager;
  var result = am.getAccounts (function(err, response) {
    console.log(err, response);
  });
  console.log(result);
}
