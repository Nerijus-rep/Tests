function longest_word(array) {
	var word = array[0];
	for (var i = 1; i < array.length; i++) {
		if (word.length < array[i].length) {
			word = array[i];
		}
	}
	return word.length;
};