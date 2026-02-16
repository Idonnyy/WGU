A. Git Repository

Repository: WGU Front_Web_Dev

All commits after completing each part.

B. Page Layouts and Content
1. Home Page (index.html)
Requirement	Line(s)	Description
HTML title	6	<title>Our United States</title>
CSS & JS links	7–8	<link rel="stylesheet" href="styles.css"> and <script src="stateList.js" defer></script>
Header	11–14	<header><h1>Our Great States</h1></header>
Navigation	16–23	<nav>...</nav>
Main section	26–32	<section id="stateListSection">...</section>
Aside	34–38	<aside>...</aside>
2. Capital City Page (olympia.html)
Requirement	Line(s)	Description
Page title	6	<title>Olympia, Washington</title>
Header	11–14	<header><h1 class="highlight">Olympia</h1></header>
Navigation	16–24	<nav>...</nav>
Section with city info	26–48	<section id="section1"> includes population, incorporated year, region, classification, income
Absolute positioning	32	id="population" element uses position: absolute in CSS
Class selector used twice	34–35	<span class="highlight">Incorporated: 1859</span>
Float property	29	id="stateCptImage" floated left
Aside with fun facts	50–55	<aside><ul id="asideFacts">...</ul></aside>
Footer & table	58–72	<footer><table id="contactHours">...</table></footer>
3. Noncapital Cities (seattle.html, spokane.html, tacoma.html)

Copy of olympia.html structure with updated content.

Lines follow the same pattern: header (11–14), nav (16–24), section info (26–48), aside fun facts (50–55), footer table (58–72).

4. Form Page (aboutUs.html)
Requirement	Line(s)	Description
Form structure	36–55	Includes name, email, confirm email, message fields with labels and submit button
C. HTML Elements
Element	File	Line(s)	Description
External link	aboutUs.html	42	<a href="https://github.com/Idonnyy" target="_blank">GitHub</a>
Ordered list	index.html	52	<ol id="cities">
Unordered list	olympia.html	50–55	<ul id="asideFacts">
Table	All pages	58–72	<table id="contactHours">
D. CSS (styles.css)
Requirement	Line(s)	Description
Font-family	1–3	:root { font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; }
:hover pseudo-class	78–84	nav ul > li > a:hover
Float property	168	#stateCptImage { float: left; }
Absolute positioning	40 (olympia.html)	#population
Relative positioning	66	aside { position: relative; }
Element selector	59	footer { ... }
Class selector	37, 34–35	.highlight
ID selector	28	#section1