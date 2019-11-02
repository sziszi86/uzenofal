$(function() {
  function yyyymmdd() {
    var x = new Date();
    var y = x.getFullYear().toString();
    var m = (x.getMonth() + 1).toString();
    var d = x.getDate().toString();
    var h = x.getHours().toString();
    var h = ("0" + h).slice(-2);
    var p = x.getMinutes().toString();
    var p = ("0" + p).slice(-2);
    (d.length == 1) && (d = '0' + d);
    (m.length == 1) && (m = '0' + m);
    (h.length == 0) && (m = '0' + h);
    (p.length == 0) && (m = '0' + p);
    var yyyymmdd = y + '-' + m + '-' + d + ' ' + ' ' + h + ':' + p;
    return yyyymmdd;
}
    var apiUrl = 'http://localhost:3000/posts';
  
    var message = new Vue({
      el: "#post",
  
      methods: {
        sendPosts: function(e) {
          var self = this;
          $.ajax({
            type: 'POST',
            url: apiUrl,
            dataType: 'json',
            data: {
              name: $("#name").val(),
              message: $("#message").val(),
              datum: yyyymmdd
            }
          });
        }
      }
    });
    $.ajax({
      type: 'GET',
      url: apiUrl,
      dataType: 'json',
      success: function(json) {
        message.$data.posts = json;
        document.getElementById("demo").innerHTML = json.length ;
      },
      data: null
    });
    
  });
  

  