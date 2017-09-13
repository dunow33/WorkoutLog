 $(function(){
	$.extend(WorkoutLog, {
		profile : {

			setDefinitions: function (){
				var defs = WorkoutLog.definition.userDefinitions;
				var len = defs.length;
				var opts;
				for (var i = 0; i < len; i++) {
					opts += "<option value='" + defs[i].id +"'>" + defs[i].description + "</option>";
				}
				$("#log-definition").children().remove();
				$("#log-definition").append(opts);
				$("#update-definition").children().remove();
				$("#update-definition").append(opts);
			}
		}
	})

	   // fetch history if we already are authenticated and refreshed
   		if (window.localStorage.getItem("sessionToken")) {
      		WorkoutLog.log.fetchAll();
      	}
})

$("#username").append("hello");