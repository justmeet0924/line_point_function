//when given points as dictionary,draw line between thse points.

function line_points(dict){
	stroke(250,0,0);
	let keys = Object.keys(dict);
	
	for(let i=0; i<keys.length-1;i++){
		
		let key = keys[i];
		let next_key = keys[i+1];
		line(dict[key].x,dict[key].y,dict[next_key].x,dict[next_key].y);
	
	}
	
}
