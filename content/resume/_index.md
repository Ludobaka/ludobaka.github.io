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
        summary = "Software Development Engineer with 3+ years of experience in data processing and data visualization. I have an Engineering Degree from _Telecom Physique Strasbourg_ specialized in _Healthcare Information Technologies_.<br/>Open-minded, creative and detail-oriented, I am proficient in building the softwares of tomorrow."

    # Experiences section
    [params.experiences]
        enable = true
        icon = "fa-briefcase"
        title = "Experiences"

        [[params.jobs.list]]
        position = "Software Development Engineer"
        dates = "2015 - Present"
        company = "BIONEXT SA, Strasbourg, France"
        details = "_BiovizJS_ is a 3D molecular visualization Web application built on top of _ThreeJS_, a _WebGL_ graphics library. I am in charge of all the aspects of software development : design, conception, building, tests and training. I have also implemented scientific publications data to improve the rendering quality and the computational performances."

        [[params.jobs.list]]
        position = "Software Development Apprenticeship"
        dates = "2012 - 2015"
        company = "IRCAD, Strasbourg, France"
        details = "_IRCAD_ is a training and research institute which aims to improve the treatment of patients with digestive cancer by using cutting-edge technologies. I have worked within the R&D department and for the first two years I have assisted my tutor in creating visualization tools. I have put in place software components to help predicting organ position during breathing and displayed those information on a _VTK_ 3D scene. For my final year project, I improved and optimized 3D scene rendering by using _Ogre3D_, a _C++_ library."

        [[params.jobs.list]]
        position = "Software Development Internship"
        dates = "2012"
        company = "BIONEXT SA, Strasbourg, France"
        details = "_BioNote_ is a plugin of Bioviz, a 3D molecular visualization software in _Java_ developed by _BIONEXT_. My mission was to develop the proof of concept of a plugin aimed to easily create molecular animations. Its purpose is to help scientists to illustrate their research by providing interactive animations."

    # Projects section
    [params.projects]
        enable = true
        icon = "fa-archive"
        title = "Projects"
        intro = "I will attempt to detail some of the projects I have participated to."
        
        [[params.projects.list]]
        title = "ThreeJS"
        url = "https://threejs.org/"
        tagline = "A _WebGL_ graphics library, designed to provide an easy to use, lightweight, 3D library. I am a consistent contributor of this library, trying to support every time I am encountering some bugs or want some new functionalities. If you want to check my open-source contributions, please check my _GitHub_ profile."

        [[params.projects.list]]
        title = "Follow-Up"
        # url = "https://github.com/aerohub/hugrid"
        tagline = "A personalized solution intended to support women in case of contraception accident, emergency and / or in the tracking of its regular contraception. I was in charge of the development of a mobile application and participated in establishing the business model. It has been developed during Hacking Health Camp Strasbourg 2016."

        [[params.projects.list]]
        title = "Secret Gift Of Bravery"
        url = "http://projects.hackinghealth.camp/?p=255"
        tagline = "A serious-game to help (pre-) adolescents to accept their diabetes through an educational video game. We have created an online card game, strongly inspired from games like _Heartstone_ and _Magic The Gathering_, and which game mechanics were aimed to teach to young patients to manage their diabetes. My job was to lead the Unity development team. It has been developed during Hacking Health Camp Strasbourg 2015."

        [[params.projects.list]]
        title = "Biochips"
        # url = "https://github.com/aerohub/hugo-identity-theme"
        tagline = "Creation of an automated process for biochips production on a Biomek 2000 laboratory automation workstation. We were in charge of the establishment of the various parameters allowing the creation of biochips as well as developing the _TCL_ code allowing automated control of the robot. This project has been made during an Engineering Project within Telecom Physique Strasbourg with a multidisciplinary team (physics, computer science, chemistry and industrial electronics)."

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
