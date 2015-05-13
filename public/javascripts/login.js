var main = function(){
	"use strict";

	console.log("Hello Vane");

	var $userName = $("<input>").addClass("inputUserName").attr("id", "userName"),
		$password = $("<input>").addClass("inputPassword").attr("id", "passWord").attr("type", "password"),
		$submitButton = $("<button>").text("Submit"),
		$userNameLabel = $("<label>").attr("for", "userName").text("Username"),
		$passWordLabel = $("<label>").attr("for", "passWord").text("Password"),
		$registerButton = $("<button>").text("Register");

	$("#register-form").append($userNameLabel);
	$("#register-form").append($userName);
	$("#register-form").append($passWordLabel);
	$("#register-form").append($password);
	//$("#login-form").append($submitButton);

	$("#register-form").append($registerButton);

	$submitButton.on("click", function(){
		console.log("Loggin in...");

		var uName = $userName.val(),
			pWord = $password.val();

		$.post("/login_verification", {"userName": uName, "passWord": pWord}, function(res){
			console.log("Got a response back from the server.");

			console.log(res.message);
		});

		$userName.val("");
		$password.val("");
	});

	$registerButton.on("click", function(){
		console.log("Registering...");

		var uName = $userName.val(),
			pWord = $password.val();

		$.post("/registration", {"userName": uName, "passWord": pWord}, function(res){
			console.log("Got a response back from the server.");

			$("#results").append($("<p>").text(res.message));
		});
	})
}

$(document).ready(main);