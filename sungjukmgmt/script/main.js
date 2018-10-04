var array = null;
window.addEventListener('load',init);

function init(){
	array = new Array();
	document.getElementById('btnAdd').disabled = false;
	document.getElementById('btnCalc').disabled = true;
	document.getElementById('btnSort').disabled = true;
	document.getElementById('btnOutput').disabled = true;

	document.getElementById('btnAdd').addEventListener('click',add); // 추가버튼 누르면 add함수 호출 
	document.getElementById('btnCalc').addEventListener('click',calc); // 계산버튼 누르면 calc함수 호출
	document.getElementById('btnOutput').addEventListener('click',output); // 출력버튼 누르면 output함수 호출
	document.getElementById('btnSort').addEventListener('click',sort); // 출력버튼 누르면 output함수 호출


}