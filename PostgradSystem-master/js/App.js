var app;
//array to hold trackers
var trackers = [];
//initial set up of base tracker
var tracker = new Tracker("1","2","3");

function main()
{
	app = new App();
}
function track(element)
{
	if(element === "document")
	{
		console.log("user clicked randomly on the screen");
	}
	else
	{
		//makes a new tracker of the elements details pushes it to the array and logs it in the console
		tracker = new Tracker(document.getElementById(element).id, new Date(), document.getElementById(element).nodeName);
		trackers.push(tracker);
		tracker.logThis();
	}
}
/**ProjectOrganiser**/
class App
{

 	constructor()
 	{
		//adds click event to entire document
	  document.addEventListener("mousedown",function(){track("document")});
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
