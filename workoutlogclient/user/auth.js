$(function(){
	$.extend(WorkoutLog, {
		signup: function() {
			var username = $("#su_username").val();
			var password = $("#su_password").val();
		

		var user = {
			user: {
				username: username,
				password: password
			}
		};

		//signup method

		var signup = $.ajax({
			type: "POST",
			url: WorkoutLog.API_BASE + "user",
			data: JSON.stringify(user),
			contentType:"application/json"
		});

		//signup done/fail

		signup.done(function(data){
			if(data.sessionToken){
				WorkoutLog.setAuthHeader(data.sessionToken);
				 WorkoutLog.definition.fetchAll();
                  WorkoutLog.log.fetchAll();
			}
			$("#signup-modal").modal("hide");
			$(".disabled").removeClass("disabled");
			$("#loginout").text("Logout");
		}).fail(function(){
			$("#su_error").text("There was an issue with signup.").show();
		});

	},

	login: function() {
		var username = $("#li_username").val();
		var password = $("#li_password").val();
		var user = {
			user: {
				username: username,
				password: password
			}
		};

		var login = $.ajax({
			type: 'POST',
			url: WorkoutLog.API_BASE + "login",
			data: JSON.stringify(user),
			contentType: "application/json"
		});

		login.done(function(data){
			if(data.sessionToken){
				WorkoutLog.setAuthHeader(data.sessionToken);
				WorkoutLog.definition.fetchAll();
               WorkoutLog.log.fetchAll();
			}
			$("#login-modal").modal("hide");
			$(".disabled").removeClass("disabled");
			$("#loginout").text("Logout");
		}).fail(function(){
			$("#li_error").text("There was an issue with signup").show();
		});
	},


		//login method

		loginout: function() {
			if(window.localStorage.getItem("sessionToken"));
			$("#loginout").text("Login");
		}
		
		//loginout method

	});

	$("#login").on("click", WorkoutLog.login);
	$("#loginout").on("click", WorkoutLog.loginout);

	if(window.localStorage.getItem("sessionToken")) {
		$("#loginout").text("Logout");
	}

	//bind events

	$("#signup").on("click", WorkoutLog.signup);
});