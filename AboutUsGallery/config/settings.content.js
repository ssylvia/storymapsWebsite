/*------------------------------------*/
// TEMPLATE CONTENT CONFIGURATION
/*------------------------------------*/

// SITE TITLE. USED IN NAVIGATION AND PAGE TITLE
pmgConfig.siteTitle = "";

// SITE HEADING. USED ON HOME PAGE
pmgConfig.siteHeading = "About Us"

// SITE INTRO TEXT. USED ON HOME PAGE
pmgConfig.siteIntro = "<br><br><strong>Allen Carroll</strong><br><br> is program manager, ArcGIS Online content and heads the Story Maps team. He came to Esri in late 2010 after 27 years at the National Geographic Society, where he told stories with maps in National Geographic magazine, in three editions of its Atlas of the World, and in countless wall maps and websites.<br><br><div id='allenLinks' style='padding-left:60px'><a href='http://storymaps.esri.com/stories/mystory/' target='_blank'>See his story map &gt;</a><br><a href='mailto:acarroll@esri.com' target='_blank'>Email Allen &gt;</a><br><a href='http://twitter.com/#!/AllenCarroll' target='_blank'>Follow Alen on Twitter &gt;</a></div><br><br><strong>Lee Bock</strong><br><br> arrived at Esri, wide-eyed and wet behind the ears, in 1992. He programmed his first web mapping application circa 1996 in MapObjects IMS, and he has been programming web applications ever since. He has seen many innovations over the years (XML, JavaScript, ASP.Net, SVG, SOAP, REST, PHP), and he is still riding the bull. Currently, Lee has worked extensively in Adobe Flex, and is rapidly honing his JavaScript skills.<br><br><br><strong>David Asbury</strong><br><br> joined Esri in February 2011 after six years as a cartographer and GIS analyst at the Center for Ecosystem Management and Restoration in Oakland, CA where he worked on atlases depicting the geographic distribution of endangered steelhead trout. He received his Bachelors of Science degree in GIS and Computer Cartography at the University of Maryland and is an active member of the Society for Conservation GIS (SCGIS) and the North American Cartographic Information Society (NACIS).<br><br><br><strong>Stephen Sylvia</strong><br><br> began working with the Esri Story Maps team in the summer of 2011 after graduating from Penn State. He has experience creating maps through ArcGIS desktop and is currently working to bring story maps to the web environment with ArcGIS Online and custom JavaScript applications.<br><br>";

/*------------------------------------*/
// NAVIGATION AREA LINKS
/*------------------------------------*/

pmgConfig.showNavLinks = false; // SHOW NAVIGATION LINKS. Set to false to not display links in the top banner.
pmgConfig.navLinks = [ // NAVIGATION LINKS. 
	// LINK 1
	{
		title: "...on ArcGIS Online",
		url: 'http://story.maps.arcgis.com/home/index.html'
	}, // COMMA
	// LINK 2
	{
		title: "About Story Maps",
		url: 'http://storymaps.esri.com/wordpress/?page_id=17'
	}
	// LAST LINK DOES NOT HAVE A COMMA AFTER IT
];

/*------------------------------------*/
// SIDE BAR
/*------------------------------------*/

pmgConfig.rightSideLinksTitle = 'Resources & links';
pmgConfig.showRightSideLinks = true; // SHOW LINKS ON RIGHT SIDE?
pmgConfig.rightLinks = [
	// LINK 1
	{
		title: "> Storytelling with Maps Home",
		url: 'http://storymaps.esri.com/home'
	},
	// LINK 2
	{
		title: "> Storytelling with Maps Blog",
		url: 'http://blogs.esri.com/esri/esri-insider/category/storytelling-maps/'
	},
	// LINK 3
	{
		title: "> Download story templates",
		url: 'http://storymaps.esri.com/templategallery'
	},
	// LINK 4
	{
		title: "> Maps by the Esri community",
		url: 'http://storymaps.esri.com/partnerstories'
	},
	// LINK 5
	{
		title: "> Workflows & Best Practices",
		url: 'http://storymaps.esri.com/downloads/Building%20Story%20Maps.pdf'
	},
	// LINK 6
	{
		title: "> Storytelling white paper",
		url: 'http://storymaps.esri.com/downloads/Telling%20Stories%20with%20Maps.pdf'
	},
	// LINK 7
	{
		title: "> Designing Pop-ups",
		url: 'http://storymaps.esri.com/downloads/DesigningWebMapPopups.pdf'
	},
	// LINK 8
	{
		title: "> Video: A map for every story",
		url: 'http://www.youtube.com/watch?v=2dwZZPj707I&feature=share&list=PL4F5158389507E395'
	},
	// LINK 9
	{
		title: "> Follow us on Twitter",
		url: 'http://twitter.com/#!/EsriStoryMaps'
	}

	// LAST LINK DOES NOT HAVE A COMMA AFTER IT
];

// CONTENT ABOVE LINKS

pmgConfig.rightHeading = "About story maps";
pmgConfig.rightContent = "Story maps combine intelligent Web maps with Web applications and templates that incorporate text, multimedia, and interactive functions. Story maps inform, educate, entertain, and inspire people about a wide variety of topics.";

// ADDITIONAL CONTENT. BELOW LINKS

pmgConfig.rightHeading2 = "Contact us"; // REMOVE TO NOT SHOW
pmgConfig.rightContent2 = "Email us at <a href='mailto:storymaps@esri.com' target='_blank'>storymaps@esri.com</a>"; // REMOVE TO NOT SHOW

/*------------------------------------*/
// BOTTOM FOOTER
/*------------------------------------*/

// FOOTER TITLE
pmgConfig.footerHeading = "About maps.&lt;YourOrg&gt;"; // FOOTER TITLE

// FOOTER DESCRIPTION
pmgConfig.footerDescription = "maps.&lt;YourOrg&gt; helps people find commonly used layers and maps for a better understanding of national issues and trends. Quick access to this authoritative geospatial information supports situational awareness and better decision making across the world."; // FOOTER TEXT

// FOOTER LOGO
pmgConfig.footerLogo = 'graphics/logo/yourLogo.png'; // 200 pixels wide x 85 pixels high. Will scale if bigger.
pmgConfig.footerLogoURL = 'http://www.yoursite.com/'; // URL to go to when the logo is clicked

// FOOTER EMAIL
pmgConfig.footerEmail = 'email@yourorg.com'; // YOUR EMAIL
pmgConfig.footerEmailSubject = "Your Site Gallery";
pmgConfig.footerEmailBody = "Hello ";

// END
