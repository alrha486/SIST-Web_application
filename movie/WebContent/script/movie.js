		var db = null;
		
		function openDb(){
			var request = window.indexedDB.open("MovieStore", 2); // 데이터베이스 생성
			request.addEventListener("error", function(event){
				console.log("Error 발생 : " + event);
			},false);	  
			
			request.addEventListener("success", function(evt) {
			  	console.log("Database Open Success" + this.result);
			  	db = event.target.result;
			},false);
			
			request.addEventListener("upgradeneeded", function(event) {
				console.log("업그레이드 진행중.");
				db = event.target.result;
				if(db.objectStoreNames.contains("movies")){
					db.deleteObjectStore("movies");
				}
				books = db.createObjectStore("movies", {
					keyPath : "isbn",
					autoIncrement : true
				});
			},false);	
		}
		openDb();
		
	
		var title = document.getElementById("txtTitle"); // 영화 제목
		var director = document.getElementById("txtDirector"); // 영화 감독
		var year = document.getElementById("txtYear"); // 영화 상영년도
		var synopsis = document.getElementById("txtSynopsis"); // 영화 줄거리
		
		
		
		document.getElementById('btnSave').addEventListener('click', function(){ // 추가와
																					// 동시에
																					// 출력
			var obj = {
				title : title.value,
				director : director.value,
				year : year.value,
				synopsis : synopsis.value	
			};
			
			var tx = db.transaction(['movies'], 'readwrite');
			tx.addEventListener('complete', function(event) {
			    console.log("Transaction Success");
			},false);
			tx.addEventListener('error', function(event) {
			    console.log("Transaction Failure");
			}, false);
			
			var tx1 = db.transaction(['movies'], 'readonly');
			var movies = tx.objectStore("movies");
			var result = movies.put(obj);

			result.addEventListener("success", function(event) {
			    console.log("Insert Success");
			    
			    
				var results = movies.getAll();
				
				results.addEventListener("success", function(){
					console.log("Select Success");
					for(var i = 0 ; i < results.result.length ; i++){
						createTable(results.result); // 테이블 그리는 함수 호출
					}	    		    
			},false);
		});
		});	
			function createTable(movies){
				var str = "";
				str += "<table border='1'><thead>" + 
							"<th>번호</th><th>제목</th><th>감독</th><th>상영년도</th><th>줄거리</th>" +
							"</thead><tbody>";
							for(var i=0; i< movies.length; i++){
								str += "<tr>";
								str += "<td>" + movies[i].isbn + "</td>" + "<td>" + movies[i].title + "</td>" + 
											"<td>" + movies[i].director + "</td>" + "<td>" + movies[i].year + "</td>"
									     	+"<td>" + movies[i].synopsis + "</td>";
								str += "</tr>";
							}							
				str += "</tbody></table>";
				document.getElementById('result').innerHTML = str;
			}
		