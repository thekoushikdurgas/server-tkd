const dropdowns = document.querySelectorAll(".dropdown");
const sun = document.querySelector("#sun");
const moon = document.querySelector("#moon");
const moonshadow = document.querySelector("#moonshadow");
const moonlight = document.querySelector("#moonlight");
// const tkddarklightcheckbox = document.querySelector("#tkddarklightcheckbox");
const csslistjson = [
  { topcsslist: 70, leftcsslist: -10, rotatecsslist: 315 },
  { topcsslist: 60, leftcsslist: -1, rotatecsslist: 322.5 },
  { topcsslist: 50, leftcsslist: 8.2, rotatecsslist: 330 },
  { topcsslist: 40, leftcsslist: 17.3, rotatecsslist: 337.5 },
  { topcsslist: 30, leftcsslist: 26.4, rotatecsslist: 345 },
  { topcsslist: 20, leftcsslist: 35.5, rotatecsslist: 352.5 },
  { topcsslist: 10, leftcsslist: 44.6, rotatecsslist: 360 },
  { topcsslist: 20, leftcsslist: 53.7, rotatecsslist: 7.5 },
  { topcsslist: 30, leftcsslist: 62.8, rotatecsslist: 15 },
  { topcsslist: 40, leftcsslist: 71.9, rotatecsslist: 22.5 },
  { topcsslist: 50, leftcsslist: 81, rotatecsslist: 30 },
  { topcsslist: 60, leftcsslist: 90.1, rotatecsslist: 37.5 },
];
var fullscreen = false;
const setFullscreen = (e) => {
  fullscreen = e;
};
const body = document.body;
var daynight = !1;
const setdaynight = (e) => {
  daynight = e;
};
var cssposition = 0;
const setcssposition = (e) => {
  cssposition = e;
};
var lsborderradius = "";
const setlsborderradius = (e) => {
  lsborderradius = e;
};
// dropdowns.forEach((dropdown) => {
//   dropdown.addEventListener("click", (e) => {
//     e.stopPropagation();
//     dropdowns.forEach((c) => c.classList.remove("is-active"));
//     dropdown.classList.add("is-active");
//   });
// });
// $(".search-bar input")
//   .focus(function () {
//     $(".header").addClass("wide");
//   })
//   .blur(function () {
//     $(".header").removeClass("wide");
//   });
// $(document).click(function (e) {
//   var container = $(".status-button");
//   var dd = $(".dropdown");
//   if (!container.is(e.target) && container.has(e.target).length === 0) {
//     dd.removeClass("is-active");
//   }
// });
// $(".dropdown").on("click", function (e) {
//   $(".content-wrapper").addClass("overlay");
//   e.stopPropagation();
// });
$(document).on("click", function (e) {
  if ($(e.target).is(".dropdown") === false) {
    $(".content-wrapper").removeClass("overlay");
  }
});
$(".status-button:not(.open)").on("click", function (e) {
  $(".overlay-app").addClass("is-active");
});
$(".pop-up .close").click(function () {
  $(".overlay-app").removeClass("is-active");
});
$(".status-button:not(.open)").click(function () {
  $(".pop-up").addClass("visible");
});
$(".pop-up .close").click(function () {
  $(".pop-up").removeClass("visible");
});
const showfullscreen = () => {
  if (
    document.fullscreenElement ||
    document.webkitFullscreenElement ||
    document.mozFullScreenElement ||
    document.msFullscreenElement
  ) {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
    fullscreenicon.classList.remove("full");
    setFullscreen(false);
  } else {
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else if (document.documentElement.webkitRequestFullscreen) {
      document.documentElement.webkitRequestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) {
      document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.msRequestFullscreen) {
      document.documentElement.msRequestFullscreen();
    }
    fullscreenicon.classList.add("full");
    setFullscreen(true);
  }
};
const changedaynight = (e) => {
  setdaynight(e);
  // tkddarklightcheckbox.checked = e;
  moonPhase(new Date());
  // if (e) {
  //   body.classList.remove("bodylight");
  //   body.classList.add("bodydark");
  // } else {
  //   body.classList.add("bodylight");
  //   body.classList.remove("bodydark");
  // }
};
const darklight = (t) => {
  changedaynight(!daynight);
};
const positionsunmoon = () => {
  var e = new Date().getHours(),
    t = !0;
  e <= 5 ? (e += 6) : e >= 6 && e <= 17 ? ((t = !1), (e -= 6)) : (e -= 18);
  changedaynight(t);
  setcssposition(e);
  sun.style.left = csslistjson[e].leftcsslist + "%";
  sun.style.top = csslistjson[e].topcsslist + "%";
  sun.style.transform = "rotate(" + csslistjson[e].rotatecsslist + "deg)";
  moon.style.left = csslistjson[e].leftcsslist + "%";
  moon.style.top = csslistjson[e].topcsslist + "%";
  moon.style.transform = "rotate(" + csslistjson[e].rotatecsslist + "deg)";
};
const moonPhase = (e) => {
  var t = SunCalc.getMoonIllumination(e);
  var n = t.fraction;
  var shadowRadius = Math.abs(50 - 100 * n);
  setlsborderradius(shadowRadius + "%/50%");
  moonlight.style.borderRadius = shadowRadius + "%/50%";
  moonshadow.style.borderRadius = shadowRadius + "%/50%";
  body.classList.add("sky-gradient-" + e.getHours());
  body.classList.remove("sky-gradient-" + (e.getHours() - 1));
};
var toggled = false;
const settoggled = (e) => {
  toggled = e;
  if (e) {
    pagetoggled.classList.add("toggled");
    overlayopen.classList.add("open");
  } else {
    pagetoggled.classList.remove("toggled");
    overlayopen.classList.remove("open");
  }
};
const options = [
  {
    head: "Porfolio",
    body: [
      {
        "link": "api/social/",
        "icon": "tkd11-social-media-marketing",
        "head": "Social Media",
        "values": [
          {
            "name": "title",
            "type": "String"
          },
          {
            "name": "title1",
            "type": "String"
          },
          {
            "name": "icon",
            "type": "Icon"
          },
          {
            "name": "link",
            "type": "Link"
          }
        ]
      },
      {
        "link": "api/detail/",
        "icon": "tkd10-personal-details",
        "head": "Detail",
        "values": [
          {
            "name": "title",
            "type": "String"
          },
          {
            "name": "subject",
            "type": "String"
          },
          {
            "name": "link",
            "type": "Link"
          }
        ]
      },
      {
        "link": "api/education/",
        "icon": "tkd8-conference-education",
        "head": "Education",
        "values": [
          {
            "name": "institutename",
            "type": "String"
          },
          {
            "name": "degree",
            "type": "String"
          },
          {
            "name": "degreestart",
            "type": "String"
          },
          {
            "name": "degreeend",
            "type": "String"
          },
          {
            "name": "degreelist",
            "type": "String"
          }
        ]
      },
      {
        "link": "api/service/",
        "icon": "tkd1-carService_icons-05",
        "head": "Service",
        "values": [
          {
            "name": "icon",
            "type": "Icon"
          },
          {
            "name": "name",
            "type": "String"
          },
          {
            "name": "desc",
            "type": "String"
          }
        ]
      },
      {
        "link": "api/skills/",
        "icon": "tkd11-skills",
        "head": "Skills",
        "values": [
          {
            "name": "title",
            "type": "String"
          },
          {
            "name": "icon",
            "type": "Icon"
          },
          {
            "name": "value",
            "type": "String"
          },
          {
            "name": "type",
            "type": "String"
          }
        ]
      },
      {
        "link": "api/internship/",
        "icon": "tkd8-computer-internet-man",
        "head": "Internship",
        "values": [
          {
            "name": "profile",
            "type": "String"
          },
          {
            "name": "organization",
            "type": "String"
          },
          {
            "name": "organizationlink",
            "type": "Link"
          },
          {
            "name": "location",
            "type": "String"
          },
          {
            "name": "locationlink",
            "type": "Link"
          },
          {
            "name": "description",
            "type": "String"
          },
          {
            "name": "certificatelink",
            "type": "Link"
          },
          {
            "name": "startdate",
            "type": "Date"
          },
          {
            "name": "enddate",
            "type": "Date"
          }
        ]
      },
      {
        "link": "api/licensecertification/",
        "icon": "tkd2-seo-reward-license-certificate-contract",
        "head": "LicenseCertification",
        "values": [
          {
            "name": "name",
            "type": "String"
          },
          {
            "name": "organization",
            "type": "String"
          },
          {
            "name": "organizationlink",
            "type": "Link"
          },
          {
            "name": "credentialid",
            "type": "String"
          },
          {
            "name": "certificatelink",
            "type": "Link"
          },
          {
            "name": "issuedate",
            "type": "Date"
          }
        ]
      },
      {
        "link": "api/tkdlanguage/",
        "icon": "tkd4-iconmonstr-language-11",
        "head": "Language",
        "values": [
          {
            "name": "title",
            "type": "String"
          },
          {
            "name": "value",
            "type": "String"
          },
          {
            "name": "readvalue",
            "type": "String"
          },
          {
            "name": "writevalue",
            "type": "String"
          },
          {
            "name": "speakvalue",
            "type": "String"
          }
        ]
      },
      {
        "link": "api/knowleges/",
        "icon": "tkd9-knowledge",
        "head": "Knowleges",
        "values": [
          {
            "name": "title",
            "type": "String"
          }
        ]
      },
      {
        "link": "api/projects/",
        "icon": "tkd10-project-work",
        "head": "Projects",
        "values": [
          {
            "name": "link",
            "type": "Link"
          },
          {
            "name": "myprojectpic",
            "type": "Image"
          },
          {
            "name": "githublink",
            "type": "Link"
          },
          {
            "name": "name",
            "type": "String"
          },
          {
            "name": "category",
            "type": "String"
          },
          {
            "name": "desc",
            "type": "String"
          }
        ]
      },
      {
        "link": "api/friends/",
        "icon": "tkd6-three-friends",
        "head": "Friends",
        "values": [
          {
            "name": "name",
            "type": "String"
          },
          {
            "name": "myprojectpic",
            "type": "Image"
          },
          {
            "name": "facebook",
            "type": "Link"
          },
          {
            "name": "twitter",
            "type": "Link"
          },
          {
            "name": "linkedin",
            "type": "Link"
          },
          {
            "name": "instagram",
            "type": "Link"
          }
        ]
      },
      {
        "link": "api/icons/",
        "icon": "tkd3-retro_icons-13",
        "head": "Icons",
        "values": [
          {
            "name": "link",
            "type": "Link"
          },
          {
            "name": "name",
            "type": "String"
          },
          {
            "name": "title",
            "type": "String"
          },
          {
            "name": "csscontentcode",
            "type": "String"
          },
          {
            "name": "svglink",
            "type": "Link"
          },
          {
            "name": "icontype",
            "type": "String"
          }
        ]
      },
      {
        "link": "api/music/",
        "icon": "tkd10-music-note",
        "head": "Music",
        "values": [
          {
            "name": "title",
            "type": "String"
          },
          {
            "name": "artist",
            "type": "String"
          },
          {
            "name": "image",
            "type": "Image"
          },
          {
            "name": "audio_file",
            "type": "Link"
          },
          {
            "name": "audio_link",
            "type": "Link"
          },
          {
            "name": "language",
            "type": "String"
          },
          {
            "name": "typeaudio",
            "type": "String"
          }
        ]
      },
      {
        "link": "api/language/",
        "icon": "tkd9-language-translator",
        "head": "Language",
        "values": [
          {
            "name": "code",
            "type": "String"
          },
          {
            "name": "name",
            "type": "String"
          },
          {
            "name": "nativeName",
            "type": "String"
          }
        ]
      },
      {
        "link": "api/currentacy/",
        "icon": "tkd8-currency-exchange",
        "head": "Currentacy",
        "values": [
          {
            "name": "symbol",
            "type": "String"
          },
          {
            "name": "name",
            "type": "String"
          },
          {
            "name": "symbolnative",
            "type": "String"
          },
          {
            "name": "decimaldigits",
            "type": "String"
          },
          {
            "name": "rounding",
            "type": "String"
          },
          {
            "name": "code",
            "type": "String"
          },
          {
            "name": "nameplural",
            "type": "String"
          }
        ]
      },
      {
        "link": "api/continent/",
        "icon": "tkd6-earth-asia-oceania",
        "head": "Continent",
        "values": [
          {
            "name": "ccode",
            "type": "String"
          },
          {
            "name": "name",
            "type": "String"
          }
        ]
      },
      {
        "link": "api/country/",
        "icon": "tkd3-earth",
        "head": "Country",
        "values": [
          {
            "name": "ccode",
            "type": "String"
          },
          {
            "name": "value",
            "type": "String"
          },
          {
            "name": "name",
            "type": "String"
          },
          {
            "name": "mcode",
            "type": "String"
          },
          {
            "name": "continents",
            "type": "String"
          }
        ]
      },
      {
        "link": "api/state/",
        "icon": "tkd6-earth-africa-europe",
        "head": "State",
        "values": [
          {
            "name": "state",
            "type": "String"
          },
          {
            "name": "countrys",
            "type": "String"
          }
        ]
      }
    ],
  },
];
// const setProject = async () => {
//   let response = await fetch("api/projects/", { method: "GET", });
//   let data = await response.json();
//   var temp = [];
//   for (var i = 0; i < data.length; i++) {
//     var tempdata = {};
//     tempdata.link = data[i].link;
//     tempdata.img = data[i].myprojectpic;
//     tempdata.title = data[i].desc;
//     tempdata.head = data[i].name;
//     tempdata.type = data[i].category;
//     temp.push(tempdata);
//   }
//   options.push({ head: "Project", body: temp.filter(function (x) { if (x.type == 'project') { return x; } }), })
//   options.push({ head: "Software", body: temp.filter(function (x) { if (x.type == 'software') { return x; } }), })
//   options.push({ head: "Game", body: temp.filter(function (x) { if (x.type == 'game') { return x; } }), })
//   options.push({ head: "Website", body: temp.filter(function (x) { if (x.type == 'website') { return x; } }), })
// };
const setState = async () => {
  let response = await fetch("api/country/", { method: "GET", });
  let data = await response.json();
  var temp = [];
  for (var i = 0; i < data.length; i++) {
    var tempdata = {};
    tempdata.link = `api/state/${data[i].name}`;
    tempdata.img = `//thekoushikdurgas.github.io/TKDstroage/svg/coreui_icons/flag/cif-${data[i].value.toLowerCase()}.svg`;
    tempdata.title = data[i].desc;
    tempdata.head = data[i].name;
    tempdata.values = [
      {
        "name": "state",
        "type": "String"
      },
      {
        "name": "countrys",
        "type": "String"
      }
    ];
    temp.push(tempdata);
  }
  options.push({ head: "State", body: temp })
};
const Initialization = async () => {
  // await setProject();
  await setState();
  var temp = "";
  for (var i = 0; i < options.length; i++) {
    temp += `<div class="cardbox"><div class="cardbox-title">${options[i].head}</div><ul>`;
    for (var j = 0; j < options[i].body.length; j++) {
      if (options[i].body[j].icon) {
        temp += `<li class="adobe-product"><div class="products"><i class="${options[i].body[j].icon}"></i><span>${options[i].body[j].head}</span></div><div class="button-wrapper"><a class="content-button status-button open" href="${options[i].body[j].link}">Open</a><a class="content-button status-button open" href="/edit/table/?data=${encodeURIComponent(JSON.stringify(options[i].body[j]))}">Edit</a></div></li>`;
      } else {
        temp += `<li class="adobe-product"><div class="products"><img src="${options[i].body[j].img}"/><span>${options[i].body[j].head}</span></div><div class="button-wrapper"><a class="content-button status-button open" href="${options[i].body[j].link}">Open</a><a class="content-button status-button open" href="/edit/table/?data=${encodeURIComponent(JSON.stringify(options[i].body[j]))}">Edit</a></div></li>`;
      }
    }
    temp += "</ul></div>";
  }
  document.getElementById("contentsection1").innerHTML = `<div class="cardbox"><div class="cardbox-title">Password</div><ul><li class="adobe-product"><div class="products"><i class="tkd4-iconmonstr-password-3"></i><span>Password</span></div><div class="button-wrapper"><a class="content-button status-button open" href="public/api/password.html">Open</a></div></li></ul></div>` + temp;
};
setTimeout(() => {
  positionsunmoon();
}, 6e4);
positionsunmoon();
if (
  document.fullscreenElement ||
  document.webkitFullscreenElement ||
  document.mozFullScreenElement ||
  document.msFullscreenElement
) {
  fullscreenicon.classList.add("full");
  setFullscreen(true);
} else {
  fullscreenicon.classList.remove("full");
  setFullscreen(false);
}
const Initializationfrist = () => {
  var keypassword = false;
  let sign = prompt("password");
  if (sign === "1234567890") {
    keypassword = true;
  }
  if (!keypassword) {
    location.reload();
  }
}