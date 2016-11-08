var windowW = window.innerWidth;
var windowH = window.innerHeight;


var data = {
   nodes: [
   {
     name: "Mission Control",
     title:"Mission <br> Control",
     subtitle:"",
     x: windowW/2,
     y: 100,
     type: "Main",
     fixed: true
   }, 
   {
     name: "Prediction",
     title: "Prediction",
     subtitle:"",
     x: windowW/6 - ((windowW/6)/2),
     y: 400,
     type: "Main",
     fixed: true
   }, 
   {
     name: "Auditing",
     title:"Auditing",
     subtitle:"",
     x: windowW/6 - ((windowW/6)/2),
     y: 800,
     type: "Main",
     fixed: true
   },
   {
     name: "Learning",
     title: "Learning",
     subtitle:"",
     x: (windowW/6)*3 - ((windowW/6)/2),
     y: 400,
     type: "Main",
     fixed: true
   },
   {
     name: "Mapping",
     title: "Mapping",
     subtitle:"Citizen Mapping",
     x: (windowW/6)*3 - ((windowW/6)/2),
     y: 800,
     type: "Main",
     fixed: true
   },
   {
     name: "Planning",
     title: "Planning",
     subtitle:"Citizen Planning",
     x: (windowW/6)*4 - ((windowW/6)/2),
     y: 600,
     type: "Main",
     fixed: true
   },
   {
     name: "Design for Fog",
     title: "Design for Fog",
     subtitle:"Human Factors",
     x: (windowW/6)*5 - ((windowW/6)/2),
     y: 600,
     type: "Main",
     fixed: true
   },
   {
     name: "Aftermath",
     title:"Aftermath",
     subtitle:"Rebuild & Recover",
     x: (windowW/6)*6 - ((windowW/6)/2),
     y: 600,
     type: "Main",
     fixed: true
   },
     {
     name: "Insight",
     type: "insight",
     source:8,
     target:1,
     force:true,
     desc:"Utilisation of predictive software for disasters to manage scenarios better."
   },
   {
     name: "Amicus",
     type: "example",
     source:9,
     target:8,
     force:true,
     desc:""
   },
   {
     name: "Insight",
     type: "insight",
     source:10,
     target:2,
     force:true,
     desc:"Enable the logging, reporting, and measurement of declining/damaged buildings, or general “health state” of the community, with participation of community."
   },
   {
     name: "BlightSTAT",
     type: "example",
     source:11,
     target:10,
     force:true,
     desc:""
   },
   {
     name: "Insight",
     type: "insight",
     source:12,
     target:2,
     force:true,
     desc:"Enable an “Opt – In” community vulnerability analysis; which would allow for a tailored and inclusive exploration of overall vulnerability (not only to assets), and level of resilience as a consequence "
   },
   {
     name: "PVA",
     type: "example",
     source:13,
     target:12,
     force:true,
     desc:"Participatory Vulnerability Analysis "
   },
   {
     name: "Insight",
     type: "insight",
     source:14,
     target:2,
     force:true,
     desc:"Community becoming more engaged with the auditing of assets will create a more holistic process leading up to the final decisions made"
   },
   {
     name: "NSW Rural Fire Service",
     type: "example",
     source:15,
     target:14,
     force:true,
     desc:""
   },
    {
     name: "Insight",
     type: "insight",
     source:16,
     target:2,
     force:true,
     desc:"Volunteers need to be motivated to help or take part (not only in the auditing phase, but also throughout disaster cycle) "
   },
   {
     name: "SES",
     type: "example",
     source:17,
     target:16,
     force:true,
     desc:""
   },
   {
     name: "Insight",
     type: "insight",
     source:18,
     target:2,
     force:true,
     desc:"Facilitate participation from community in to the auditing phase by increasing understanding of their specific risk and needs through address level analysis"
   },
   {
     name: "IAG Floods",
     type: "example",
     source:19,
     target:18,
     force:true,
     desc:""
   }, 
   {
     name: "Insight",
     type: "insight",
     source:20,
     target:2,
     force:true,
     desc:"Open up existing “Catastrophe Network” services that measure risk exposure, assessment and resilience to the general public "
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
     desc:"Learning about resilience and disasters is facilitated by the intermediary step between the general Earth Observation outputs and the consequential actions of decision makers"
   },
   {
     name: "CEOS DRM",
     type: "example",
     source:23,
     target:22,
     force:true,
     desc:""
   },
   {
     name: "Insight",
     type: "insight",
     source:24,
     target:3,
     force:true,
     desc:"The involvement of academia and policy makers to create a 360 degree platform of learning and planning"
   },
  {
     name: "Insight",
     type: "insight",
     source:25,
     target:3,
     force:true,
     desc:"Post-Hoc learning and sharing of disaster events and occurrences needs to be process that is constantly revisited "
   },
   {
     name: "Insight",
     type: "insight",
     source:26,
     target:3,
     force:true,
     desc:"Current data gathering methods need to be better understood to improve them and utilise them in the best possible way"
   },
   {
     name: "European handbook of crowdsourcing",
     type: "example",
     source:27,
     target:26,
     force:true,
     desc:""
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
     desc:"Providing a platform that holds a combination of EO data with intelligence and aggregated hosting will support the learning phase of resilience to disasters, for any user "
   },
   {
     name: "Digital Globe",
     type: "example",
     source:30,
     target:29,
     force:true,
     desc:""
   },
   {
     name: "Insight",
     type: "insight",
     source:31,
     target:3,
     force:true,
     desc:"Learning from organisations that research disaster reduction and provide funding for innovation within the field to also raise general public awareness is key"
   },
   {
     name: "UCL (IRDR)",
     type: "example",
     source:32,
     target:31,
     force:true,
     desc:""
   },
   {
     name: "NERC",
     type: "example",
     source:33,
     target:31,
     force:true,
     desc:""
   },
    {
     name: "Insight",
     type: "insight",
     source:34,
     target:4,
     force:true,
     desc:"Utilisation of machine learning for the increase in scaling and coverage can aid previous search costs"
   },
   {
     name: "Terrapattern",
     type: "example",
     source:35,
     target:34,
     force:true,
     desc:""
   },
   {
     name: "Insight",
     type: "insight",
     source:36,
     target:4,
     force:true,
     desc:"There’s value locked in 3D geospatial intelligence for disaster reduction"
   },
   {
     name: "Insight",
     type: "insight",
     source:37,
     target:4,
     force:true,
     desc:"Discovering EXISTING indicators to mitigate climate change/natural disasters allowing you to tap in to readily available resources (natural or mandmade)"
   },
    {
     name: "Starlab iArbol",
     type: "example",
     source:38,
     target:37,
     force:true,
     desc:""
   },
   {
     name: "Insight",
     type: "insight",
     source:39,
     target:4,
     force:true,
     desc:"Identifying actors that share a common goal although having different processes to attain it, and building bridges between them"
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
     desc:"Condensing, combining and relating relevant data from various inputs "
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
     desc:"A constant goal for professionals and citizen users needs to be the extraction of the value added data from risk assessment related imagery"
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
     desc:"There is a need for resources that utilise open tools (e.g., OpenStreetMap) for community insight "
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
     desc:"Utilising an interface/platform that includes community involvement with expert guidance while also using GIS"
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
     desc:"Democratizing EO data helps ease any potential future users in to the process (starting from kids!)"
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
     name: "Modeling",
     title: "Modeling",
     subtitle:"",
     x: (windowW/6)*2 - ((windowW/6)/2),
     y: 600,
     type: "Main",
     fixed: true
   },
  
  
   


  
   ],
   links: [
   {
     source: "Mission Control",
     target: "Prediction"
   },
   {
     source: "Prediction",
     target: "Modeling"
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
     source: "Modeling",
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
   ],
   insightNodes:[
 
   ]

};

 var c10 = d3.scale.category10();
 var body = d3.select("body");
 var svg = body
   .append("svg")
   .attr("width", windowW)
   .attr("height", windowH)
    .call(d3.behavior.zoom().on("zoom", function () {
    svg.attr("transform", "translate(" + d3.event.translate + ")" + " scale(" + d3.event.scale + ")")
  }))
  .append("g");

 var container = svg.append("g");



 //update

    //use data here

console.log("updating");




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
   .attr("fill", "none")
   .attr("stroke", "black");

var mainNodeW = 150;
var mainNodeH = 50;







     var force = d3.layout.force()
    .gravity(0.01)
 
    .linkDistance(100)
.charge(-500)
    
    .size([windowW, windowH]);

 force
      .nodes(data.nodes)
      .links(data.forceLinks.filter(function(d){
    return d.force == true;
    }))
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
      .attr("class", "insightNode")
      .call(force.drag);


 var insightBox = insightNodes.append('foreignObject')
                    .attr('x', -50)
                    .attr('y', -40)
                    .attr('width', 75)
                    .attr('height', 75)
                    .append("xhtml:body")
                    .html(function(d){
                      var thing = '<div class="insight-text-box" style="width: 70px; height:100%;">'+d.desc+'</div>'
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
 		.attr("class", "exampleNode")
 		.call(force.drag);

 exampleNodes.append("circle")
 	.attr("cx",0)
 	.attr("cy",0)
 	.attr("r", 10);







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
                    .attr('height', 45)
                    .append("xhtml")
                    .html(function(d){
                      var thing = '<div class="main-sub-box" style="width: 90px; height:90px;"><p>'+d.subtitle+'</p></div>';
                      return thing;
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