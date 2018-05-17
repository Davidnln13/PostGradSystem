/**Handles messages**/
class MessageHandler
{
	constructor  ()
	{
		this.types = {
			SIGN_IN: "signin",
			SIGN_IN_SUCCESSFUL: "signin_successful",
			SIGN_IN_FAILED: "signin_failed",
			SIGN_UP_SUCCESSFUL: "signup_successful",
			SIGN_UP_FAILED: "signup_failed"//,
		//	RED_PAGE: "redpage"
		};
	}

	handleMessage (message)
	{
		console.log("message" + message);

		var msg = JSON.parse(message);
		var type = msg.type;
		var data = msg.data;

		console.log("type: " + type);
		console.log("data: " + data);

		if(type === app.net.messageHandler.types.SIGN_UP_SUCCESSFUL)
		{
			console.log("Signup successful");
			app.viewManager.goToView("signin");
		}
		else if(type === app.net.messageHandler.types.SIGN_IN_SUCCESSFUL)
		{
			console.log("Signin successful");

			//set user data
			app.user.setData(data);

			console.log(data);
			alert("Sign-in successful - in a next version you will be transferred onto a fitting page.");
			// Move to a
			// app.projectsController.update();
			// app.viewManager.goToView(app.viewManager.VIEW.PROJECTS);
		}

		else if(type === app.net.messageHandler.types.SIGN_IN_FAILED)
		{
			alert("Details incorrect, please try again")
		}
		else if(type === app.net.messageHandler.types.SIGN_UP_FAILED)
		{
			alert("These email/profile name are already registered in the system or you have not filled everything.")
		}
		//if we get a redpage message we switch to that view
		// else if(type === app.net.messageHandler.types.RED_PAGE)
		// {
		// 	app.viewManager.goToView("redpage");
		// }
	}
}
