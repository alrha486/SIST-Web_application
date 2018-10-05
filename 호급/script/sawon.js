/*누가 : 정준오
언제 : 2018 10 05
왜 : 세팅
개발환경 : 윈도우8.1 , 서블라임텍스트
*/
var Sawon = function(sabun, name, base, nt, family){
   var sabun = sabun;
   var name = name;
   var base = base;
   var nt = nt;
   var family = family;

   var dname = null;
   var hobong = null;
   var fsudang = null;
   var ntsudang = null;
   var sum = null;
   var salary = null;


   this.getSabun = function(){ return sabun; };
   this.getName = function(){ return name; };
   this.getBase = function(){ return base; };
   this.getNt = function(){ return nt; };
   this.getFamily = function(){ return family; };
   

   this.getDname= function() { return dname; };
   this.setDname = function(dn) { dname = dn; };
   this.getHobong = function() { return hobong; };
   this.setHobong = function(hb) { hobong = hb; };
   this.getFsudang = function() { return fsudang; };
   this.setFsudang = function(fd) { fsudang = fd; };
   this.getNtsudang = function() { return ntsudang; };
   this.setNtsudang = function(ns) { ntsudang = ns; };
   this.getSum = function() { return sum; };
   this.setSum = function(total) { sum = total; };
   this.getSalary = function() { return salary; };
   this.setSalary = function(sl) { salary = sl; };

}