function sum(array) {
	
	var length = array.length;
	var total = 0;
	
	for (var i = 0; i < length; i++) {
		total += array[i];
	};
	
	return total;
};

function multiply(array) {
	
	var length = array.length;
	var total = 1;
	
	for (var i = 0; i < length; i++) {
		total *= array[i];
	};
	
	return total;
};
