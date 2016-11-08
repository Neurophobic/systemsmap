var windowW = window.innerWidth;
var windowH = window.innerHeight;
var mapW = 2000;

var data = {
   nodes: [
   {
     name: "Mission Control",
     title:"Mission Control",
     subtitle:"",
     x: (mapW)/2,
     y: 20,
     type: "Main",
     fixed: true
   }, 
   {
     name: "Prediction",
     title: "Prediction",
     subtitle:"",
     x: (mapW)/6 - (((mapW)/6)),
     y: 400,
     type: "Main",
     fixed: true
   }, 
   {
     name: "Auditing",
     title:"Auditing",
     subtitle:"",
     x: (mapW)/6 - (((mapW)/6)),
     y: 900,
     type: "Main",
     fixed: true
   },
   {
     name: "Learning",
     title: "Learning",
     subtitle:"",
     x: ((mapW)/6)*3 - (((mapW)/6)/2),
     y: 400,
     type: "Main",
     fixed: true
   },
   {
     name: "Mapping",
     title: "Mapping",
     subtitle:"Citizen Mapping",
     x: ((mapW)/6)*3 - (((mapW)/6)/2),
     y: 900,
     type: "Main",
     fixed: true
   },
   {
     name: "Planning",
     title: "Planning",
     subtitle:"Citizen Planning",
     x: ((mapW)/6)*4 + (((mapW)/6)/2),
     y: 700,
     type: "Main",
     fixed: true
   },
   {
     name: "Design for Fog",
     title: "Situational Awareness",
     subtitle:"Human Factors",
     x: ((mapW)/6)*5 + (((mapW)/6)/2),
     y: 700,
     type: "Main",
     fixed: true
   },
   {
     name: "Aftermath",
     title:"Rebuild & Recover",
    subtitle:"",
     x: ((mapW)/6)*6 + (((mapW)/6)/2),
     y: 700,
     type: "Main",
     fixed: true
   },
     {
     name: "Insight",
     type: "insight",
     source:8,
     target:1,
     force:true,
     desc:"Can predictive software help manage disaster scenarios better?"
   },
   {
     name: "Amicus",
     sub:"CSIRO - Data61",
     type: "example",
     source:9,
     target:8,
     force:true,
     link:"amicus",
     need:"To be able to predict fire behaviour",
     insight:"Can predictive software help manage disaster scenarios better?",
     resolved:"utilised previous knowledge of bush fire behaviour and created calculation to predict movement of future ones",
     desc:"Multi-platfrom application that enables the easy calculation of expected fire behaviour from burning conditions that you enter. It synthesises our current knowledge for predicting the behaviour and spread of bushfires in a range of vegetation types as well as providing simple calculations of expected fire danger."
   },
   {
     name: "Insight",
     type: "insight",
     source:10,
     target:2,
     force:true,
     desc:"Is there a community centred approach to logging, reporting, and measuring declining/damaged buildings, or the general “health state” of a community?"
   },
   {
     name: "BlightSTAT",
     type: "example",
     sub: "New Orleans",
     link:"blightstat",
     source:11,
     target:10,
     force:true,
     need:"lack of efficiency with reconstruction efforts in new orleans post disaster",
     insight:"Is there a community centred approach to logging, reporting, and measuring declining/damaged buildings, or the general “health state” of a community?",
     resolved:"created platform of machine learning and human input for decision making on demolishing houses",
     desc:"New Orleans BlighSTAT – there is a scorecard (algorithm based) helping you decide whether a property should be demolished or not (supervisor checks it) – relatable to how at risk a property is. Done with the help of ENIGMA – data science start up "
   },
   {
     name: "Insight",
     type: "insight",
     source:12,
     target:2,
     force:true,
     desc:"Is there an “Opt – In” community vulnerability analysis; which would allow for a tailored and inclusive exploration of overall vulnerability (not only to assets), and level of resilience as a consequence?"
   },
   {
     name: "PVA",
     sub:"Participatory Vulnerabilities Analysis",
     type: "example",
     link:"pva",
     source:13,
     target:12,
     force:true,
     need:"Good PVA studies lead to actionable outcomes that communities can get behind (fostering the need for DRR to be a larger part of the public's conscious.",
     insight: "Is there an 'Opt – In' community vulnerability analysis; which would allow for a tailored and inclusive exploration of overall vulnerability (not only to assets), and level of resilience as a consequence?",
     desc:" For determining the current vulnerability of your location PVA’s are held in quite high regard. Suncorp could have a PVA team that negotiates insurance premiums based on evidence. Also outcomes of this study could create community funded ecosystem improvement operations to foster local area resilience and reduce insurance premiums."
   },
   {
     name: "Insight",
     type: "insight",
     source:14,
     target:2,
     force:true,
     desc:"Can a community become more engaged with the auditing of assets, therefore creating a more holistic process leading up to the final decisions made?"
   },
   {
     name: "NSW Rural Fire Service",
     type: "example",
     sub:"Australias regional bush fire management",
     link:"nsw",
     source:15,
     target:14,
     force:true,
     need:"Understand bush fire risk",
     insight:"Can a community become more engaged with the auditing of assets, therefore creating a more holistic process leading up to the final decisions made?",
     resolved:"Create strategic plan and data logging for each region.",
     desc:"Each region develops a plan (BFRMP). It sets out the types of work scheduled to deal with the risk of bush fires in an area. These works may range from a community engagement event to hazard reduction activities."
   },
    {
     name: "Insight",
     type: "insight",
     source:16,
     target:2,
     force:true,
     desc:"Can future volunteers be motivated to help or take part (not only in the auditing phase) in the whole disaster cycle?"
   },
   {
     name: "SES",
     type: "example",
     sub:"State Emergency Sevice",
     link:"ses",
     source:17,
     target:16,
     force:true,
     need:"Improve emergency response",
     insight:"Can future volunteers be motivated to help or take part (not only in the auditing phase) in the whole disaster cycle?",
     resolved:"Provide organization, reference point.",
     desc:"The South Australian State Emergency Service (SES) is a volunteer-based organisation that responds to a wide range of emergencies and rescues across the state 24-hours a day, seven days a week, 365-days a year."
   },
   {
     name: "Insight",
     type: "insight",
     source:18,
     target:2,
     force:true,
     desc:"Is there a method of facilitating participation from the community in to the auditing phase by increasing understanding of their specific risk and needs through address level analysis?"
   },
   {
     name: "IAG Floods",
     sub:"Italy",
     link:"iag",
     type: "example",
     source:19,
     target:18,
     force:true,
     need:"Facilitate understanding of risks and needs in floods",
     insight:"Is there a method of facilitating participation from the community in to the auditing phase by increasing understanding of their specific risk and needs through address level analysis?",
     resolved:"Platform for single access point",
     desc:"Release of a national dataset containing a view of flood risk across Australia. The released data is available at an address and an aggregated level. The address level data provides granular flood risk information via an api and is based on the GNAF February 2016 release."
   }, 
   {
     name: "Insight",
     type: "insight",
     howmight:true,
     source:20,
     target:2,
     force:true,
     desc:"Open up existing “Catastrophe Network” services that measure risk exposure, assessment and resilience to the general public?"
   },
   {
     name: "Swiss Re CatNet",
     type: "example",
     sub:"Reinsurance",
     link:"swissre",
     source:21,
     target:20,
     force:true,
     need:"Insurance companies lose lots of money when disaster strikes",
     insight:"Open up existing “Catastrophe Network” services that measure risk exposure, assessment and resilience to the general public?",
     resolved:"created a network that includes the usage of satellite imagery, GIS and country/location specific risk info for insurance companies",
     desc:"Swiss Re (Reinsurance company) has developed a service, Catastrophe Network (CatNet) (with the partnership of ESRI - global mapping company -), that disseminates information to insurers such as risk rates on 500,000 locations, so users can more intelligently evaluate risks."
   },
   {
     name: "Insight",
     type: "insight",
     source:22,
     target:3,
     force:true,
     desc:"Learning about resilience and disasters is facilitated by the intermediary step between the general Earth Observation outputs and the consequential actions of decision makers"
   },
   {
     name: "CEOS DRM",
     sub:"Disaster Risk Management",
     link:"ceos",
     type: "example",
     source:23,
     target:22,
     force:true,
     need:"Use earth observation in disaster risk management",
     insight:"Learning about resilience and disasters is facilitated by the intermediary step between the general Earth Observation outputs and the consequential actions of decision makers",
     resolved:"Showcase DRM EOs projects to the world / policy makers.",

     desc:"Coordination of earth observation satellites in three pilot projects; floods, seismic hazards and volcanoes. Goals: Protection of lives and safeguarding of property, foster increased use of earth observation in DRM and raise awareness of politicians, decision-makers and stakeholders of the benefits of earth observation in all phases of DRM."
   },
   {
     name: "Insight",
     type: "insight",
     howmight:true,
     source:24,
     target:3,
     force:true,
     desc:"involve academia and policy makers to create a 360 degree platform of learning and planning?"
   },
  {
     name: "Insight",
     type: "insight",
     howmight:true,
     source:25,
     target:3,
     force:true,
     desc:"create a process that constantly revisits post-hoc learning and the sharing of disaster-specific experiences?"
   },
   {
     name: "Insight",
     type: "insight",
     source:26,
     target:3,
     force:true,
     desc:"Are current data gathering methods properly understood, to in turn improve and utilise them in the best possible way?"
   },
   {
     name: "European handbook of crowdsourcing",
     sub:"Open Source",
     link:"handbook",
     type: "example",
     source:27,
     target:26,
     force:true,
     need:"To better understand the influence of crowdsourcing for Geographic Information",
     insight:"Are current data gathering methods properly understood, to in turn improve and utilise them in the best possible way?",
     resolved:" Making it part of apps - frameworks - designs",
     desc:"This book focuses on the study of the remarkable new source of geographic information that has become available in the form of user-generated content accessible over the Internet through mobile and Web applications."
   },
   {
     name: "Crowd4Sat",
     link:"crowdsat",
     sub:"",
     type: "",
     source:28,
     target:28,
     force:true,
     desc:""
   },
   {
     name: "Insight",
     type: "insight",
     source:29,
     target:3,
     force:true,
     desc:"Does providing a platform for any user that holds a combination of EO data with intelligence and aggregated hosting support the learning phase of resilience to disasters?"
   },
   {
     name: "Digital Globe",
     sub:"High-res Satellite Imagery GBDX Platform",
     link:"dg",
     type: "example",
     source:30,
     target:29,
     force:true,
     need:"Data for insight",
     insight:"Does providing a platform for any user that holds a combination of EO data with intelligence and aggregated hosting support the learning phase of resilience to disasters?",
     resolved:"Platform for accessing data and algorithms using AWS",
     desc:"Application of computer vision and deep learning to extract information from satellite imagery at scale. Release data set to the public to enable developers and data scientists. Map features such as roads, building footprints, and points of interest are created through manual or semi-automated techniques. Solving this challenge will enable more advanced use cases for GPU accelerated AI: such as change detection, wide area search, automated tipping, as well as downstream uses of map data including autonomous vehicles."
   },
   {
     name: "Insight",
     type: "insight",
     source:31,
     target:3,
     force:true,
     desc:"Can we learn from organisations that research disaster reduction and provide funding for innovation within the field to also raise general public awareness?"
   },
   {
     name: "UCL (IRDR)",
     type: "example",
     sub:"Institute for risk & disaster reduction",
     link:"ucl",
     source:32,
     target:31,
     force:true,
     need:"Better understand risk and disasters.",
     insight:"Can we learn from organisations that research disaster reduction and provide funding for innovation within the field to also raise general public awareness?",
     resolved:"Created institute dedicated to this end.",
     desc:"UCL Mullard Space Science Laboratory, the Schmidt Institute of Physics of the Earth, Russian Academy of Sciences and the IRDR to developed an instrumentation-based project for the detection of natural disaster precursors from space through the observation of their effects in the ionosphere and magnetosphere"
   },
   {
     name: "NERC",
     sub:"UK",
     link:"nerc",
     type: "example",
     source:33,
     target:31,
     force:true,
     need:"To promote and support high-quality basic, strategic and applied research, support training in environmental and related sciences, generate public awareness and disseminate research findings in the field of environmental sciences & management.",
     insight:"Can we learn from organisations that research disaster reduction and provide funding for innovation within the field to also raise general public awareness?",
     resolved:"Created a council that does the above.",
     desc:"The Natural Environment Research Council is the UK's largest funder of independent environmental science, training and innovation, delivered through universities and research centres."
   },
    {
     name: "Insight",
     type: "insight",
     source:34,
     target:4,
     force:true,
     desc:"Can machine learning increase the scaling and coverage of imagery processing to substitute current search costs?"
   },
   {
     name: "Terrapattern",
     type: "example",
     sub:"Mapping and Machine Vision",
     source:35,
     target:34,
     force:true,
     need:"Locate similar points on the map",
     insight:"Can machine learning increase the scaling and coverage of imagery processing to substitute current search costs?",
     resolved:"Build an interactive web platform",
     desc:"A prototype for exploring the unmapped, and the unmappable, using machine vision."
   },
   {
     name: "Insight",
     type: "insight",
     howmight:true,
     source:36,
     target:4,
     force:true,
     desc:"unlock the value and potential in 3D geospatial intelligence for disaster reduction?"
   },
   {
     name: "Insight",
     type: "insight",
     source:37,
     target:4,
     force:true,
     desc:"Are there existing indicators that mitigate climate change/natural disasters, which allow you to tap in to readily available resources (natural or manmade)?"
   },
    {
     name: "Starlab iArbol",
     sub:"Urban Forest Management in Barcelona",
     link:"starlab",
     type: "example",
     source:38,
     target:37,
     force:true,
     need:"To come up with effective ways to mitigate pollution - microclimate regulation",
     insight:"Are there existing indicators that mitigate climate change/natural disasters, which allow you to tap in to readily available resources (natural or manmade)?",
     resolved:"Created interactive visualisation of state of climate through showing health indicator of urban forest area",
     desc:"Trees as pollution mitigation / microclimate regulation."
   },
   {
     name: "Insight",
     type: "insight",
     source:39,
     target:4,
     force:true,
     desc:"Is there a way to identify actors that share a common goal - although having different processes to attain it - and build bridges between them? "
   },
   {
     name: "GeoDesign",
     sub:"Science & Design",
     link:"geodesign",
     type: "example",
     source:40,
     target:39,
     force:true,
     need:"To support professionals in infrastructure/environmental decision making",
     insight:"Is there a way to identify actors that share a common goal - although having different processes to attain it - and build bridges between them?",
     resolved:"Combined GIS and design tech through data layering on top of a base map that creates a visual representation of what can be done and how it can influence the current surroundings",
     desc:"Geodesign combines geography with design by providing designers with robust tools that support rapid evaluation of design alternatives against the impacts of those designs."
   },
   {
     name: "Insight",
     type: "insight",
     source:41,
     target:4,
     force:true,
     desc:"Is it possible to condense, combine and relate relevant data from various inputs?"
   },
   {
     name: "Data Cube",
     sub:"Australian Geoscience",
     link:"datacube",
     type: "example",
     source:42,
     target:41,
     force:true,
     need:"To provide a dataset of satellite imagery and analysis purely for australia to track changes over time and gain deeper understanding of current state of continent",
     insight:"Is it possible to condense, combine and relate relevant data from various inputs?",
     resolved:"Created a cube data platform that allows for analysis of the maps and  interactive experiences accessible to researchers and policy advisors.",
     desc:"The prototype Data Cube makes available, for the first time, more than three decades of satellite imagery spanning Australia’s total land area at a resolution of 25 square metres. The 240,000+ images show how Australia’s vegetation, land use, water movements and urban expansion have changed over the past 30 years"
   },
   {
     name: "Insight",
     type: "insight",
     source:43,
     target:4,
     force:true,
     desc:"Can the extraction of the value added data from risk assessment related imagery become a constant goal for professionals and citizen users?"
   },
   {
     name: "MapBox",
     sub:"Utilizing satellites and drones",
     link:"mapbox",
     type: "example",
     source:44,
     target:43,
     force:true,
     need:"How to create value added services specific to end user application for satellite imagery (& drones) to aid decision making within the realm of natural resources",
     insight:"Can the extraction of the value added data from risk assessment related imagery become a constant goal for professionals and citizen users?",
     resolved:"Created a platform simplifying usage of satellite imagery via tailoring and easy to understand data visualisations to help aid decision making and transparency between companies and their respective end users.",
     desc:"Real-time data visualizations with imagery from drones and satellites used to monitor natural resources."
   },

   {
     name: "Insight",
     type: "insight",
     source:45,
     target:5,
     force:true,
     desc:"Are there resources that utilise open tools (e.g., OpenStreetMap) for community insight?"
   },
   {
     name: "GFDRR",
     sub:"World Bank & Global Fac. For Disaster Reduction",
     link:"gfdrr",
     type: "example",
     source:46,
     target:45,
     force:true,
     need:"Innovative disaster reduction.",
     insight:"Are there resources that utilise open tools (e.g., OpenStreetMap) for community insight?",
     resolved:"Combine OpenStreetMap and other crowdsourced data with EO in online platform.",
     desc:"Community mapping with OSM. Open data. GeoNode, web - based open source platform that makes it easier to develop geospatial data."
   },
   {
     name: "Insight",
     type: "insight",
     source:47,
     target:5,
     force:true,
     desc:"Can there be an interface/platform that includes community involvement with expert guidance while also using GIS?"
   },
   {
     name: "Web-GIS Flash Flood",
     type: "example",
     sub:"Italy",
     link:"flashflood",
     source:48,
     target:47,
     force:true,
     need:"Include a variety of stakeholders in important risk mitigation decisions when faced with potential for, or consequences of disasters.",
     insight:"Can there be an interface/platform that includes community involvement with expert guidance while also using GIS?",
     resolved:"Created a web GIS based decision making platform facilitating communication between all stakeholders",
     desc:"A web-GIS based participative decision support platform in the field of risk management, especially focusing on the phase of risk prevention and mitigation of the disaster risk management cycle."
   },
   {
     name: "Insight",
     type: "insight",
     source:49,
     target:5,
     force:true,
     desc:"Does democratizing EO data help ease any potential future users in to the process (starting from kids!)?"
   },
   {
     name: "BLiF",
     sub:"Blickpunkt Fernerkundung, Point of View Remote Sensing",
     type: "example",
     source:50,
     target:49,
     force:true,
     desc:"BLIF allows students to independently work with original satellite images featuring a didactically prepared tool set of basic image analysis functions. Preprocessing steps like histogram stretching and image enhancement are included in every workflow. Further possible analysis steps comprise color composites, vegetation indices, supervised and unsupervised classification as well as change detection."
   },

   {
     name: "Modelling",
     title: "Modelling",
     subtitle:"",
     x: ((mapW)/6)*2 - (((mapW)/6)/2),
     y: 700,
     type: "Main",
     fixed: true
   },

   {
     name: "Insight",
     type: "insight",
     source:52,
     target:51,
     force:true,
     desc:"Is having a common framework of modelling and planning by which everyone can refer back to necessary?"
   },
   {
     name: "Data61",
     sub:"CSIRO",
     link:"data61csiro",
     type: "example",
     source:53,
     target:52,
     force:true,
     need:"to address a variety of factors within disaster management via common framework",
     insight:"Is having a common framework of modelling and planning by which everyone can refer back to necessary?",
     resolved:"Algorithms, simulation and optimisation tools help account for all the potential issues faced during disasters ",
     desc:"1) Power System Restoration. 2) Evac. Planning. 3) Human Dynamics."
   },
   {
     name: "Insight",
     type: "insight",
     source:54,
     target:51,
     force:true,
     desc:"Is a common ‘protocol’, specifically, organising and prioritising the various technologies throughout the disaster cycle, key?"
   },
   {
     name: "University of Portsmouth",
     sub:"Disaster risk reduction research group",
     link:"uop",
     type: "example",
     source:55,
     target:54,
     force:true,
     need:": to better understand what can reduce risk throughout the disaster cycle to be more efficient in utilising resources but also saving lives",
     insight:"Is a common ‘protocol’, specifically, organising and prioritising the various technologies throughout the disaster cycle, key?",
     resolved:"Came up with remote sensing and mapping methodology that accounts for all stages of disaster cycle",
     desc:"Resarch group striving to develop systems for the entire disaster cycle."
   },
    {
     name: "Insight",
     type: "insight",
     source:56,
     target:51,
     force:true,
     desc:"Can we give users the ability to create custom simulations of events (fire, flood, etc)?"
   },
   {
     name: "Spark",
     sub:"CSIRO Data61",
     link:"spark",
     type: "example",
     source:57,
     target:56,
     force:true,
     need:"To be able to predict fire behaviour",
     insight:"Can we give users the ability to create custom simulations of events (fire, flood, etc)?",
     resolved:"Utilised previous knowledge of bush fire behaviour and created calculation to predict movement of future ones ",
     desc:"A toolkit for the end-to-end processing, simulation and analysis of wildfires. Users can design custom fire propagation models by building on Spark’s computational fire propagation solver and incorporating various input, processing and visualisation components, each tailored for wildfire modelling. Spark can be used for many applications including planning, warning and response, and research."
   },
    {
     name: "Insight",
     type: "insight",
     source:58,
     target:51,
     force:true,
     desc:"Is there a need for an aggregator of data and insights that standardises methods of reporting and interactions with open data, to in turn aid decision makers?"
   },
   {
     name: "Melodies",
     sub:"Exploiting Open Data",
     link:"melodies",
     type: "example",
     source:59,
     target:58,
     force:true,
     need:"Visualise spatial data.",
     insight:"Is there a need for an aggregator of data and insights that standardises methods of reporting and interactions with open data, to in turn aid decision makers?",
     resolved:"Data structure built on common data standard.",
     desc:"Coverage is a data structure that maps points in space and time to values. Melodies are working on a new Coverage standard data structure that is based on JSON, supports continuous(changing over time) and categorical(absolute classification) data types."
   },
    {
     name: "Insight",
     type: "insight",
     source:60,
     target:4,
     force:true,
     desc:"Is there an inclusive approach for all stakeholders within disaster mapping, that helps unlock detailed and valuable maps from a variety of data sources?"
   },
   {
     name: "Humanitarian OpenStreetMap",
     sub:"HOTOSM",
     link:"HOTOSM",
     type: "example",
     source:61,
     target:60,
     force:true,
     need:"When disaster strikes - a common up to date database of the surroundings is necessary for safety and rescue.",
     insight:"Is there an inclusive approach for all stakeholders within disaster mapping, that helps unlock detailed and valuable maps from a variety of data sources?",
     resolved:"Created an open map where volunteers can add data to achieving a full picture.",
     desc:"Crowdsourcing digital mapping for disaster areas from satellite imagery - 'Free, up-to-date maps are a critical resource when relief organizations are responding to disasters or political crises. The Humanitarian OpenStreetMap Team (HOT) creates and provides those maps.'"
   },
    {
     name: "Insight",
     type: "insight",
     source:62,
     target:4,
     force:true,
     desc:"Does human computing help combine data types to then speed up and ameliorate machine learning?"
   },
   {
     name: "MicroMappers",
     sub:"Tweet mining disaster response",
     link:"micromappers",
     type: "example",
     source:63,
     target:62,
     force:true,
     need:"Combine a variety of data types to create an overall understanding of current scenario.",
     insight:"Does human computing help combine data types to then speed up and ameliorate machine learning?",
     resolved:"Combine crowdsourcing and AI to filter and map all the different data sets to create an up to date map ",
     desc:"Combine human computing (smart crowd-sourcing) with machine computing (artificial intelligence) to filter, fuse and map a variety of different data types such as text, photo, video and satellite/aerial imagery. To do this, we have created a collection of “Clickers” for MicroMappers. Clickers are simply web-based crowdsourcing apps used to make sense of “Big Data”. The “Text Cicker” is used to filter tweets & SMS’s; “Photo Clicker” to filter photos; “Video Clicker” to filter videos and yes the Satellite & Aerial Clickers to filter both satellite and aerial imagery. These are the Data Clickers. We also have a collection of Geo Clickers that digital volunteers use to geo-tag tweets, photos and videos filtered by the Data Clickers."
   },
    {
     name: "Insight",
     
     type: "insight",
     source:64,
     target:4,
     force:true,
    
     desc:"Is there a need for user-generated data that is deemed trustworthy to then correctly act upon the information given?"
   },
   {
     name: "Energic",
     type: "example",
     sub:"European Network Exploring Research into Geospatial Information Crowdsourcing",
     link:"energic",
     source:65,
     target:64,
     force:true,
      need:"Use user-generated geographical information.",
     insight:"Is there a need for user-generated data that is deemed trustworthy to then correctly act upon the information given?",
     resolved:"Organize research network.",
     desc:"Research network looking at user-generated volunteered geographical information (VGI)."
   },
   {
     name: "Insight",
     type: "insight",
     source:66,
     target:6,
     force:true,
     desc:"Is machine learning a ‘go-to’ method when wanting to reduce the cognitive load for decision makers in crucial moments?"
   },
   {
     name: "Heal App",
     sub:"",
     link:"healapp",
     type: "example",
     source:67,
     target:66,
     force:true,
     need:"Creating an Ai assisted hierarchy based medical response app allows the process of helping survivors more effective.",
     insight:"Is machine learning a ‘go-to’ method when wanting to reduce the cognitive load for decision makers in crucial moments?",
     resolved:"Entering symptoms and injuries helps the app triangulated illness severity, location and current medical supply data to create a medical task sheet and inform agencies of what the needs of the injured are.",
     desc:"Heal app is the Uber for mobile doctor appointments in LA, This infrastructure could be combined with DR map information."
   },
   {
     name: "Insight",
     type: "insight",
     source:68,
     target:6,
     force:true,
     desc:"Are there ways of finding solutions in real time data via utilising natural language?"
   },
   {
     name: "Lux",
     sub:"ICG Solutions",
     link:"lux",
     type: "example",
     source:69,
     target:68,
     force:true,
     need:"Storing and insight of data.",
     insight:"Are there ways of finding solutions in real time data via utilising natural language?",
     resolved:"Build software platform.",
     desc:"A series of dashboards that assimilate lots of data from various inputs. Allows users to ask questions about all the different streams of data and produces interesting insight from it. Fuses and correlates info in real time"
   },
   {
     name: "Insight",
     type: "insight",
     source:70,
     target:6,
     force:true,
     desc:"Can AI reduce search and time costs via analysing incoming texts and images for crisis alerts? "
   },
   {
     name: "AIDR",
     sub:"AI for disaster response",
     link:"aidr",
     type: "example",
     source:71,
     target:70,
     force:true,
     need:"Better organise all the data that is generated during a disaster.",
     insight:"Can AI reduce search and time costs via analysing incoming texts and images for crisis alerts?",
     resolved:"Assign people as collector, trainer or tagger - machine learns from this and allows for classification of data during disaster leading to better understanding and response on behalf of community and emergency services.",
     desc:"Platform designed to perform automatic classification of crisis-related microblog communications. AIDR enables humans and machines to work together to apply human intelligence to large-scale data at high speed. (Collector - Trainer - Tagger). The objective of AIDR is to classify messages that people post during disasters into a set of user-defined categories of information"
   },
   {
     name: "Insight",
     type: "insight",
     source:72,
     target:6,
     force:true,
     desc:"How can location checking and its cross validation be improved, to act accordingly and with certainty in critical moments?"
   },
   {
     name: "HawkEye360",
     sub:"LEO Constellation",
     link:"hawkeye",
     type: "example",
     source:73,
     target:72,
     force:true,
     need:"Prevent spoofing, improve location check.",
     insight:"How can location checking and its cross validation be improved, to act accordingly and with certainty in critical moments?",
     resolved:"Provide ability to cross check geolocation data.",
     desc:"Worldwide coverage (allowing for 30+ revisits a day). 18 satellites in total. It detects any radio frequency signals - can therefore aid search & rescue – land or sea through geolocation signals."
   },
   {
     name: "Insight",
     type: "insight",
     source:74,
     target:6,
     force:true,
     desc:"Can AI support the co-ordination of efforts post disaster for effective response?"
   },
   {
     name: "One Concern",
     sub:"Emergency Management using AI",
     link:"oneconcern",
     type: "example",
     source:75,
     target:74,
     force:true,
     need:"Post disaster protocols lacking in effeciency.",
     insight:"Can AI support the co-ordination of efforts post disaster for effective response?",
     resolved:"Built dynamic protocol for post disaster, including multiple stakeholders.",
     desc:"Local fire departments, police departments, EMTs, and volunteers are the frontline experts within their communities. One Concern, Inc. respects that and can receive input well in advance of a disaster from these sources. Our algorithm can be trained to understand what is important to local communities."
   },
   {
     name: "Insight",
     type: "insight",
     source:76,
     target:6,
     force:true,
     desc:"Are there user-initiated actions that can address their specific emergency situation, such as having a choice of what service they need and which they choose to act on?"
   },
   {
     name: "EWN",
     sub:"Early Warning Network Australia",
     link:"EWN",
     type: "example",
     source:77,
     target:76,
     force:true,
     need:"Promote disaster response and safety.",
     insight:"Are there user-initiated actions that can address their specific emergency situation, such as having a choice of what service they need and which they choose to act on?",
     resolved:"Alert sent to you based on selected location. Using GIS.",
     desc:"Location Based Warning System - register area of interest through GIS polygon- you receive info via SMS; E-mail; Landline."
   },
    {
     name: "Insight",
     type: "insight",
     source:78,
     target:0,
     force:true,
     desc:"Is there access to niche and value added satellite data? "
   },

 
   {
     name: "Digital Globe",
     type: "example",
     sub:"High-res Satellite Imagery GBDX Platform",
     link:"dg1",
     source:79,
     target:78,
     force:true,
     insight:"Is there access to niche and value added satellite data?",
     need:"Data for insight",
      resolved:"Platform for accessing data and algorithms using AWS",
     desc:"Application of computer vision and deep learning to extract information from satellite imagery at scale. Release data set to the public to enable developers and data scientists. Map features such as roads, building footprints, and points of interest are created through manual or semi-automated techniques. Solving this challenge will enable more advanced use cases for GPU accelerated AI: such as change detection, wide area search, automated tipping, as well as downstream uses of map data including autonomous vehicles."
   },
     {
     name: "Insight",
     type: "insight",
     source:80,
     target:0,
     force:true,
     desc:"Is niche satellite data given to the right influential decision makers?"
   },
   {
     name: "Earth-i",
     sub:"High-res Satellite Imagery GBDX Platform",
     link:"earthi",
     type: "example",
     source:81,
     target:80,
     force:true,
     need:"Data for insight",
     insight:"Is niche satellite data given to the right influential decision makers?",
     resolved:"Platform for accessing data and algorithms using AWS",
     desc:"Among other things - can automatically identify rooftop material of buildings as it has 16 bands"
   },
   {
     name: "Insight",
     type: "insight",
     source:82,
     target:0,
     force:true,
     desc:"Is there a way to ensure data is always valid and reliable with a 24/7 coverage of the various inputs?"
   },
   {
     name: "BlackSky",
     sub:"AlertWhere",
     link:"blacksky",
     type: "example",
     source:83,
     target:82,
     force:true,
     need:"Round the clock EO monitoring.",
     resolved:"Fuze imagery and social media content with various data inputs.",
     insight:"Is there a way to ensure data is always valid and reliable with a 24/7 coverage of the various inputs?",
     desc:"Global event monitoring on an hourly basis. Use social media & newsfeeds to look at anomalies and puts these on a heat map."
   },
   {
     name: "Insight",
     type: "insight",
     howmight:true,
     source:84,
     target:0,
     force:true,
     desc:"create a platform that standardizes and coordinates, a common framework of methods addressing disaster response?"
   },
 
  
  
   


  
   ],
   links: [
   {
     source: "Mission Control",
     target: "Prediction"
   },
   {
     source: "Prediction",
     target: "Modelling"
   },
   {
     source: "Mission Control",
     target: "Learning"
   },
   {
     source: "Mission Control",
     target: "Planning"
   },
   {
     source: "Mission Control",
     target: "Design for Fog"
   },
   {
     source: "Learning",
     target: "Mapping"
   },
   {
     source: "Learning",
     target: "Planning"
   },
   {
     source: "Mapping",
     target: "Planning"
   },
   {
     source: "Planning",
     target: "Design for Fog"
   },
   {
     source: "Prediction",
     target: "Auditing"
   },
   {
     source: "Mission Control",
     target: "Aftermath"
   },
    {
     source: "Modelling",
     target: "Learning"
   },
  
   ], 
   forceLinks: [
        {
     name: "Insight",
     type: "insight",
     source:8,
     target:1,
     force:true,
   },
   {
     name: "Amicus",
     type: "example",
     source:9,
     target:8,
     force:true,
   },
   {
     name: "Insight",
     type: "insight",
     source:10,
     target:2,
     force:true,
   },
   {
     name: "BlightSTAT",
     type: "example",
     source:11,
     target:10,
     force:true,
   },
   {
     name: "Insight",
     type: "insight",
     source:12,
     target:2,
     force:true,
   },
   {
     name: "PVA",
     type: "example",
     source:13,
     target:12,
     force:true,
   },
   {
     name: "Insight",
     type: "insight",
     source:14,
     target:2,
     force:true,
   },
   {
     name: "NSW Rural Fire Service",
     type: "example",
     source:15,
     target:14,
     force:true,
   },
    {
     name: "Insight",
     type: "insight",
     source:16,
     target:2,
     force:true,
   },
   {
     name: "SES",
     type: "example",
     source:17,
     target:16,
     force:true,
   },
   {
     name: "Insight",
     type: "insight",
     source:18,
     target:2,
     force:true,
   },
   {
     name: "IAG Floods",
     type: "example",
     source:19,
     target:18,
     force:true,
   }, 
   {
     name: "Insight",
     type: "insight",
     source:20,
     target:2,
     force:true,
   },
   {
     name: "Swiss Re CatNet",
     type: "example",
     source:21,
     target:20,
     force:true,
     desc:""
   },
   {
     name: "Insight",
     type: "insight",
     source:22,
     target:3,
     force:true,
   },
   {
     name: "CEOS DRM",
     type: "example",
     source:23,
     target:22,
     force:true,
   },
   {
     name: "Insight",
     type: "insight",
     source:24,
     target:3,
     force:true,
   },
  {
     name: "Insight",
     type: "insight",
     source:25,
     target:3,
     force:true,
   },
   {
     name: "Insight",
     type: "insight",
     source:26,
     target:3,
     force:true,
   },
   {
     name: "European handbook of crowdsourcing",
     type: "example",
     source:27,
     target:26,
     force:true,
   },
   {
     name: "Crowd4Sat",
     type: "example",
     source:28,
     target:26,
     force:true,
     desc:""
   },
   {
     name: "Insight",
     type: "insight",
     source:29,
     target:3,
     force:true,
   },
   {
     name: "Digital Globe",
     type: "example",
     source:30,
     target:29,
     force:true,
   },
   {
     name: "Insight",
     type: "insight",
     source:31,
     target:3,
     force:true,
   },
   {
     name: "UCL (IRDR)",
     type: "example",
     source:32,
     target:31,
     force:true,
   },
   {
     name: "NERC",
     type: "example",
     source:33,
     target:31,
     force:true,
   },
    {
     name: "Insight",
     type: "insight",
     source:34,
     target:4,
     force:true,
   },
   {
     name: "Terrapattern",
     type: "example",
     source:35,
     target:34,
     force:true,
   },
   {
     name: "Insight",
     type: "insight",
     source:36,
     target:4,
     force:true,
   },
   {
     name: "Insight",
     type: "insight",
     source:37,
     target:4,
     force:true,
   },
    {
     name: "Starlab iArbol",
     type: "example",
     source:38,
     target:37,
     force:true,
   },
   {
     name: "Insight",
     type: "insight",
     source:39,
     target:4,
     force:true,
   },
   {
     name: "GeoDesign (science & design)",
     type: "example",
     source:40,
     target:39,
     force:true,
     desc:""
   },
   {
     name: "Insight",
     type: "insight",
     source:41,
     target:4,
     force:true,
   },
   {
     name: "Data Cube",
     type: "example",
     source:42,
     target:41,
     force:true,
     desc:""
   },
   {
     name: "Insight",
     type: "insight",
     source:43,
     target:4,
     force:true,
   },
   {
     name: "MapBox",
     type: "example",
     source:44,
     target:43,
     force:true,
     desc:""
   },

   {
     name: "Insight",
     type: "insight",
     source:45,
     target:5,
     force:true,
   },
   {
     name: "GFDRR",
     type: "example",
     source:46,
     target:45,
     force:true,
     desc:""
   },
   {
     name: "Insight",
     type: "insight",
     source:47,
     target:5,
     force:true,
   },
   {
     name: "Web-GIS flash flood Italy",
     type: "example",
     source:48,
     target:47,
     force:true,
     desc:""
   },
   {
     name: "Insight",
     type: "insight",
     source:49,
     target:5,
     force:true,
   },
   {
     name: "BLiF",
     type: "example",
     source:50,
     target:49,
     force:true,
     desc:""
   },
    {
     name: "Insight",
     type: "insight",
     source:52,
     target:51,
     force:true,
     desc:"Having a common framework of modelling and planning everyone can abide by/refer back to is necessary "
   },
   {
     name: "Data61",
     type: "example",
     source:53,
     target:52,
     force:true,
     desc:""
   },
   {
     name: "Insight",
     type: "insight",
     source:54,
     target:51,
     force:true,
     desc:"Alongside a common framework -  a common ‘protocol’ is also key, specifically, organising and prioritising the various technologies throughout the disaster cycle"
   },
   {
     name: "University of Portsmouth",
     type: "example",
     source:55,
     target:54,
     force:true,
     desc:""
   },
    {
     name: "Insight",
     type: "insight",
     source:56,
     target:51,
     force:true,
     desc:"Give users the ability to create custom simulations of event (fire, flood, etc) "
   },
   {
     name: "Spark",
     type: "example",
     source:57,
     target:56,
     force:true,
     desc:""
   },
    {
     name: "Insight",
     type: "insight",
     source:58,
     target:51,
     force:true,
     desc:"Need for an aggregator of data and insights to aid decision makers. Supported by a standardised methods of reporting and interacting with open data "
   },
   {
     name: "Melodies",
     type: "example",
     source:59,
     target:58,
     force:true,
     desc:""
   },
    {
     name: "Insight",
     type: "insight",
     source:60,
     target:4,
     force:true,
     desc:"Establishing an inclusive approach to the whole community for disaster mapping helps unlock detailed and valuable maps via a variety of data sources"
   },
   {
     name: "Humanitarian OpenStreetMap",
     type: "example",
     source:61,
     target:60,
     force:true,
     desc:""
   },
    {
     name: "Insight",
     type: "insight",
     source:62,
     target:4,
     force:true,
     desc:"Human computing can help combine data types to then speed up and ameliorate machine learning"
   },
   {
     name: "MicroMappers",
     type: "example",
     source:63,
     target:62,
     force:true,
     desc:""
   },
    {
     name: "Insight",
     type: "insight",
     source:64,
     target:4,
     force:true,
     desc:"There is a need for user-generated data that is deemed trustworthy in order to properly act upon the information given"
   },
   {
     name: "Energic",
     type: "example",
     source:65,
     target:64,
     force:true,
     desc:""
   },
   {
     name: "Insight",
     type: "insight",
     source:66,
     target:6,
     force:true,
     desc:"Common factors are technologies (mainly machine learning) that reduce the cognitive load for decision makers in crucial moments"
   },
   {
     name: "Heal App",
     type: "example",
     source:67,
     target:66,
     force:true,
     desc:""
   },
   {
     name: "Insight",
     type: "insight",
     source:68,
     target:6,
     force:true,
     desc:"Finding solutions in real time data via the utilisation of natural language"
   },
   {
     name: "Lux",
     type: "example",
     source:69,
     target:68,
     force:true,
     desc:""
   },
   {
     name: "Insight",
     type: "insight",
     source:70,
     target:6,
     force:true,
     desc:"Reducing search and time costs via AI analysing incoming texts and images for crisis alerts"
   },
   {
     name: "AIDR",
     type: "example",
     source:71,
     target:70,
     force:true,
     desc:""
   },
   {
     name: "Insight",
     type: "insight",
     source:72,
     target:6,
     force:true,
     desc:"Improving location check and cross validation of it to act accordingly and with certainty"
   },
   {
     name: "HawkEye360",
     type: "example",
     source:73,
     target:72,
     force:true,
     desc:""
   },
   {
     name: "Insight",
     type: "insight",
     source:74,
     target:6,
     force:true,
     desc:"Need for the co-ordination of efforts post disaster for effective response, supported by AI"
   },
   {
     name: "One Concern",
     type: "example",
     source:75,
     target:74,
     force:true,
     desc:""
   },
   {
     name: "Insight",
     type: "insight",
     source:76,
     target:6,
     force:true,
     desc:"User initiated actions to address emergency situation such as having a choice of what service they need and which they choose to act on"
   },
   {
     name: "EWN",
     type: "example",
     source:77,
     target:76,
     force:true,
     desc:""
   },
   {
     name: "Insight",
     type: "insight",
     source:78,
     target:0,
     force:true,
     desc:"Access to niche and value added satellite data is crucial"
   },
   {
     name: "Digital Globe",
     type: "example",
     source:79,
     target:78,
     force:true,
     desc:""
   },
     {
     name: "Insight",
     type: "insight",
     source:80,
     target:0,
     force:true,
     desc:"Niche data needs to be given to the respective influential decision makers"
   },
   {
     name: "Earth-i",
     type: "example",
     source:81,
     target:80,
     force:true,
     desc:""
   },
   {
     name: "Insight",
     type: "insight",
     source:82,
     target:0,
     force:true,
     desc:"To ensure data is always valid and reliable, 24/7 monitoring from various inputs is key"
   },
   {
     name: "BlackSky",
     type: "example",
     source:83,
     target:82,
     force:true,
     desc:""
   },
   {
     name: "Insight",
     type: "insight",
     source:84,
     target:0,
     force:true,
     desc:"A platform allowing for the standardization, coordination, and creation of a common framework of methods addressing disaster response."
   },
   ],
   insightNodes:[
 
   ]

};

 var c10 = d3.scale.category10();
 var body = d3.select("#map");
 // var svg = body
 //   .append("svg")
 //   .attr("width", windowW)
 //   .attr("height", windowH)
 //    .call(d3.behavior.zoom().on("zoom", function () {
 //    svg.attr("transform", "translate(" + d3.event.translate + ")" + " scale(" + d3.event.scale + ")")
 //  }))
 //  .append("g");

 var scaler = 0.5;
