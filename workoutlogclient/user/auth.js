$(function(){
	$.extend(WorkoutLog, {
		signup: function() {
			var username = $("#su_username").val();
			var password = $("#su_password").val();
			var age = $("#su_age").val();
		

		var user = {
			user: {
				username: username,
				password: password,
				age: age
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
			$("#nav").show();
			if(data.sessionToken){
				WorkoutLog.setAuthHeader(data.sessionToken);
				 WorkoutLog.definition.fetchAll();
                  WorkoutLog.log.fetchAll();
			}
			$("#signup-modal").modal("hide");
			$(".disabled").removeClass("disabled");
			$("#loginout").text("Logout");
			
			$("#su_username").val("");
			$("#su_password").val("");
			$("#su_age").val("");
			$('a[href="#define"]').tab('show');
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
			$("#nav").show();
			if(data.sessionToken){
				WorkoutLog.setAuthHeader(data.sessionToken);
				WorkoutLog.definition.fetchAll();
               WorkoutLog.log.fetchAll();
			}
			$("#login-modal").modal("hide");
			$(".disabled").removeClass("disabled");
			$("#loginout").text("Logout");
			$("#su_username").val("");
			$("#su_password").val("");
			$('a[href="#define"]').tab('show');
		}).fail(function(){
			$("#li_error").text("There was an issue with signup").show();
		});
	},


		//login method

		logout: function() {
			if(window.localStorage.getItem("sessionToken"));
				$("#nav").hide();
		}
		
		//logout method

	});

	$("#login").on("click", WorkoutLog.login);
	$("#logout").on("click", WorkoutLog.logout);

	if(window.localStorage.getItem("sessionToken")) {
		$("#logout").text("Logout");
	}

	//bind events

	$("#signup").on("click", WorkoutLog.signup);
});