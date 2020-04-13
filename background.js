(function(){

  if (!localStorage.colors){
    var item = Array();
    item[0]  = {str: 'A', clr: '#FF0000'};
    item[1]  = {str: 'B', clr: '#FF5000'};
    item[2]  = {str: 'C', clr: '#FFDE00'};
    item[3]  = {str: 'D', clr: '#654321'};
    item[4]  = {str: 'E', clr: '#E3D0AC'};
    item[5]  = {str: 'F', clr: '#008000'};
    item[6]  = {str: 'G', clr: '#524846'};
    item[7]  = {str: 'H', clr: '#78FFEB'};
    item[8]  = {str: 'I', clr: '#FFECD1'};
    item[9]  = {str: 'J', clr: '#B5A642'};
    item[10] = {str: 'K', clr: '#201911'};
    item[11] = {str: 'L', clr: '#000000'};
    item[12] = {str: 'M', clr: '#FFC2D2'};
    item[13] = {str: 'N', clr: '#323335'};
    item[14] = {str: 'O', clr: '#000000'};
    item[15] = {str: 'P', clr: '#000080'};
    item[16] = {str: 'Q', clr: '#FCEAC7'};
    item[17] = {str: 'R', clr: '#FFA500'};
    item[18] = {str: 'S', clr: '#000000'};
    item[19] = {str: 'T', clr: '#35FF6C'};
    item[20] = {str: 'U', clr: '#1FCC56'};
    item[21] = {str: 'V', clr: '#00008b'};
    item[22] = {str: 'W', clr: '#000000'};
    item[23] = {str: 'X', clr: '#000000'};
    item[24] = {str: 'Y', clr: '#000000'};
    item[25] = {str: 'Z', clr: '#000000'};
    item[26] = {str: '0', clr: '#000000'};
    item[27] = {str: '1', clr: '#000000'};
    item[28] = {str: '2', clr: '#000000'};
    item[29] = {str: '3', clr: '#000000'};
    item[30] = {str: '4', clr: '#000000'};
    item[31] = {str: '5', clr: '#000000'};
    item[32] = {str: '6', clr: '#000000'};
    item[33] = {str: '7', clr: '#000000'};
    item[34] = {str: '8', clr: '#000000'};
    item[35] = {str: '9', clr: '#000000'};

    item[36] = {str: 'bg', clr: 'rgba(0,0,0,0)'};
    //item[36] = {str: 'bg', clr: 'rgba(0, 0, 0, 0.1)'}

    localStorage["colors"] = JSON.stringify(item);
  }

  if (!localStorage.state) {
    localStorage['state'] = true;
  }

  chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
    if (request.method == "getColors"){
      var letBlocks = JSON.parse(localStorage.colors);
      sendResponse(letBlocks);

    } else if (request.method == "state") {
      sendResponse({state: localStorage['state']});

    } else if (request.method == "toggle_state") {
      localStorage['state'] = !localStorage['state']
      sendResponse({text: "Disabled"});

    } else {
      sendResponse({});
    }
  });
})();
