
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

        var descripArray = work.jobs[job].description.split('.');
        var descripString = "";
        for(var i = 0; i < descripArray.length - 1; i++) {
            descripString += "<li>" + descripArray[i] + "</li>";
        }

        var formattedDescription = HTMLworkDescription.replace("%data%", descripString);
        $(".work-entry:last").append(formattedDescription);
    }

    work.languages.sort(function (a, b) {
        return b.rank - a.rank;
    });

    for(var language in work.languages) {
        $("#language-proficiency").append(HTMLlanguageStart);
//todo: write regEx for replaceAll()
        var formattedLanguage = HTMLprogressSpecs.replace("%data%", work.languages[language].rank);
        formattedLanguage = formattedLanguage.replace("%width%", work.languages[language].rank);
        formattedLanguage = formattedLanguage.replace("%color%", work.languages[language].color);
        formattedLanguage = formattedLanguage.replace("%name%", work.languages[language].name);
        $(".language-entry:last").append(formattedLanguage);
    }

    work.platforms.sort(function (a, b) {
        return b.rank - a.rank;
    });

    for(var platform in work.platforms) {
        $("#platform-proficiency").append(HTMLplatformStart);
        var formattedPlatform = HTMLprogressSpecs.replace("%data%", work.platforms[platform].rank);
        formattedPlatform = formattedPlatform.replace("%width%", work.platforms[platform].rank);
        formattedPlatform = formattedPlatform.replace("%color%", work.platforms[platform].color);
        formattedPlatform = formattedPlatform.replace("%name%", work.platforms[platform].name);
        $(".platform-entry:last").append(formattedPlatform);
    }
});

