+++
date = "2017-05-05T16:14:50+02:00"
draft = true
highlight = true
tags = ['hugo', 'git', 'travis']
title = "How to build a Git user page with Hugo and Travis CI"

+++

How to build a user git page w Hugo & Travis CI

1. Create repository following gh-pages doc => user page = \<username\>.github.io
    * Website must be stored in master branch
    * Create an orphan branch called sources to store hugo & templates
        * Add public folder to .gitignore because hugo will generate website here

2. Create your website, read Hugo's doc, choose a theme, enjoy !

3. Build & Deploy
    * You may want to do it manual like indicated in Hugo's Doc (https://gohugo.io/tutorials/github-pages-blog/)
    * However, better to automatize process => Travis CI !
    * Need install ruby-dev & golang-go

4. Travis-CI : A tool for continuous integration https://blog.christophvoigt.com/setting-up-hugo-with-github-pages/