var zoomWidth = (mapW-scaler*mapW)/2
var zoomHeight = (windowH-scaler*windowH)/2

   var svg = body
   .append("svg")
   .attr("class","thesvg")
   .attr("width", 2000)
   .attr("height", windowH-100)

    .call(d3.behavior.zoom().on("zoom", function () {
    svg.attr("transform", "translate(" + d3.event.translate + ")" + " scale(" + d3.event.scale + ")")
  }))
  .append("g");

  // svg.attr("transform", "translate("+zoomWidth+","+zoomHeight+") scale("+scaler+")");
// svg.attr("transform", "translate(" +(mapW-0.5*mapW)/2+','+(windowH-0.5*windowH)/2+ ")" + " scale(0.5)");
 var container = svg.append("g");



 //update

    //use data here

console.log("updating");

var timeline = svg.append("line")
                        .attr("x1",0-(mapW/6))
                          .attr("y1", windowH+300)
                        .attr("x2", mapW+(mapW/6))
                         .attr("y2", windowH+300)
                         .attr('fill', '#101717')
            .attr('stroke','#101717');

            var practical = svg.append("text")
              .text("Practical Preventive")
              .attr("x", 0-((mapW/6)) + ((mapW/6)*2))
            .attr("y", windowH+300);

            var identified = svg.append("text")
              .text("Identified Vulnerabilities")
              .attr("x", 0-(mapW/6))
            .attr("y", windowH+300);

            var connected = svg.append("text")
              .text("Connected Communities")
              .attr("x", 0-((mapW/6)) + ((mapW/6)*3))
            .attr("y", windowH+300);

             var early = svg.append("text")
              .text("Early Warning Systems")
              .attr("x", 0-((mapW/6)) + ((mapW/6)*4))
            .attr("y", windowH+300);

            var emergency = svg.append("text")
              .text("Emergency Response Plan")
              .attr("x", 0-((mapW/6)) + ((mapW/6)*5))
            .attr("y", windowH+300);

            var rebuild = svg.append("text")
              .text("Rebuild & Recover")
              .attr("x", 0-((mapW/6)) + ((mapW/6)*6))
            .attr("y", windowH+300);




   svg.append('defs').append('marker')
        .attr({'id':'arrowhead',
               'viewBox':'-0 -5 10 10',
               'refX':100,
               'refY':0,
               //'markerUnits':'strokeWidth',
               'orient':'auto',
               'markerWidth':10,
               'markerHeight':10,
               'xoverflow':'visible'})
        .append('svg:path')
            .attr('d', 'M 0,-5 L 10 ,0 L 0,5')
            .attr('fill', '#101717')
            .attr('stroke','#101717');


 var drag = d3.behavior.drag()
   .on("drag", function(d, i) {
     d.x += d3.event.dx
     d.y += d3.event.dy
     d3.select(this).attr("x", d.x).attr("y", d.y);
     links.each(function(l, li) {
       if (l.source == i) {
         d3.select(this).attr("x1", d.x).attr("y1", d.y);
       } else if (l.target == i) {
         d3.select(this).attr("x2", d.x).attr("y2", d.y);
       }
     });
   });

 var links = svg.selectAll("link")
   .data(data.links)
   .enter()
   .append("line")
   .attr("class", "link")
   .attr("x1", function(l) {
     var sourceNode = data.nodes.filter(function(d, i) {
       return d.name == l.source
     })[0];
     d3.select(this).attr("y1", sourceNode.y);
     return sourceNode.x
   })
   .attr("x2", function(l) {
     var targetNode = data.nodes.filter(function(d, i) {
       return d.name == l.target
     })[0];
     d3.select(this).attr("y2", targetNode.y);
     return targetNode.x
   })
   .attr("stroke-width", 1)
            .attr("stroke", "black")
            .attr('marker-end','url(#arrowhead)');

  




