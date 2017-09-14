 $(function(){
	$.extend(WorkoutLog, {
		profile : {

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
					$("#username").append(data.owner);
				});
			}
		}
	});
		
	$(document).ready(function(){
		WorkoutLog.profile.getWorkout();
	});
		//$("#username").append(WorkoutLog.);
			
	   // fetch history if we already are authenticated and refreshed
   		if (window.localStorage.getItem("sessionToken")) {
      		WorkoutLog.log.fetchAll();
      	}
});






/* var thisLog = {id: $(this).attr("id")};
				console.log(thisLog);
				logID = thisLog.id;
				var updateData = { log: thisLog };
				var getLog = $.ajax({
					type: "GET",
					url: WorkoutLog.API_BASE + "log/" + logID,
					data: JSON.stringify(updateData),
					contentType: "application/json"
				});*/