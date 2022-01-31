$('.navbar-nav>li>a').on('click', function() {
    $('.navbar-collapse').collapse('hide');
});
var observerhome = new IntersectionObserver(function(entries) {
    if (entries[0].isIntersecting === true) {
        console.log('Home');
        document.getElementById("homenav").style.borderBottom = "3px solid #ffc107";
        document.getElementById("ourstorynav").style.borderBottom = "0px";
        document.getElementById("achievementsnav").style.borderBottom = "0px";
        document.getElementById("ourprojectsnav").style.borderBottom = "0px";
        document.getElementById("eventsnav").style.borderBottom = "0px";
        document.getElementById("teamnav").style.borderBottom = "0px";
        document.getElementById("newsletternav").style.borderBottom = "0px";
        document.getElementById("contactnav").style.borderBottom = "0px";
    }
}, { threshold: [0.8] });

observerhome.observe(document.querySelector("#home"));

var observerourstory = new IntersectionObserver(function(entries) {
    if (entries[0].isIntersecting === true) {
        console.log('Ourstory');
        document.getElementById("animatecard1").style.display = "block";
        document.getElementById("animatecard1").style.animation = "fadeInAnimation ease 1.5s";
        document.getElementById("animatecard2").style.display = "block";
        document.getElementById("animatecard2").style.animation = "fadeInAnimation ease 1s";
        document.getElementById("ourstorynav").style.borderBottom = "3px solid #ffc107";
        document.getElementById("homenav").style.borderBottom = "0px";
        document.getElementById("achievementsnav").style.borderBottom = "0px";
        document.getElementById("ourprojectsnav").style.borderBottom = "0px";
        document.getElementById("eventsnav").style.borderBottom = "0px";
        document.getElementById("teamnav").style.borderBottom = "0px";
        document.getElementById("newsletternav").style.borderBottom = "0px";
        document.getElementById("contactnav").style.borderBottom = "0px";
    }
}, { threshold: [0.8] });

observerourstory.observe(document.querySelector("#ourstory"));

var observerachievements = new IntersectionObserver(function(entries) {
    if (entries[0].isIntersecting === true) {
        console.log('Achievements');
        document.getElementById("carouselExampleControls").style.display = "block";
        document.getElementById("carouselExampleControls").style.animation = "fadeInAnimation ease 1.5s";
        document.getElementById("achievementsnav").style.borderBottom = "3px solid #ffc107";
        document.getElementById("homenav").style.borderBottom = "0px";
        document.getElementById("ourstorynav").style.borderBottom = "0px";
        document.getElementById("ourprojectsnav").style.borderBottom = "0px";
        document.getElementById("eventsnav").style.borderBottom = "0px";
        document.getElementById("teamnav").style.borderBottom = "0px";
        document.getElementById("newsletternav").style.borderBottom = "0px";
        document.getElementById("contactnav").style.borderBottom = "0px";
    }
}, { threshold: [0.8] });

observerachievements.observe(document.querySelector("#achievements"));

var observerourprojects = new IntersectionObserver(function(entries) {
    if (entries[0].isIntersecting === true) {
        console.log('Our Projects');
        document.getElementById("projectscardanimation").style.display = "block";
        document.getElementById("projectscardanimation").style.animation = "fadeInAnimation ease 1.5s";
        document.getElementById("ourprojectsnav").style.borderBottom = "3px solid #ffc107";
        document.getElementById("homenav").style.borderBottom = "0px";
        document.getElementById("ourstorynav").style.borderBottom = "0px";
        document.getElementById("achievementsnav").style.borderBottom = "0px";
        document.getElementById("eventsnav").style.borderBottom = "0px";
        document.getElementById("teamnav").style.borderBottom = "0px";
        document.getElementById("newsletternav").style.borderBottom = "0px";
        document.getElementById("contactnav").style.borderBottom = "0px";
    }
}, { threshold: [0.8] });

observerourprojects.observe(document.querySelector("#ourprojects"));

var observerevents = new IntersectionObserver(function(entries) {
    if (entries[0].isIntersecting === true) {
        console.log('Events');
        document.getElementById("eventsnav").style.borderBottom = "3px solid #ffc107";
        document.getElementById("homenav").style.borderBottom = "0px";
        document.getElementById("ourstorynav").style.borderBottom = "0px";
        document.getElementById("ourprojectsnav").style.borderBottom = "0px";
        document.getElementById("achievementsnav").style.borderBottom = "0px";
        document.getElementById("teamnav").style.borderBottom = "0px";
        document.getElementById("newsletternav").style.borderBottom = "0px";
        document.getElementById("contactnav").style.borderBottom = "0px";
    }
}, { threshold: [0.8] });

observerevents.observe(document.querySelector("#events"));

var observerteam = new IntersectionObserver(function(entries) {
    if (entries[0].isIntersecting === true) {
        console.log('Team');
        document.getElementById("teamnav").style.borderBottom = "3px solid #ffc107";
        document.getElementById("homenav").style.borderBottom = "0px";
        document.getElementById("ourstorynav").style.borderBottom = "0px";
        document.getElementById("ourprojectsnav").style.borderBottom = "0px";
        document.getElementById("eventsnav").style.borderBottom = "0px";
        document.getElementById("achievementsnav").style.borderBottom = "0px";
        document.getElementById("newsletternav").style.borderBottom = "0px";
        document.getElementById("contactnav").style.borderBottom = "0px";
    }
}, { threshold: [0.4] });

observerteam.observe(document.querySelector("#team"));

var observernewsletter = new IntersectionObserver(function(entries) {
    if (entries[0].isIntersecting === true) {
        console.log('Newsletter');
        document.getElementById("newsletternav").style.borderBottom = "3px solid #ffc107";
        document.getElementById("homenav").style.borderBottom = "0px";
        document.getElementById("ourstorynav").style.borderBottom = "0px";
        document.getElementById("ourprojectsnav").style.borderBottom = "0px";
        document.getElementById("eventsnav").style.borderBottom = "0px";
        document.getElementById("teamnav").style.borderBottom = "0px";
        document.getElementById("achievementsnav").style.borderBottom = "0px";
        document.getElementById("contactnav").style.borderBottom = "0px";
    }
}, { threshold: [0.4] });

observernewsletter.observe(document.querySelector("#newsletter"));

var observercontact = new IntersectionObserver(function(entries) {
    if (entries[0].isIntersecting === true) {
        console.log('Contact');
        document.getElementById("contactnav").style.borderBottom = "3px solid #ffc107";
        document.getElementById("homenav").style.borderBottom = "0px";
        document.getElementById("ourstorynav").style.borderBottom = "0px";
        document.getElementById("ourprojectsnav").style.borderBottom = "0px";
        document.getElementById("eventsnav").style.borderBottom = "0px";
        document.getElementById("teamnav").style.borderBottom = "0px";
        document.getElementById("newsletternav").style.borderBottom = "0px";
        document.getElementById("achievementsnav").style.borderBottom = "0px";
    }
}, { threshold: [0.8] });

observercontact.observe(document.querySelector("#contact"));