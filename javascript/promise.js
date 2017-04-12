$(document).ready(function(){
	var dinosaurs = [];

	function writeDom(){
		var domString = "";
		for(var i = 0; i<dinosaurs.length; i++){
			domString += `<h1>${dinosaurs[i].type}</h1>`;
		}
		$("#promises").append(domString);

	}
/////////////////////PYRAMID OF DOOM//////////////////

    // $.ajax("./db/dinosaurs1.json").done(function(data1){
    //     console.log("data1", data1.dinosaurs1);
    //     dinosaurs = data1.dinosaurs1
    //     $.ajax("./db/dinosaurs2.json").done(function(data2){
    //         console.log("data2", data2.dinosaurs2);
    //         data2.dinosaurs2.forEach(function(dino){
    //             dinosaurs.push(dino);
    //         })
    //         $.ajax("./db/dinosaurs3.json").done(function(data3){
    //         console.log("data3", data3.dinosaurs3);
    //         data3.dinosaurs3.forEach(function(dino){
    //             dinosaurs.push(dino);
    //         })
    //         writeDOM(); 
	   //      }).fail(function(error3){
	   //          console.log(error3);
	   //      })
    //     }).fail(function(error2){
    //         console.log(error2);
    //     })
    // }).fail(function(error1){
    //     console.log(error1);
    // })

/////////////////////END OF DOOM PYRAMID///////////////


var firstDinosaurJSON = function(){
	return new Promise(function(resolve, reject){
		$.ajax("./db/dinosaurs1.json").done(function(data1){
		  resolve(data1.dinosaurs1);
		}).fail(function(error1){
		  reject(error1);
		});
	});
};


firstDinosaurJSON().then(function(jsonData1){
	console.log(jsonData1);
	dinosaurs = jsonData1;
	writeDom();
}).catch(function(jsonDataFail){
	console.log(jsonDataFail);
});



});