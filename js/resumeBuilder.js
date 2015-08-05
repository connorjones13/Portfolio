
$.getJSON('assets/work.json', function displayWork(work) {
    for(var job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);

        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        $(".work-entry:last").append(formattedLocation);

        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);
    }

    work.languages.sort(function (a, b) {
        return b.rank - a.rank;
    });

    for(var language in work.languages) {
        $("#skills2").append(HTMLlanguageStart);
//todo: write regEx for replaceAll()
        var formattedSkill = HTMLlanguageSpecs.replace("%data%", work.languages[language].rank);
        formattedSkill = formattedSkill.replace("%width%", work.languages[language].rank);
        formattedSkill = formattedSkill.replace("%color%", work.languages[language].color);
        formattedSkill = formattedSkill.replace("%name%", work.languages[language].name);
        $(".skill-entry:last").append(formattedSkill);
    }
});

