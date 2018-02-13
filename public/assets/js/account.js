
//every time we load a page, we want to check if the user is logged in
//Constructor
function Account() {

};

//We want to see if the user is already logged in; we dont' want to keep asking to login if the user 
//is already logged in. 
Account.prototype.checkLoginStatus = function(cb) {
	var userInfo = this.getLoginInfo();
	if(userInfo[0] != "null"){
		console.log(userInfo);
		this.doLogin(userInfo[0], userInfo[1], cb);
	}else{
		localStorage.setItem('loggedin', false);
		cb(false);
	}
}
//Once the system has the email and password value, we want to comapre them against the database
Account.prototype.doLogin = function(email, password, cb) {
	var self = this;
	$.post('/api/loginattempt', {"email":email, "password":password})
	    .done(function(result) {
	        var res = JSON.parse(result);
	        /* if successful, direct them to the home page */
	        if(res.success){
	        	self.setLoginInfo(email, password);
	        	if(cb) {
	        		cb(true);
	        	}
	        }
	        else{
	            if(cb){
	            	cb();
	            }
	        }
	    })
	    .fail(function(error){
	        console.log(error);
	    });
}
//Setting up local storage for saving user's email and passwords
Account.prototype.setLoginInfo = function(email, password) {
	localStorage.setItem('email', email);
	localStorage.setItem('password', password);
	localStorage.setItem('loggedin', true);

}
//Checking to see if user has any localstorage info
Account.prototype.getLoginInfo = function() {
	var email = localStorage.getItem('email');
	var password = localStorage.getItem('password');
	return [email, password];
}

Account.prototype.logout = function() {
	var email = localStorage.removeItem('email');
	var password = localStorage.removeItem('password');
	localStorage.setItem('loggedin', false);
	setTimeout(function() {
		window.location.href = "/";
	}, 2000);
}


