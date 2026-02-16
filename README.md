Project Overview

This project is a multi-page website about the United States, focusing on Washington State and selected cities. It demonstrates HTML, CSS, and JavaScript usage, satisfying the WGU Front-End Web Development assignment requirements (A–I).

Assignment Requirements & File Mapping
A. GitLab/GitHub Repository

Requirement: Create a repository, clone locally, commit/push after completing each part.

Satisfaction: This repository contains all project files. Multiple commits have been made after each major task.

B. Page Layouts and Content

Home Page (index.html)

Lines 14–50: <header>, <nav>, <section>, <aside> with semantic structure.

Line 21: Title in <head>

Lines 23–24: External CSS & JS linked

Lines 27–35: Navigation menu

Capital City Page (olympia.html)

Lines 15–65: Olympia city information (population, incorporation, region, classification, average income)

Lines 38–42: Absolute positioning on population (#population)

Lines 40–41: Class selector .highlight used twice

Line 36: Float applied to #stateCptImage

Noncapital City Pages (seattle.html, spokane.html, tacoma.html)

Lines 15–65 (each page): Population, incorporation year, region, classification, average income

Lines 38–42 (each page): Fun facts in <aside>

Form Page (aboutUs.html)

Lines 36–55: Form with text fields, email, confirm email, message, labels, and submit button

Navigation System

Lines 27–35 in all pages: <nav> consistent across pages

C. HTML Elements

External Link

Line 48 in aboutUs.html: <a href="https://github.com/Idonnyy" target="_blank">GitHub</a>

Ordered List

Line 52 in index.html: <ol id="cities">

Unordered List

Lines 44–48 in olympia.html: <ul id="asideFacts">

Table

Lines 70–84 in all pages: <table id="contactHours">

D. CSS Stylesheet (styles.css)

Font-family

Line 1–3: :root { font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; }

:hover pseudo-class

Lines 78–84: nav ul > li > a:hover

Float property

Line 168: #stateCptImage { float: left; }

Absolute positioning

Line 40 in olympia.html: #population with class="highlight"

Relative positioning

Line 66: aside { position: relative; }

Selectors

Element selector: footer { ... } (line 59)

Class selector: .highlight (used multiple times, e.g., line 37)

ID selector: #section1 (line 28)