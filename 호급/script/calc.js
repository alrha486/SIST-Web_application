/*누가 : 이진웅
언제 : 2018 10 05
왜 : 계산
개발환경 : 윈도우8.1 , 서블라임텍스트
*/



function calc(){
   for(var i=0; i<array.length; i++){ // 입력한 사람 수만큼 반복
      var Sawon = array[i]; 
      
      var sabun = Sawon.getSabun(); // 입력한 사번 
      var d_code = sabun.substring(0,1); // 문자열 자르기 (부서코드)
      var h_code = sabun.substring(1,2); // 문자열 자르기 (호급수당코드)
      console.log(sabun);

      var d_name = null;
      switch(d_code){ // 부서코드로 부서명 구하기
         case 'A' : d_name = "영업부"; break;
         case 'B' : d_name = "업무부"; break;
         case 'C' : d_name = "홍보부"; break;
         case 'D' : d_name = "인사부"; break;
         case 'E' : d_name = "경리부"; break;
         case 'F' : d_name = "판촉부"; break;
         case 'G' : d_name = "총무부"; break;
      }
      console.log(d_name);


      var h_sudang = null; // 호급수당구하기
      switch(h_code){
         case '1': h_sudang = 900000; break;
         case '2': h_sudang = 400000; break;
         case '3': h_sudang = 600000; break;
         case '4': h_sudang = 800000; break;
         case '5': h_sudang = 300000; break;
         case '6': h_sudang = 800000; break;
         case '7': h_sudang = 800000; break;
      } // 호급수당 구하기 

      var gibon = null;  // 기본급
      switch(Sawon.getBase()){
         case '1' : gibon = 15000; break;
         case '2' : gibon = 25000; break;
         case '3' : gibon = 35000; break;
         case '4' : gibon = 45000; break;
      }

      var f_fee = Sawon.getFamily() * 7000 ; //가족수당

      var n_fee = null ; // 야간수당  
      switch(Sawon.getNt()) {
         case '1' : n_fee =1500;  break;
         case '2' : n_fee =2500;  break;
         case '3' : n_fee =3500;  break;
         case '4' : n_fee =4500;  break;
      } // 야간수당 구하기
    
       var total = (h_sudang + gibon + n_fee + f_fee); // 총금액 = 호급수당 + 기본급 + 야간수당 + 가족수당 
       var final = total - (h_sudang/10); // 실수령액

       Sawon.setDname(d_name); // 부서명 세팅
       Sawon.setHobong(h_sudang); // 호급수당 세팅
       Sawon.setFsudang(f_fee); // 가족수당 세팅
       Sawon.setNtsudang(n_fee); // 야간수당 세팅
       Sawon.setSum(total); // 총금액 세팅
       Sawon.setSalary(final); // 실수령액 세팅
   }// fot문 끝

}