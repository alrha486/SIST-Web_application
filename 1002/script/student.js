var Student = function(){
	this.hakbun = null;
	this.irum = null;
	this.kor = null;
	this.eng = null;
	this.mat = null;
	this.edp = null;
	this.sum = null;
	this.avg = null;
	this.grade = null;
	this.toString = function(){
		document.write('<ul>');
		document.write('<li>학번 : ' + this.hakbun + '</li><br>');
		document.write('<li>이름 : ' + this.irum + '</li><br>');
		document.write('<li>국어 : ' + this.kor + '</li><br>');
		document.write('<li>영어 : ' + this.eng + '</li><br>');
		document.write('<li>수학 : ' + this.mat + '</li><br>');
		document.write('<li>전산 : ' + this.edp + '</li><br>');
		document.write('<li>합계 : ' + this.sum + '</li><br>');
		document.write('<li>평균 : ' + this.avg + '</li><br>');
		document.write('<li>학점 : ' + this.grade + '</li><br>');
		document.write('</ul>');
	}
};




// var student = {
// 	hakbun : null ,
// 	irum : null ,
// 	kor : null ,
// 	eng : null ,
// 	mat : null ,
// 	edp : null ,
// 	sum : null ,
// 	avg : null ,
// 	grade : null ,
// 	toString : function(){
// 		document.write('<ul>');
// 		for(var property in this){
// 			if(typeof this[property] != 'function'){
// 					document.write('<li>' + property + ' : '  + this[property] + '</li>');
// 			}
// 		}
// 		document.write('</ul>');
// 	}
// }