var mainNodeW = 150;
var mainNodeH = 50;







     var force = d3.layout.force()
    .gravity(0.01)
 
  
.charge(-1000)
    
    .size([windowW, windowH]);

 force
      .nodes(data.nodes)
      .links(data.forceLinks.filter(function(d){
    return d.force == true;
    }))
        .linkDistance(function(d){
          if(d.type == "insight"){
            return 100;
          } else {
            return 5;
          }
        })
      .start();


var insightLink = svg.selectAll("insightLink")
        .data(data.forceLinks.filter(function(d){
    return d.force == true;
    }))

      .enter().append("line")
        .attr("class", "insightLink");

var exampleLink = svg.selectAll("exampleLink")
  .data(data.forceLinks.filter(function(d){
    return d.force == true;
  }))
  .enter().append("line")
     .attr("class", "exampleLink");        

var insightNodes = svg.selectAll("insightNodes")
	.data(data.nodes.filter(function(d){
 		return d.type == "insight";
 		}))
	.enter().append("g")
      .attr("class", "insightNode");


 var insightBox = insightNodes.append('foreignObject')
                    .attr('x', -20)
                    .attr('y', -40)
                    .attr('width', 50)
                    .attr('height', 50)
                    .append("xhtml:body")

                    .html(function(d){
                      var thing = '<div class="insight-text-box" style="width: 50px; height:100%;">'+d.desc+'</div>'
                      return thing;
                    })
                    .on("mouseover", function(d,i)
 {

     console.log("mouseover");
 });

