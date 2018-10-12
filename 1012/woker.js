//woker.js
onmessage = function(evt) {
	var num = parseInt(evt.data);
	//console.log("수신 측 num = " + num);
	var result = 0;
	for(var i = 1; i <= num; i++){
	  result += i;
	}
	postMessage(result);
};