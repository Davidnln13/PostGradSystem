/**Controller for sign in**/
class SigninController
{
	constructor(model)
	{
		this.model = model;
		this.setup();
		//array to hold trackers
		this.trackers = [];
		//initial set up of base tracker
		this.tracker = new Tracker("1","2","3");
	}

	setup()
	{
		var that = this;

		var signinButton = document.getElementById("signin-button");
		signinButton.addEventListener("click", function(){that.signin()} );

		var redpagebutton = document.getElementById("redpage-button");
		redpagebutton.addEventListener("click", function(){that.redpage()} );

		var signupButton = document.getElementById("signup-link");
		signupButton.addEventListener("click", function(){that.signup()} );
	}

	signin(e)
	{
		//go to an onclick event
		// change tracker to the currently selected one
		//add it to the array
		//log in console
		this.tracker = new Tracker(document.getElementById("signin-button").id, new Date(), document.getElementById("signin-button").nodeName);
		this.trackers.push(this.tracker);
		//this.tracker.logAll(this.trackers);
		this.tracker.logThis();

		var email = document.getElementById("signin-email").value;
    	var password = document.getElementById("signin-password").value;
    	this.model.signin(email,password);
	}
	redpage()
	{
		this.tracker = new Tracker(document.getElementById("redpage-button").id, new Date(), document.getElementById("redpage-button").nodeName);
		this.trackers.push(this.tracker);
		this.tracker.logThis();

		app.viewManager.goToView("redpage");
	}
	signup()
	{
		this.tracker = new Tracker(document.getElementById("signup-link").id, new Date(), document.getElementById("signup-link").nodeName);
		this.trackers.push(this.tracker);
		this.tracker.logThis();

		app.viewManager.goToView("signup");
	}
}