var howmightwe = insightNodes.append('foreignObject')
                  .attr('x', -20)
                    .attr('y', -50)
                    .attr('width', 50)
                    .attr('height', 40)
                    .append("xhtml:body")
                    .html(function(d){
                      if(d.howmight){
                        var thing = '<div class="insight-how-might-we" style="width: 50px; height:100%;">How might we...</div>'
                      } else{
                        var thing = "";
                      }
                      
                      return thing;
                    });



// insightNodes.append("rect")
//  		.attr('class', 'insight')
//  		.attr("x", -15)
// 		.attr("y", -15)
// 		.attr("height", 30)
// 		.attr("width", 30);

// insightNodes.append("text")
// .attr('class', 'insight-text')
//   .attr("x",-12)
//     .attr("y",-10)
//     .text("hey");


 

 var exampleNodes = svg.selectAll("exampleNodes")
 	.data(data.nodes.filter(function(d){
 		return d.type == "example";
 	}))
 	.enter().append("g")
 		.attr("class", "exampleNode");



 exampleNodes.append("circle")
 	.attr("cx",0)
 	.attr("cy",0)
 	.attr("r", 15)
  .on("click", function(d){
    console.log(d.name);
    var link = "#"+d.link;
    $(document.body).animate({
    'scrollTop':   $(link).offset().top
}, 2000);
  })
