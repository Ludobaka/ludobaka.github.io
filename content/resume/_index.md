+++
css = ["resume.css"]
date = "2017-05-12T10:24:23+02:00"
description = ""
scripts = ["main-min.js"]
tags = []
title = "Resume"

[params]
    # Main body sections

    # You may use markdown in summary, details and intro fields. But don't overdose, it's resume!:)

    # Summary section
    [params.summary]
        enable = true
        icon = "fa-user"
        title = "Career Profile"
        summary = "Software Development Engineer with 3+ years of experience in data processing and data visualization. I have an Engineering Degree from _Telecom Physique Strasbourg_ specialized in _Healthcare Information Technologies_.<br/>Open-minded, creative and detail-oriented, I am proficient for building the softwares of tomorrow."

    # Experiences section
    [params.experiences]
        enable = true
        icon = "fa-briefcase"
        title = "Experiences"

        [[params.jobs.list]]
        position = "Software Development Engineer"
        dates = "2015 - Present"
        company = "BIONEXT SA, Strasbourg, France"
        details = "_BiovizJS_ is a 3D molecular visualization Web application built on top of _ThreeJS_, a _WebGL_ graphics library. I am in charge of all aspects of software development : design, conception, build, tests and training. I've also implemented scientific publications to improve rendering quality and computational performances."

        [[params.jobs.list]]
        position = "Software Development Apprenticeship"
        dates = "2012 - 2015"
        company = "IRCAD, Strasbourg, France"
        details = "_IRCAD_ is a training and research institute, whose goal is to improve the treatment of patients with digestive cancer by using cutting-edge technologies. I've worked at the R&D department, assisting my tutor by creating software components aimed to predict organs position during breathing and show those information on a 3D scene. For my final year project, I also improved and optimized 3D scene rendering by using _Ogre3D_, a _C++_ library."

        [[params.jobs.list]]
        position = "Software Development Internship"
        dates = "2012"
        company = "BIONEXT SA, Strasbourg, France"
        details = "_BioNote_ is a plugin of Bioviz, a 3D molecular visualization software in _Java_ developed by _BIONEXT_. My mission was to develop a proof of concept of a plugin aimed to easily create molecular animations. It's purpose is to help scientists to illustrate their researches by providing interactive animations."

    # Projects section
    [params.projects]
        enable = true
        icon = "fa-archive"
        title = "Projects"
        intro = "I will attempt to detail some of the projects I've participated over the years."
        
        [[params.projects.list]]
        title = "ThreeJS"
        url = "https://threejs.org/"
        tagline = "A _WebGL_ graphics library, aiming to create an easy to use, lightweight, 3D library. I'm a casual contributor of this library, trying to contribute everytime I'm encountering some bugs or wanting some new functionalities. If you want to check my open-source contributions, please check my _GitHub_ profile."

        [[params.projects.list]]
        title = "Follow-Up"
        # url = "https://github.com/aerohub/hugrid"
        tagline = "A personalized solution intended to accompany the woman in case of contraception accident, emergency and / or in the observance of its regular contraception. I was in charge of the development of a mobile application and participated on establishing the business model. It has been developed during Hacking Health Camp Strasbourg 2016."

        [[params.projects.list]]
        title = "Secret Gift Of Bravery"
        url = "http://projects.hackinghealth.camp/?p=255"
        tagline = "A serious-game to help (pre-) adolescents accept their diabetes through an educational video game. We created an online card game, strongly inspired from games like _Heartstone_ and _Magic The Gathering_, and which game mechanics where aimed to learn young patient to manage their diabete. My job was to lead the Unity development team. It has been developed during Hacking Health Camp Strasbourg 2015."

        [[params.projects.list]]
        title = "Biochips"
        # url = "https://github.com/aerohub/hugo-identity-theme"
        tagline = "Creation of an automated process for biochips production on a Biomek 2000 robot. We were in charge of establishing the various parameters allowing the creation of biochips as well as developing the _TCL_ code allowing automated control of the robot. This project has been made during Engineering Project at Telecom Physique Strasbourg with a multidisciplinary team (physics, computer science, chemistry and industrial electronics)."

    # Skills section
    [params.skills]
        enable = true
        icon = "fa-rocket"
        title = "Skills & Proficiency"

        [[params.skills.list]]
        skill = "Javascript & ThreeJS"
        level = "90%"

        [[params.skills.list]]
        skill = "HTML5 & CSS"
        level = "60%"

        [[params.skills.list]]
        skill = "C++"
        level = "80%"

        [[params.skills.list]]
        skill = "Java"
        level = "75%"

        [[params.skills.list]]
        skill = "Image Processing"
        level = "60%"

        [[params.skills.list]]
        skill = "Unity"
        level = "50%"

+++
