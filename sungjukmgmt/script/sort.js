function sort(){
	for(var i=0; i<array.length; i++){
		for(var j=0; j<array.length-1-i ; j++){
		if(array[j].getSum() > array[j+1].getSum())
			swap(j, j+1);		
		}
	}
}
	function swap(a,b){
			var temp = array[a];
			array[a] = array[b];
			array[b] = temp;
	}