.on("mouseover", function(d) {
  d3.select(this).attr("r", 16).style("fill", "grey");
}) 
.on("mouseout", function(d) {
  d3.select(this).attr("r", 15).style("fill", "black");
}) 
  ;

  exampleNodes.append("text")
    .text(function(d){
      return d.name;
    })
    .style("font-size","5px");







 force.on("tick", tick);


  function tick(e) {
 

 	 // var k = 6 * e.alpha;
   //  data.nodes.filter(function(d){
 		// return d.force == true;
 		// }).forEach(function(d, i) {
   //    d.source.y += k;
   //    d.target.y -= k;
   //  });

   insightLink.attr("x1", function(d) { return d.source.x; })
        .attr("y1", function(d) { return d.source.y; })
        .attr("x2", function(d) { return d.target.x; })
        .attr("y2", function(d) { return d.target.y; });

    exampleLink.attr("x1", function(d) { return d.source.x; })
        .attr("y1", function(d) { return d.source.y; })
        .attr("x2", function(d) { return d.target.x; })
        .attr("y2", function(d) { return d.target.y; });

    insightNodes.attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });
    exampleNodes.attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });

  }



 var mainNodes = svg.selectAll("mainNodes")
  .data(data.nodes.filter(function(d){
    return d.type == "Main";
  }))
  .enter().append("g")
  .attr('class', function(d){
      return d.type;
    });
  mainNodes.append("circle")
    .attr('class', function(d){
      return d.type;
    })
    .attr("cx", function(d){
      return d.x ;
    })
    .attr("cy", function(d){
      return d.y ;
    })
    .attr("r", 77);

