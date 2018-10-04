function calc(){
	// console.log('학생 수 ='  + array.length);
	for(var i=0; i<array.length; i++){
		var std = array[i];
		var sum = std.getKor() + std.getEng() + std.getMat() + std.getEdp();
		
		var avg = (sum/4);
		
		var grade = (avg <= 100 && avg >= 90) ? 'A' :
										(avg < 90 && avg >= 80) ? 'B' :
										(avg < 80 && avg >= 70) ? 'C' :
										(avg < 70 && avg >= 60) ? 'D' : 'F';

		std.setSum(sum);
		std.setAvg(avg);
		std.setGrade(grade);
	}
	document.getElementById('btnOutput').disabled = false;  //출력버튼 활성화

			if(array.length >= 2){ // 2명이상 추가됬을 시 정령버튼 활성화
		document.getElementById('btnSort').disabled = false; 
	}
}