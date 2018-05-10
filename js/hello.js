var thehours = new Date().getHours();
	var themessage;
	var morning = ('Good morning,');
	var afternoon = ('Good afternoon,');
    var evening = ('Good evening,');
    var night = ('Hello night owl,')

    if (thehours >= 0 && thehours < 6) {
        themessage = night;
    }
	if (thehours >= 6 && thehours < 12) {
		themessage = morning; 

	} else if (thehours >= 12 && thehours < 17) {
		themessage = afternoon;

	} else if (thehours >= 17 && thehours < 24) {
		themessage = evening;
	}

	$('.greeting').append(themessage);