// mainNodes.append("text")
//     .attr({
//       "text-anchor": "middle"})

//     .attr("x", function(d){
//       return d.x;
//     })
//     .attr("y", function(d){
//       return d.y + 5 ;
//     })
//     .text(function(d){
//       return d.title;
//     });

 var mainTextBox = mainNodes.append('foreignObject')
                    .attr("x", function(d){
                       return d.x - 45;
                    })
                    .attr("y", function(d){
                       return d.y -45 ;
                      })
                    .attr('width', 90)
                    .attr('height', 90)
                    .append("xhtml")
                    .html(function(d){
                      var thing = '<div class="main-text-box" style="width: 90px; height:90px;"><h2>'+d.title+'</h2></div>';
                      return thing;
                    });

   var subTextBox = mainNodes.append('foreignObject')
                    .attr("x", function(d){
                       return d.x - 45;
                    })
                    .attr("y", function(d){
                       return d.y -10;
                      })
                    .attr('width', 90)
                    .attr('height', 40)
                    .append("xhtml")
                    .html(function(d){
                      var thing = '<div class="main-sub-box" style="width: 90px; height:90px;"><p>'+d.subtitle+'</p></div>';
                      return thing;
                    });                  

$( document ).ready(function() {
  for(var i = 0; i< data.nodes.length; i++){
    if(data.nodes[i].type == "example"){
      $("#foo").append("<div class='pure-g'><div class='pure-u-1-3 '></div><div class='pure-u-1-3 example-card'><a id='"+data.nodes[i].link+"' name='"+data.nodes[i].link+"'><h1>"+data.nodes[i].name+"</h1></a><h2>"+data.nodes[i].sub+"</h2><p>"+data.nodes[i].desc+"<p><div class='pure-g'><div class='pure-u-1-3 '><div class='insight-cat'><h4>Need being answered:</h4> "+data.nodes[i].need+"</div></div> <div class='pure-u-1-3'><div class='insight-cat'><h4>Insight:</h4>"+data.nodes[i].insight+"</div></div> <div class='pure-u-1-3'><div class='insight-cat'><h4>How Resolved:</h4>  "+data.nodes[i].resolved+"</div></div></div></div></div>");
    }
    
  }
});


 	

 	//  var mainNodes = svg.selectAll("mainNodes")
 	// .data(data.nodes.filter(function(d){
 	// 	return d.type == "Main";
 	// }))
 	// .enter()
 	// .append("circle")
 	// .attr("class", "mainNode")
 	// .attr("cx", function(d){
 	// 	return d.x;
 	// })
 	// .attr("cy", function(d){
 	// 	return d.y;
 	// })
 	// .attr("r", 25)
 	// .attr("fill", "green");
 	

 

 // var nodes = svg.selectAll("node")
 //   .data(data.nodes)
 //   .enter()
 //   .append("circle")
 //   .attr("class", "node")
 //   .attr("cx", function(d) {
 //     return d.x
 //   })
 //   .attr("cy", function(d) {
 //     return d.y
 //   })
 //   .attr("r", 15)
 //   .attr("fill", function(d, i) {
 //     return c10(i);
 //   })
 //   .call(drag);