

/*누가 : 김수연
언제 : 2018 10 05
왜 : 출력
개발환경 : 윈도우8.1 , 서블라임텍스트
*/
function output(){
	//window.open('https://www.naver.com');  //출력누르면 새창열어
	var w = window.open();
	w.document.open();//창안에잇는 바디에 문서가있을거고 그 문서 열어
	w.document.write('<!DOCTYPE html>');  //그 문서 열리면 출력할 문자
	w.document.write('<html>'); 
	w.document.write('<head>'); 
	w.document.write('<meta charset="utf-8">'); 
	w.document.write('<title>사원급여표</title>'); 
	w.document.write('   <link rel="stylesheet" href="css/outputui.css">');
	w.document.write('</head>'); 
	w.document.write('<body>');
	w.document.write('<h1>사원급여표'); 
	  
    	w.document.write("<table border='1'>");
    	w.document.write('<thead>');
     	w.document.write('<tr>');     /* table row 행*/
      w.document.write('<th>사원번호</th><th>사원이름</th><th>부서명</th><th>기본급</th><th>호급수당</th><th>가족수당</th><th>야간수당</th><th>총금액</th><th>실수령액</th>');  //table header(칼럼제목)
      w.document.write('</tr>');
      w.document.write('</thead>');
      w.document.write('<tbody>'); //사원루프돌기 사원수만큼 tr반복
        for(var i = 0 ; i < array.length ;i++){
        	var s =array[i];
      w.document.write('<tr>');
		w.document.write('<td>' + s.getSabun() + '</td><td>' + s.getName() + '</td><td>' + s.getDname() + '</td><td>' + s.getBase() + '</td><td>' + s.getHobong() + '</td><td>' + s.getFsudang () + '</td><td>' + s.getNtsudang() + '</td><td>' + s.getSum() + '</td><td>' + s.getSalary() + '</td>'); //table data 열
		w.document.write('</tr>');
	   }
		w.document.write('</tbody>');
		w.document.write('</table>');
    


	w.document.write('</body>'); 
	w.document.write('</html>'); 
	w.document.close();   //다큐먼트 닫아
	
	




}
 //w.document.write('');

		
			
				
			
		
		
			
				
			
		
	