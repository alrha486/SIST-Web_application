/*누가 : 김현주
언제 : 2018 10 05
왜 : main
개발환경 : 윈도우8.1 , 서블라임텍스트
*/

var array=null;
window.addEventListener('load', init);

function init(){
   array=new Array();
   document.getElementById('btnAdd').disabled=false;
   document.getElementById('btnCalc').disabled=true;
   document.getElementById('btnSort').disabled=true;
   document.getElementById('btnOutput').disabled=true;

   document.getElementById('btnAdd').addEventListener('click', add);
   document.getElementById('btnCalc').addEventListener('click', calc);
   document.getElementById('btnSort').addEventListener('click', sort);
   document.getElementById('btnOutput').addEventListener('click', output);
}