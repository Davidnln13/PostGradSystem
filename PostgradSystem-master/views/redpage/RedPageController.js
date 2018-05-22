/**Controller for redpage**/
class RedPageController
{
	constructor(model)
	{
		this.model = model;
		this.setup();
	
	}

	setup()
	{
		var that = this;

		var saveButton = document.getElementById("save-button");

		saveButton.addEventListener("click", function(){that.redpage()} );
	}

	redpage(e)
	{
		var saved = document.getElementById("redpage-name").value;
	 	this.model.redpage(saved);
	}
}
