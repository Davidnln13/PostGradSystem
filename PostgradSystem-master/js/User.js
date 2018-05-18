/**Model of User info sends information to the server and updates
*  the view depending on what is returned (e.g. signs in or error)**/
class User extends Model
{
    constructor()
    {
        super();
        this.displayName = "";
        this.name = "";
        this.surname = "";
        this.role = "";
        this.supervisorEmail = "";
        this.email = "";
        this.password = "";
    }

    signup(displayName, name, surname, role, supervisorEmail, email, password, passwordConfirm)
    {
        this.displayName = displayName;
        this.name = name;
        this.surname = surname;
        this.role = role;
        this.email = email;
        this.password = password;
        this.supervisorEmail = supervisorEmail;

        if (this.password === passwordConfirm){
          app.net.sendMessage("signup",this.getSerialisedUser());
        }
        else{
            alert("Passwords do not match!");
        }

    }

    signin(email, password)
    {
        this.email = email;
        this.password = password;

        app.net.sendMessage("signin", this.getSerialisedUser());
    }

    /**Sets missing fields based on data received from the database**/
    setData(data)
    {
        this.displayName = data.displayName;
        this.name = data.name;
        this.surname = data.surname;
        this.role = data.role;
        this.supervisorEmail = data.supervisorEmail;
        this.email = data.email;
        this.password = data.password;
    }

    /**Returns an object not JSON since sendMessage will convert to JSON**/
    getSerialisedUser()
    {
        var user_info = {};

        user_info.displayName = this.displayName;
        user_info.name = this.name;
        user_info.surname = this.surname;
        user_info.role = this.role;
        user_info.supervisorEmail = this.supervisorEmail;
        user_info.email = this.email;
        user_info.password = this.password;

        return user_info;
    }
}
