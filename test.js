let Jabber = require('./index.js');

const themeWords = ["Content curation", "Engagement", "Embedding", "Impressions", "Influencer", "Mentions", "Microblogging", "Organic", "Reach", "Social graph", "User-generated content (UGC)", "Affiliate marketing", "Bounce rate", "Call to Action (CTA)", "Click through rate (CTR)", "Sales Funnel", "Conversion rate optimization (CRO)", "Keywords", "Marketing automation", "Multichannel Marketing", "Search engine marketing (SEM)", "Search engine optimization (SEO)", "Traffic", "Growth Hacking", "A/B Testing", "Content Marketing", "Conversion", "Data Mining", "Email Marketing", "Website Optimization", "Color value", "Colory theory", "Grid system", "Pixels per Inch (PPI)", "Raster Images", "Resolution", "Retina display", "Vector Images", "Mood board", "Sitemaps", "User Interface (UI)", "User Experience (UX)", "User flow", "User Persona", "User research", "Wireframe", "Font", "Kerning", "Leading (pronounced “led-ing”)", "Tracking", "Type hierarchy", "Serif", "Front end", "HTML (HyperText Markup Language)", "HTML5", "Elements", "Meta Elements", "Semantic elements", "Structural Elements", "Attributes", "Opening tag and closing tags", "Self-closing tag", "CSS (Cascading Style Sheets)", "CSS3", "Selector", "Property", "Value", "Declarations", "Back End", "Application", "API (Application Programming Interface)", "Bugs", "DEVOPS (DEVELOPMENT OPERATIONS)", "Frameworks", "Object-oriented programming (OOP)", "Software", "Text editor", "Version control", "Web servers", "Caching", "Cloud computing", "Firewalls", "Routers", "Uptime & downtime", "Virtual Machine (VM)", "VPN (Virtual Private Network)", "Big data", "Data architecture", "Database", "Data modelling", "Data visualization", "Relational database management system (RDMS)", "Hybrid app", "IDE (Integrated development environment)", "Native apps", "NFC (Near Field Communication)", "Responsive Web Design", "SDK (Software Development Kit)", "Web apps"];


let jabber = new Jabber(themeWords, 2);

console.log(jabber.createParagraph(50));
