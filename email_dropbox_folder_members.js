/*Use immediately-invoked function expression*/
(function(){
  if ( document.URL != 'https://www.dropbox.com/share' ) { 
    var answer = confirm('Only works on https://www.dropbox.com/share\nRedirect there now?.');
    if ( answer ) { window.location.href = 'https://www.dropbox.com/share';}
    return
  }
  var modal = document.querySelector('#folder-share-show-modal');
  if ( !modal ) { alert('Please open the Options menu of a shared folder.'); return }
  var loading = document.querySelector('#folder-share-show-modal.ajax-loading');
  if ( loading ) { alert('Please try again when loading is complete.'); return }
  var a = document.querySelectorAll('.sf-tooltip-row:not(.sf-tooltip-reinvite) > a');
  var list = [];
  for (var i in a) {
    if ( a.hasOwnProperty(i) && i != 'length') {
    list.push(a[i].getAttribute('href').replace('mailto:',''));
    }
  }
  document.getElementsByTagName('h5')[0].innerHTML += ' <a href=mailto:' + list.join(';') + '>(E-Mail all members)</a>';
  void(0);
}());
