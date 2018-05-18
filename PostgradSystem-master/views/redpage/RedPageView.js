/**Responsible for displaying what the user sees**/
class RedPageView extends View
{
	constructor(controller)
	{
		super();
		this.title = app.viewManager.VIEW.REDPAGE;
		this.controller = controller;

		this.setup();
	}

	/**Updates the view to reflect the latest model**/
	display (model)
	{

	}

	/**Called whenever the model changes**/
	onNotify (model)
	{
		this.display(model);
	}
}
