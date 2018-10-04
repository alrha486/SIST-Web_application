// 객체 캡슐화
var Student = function(hakbun, name, kor, eng, mat, edp){
	var hakbun = hakbun; // 지역변수에 var 선언 시 private
	var name = name;
	var kor = kor;
	var eng = eng;
	var mat = mat;
	var edp = edp;
	var sum = null;
	var avg = null;
	var grade = null;

	this.getHakbun = function(){ return hakbun; } // 지역변수에 this 선언시 public
	this.getName = function(){ return name; } // 지역변수에 this 선언시 public
	this.getKor = function(){ return kor; } // 지역변수에 this 선언시 public
	this.getEng = function(){ return eng; } // 지역변수에 this 선언시 public
	this.getMat = function(){ return mat; } // 지역변수에 this 선언시 public
	this.getEdp = function(){ return edp; } // 지역변수에 this 선언시 public

	this.getSum = function(){ return sum; }
	this.setSum = function(total){ sum= total; }

	this.getAvg = function(){ return avg; }
	this.setAvg = function(average){ avg = average; }

	this.getGrade = function(){ return grade; }
	this.setGrade = function(grd){ grade = grd; }
	}
