 $(function(){
	$.extend(WorkoutLog, {
		profile : {

			getUser: function(){
				var thisLog = {id: $(this).attr("id")};
				console.log(thisLog);
				logID = thisLog.id;
				var updateData = { log: thisLog };
				var getLog = $.ajax({
					type: "GET",
					url: WorkoutLog.API_BASE + "log/" + logID,
					data: JSON.stringify(updateData),
					contentType: "application/json"
				});
				getLog.done(function(data){
					$("#username").html(data.result);
				})
			}
		}
	});
		
	$(document).ready(function(){
		WorkoutLog.profile.getUser();
	});
			
	   // fetch history if we already are authenticated and refreshed
   		if (window.localStorage.getItem("sessionToken")) {
      		WorkoutLog.log.fetchAll();
      	}
});





/*
getWorkout: function(){
				var thisLog = {id: $(this).attr("id")};
				console.log(thisLog);
				logID = thisLog.id;
				var updateData = { log: thisLog };
				var getLog = $.ajax({
					type: "GET",
					url: WorkoutLog.API_BASE + "log/" + logID,
					data: JSON.stringify(updateData),
					contentType: "application/json"
				});

				getLog.done(function(data){
					$('a[href="#update-log"]').tab("show");
					$('#update-result').val(data.result);
					$('#update-description').val(data.description);
					$('#update-id').val(data.id)
				});
			},
			*/