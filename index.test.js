let Jabber = require('./index.js');

describe('When Jabber initialized with a theme', () => {
  const themeWords = [
    'Content curation',
    'Engagement',
    'Embedding',
    'Impressions',
    'Influencer',
    'Mentions',
    'Microblogging',
    'Organic',
    'Reach',
    'Social graph',
    'User-generated content (UGC)',
    'Affiliate marketing',
    'Bounce rate',
    'Call to Action (CTA)',
    'Click through rate (CTR)',
    'Sales Funnel',
    'Conversion rate optimization (CRO)',
    'Keywords',
    'Marketing automation',
    'Multichannel Marketing',
    'Search engine marketing (SEM)',
    'Search engine optimization (SEO)',
    'Traffic',
    'Growth Hacking',
    'A/B Testing',
    'Content Marketing',
    'Conversion',
    'Data Mining',
    'Email Marketing',
    'Website Optimization',
    'Color value',
    'Colory theory',
    'Grid system',
    'Pixels per Inch (PPI)',
    'Raster Images',
    'Resolution',
    'Retina display',
    'Vector Images',
    'Mood board',
    'Sitemaps',
    'User Interface (UI)',
    'User Experience (UX)',
    'User flow',
    'User Persona',
    'User research',
    'Wireframe',
    'Font',
    'Kerning',
    'Leading (pronounced “led-ing”)',
    'Tracking',
    'Type hierarchy',
    'Serif',
    'Front end',
    'HTML (HyperText Markup Language)',
    'HTML5',
    'Elements',
    'Meta Elements',
    'Semantic elements',
    'Structural Elements',
    'Attributes',
    'Opening tag and closing tags',
    'Self-closing tag',
    'CSS (Cascading Style Sheets)',
    'CSS3',
    'Selector',
    'Property',
    'Value',
    'Declarations',
    'Back End',
    'Application',
    'API (Application Programming Interface)',
    'Bugs',
    'DEVOPS (DEVELOPMENT OPERATIONS)',
    'Frameworks',
    'Object-oriented programming (OOP)',
    'Software',
    'Text editor',
    'Version control',
    'Web servers',
    'Caching',
    'Cloud computing',
    'Firewalls',
    'Routers',
    'Uptime & downtime',
    'Virtual Machine (VM)',
    'VPN (Virtual Private Network)',
    'Big data',
    'Data architecture',
    'Database',
    'Data modelling',
    'Data visualization',
    'Relational database management system (RDMS)',
    'Hybrid app',
    'IDE (Integrated development environment)',
    'Native apps',
    'NFC (Near Field Communication)',
    'Responsive Web Design',
    'SDK (Software Development Kit)',
    'Web apps',
  ];

  let jabber = new Jabber(themeWords, 2);
  const word = jabber.createWord(5);
  const para = jabber.createParagraph(5);
  const name = jabber.createFullName();
  const nameNoSalutation = jabber.createFullName(false);
  const email = jabber.createEmail();
  const emailCust = jabber.createEmail('jabber.com');

  test('Created word should be defined', () => {
    expect(word).toBeDefined();
  });

  test('Created word should be of length five or a themeWord', () => {
    expect(word.length === 5 || themeWords.indexOf(word) > -1).toBeTruthy();
  });

  test('Paragraph should be defined', () => {
    expect(para).toBeDefined();
  });

  test('Paragraph should start with Uppercase and end with a "."', () => {
    expect(para).toMatch(/^[A-Z].+\.$/g);
  });

  test('Created name with salutation should be defined', () => {
    expect(name).toBeDefined();
  });

  test('Created name should match a pattern with salutation', () => {
    expect(name).toMatch(/^M[sr]\.( [A-ZÄÖÜ][a-zäöüß]+){2}$/);
  });

  test('Created name should be defined', () => {
    expect(nameNoSalutation).toBeDefined();
  });

  test('Created name should match a pattern w-o salutation', () => {
    expect(nameNoSalutation).toMatch(/^[A-ZÄÖÜ][a-zäöüß]+ [A-ZÄÖÜ][a-zäöüß]+$/);
  });

  test('Created email should be defined', () => {
    expect(email).toBeDefined();
  });

  test('Created email should match a pattern', () => {
    
    expect(email).toMatch(
      /^[a-zäöüß]+\.[a-zäöüß]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,6}$/
    );
  });

  test('Created email w/ custom domain should be defined', () => {
    expect(emailCust).toBeDefined();
  });

  test('Created emailCust should match a pattern', () => {

    expect(emailCust).toMatch(
      /^[a-zäöüß]+\.[a-zäöüß]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,6}$/
    );
  });
});

describe('When Jabber initialized with no theme', () => {
  let jabber = new Jabber();
  const word = jabber.createWord(5);
  const para = jabber.createParagraph(5);

  test('Created word should be defined', () => {
    expect(word).toBeDefined();
  });

  test('Created word should be of length five', () => {
    expect(word.length === 5).toBeTruthy();
  });

  test('Paragraph should be defined', () => {
    expect(para).toBeDefined();
  });

  test('Paragraph should start with Uppercase and end with a "."', () => {
    expect(para).toMatch(/^[A-Z].+\.$/g);
  });
});
