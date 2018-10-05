/*누가 : 김현주
언제 : 2018 10 05
왜 : 정렬
개발환경 : 윈도우8.1 , 서블라임텍스트
*/

function sort(){
   for(var i = 0 ; i < array.length - 1 ; i++){
      for(var j = 0 ; j < array.length - 1 - i ; j++){
         if(array[j].getSalary() < array[j+1].getSalary()){
            swap(j, j+1);
         }
      }
   }
}
function swap(a, b){
   var temp = array[a];
   array[a] = array[b];
   array[b] = temp;
}