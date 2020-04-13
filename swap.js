(function() {
  chrome.extension.sendRequest({method: "state"}, function(r){
    console.log("msg back")
    console.log(r)
    if (r.state) { // true if enabled
      chrome.extension.sendRequest({method: "getColors"}, function(res) {
        $("<style type='text/css'> .unhighlight {color:''} </style>").appendTo("head");

        var background = res.find((item) => {
          return item.str == "bg" ? item : null;
        })

        res = res.filter(item => item != background);

        res.forEach(function(color){
          $('body').highlight(color.str, color.str + '-class');
          $("<style type='text/css'> ." + color.str + "-class{ color:" + color.clr + "; background: " + background.clr + "} </style>").appendTo("head");
        });
      });
    } else {
      console.log("Chromethesia Plugin Disabled")
    }
  });

  unhighlight_everything = function(){
    $("." + el.str + "-class").removeClass(el.str + "-class").addClass('unhighlight');
  };
})();
