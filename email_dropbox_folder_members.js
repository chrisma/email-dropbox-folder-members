/*Use immediately-invoked function expression*/
(function(){
  var shareURL = 'https://www.dropbox.com/share/folders';
  if ( document.URL != shareURL ) {
    var answer = confirm('Only works on' + shareURL + '\nRedirect there now?');
    if ( answer ) { window.location.href = shareURL;}
    return
  }
  var modal = document.querySelector('div.unified-share-modal');
  if ( !modal ) { alert('Please open the \'Share\' menu of a shared folder.'); return }
  var loading = document.querySelector('div.c-loader');
  if ( loading ) { alert('Please try again when loading is complete.'); return }
  var emailDivs = document.querySelectorAll('div.sharing-member-info__email');
  var list = [];
  [].forEach.call(emailDivs, function(div){
    var email = div.innerHTML;
    if (email != '') list.push(email);
  });
  document.querySelector('h4#unified-share-modal-title').innerHTML += ' <a href=mailto:' + list.join(';') + '>(E-Mail all members)</a>';
  void(0);
}());
