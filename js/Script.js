$(document).ready(() => {
	var checkSession = sessionStorage.getItem("sabia");
	function logingPageFunc(){
		$(".welcome").animate({
		left: 0
		},2000);

		$(".showLogin a").click(() => {
			$(".showLogin").fadeOut(400);
			$(".loginForm").fadeIn(3000);
			return false;
		});
		$(".login").fadeIn(2000);
		$(".carousel").fadeIn(2000);
		$(".submitLog").button();
		
		 var options = {
                $AutoPlay: 1,
                $AutoPlaySteps: 1,
                $Idle: 4000,
                $PauseOnHover: 1,
                $ArrowKeyNavigation: 1,
                $SlideDuration: 500,
                $MinDragOffsetToSlide: 20,
                $SlideSpacing: 0,
                $Cols: 1,
                $Align: 0,
                $UISearchMode: 1,
                $PlayOrientation: 1,
                $DragOrientation: 3,

                $SlideshowOptions: {
                    $Class: $JssorSlideshowRunner$,
                    $Transitions: _SlideshowTransitions,
                    $TransitionsOrder: 1,
                    $ShowLink: true
                },

                $BulletNavigatorOptions: {
                    $Class: $JssorBulletNavigator$,
                    $ChanceToShow: 2,
                    $AutoCenter: 0,
                    $Steps: 1,
                    $Rows: 1,
                    $SpacingX: 10,
                    $SpacingY: 10,
                    $Orientation: 1
                },

                $ArrowNavigatorOptions: {
                    $Class: $JssorArrowNavigator$,
                    $ChanceToShow: 2
                }
            };
            ScaleSlider();

            $(window).bind("load", ScaleSlider);
            $(window).bind("resize", ScaleSlider);
            $(window).bind("orientationchange", ScaleSlider);
	};	
	if(checkSession === "ana"){
		$("#loader").css("display", "none");
		setTimeout(logingPageFunc,100);
	}else{
		setTimeout(logingPageFunc, 4000);	
		sessionStorage.setItem("sabia", "ana");
	}
	setTimeout(loader,3000);
});

// ----------Admin Page--------------

$(document).ready(() => {
	$(".welcomeAdmin").animate({
		left: 0
		},2000);
	doctor();
	function doctor(){
		$(".patientRecords,.appointmentRecords").animate({
		opacity: 0,
		top: 100
		},500);
		
		$(".doctorRecords").animate({
		opacity: 1,
		top: 0
		},1500);
		
		$(".doctorRecords").addClass("showRecords");
		$(".patientRecords,.appointmentRecords").removeClass("showRecords");
	}	
	
	function patient(){
		$(".doctorRecords,.appointmentRecords").animate({
		opacity: 0,
		top: 100
		},500);
		$(".patientRecords").animate({
		opacity: 1,
		top: 0
		},1500);
		$(".patientRecords").addClass("showRecords");
		$(".doctorRecords,.appointmentRecords").removeClass("showRecords");
	}	
	
	function appointment(){
		$(".patientRecords,.doctorRecords").animate({
		opacity: 0,
		top: 100
		},500);
		$(".appointmentRecords").animate({
		opacity: 1,
		top: 0
		},1500);
		$(".appointmentRecords").addClass("showRecords");
		$(".patientRecords,.doctorRecords").removeClass("showRecords");
	}	
	
	$(".doctorShow").click(() => {
		doctor();
		$(".doctorShow").addClass("activeli");
		$(".patientShow").removeClass("activeli");
		$(".appointmentShow").removeClass("activeli");
	});
	$(".patientShow").click(() => {
		patient();
		$(".patientShow").addClass("activeli");
		$(".doctorShow").removeClass("activeli");
		$(".appointmentShow").removeClass("activeli");
	});
	$(".appointmentShow").click(() => {
		appointment();
		$(".appointmentShow").addClass("activeli");
		$(".doctorShow").removeClass("activeli");
		$(".patientShow").removeClass("activeli");
	});
	$(".submitLog").click(() => {
		window.location.href="user.html";
		return false;
	});
	
	$(".doctorRecords .addNew").click(() => {
		$(".modal").css({
			"display": "block"
		});
		$("#doctorUpdate").addClass("addNew");
		$("#addAppointment").removeClass("addNew");
		$("#patientUpdate").removeClass("addNew");
	});
	$(".patientRecords .addNew").click(() => {
		$(".modal").css({
			"display": "block"
		});
		$("#patientUpdate").addClass("addNew");
		$("#doctorUpdate").removeClass("addNew");
		$("#addAppointment").removeClass("addNew");
		
	});
	$(".appointmentRecords .addNew").click(() => {
		$(".modal").css({
			"display": "block"
		});
		$("#addAppointment").addClass("addNew");
		$("#doctorUpdate").removeClass("addNew");
		$("#patientUpdate").removeClass("addNew");
		
	});
	$(".modal").click((event) => {
		if(event.target.className == "modal"){
			$(".modal").css("display", "none");
		}
		
	});
	$(".watchAdmin").fadeIn(2000);
	
	// For welcome Admin time-------	
		var data = [
		[0, 4, "Good Night Admin"], 
		[5, 11, "Good Morning Admin"], 
		[12, 17, "Good Afternoon Admin"],
		[18, 24, "Good Evening Admin"]
		],
		hr = new Date().getHours();

		for(var i = 0; i < data.length; i++){
		if(hr >= data[i][0] && hr <= data[i][1]){
			$(".welcomeBack").text(data[i][2]);
		}
		}
		
		$(".adminLogout").button();
		$(".adminLogout").click(() => {
			$("#byeLoader").css("display", "block");
			function wait (){
				window.location.href="index.html";
			};
			setTimeout(wait, 2200);
		});
});

