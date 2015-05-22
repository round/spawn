function spawn(path) {
	var script = document.currentScript;
	var element = document.createElement('div');
	var attributes = $(script).prop('attributes');

	$(script).before($(element).load(path,
		function (){
			var root = $(element).children().first();
			$.each(attributes, function(){
				root.attr(this.name, this.value);
			});
			root.unwrap();
		})
	);

	$(script).remove();
};