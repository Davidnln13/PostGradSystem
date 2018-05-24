/**Controller for sign up**/
class SignupController
{
	constructor(model)
	{
		this.model = model;
		this.setup();
	}

	setup()
	{
		var that = this;


		var signupButton = document.getElementById("signup-button");
		var roleSelector = document.getElementById("signup-role");
		var displayName = document.getElementById("signup-display-name");
		var name = document.getElementById("signup-name");
    var surname = document.getElementById("signup-surname");
		var role = document.getElementById("signup-role");
		var supervisorEmail = document.getElementById("signup-supervisor-email");
		var email = document.getElementById("signup-email");
		var password = document.getElementById("signup-password");
		var passwordConfirm = document.getElementById("signup-confirm-password");

		signupButton.addEventListener("click", function(){track("signup-button")} );
		roleSelector.addEventListener("click", function(){track("signup-role")} );
		displayName.addEventListener("click", function(){track("signup-display-name")} );
		name.addEventListener("click", function(){track("signup-name")} );
		surname.addEventListener("click", function(){track("signup-surname")} );
		role.addEventListener("click", function(){track("signup-role")} );
		supervisorEmail.addEventListener("click", function(){track("signup-supervisor-email")} );
		email.addEventListener("click", function(){track("signup-email")} );
		password.addEventListener("click", function(){track("signup-password")} );
		passwordConfirm.addEventListener("click", function(){track("signup-confirm-password")} );


		signupButton.addEventListener("click", function(){that.signup()} );
		roleSelector.addEventListener("change", function(){that.manageElements()} );
	}

	manageElements(){
		var currentRole = document.getElementById("signup-role").value;
		var supervisorEmailDiv = document.getElementById("signup-supervisor-div-email");

		if (currentRole === "Student"){
			supervisorEmailDiv.style.display = 'block';
		}
		else{
			supervisorEmailDiv.style.display = 'none';
		}
	}

	signup(e)
	{
		var displayName = document.getElementById("signup-display-name").value;
		var name = document.getElementById("signup-name").value;
    var surname = document.getElementById("signup-surname").value;
		var role = document.getElementById("signup-role").value;
		var supervisorEmail = document.getElementById("signup-supervisor-email").value;
		var email = document.getElementById("signup-email").value;
		var password = document.getElementById("signup-password").value;
		var passwordConfirm = document.getElementById("signup-confirm-password").value;


    	this.model.signup(displayName, name, surname, role, supervisorEmail, email, password, passwordConfirm);
	}
}
