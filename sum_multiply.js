function sum(array) {
	var sum = array[0];
	for (var i = 1; i < array.length; i++) {	
			sum +=array[i];		
	};
	return sum;
};

function multiply(array) {
	var sum = array[0];
	for (var i = 1; i < array.length; i++) {	
			sum *=array[i];		
	};
	return sum;
};