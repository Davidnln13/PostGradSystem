var app;

function main()
{
	app = new App();
}

/**ProjectOrganiser**/
class App
{
 	constructor()
 	{
		this.net = new Net();

		this.viewManager= new ViewManager();
		this.templateManager = new TemplateManager();

		//load views
		for (var viewName in this.viewManager.VIEW)
		{
			console.log(this.viewManager.VIEW[viewName]);
			this.templateManager.queueTemplate(this.viewManager.VIEW[viewName]);
		}

		this.templateManager.downloadAll( function(){ app.setup(); } );
	}

	setup()
	{
		//models
		this.user = new User();

		this.net.setHost(location.hostname,8080);
		this.net.connect();

		//add views
		this.setupViews();
		//add controllers
		this.setupControllers();

		this.viewManager.goToView("signin");
	}

	setupViews()
	{
		this.viewManager.addView(new SigninView());
		this.viewManager.addView(new SignupView());
		this.viewManager.addView(new HomepageView());
		//adds a redpage view
		this.viewManager.addView(new RedPageView());

	}

	setupControllers()
	{
		this.signinController = new SigninController(this.user);
		this.signupController = new SignupController(this.user);
		this.homepageController = new HomepageController(this.user);
		//adds a redpage controller
		this.redpageController = new RedPageController(this.user);
	}
}
