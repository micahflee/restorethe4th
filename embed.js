window.onload = function() {
  function get_cookie(name) {
    var value = document.cookie;
    var start = value.indexOf(" " + name + "=");
    if(start == -1) {
      start = value.indexOf(name + "=");
    }
    if(start == -1) {
      value = null;
    } else {
      start = value.indexOf("=", start) + 1;
      var end = value.indexOf(";", start);
      if (end == -1) {
        end = value.length;
      }
      value = unescape(value.substring(start,end));
    }
    return value;
  }
  function set_cookie(name, value) {
    document.cookie = name+'='+value;
  }

  if(get_cookie('restorethe4th')) {
    return;
  }
  set_cookie('restorethe4th', 'seen');

  var el = document.createElement("div");
  el.innerHTML = '<div id="restorethe4th" style="position:absolute;width:100%;height:100%;background-image:url(\'https://www.eff.org/sites/all/themes/frontier/restorethe4th/bg.png\');cursor:pointer;text-align:center;z-index:100;"><iframe id="restorethe4th-iframe" style="border:0;width:650px;height:650px;max-width:650px;max-height:650px;" src="https://www.eff.org/sites/all/themes/frontier/restorethe4th/embed.html" scrolling="no"></iframe><div id="restorethe4th-close" style="background-color:#ffffff;color:#697c80;font-family:helvetica;cursor:pointer;padding:5px;width:100px;margin:0 auto;">close</div></div>';
  document.body.insertBefore(el, document.body.firstChild);
  
  function close() { 
    var el = document.getElementById('restorethe4th');
    if(el) el.parentNode.removeChild(el);
  }
  document.getElementById('restorethe4th').addEventListener('click', close);
  document.getElementById('restorethe4th-close').addEventListener('click', close);

  var h = 0, w = 0;
  if(typeof(window.innerHeight) == 'number') { w = window.innerWidth; h = window.innerHeight; }
  else if(document.documentElement && (document.documentElement.clientHeight)) { w = document.documentElement.clientWidth; h = document.documentElement.clientHeight; }
  else if(document.body && (document.body.clientHeight)) { w = document.body.clientWidth; h = document.body.clientHeight; }
  var size = w;
  if(h < w) size = h;
  if(size > 650) size = 650;
  var margin_top = (h - size) / 2;

  var iframe = document.getElementById('restorethe4th-iframe');
  iframe.style['width'] = size+'px';
  iframe.style['height'] = size+'px';
  iframe.style['margin-top'] = margin_top+'px';
}
