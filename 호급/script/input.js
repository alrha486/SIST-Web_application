/*누가 : 최지혜
언제 : 2018 10 05
왜 : 입력
개발환경 : 윈도우8.1 , 서블라임텍스트
*/


function add(){
   var sabun = document.getElementById('txtSabun').value;
   var name = document.getElementById('txtName').value;
   var base = document.getElementById('txtbase').value;
   var nt = document.getElementById('txtNt').value;
   var family = document.getElementById('txtFamily').value;
   if(!sabun || !name || !base || !nt || !family ){
      alert("값이 없는 항목이 있습니다. \n확인 후 다시 입력해 주십시요");
   }else{
      var sawon = new Sawon(sabun,name,base,nt,family);
      array.push(sawon);
      document.myform.reset();
      document.getElementById('btnCalc').disabled = false;
      document.getElementById('btnOutput').disabled = false;
   }
   if(array.length >= 2)
      document.getElementById('btnSort').disabled = false;
}