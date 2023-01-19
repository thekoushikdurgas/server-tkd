const express = require('express');
const router = express.Router();
const fetchuser = require('../middleware/fetchuser');
const fetchcontact = require('../middleware/fetchcontact');
const fetchroom = require('../middleware/fetchroom');
const social = require('../models/social');
const licensecertification = require('../models/licensecertification');
const internship = require('../models/internship');
const detail = require('../models/detail');
const service = require('../models/service');
const skills = require('../models/skills');
const contact = require('../models/contact');
const tkdlanguage = require('../models/tkdlanguage');
const education = require('../models/education');
const knowleges = require('../models/knowleges');
const projects = require('../models/projects');
const friends = require('../models/friends');
const icons = require('../models/icons');
const tools = require('../models/tools');
const music = require('../models/music');
const Room = require('../models/Room');
const language = require('../models/language');
const currentacy = require('../models/currentacy');
const continent = require('../models/continent');
const states = require('../models/state');
const country = require('../models/country');
const User = require('../models/User');
const task = require('../models/task');
const tkdchat = require('../models/tkdchat');
const { body, validationResult } = require('express-validator');
var jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;
const bcrypt = require('bcryptjs');

router.get('/social', async (req, res) => {
    try { const temp = await social.find(); res.json(temp); }
    catch (error) { console.error(error.message); res.json({ success: false, errors: error.message }); }
    console.log('social');
});
router.get('/detail', async (req, res) => {
    try { const temp = await detail.find(); res.json(temp); }
    catch (error) { console.error(error.message); res.json({ success: false, errors: error.message }); }
    console.log('detail');
});
router.get('/education', async (req, res) => {
    try { const temp = await education.find(); res.json(temp); }
    catch (error) { console.error(error.message); res.json({ success: false, errors: error.message }); }
    console.log('education');
});
router.get('/service', async (req, res) => {
    try { const temp = await service.find(); res.json(temp); }
    catch (error) { console.error(error.message); res.json({ success: false, errors: error.message }); }
    console.log('service');
});
router.post("/addservice", async (req, res) => {
    try {
        const { icon, name, desc } = req.body;
        const temp = new service({ icon, name, desc });
        await temp.save();
        res.json({ success: true, temp });
    } catch (error) { console.error(error.message); res.json({ success: false, errors: error.message }); }
});
router.get('/skills', async (req, res) => {
    try { const temp = await skills.find(); res.json(temp); }
    catch (error) { console.error(error.message); res.json({ success: false, errors: error.message }); }
    console.log('skills');
});
router.post("/addskills", async (req, res) => {
    try {
        const { title, icon, value, type } = req.body;
        const temp = new skills({ title, icon, value, type });
        await temp.save();
        res.json({ success: true, temp });
    } catch (error) { console.error(error.message); res.json({ success: false, errors: error.message }); }
});
router.get('/internship', async (req, res) => {
    try { const temp = await internship.find(); res.json(temp); }
    catch (error) { console.error(error.message); res.json({ success: false, errors: error.message }); }
    console.log('internship');
});
router.get('/licensecertification', async (req, res) => {
    try { const temp = await licensecertification.find(); res.json(temp); }
    catch (error) { console.error(error.message); res.json({ success: false, errors: error.message }); }
    console.log('licensecertification');
});
router.get('/tkdlanguage', async (req, res) => {
    try { const temp = await tkdlanguage.find(); res.json(temp); }
    catch (error) { console.error(error.message); res.json({ success: false, errors: error.message }); }
    console.log('tkdlanguage');
});
router.get('/knowleges', async (req, res) => {
    try { const temp = await knowleges.find(); res.json(temp); }
    catch (error) { console.error(error.message); res.json({ success: false, errors: error.message }); }
    console.log('knowleges');
});
router.get('/projects', async (req, res) => {
    try { const temp = await projects.find(); res.json(temp); }
    catch (error) { console.error(error.message); res.json({ success: false, errors: error.message }); }
    console.log('projects');
});
router.get('/projects/:id', async (req, res) => {
    try { const temp = await projects.findById(req.params.id); res.json(temp); }
    catch (error) { console.error(error.message); res.json({ success: false, errors: error.message }); }
    console.log('projects ' + req.params.id);
});
router.post("/addprojects", async (req, res) => {
    try {
        const { link, myprojectpic, name, category, desc } = req.body;
        const temp = new projects({ user: req.user.id, link, myprojectpic, name, category, desc });
        await temp.save();
        res.json({ success: true, temp });
    } catch (error) { console.error(error.message); res.json({ success: false, errors: error.message }); }
});
router.get('/friends', async (req, res) => {
    try { const temp = await friends.find(); res.json(temp); }
    catch (error) { console.error(error.message); res.json({ success: false, errors: error.message }); }
    console.log('friends');
});
router.get('/icons', async (req, res) => {
    try { const temp = await icons.find(); res.json(temp); }
    catch (error) { console.error(error.message); res.json({ success: false, errors: error.message }); }
    console.log('icons');
});
router.get('/tools', async (req, res) => {
    try { const temp = await tools.find(); res.json(temp); }
    catch (error) { console.error(error.message); res.json({ success: false, errors: error.message }); }
    console.log('tools');
});
router.get('/music', async (req, res) => {
    try { const temp = await music.find(); res.json(temp); }
    catch (error) { console.error(error.message); res.json({ success: false, errors: error.message }); }
    console.log('music');
});
router.get('/language', async (req, res) => {
    try { const temp = await language.find(); res.json(temp); }
    catch (error) { console.error(error.message); res.json({ success: false, errors: error.message }); }
    console.log('language');
});
router.get('/currentacy', async (req, res) => {
    try { const temp = await currentacy.find(); res.json(temp); }
    catch (error) { console.error(error.message); res.json({ success: false, errors: error.message }); }
    console.log('currentacy');
});
router.get('/continent', async (req, res) => {
    try { const temp = await continent.find(); res.json(temp); }
    catch (error) { console.error(error.message); res.json({ success: false, errors: error.message }); }
    console.log('continent');
});
router.get('/state', async (req, res) => {
    try { const temp = await states.find(); res.json(temp); }
    catch (error) { console.error(error.message); res.json({ success: false, errors: error.message }); }
    console.log('state');
});
router.get('/state/:country', async (req, res) => {
    console.log(req.params.country);
    try { const temp = await states.find({ countrys: req.params.country }); res.json(temp); }
    catch (error) { console.error(error.message); res.json({ success: false, errors: error.message }); }
    console.log('state ' + req.params.country);
});
router.get('/country', async (req, res) => {
    try { const temp = await country.find(); res.json(temp); }
    catch (error) { console.error(error.message); res.json({ success: false, errors: error.message }); }
    console.log('country');
});

// message

const findcontactid = async (user, contact) => {
    var temp3 = await User.findById(user);
    var temp2 = temp3.contacts;
    if (!temp2.includes(contact)) {
        temp2.push(contact);
        temp3.contacts = temp2;
        await temp3.save();
    }
}
const messagediv = async (userid, contactid, user, message, star1, star2, date) => {
    const temp3 = await User.findById(userid);
    // console.log(temp3.email);
    var temp1 = {};
    // temp1.type = temp3.id === user ? 'replies' : 'sent';
    temp1.name = temp3.name;
    temp1.email = temp3.email;
    temp1.message = message;
    // temp1.contactid = temp3.id === user ? contactid : temp3.id;
    temp1.star1 = star1;
    temp1.star2 = star1;
    temp1.date = formatDate(date, "d/MMM/yyyy");
    temp1.time = formatDate(date, "h:mmtt");
    return temp1;
}
const userdeatails = async (userid, contactid) => {
    const temp3 = await User.findById(userid);
    const templastchat = await tkdchat.find().and([{ $or: [{ user: contactid, contactid: userid }, { user: userid, contactid: contactid }] },]);
    var temp1 = {};
    const data = { id: temp3.id }
    const authtoken = jwt.sign(data, JWT_SECRET);
    temp1.authtoken = authtoken;
    temp1.name = temp3.name;
    temp1.username = temp3.username;
    temp1.email = temp3.email;
    temp1.picimg = temp3.picimg;
    temp1.phone = temp3.phone;
    temp1.status = temp3.status;
    temp1.country = temp3.country;
    temp1.last = templastchat[templastchat.length - 1] === undefined ? '' : templastchat[templastchat.length - 1].message;
    return temp1;
}
router.get('/contact', fetchuser, async (req, res) => {
    try {
        const temp3 = await User.findById(req.user.id);
        var temp = temp3.contacts;
        // console.log(temp);
        var temp2 = [];
        for (var i = 0; i < temp.length; i++) {
            var userdeatailsjson = await userdeatails(temp[i], req.user.id);
            temp2.push(userdeatailsjson);
        }
        res.json(temp2);
    }
    catch (error) { console.error(error.message); res.json({ success: false, errors: error.message }); }
    console.log('contact');
});
router.post('/getuser', fetchuser, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select("-password");
        res.json({ success: true, user });
    } catch (error) { console.error(error.message); res.json({ success: false, errors: error.message }); }
})
router.post('/getusermess', fetchuser, fetchcontact, async (req, res) => {
    try {
        const temp = await tkdchat.find().and([{ $or: [{ user: req.user.id, contactid: req.usercontact.id }, { user: req.usercontact.id, contactid: req.user.id }] },]);
        var temp2 = [];
        for (var i = 0; i < temp.length; i++) {
            var messagejson = await messagediv(temp[i].user, temp[i].contactid, req.user.id, temp[i].message, temp[i].star1, temp[i].star2, temp[i].updated_at);
            temp2.push(messagejson);
        }
        res.json({ success: true, messagelist: temp2 });
    } catch (error) { console.error(error.message); res.json({ success: false, errors: error.message }); }
})
router.post("/addcontact", fetchuser, fetchcontact, async (req, res) => {
    try {
        await findcontactid(req.user.id, req.usercontact.id);
        await findcontactid(req.usercontact.id, req.user.id);
        res.json({ success: true, contactemail: req.usercontact.email });
    } catch (error) { console.error(error.message); res.json({ success: false, errors: error.message }); }
    console.log('addcontact');
});
router.post("/tkdchat", fetchuser, fetchcontact, async (req, res) => {
    try {
        const message = req.header("message");
        const errors = validationResult(req);
        if (!errors.isEmpty()) { return res.json({ errors: errors.array() }); }
        const temp = new tkdchat({ user: req.user.id, contactid: req.usercontact.id, message });
        const savedtemp = await temp.save();
        const messagejson = await messagediv(req.user.id, req.usercontact.id, req.user.id, message, false, false, savedtemp.updated_at);
        res.json({ success: true, message: messagejson });
    } catch (error) { console.error(error.message); res.json({ success: false, errors: error.message }); }
    console.log('tkdchat');
});
router.post('/createroom', fetchuser, [
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('picimg', 'Enter a valid picimg').isLength({ min: 10 }),
    body('password', 'Password must be atleast 5 characters').isLength({ min: 5 }),
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) { return res.json({ success: false, errors: errors.array() }); }
    try {
        const { name, password, picimg, mode } = req.body;
        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(password, salt);
        const Roomdeatail = await Room.create({ name, ownerid: req.user.id, password: secPass, picimg, mode, members: [req.user.id] });
        const data = { id: Roomdeatail.id }
        const authtoken = jwt.sign(data, JWT_SECRET);
        Roomdeatail.authtoken = authtoken;
        await Roomdeatail.save();
        res.json({ success: true, authtoken, ower: Roomdeatail.id === req.user.id });
    } catch (error) { console.error(error.message); res.status(500).json({ success: false, error: "500" }); }
});
router.post('/getrooms', fetchuser, async (req, res) => {
    try {
        const room = await Room.find();
        const Usertemp = await User.findById(req.user.id);
        var temp2 = [];
        for (i = 0; i < room.length; i++) {
            if (room[i].members.includes(req.user.id)) {
                const templastchat = await tkdchat.find({ contactid: room[i].id });
                var temp1 = {};
                temp1.authtoken = room[i].authtoken;
                temp1.name = room[i].name;
                temp1.username = room[i].username;
                temp1.email = Usertemp.email;
                temp1.picimg = room[i].picimg;
                temp1.phone = room[i].phone;
                temp1.status = room[i].status;
                temp1.country = room[i].country;
                temp1.last = templastchat[templastchat.length - 1] === undefined ? '' : templastchat[templastchat.length - 1].message;
                temp2.push(temp1);
            }
        }
        res.json(temp2);
    } catch (error) { console.error(error.message); res.json({ success: false, errors: error.message }); }
})
router.post('/roomsdetails', fetchuser, fetchroom, async (req, res) => {
    try {
        const Roomtemp = await Room.findById(req.room.id);
        const Usertemp = await User.findById(req.user.id);
        var success = false;
        if (!Roomtemp) { return res.json({ success, error: "Room id is invalid" }); }
        if (!Usertemp) { return res.json({ success, error: "User id is invalid" }); }
        var temp = {};
        temp.success = true;
        temp.authtoken = Roomtemp.authtoken;
        temp.roomimg = Roomtemp.picimg;
        temp.roomname = Roomtemp.name;
        temp.userimg = Usertemp.picimg;
        temp.useremail = Usertemp.email;
        let tempmess1 = [];
        for (var i = 0; i < Roomtemp.members.length; i++) {
            var userdeatailsjson = await userdeatails(Roomtemp.members[i], req.room.id);
            tempmess1.push(userdeatailsjson);
        }
        temp.roommembers = tempmess1;
        temp.ower = (String(Roomtemp.ownerid) === String(req.user.id));
        const tempmess = await tkdchat.find({ contactid: req.room.id });
        tempmess1 = [];
        for (var i = 0; i < tempmess.length; i++) {
            var messagejson = await messagediv(tempmess[i].user, tempmess[i].contactid, req.user.id, tempmess[i].message, tempmess[i].star1, tempmess[i].star2, tempmess[i].updated_at);
            tempmess1.push(messagejson);
        }
        temp.messagelist = tempmess1;
        res.json({ success: true, room: temp });
    } catch (error) { console.error(error.message); res.json({ success: false, errors: error.message }); }
});
router.post("/sentroommessage", fetchuser, fetchroom, async (req, res) => {
    try {
        const temp = await tkdchat.create({ user: req.user.id, contactid: req.room.id, message: req.header("message") });
        const savedtemp = await temp.save();
        const messagejson = await messagediv(req.user.id, req.room.id, req.user.id, req.header("message"), false, false, savedtemp.updated_at);
        res.json({ success: true, message: messagejson });
    } catch (error) { console.error(error.message); res.status(500).json({ success: false }); }
    console.log('tkdchat');
});
router.post("/addroommember", fetchuser, fetchroom, fetchcontact, async (req, res) => {
    try {
        // await findcontactid(req.user.id, req.room.id);
        // await findcontactid(req.room.id, req.user.id);
        const temp3 = await Room.findById(req.room.id);
        var temp = temp3.members;
        if (temp3.members[0] === req.user.id) {
            temp.push(req.usercontact.id);
            temp3.members = temp;
            await temp3.save();
            res.json({ success: true });
        }
        else {
            res.json({ success: false, errors: `You are not ower of the Room` });
        }
    } catch (error) { console.error(error.message); res.json({ success: false, errors: error.message }); }
    console.log('addcontact');
});
router.get('/roommember', fetchuser, fetchroom, async (req, res) => {
    try {
        const temp3 = await Room.findById(req.room.id);
        var temp = temp3.members;
        var temp2 = [];
        for (var i = 0; i < temp.length; i++) {
            var userdeatailsjson = await userdeatails(temp[i], req.user.id);
            temp2.push(userdeatailsjson);
        }
        res.json(temp2);
    }
    catch (error) { console.error(error.message); res.json({ success: false, errors: error.message }); }
    console.log('contact');
});
router.get('/bloodlocation', fetchuser, async (req, res) => {
    try {
        ['O+', 'O-', 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-',]
        res.json(temp2);
    }
    catch (error) { console.error(error.message); res.json({ success: false, errors: error.message }); }
    console.log('contact');
});
router.get("/createtask", fetchuser, async (req, res) => {
    try {
        const contactid = req.header("contactid");
        const { name, source, description, date } = req.body;
        const d1 = new Date(date);
        const user = await task.create({ user: req.user.id, contactid, name, source, description, completeStatus: 0, lastdate: d1 });
        console.log(user);
        var temp1 = {};
        temp1.id = user.id;
        temp1.name = user.name;
        temp1.username = user.username;
        temp1.source = user.source;
        temp1.description = user.description;
        temp1.completeStatus = user.completeStatus;
        temp1.last = formatDate(user.lastdate, "d/MMM/yyyy");
        temp1.date = formatDate(user.updated_at, "d/MMM/yyyy");
        temp1.time = formatDate(user.updated_at, "h:mmtt");
        res.json({ success: true, task: temp1 });
    } catch (error) { console.error(error.message); res.json({ success: false, errors: error.message }); }
    console.log('createtask');
});
router.get('/task', fetchuser, async (req, res) => {
    try {
        const temp = await task.find().and([{ $or: [{ user: req.user.id }, { contactid: req.user.id }] },]);
        var temp2 = [];
        for (var i = 0; i < temp.length; i++) {
            var temp1 = {};
            temp1.id = temp[i].id;
            temp1.name = temp[i].name;
            temp1.username = temp[i].username;
            temp1.source = temp[i].source;
            temp1.description = temp[i].description;
            temp1.completeStatus = temp[i].completeStatus;
            temp1.last = formatDate(temp[i].lastdate, "d/MMM/yyyy");
            temp1.date = formatDate(temp[i].updated_at, "d/MMM/yyyy");
            console.log(temp[i].lastdate - temp[i].updated_at);
            temp2.push(temp1);
        }
        res.json({ success: true, task: temp2 });
    }
    catch (error) { console.error(error.message); res.json({ success: false, errors: error.message }); }
    console.log('task');
});
router.get('/passwordjson', async (req, res) => {
    try {
        var temp = {};
        for (var i = 6; i < 129; i++) {
            temp[i] = strongpassword(i);
        }
        temp[256] = strongpassword(256);
        temp[512] = strongpassword(512);
        temp[1024] = strongpassword(1024);
        temp[2048] = strongpassword(2048);
        res.json(temp);
    }
    catch (error) { console.error(error.message); res.json({ success: false, errors: error.message }); }
    console.log('passwordjson');
});
router.get('/password/:len', async (req, res) => {
    try {
        var temp = {};
        temp[req.params.len] = strongpassword(req.params.len);
        res.json(temp);
    }
    catch (error) { console.error(error.message); res.json({ success: false, errors: error.message }); }
    console.log('password ' + req.params.len);
});
// router.post("/setbrowserhistory", async (req, res) => {
// try {
// const link = req.header("link");
// if (req.cookies.history) {
//     res.cookie('history', [link], {});
// } else {
//     res.cookie('history', [...req.cookies.history, link], {});
// }
// } catch (error) { console.error(error.message); res.json({ success: false,errors:error.message }); }
// });
// router.get("/browserhistroy", async (req, res) => {
// try {
// if (req.cookies.success) {
//     res.json(req.cookies.history);
// } else {
//     res.json({ success: false });
// }
// } catch (error) { console.error(error.message); res.json({ success: false,errors:error.message }); }
// });

// router.post("/contact",async (req, res) => {
//     try {
//         const { name, email, message, phone, subject,choose } = req.body;
//         const temp = new contact({ name, email, message, phone, subject,choose });
//         await temp.save();
//         res.json({ success: true, temp });
//     } catch (error) { console.error(error.message); res.json({ success: false,errors:error.message }); }
// });

const navbar = [{
    icon: "nav-icon tkd2-clipboard-copy", title: "Extra", body: [
        { link: "./", icon: "tkd9-home-office", title: "Home" },
        { link: "./timeline/", icon: "tkd10-project-management-timeline", title: "Timeline" },
        { link: "./profile/", icon: "tkd10-person-profile-image", title: "Profile", left: 1 },
        { link: "./chat/", icon: "tkd7-chat-box", title: "Chat", left: 2 },
        { link: "./notification/", icon: "tkd10-notification-alert", title: "Notification", left: 1 },
    ]
},
{
    icon: "nav-icon tkd2-clipboard-copy", title: "General", body: [
        { link: "./docs/", icon: "tkd6-book-cover-2", title: "Documentation", left: 4 },
        { link: "./feed/", icon: "tkd2-feed", title: "Feed", left: 4 },
        { link: "./videos/", icon: "tkd3-circle_play", title: "Videos", left: 4 },
        { link: "./groups/", icon: "tkd5-young_people", title: "Groups", left: 4 },
        { link: "./bookmark/", icon: "tkd4-iconmonstr-bookmark-3", title: "Bookmark", left: 4 },
        { link: "./help/", icon: "tkd6-help", title: "Questions", left: 4 },
        { link: "./job/", icon: "tkd9-job", title: "Jobs", left: 4 },
        { link: "./event/", icon: "tkd3-calendar2", title: "Events", left: 4 },
        { link: "./course/", icon: "tkd8-education-teaching", title: "Courses", left: 4 },
    ]
},
{
    icon: "nav-icon tkd2-clipboard-copy", title: "CSS Style Generator", body: [
        { link: "css-shadow/css-box-shadow", icon: "tkd13-BONAIRE_CIRCLE nav-icon", title: "Css Shadow Generator" },
        { link: "react-native-shadow/react-native-box-shadow", icon: "tkd13-BONAIRE_CIRCLE nav-icon", title: "React Native Shadow Generator" },
        { link: "background-gradient/css-color-gradient3", icon: "tkd13-BONAIRE_CIRCLE nav-icon", title: "Css Color Gradient" },
    ]
},
{
    icon: "nav-icon tkd10-pie-chart", title: "Color Converter", body: [
        { link: "color-converter/hex-to-rgb", icon: "tkd13-BONAIRE_CIRCLE nav-icon", title: "HEX To RGB" },
        { link: "color-converter/hex-to-hsl", icon: "tkd13-BONAIRE_CIRCLE nav-icon", title: "Hex To HSL" },
        { link: "color-converter/rgb-to-hex", icon: "tkd13-BONAIRE_CIRCLE nav-icon", title: "RGB To HEX" },
        { link: "color-converter/rgb-to-hsl", icon: "tkd13-BONAIRE_CIRCLE nav-icon", title: "RGB To HSL" },
        { link: "color-converter/hsl-to-hex", icon: "tkd13-BONAIRE_CIRCLE nav-icon", title: "HSL To HEX" },
        { link: "color-converter/hsl-to-rgb", icon: "tkd13-BONAIRE_CIRCLE nav-icon", title: "HSL To RGB" },
    ]
},
{
    icon: "nav-icon tkd4-iconmonstr-tree-8", title: "Minifier & Beautifier", body: [
        { link: "js-minifier/javascript-file-minifier", icon: "tkd13-BONAIRE_CIRCLE nav-icon", title: "Js Minifier" },
        { link: "css-minifier/css-file-minifier", icon: "tkd13-BONAIRE_CIRCLE nav-icon", title: "Css Minifier" },
        { link: "js-beautify/javascript-file-beautifier", icon: "tkd13-BONAIRE_CIRCLE nav-icon", title: "Js Beautifier" },
        { link: "css-unminifier/css-file-beautifier", icon: "tkd13-BONAIRE_CIRCLE nav-icon", title: "Css Beautifier" },
    ]
},
{
    icon: "nav-icon tkd4-iconmonstr-edit-4", title: "Images Processing", body: [
        { link: "img-converter/image-to-base64", icon: "tkd13-BONAIRE_CIRCLE nav-icon", title: "Image to Base64" },
        { link: "./Base64_To_Image/", icon: "tkd13-BONAIRE_CIRCLE nav-icon", title: "Base64 To Image" },
        { link: "image-compressor/img-compressor", icon: "tkd13-BONAIRE_CIRCLE nav-icon", title: "Image Compressor" },
        { link: "ocr-converter/img-to-text", icon: "tkd13-BONAIRE_CIRCLE nav-icon", title: "Image to Text" },
    ]
},
{
    icon: "nav-icon tkd11-table-fan", title: "Unit Converters-Angle", body: [
        { link: "unit-converter/angle/grad", title: "Grad", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/angle/degree", title: "Degree", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/angle/mil", title: "Mil", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/angle/radian", title: "Radian", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/angle/revolution", title: "Revolution", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/angle/arcminute", title: "Arcminute", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/angle/arcsecond", title: "Arcsecond", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
    ]
},
{
    icon: "nav-icon tkd11-table-fan", title: "Unit Converters-Temperature", body: [
        { link: "unit-converter/temperature/kelvin", title: "Kelvin", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/temperature/celsius", title: "Celsius", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/temperature/fahrenheit", title: "Fahrenheit", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/temperature/rankine", title: "Rankine", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
    ]
},
{
    icon: "nav-icon tkd11-table-fan", title: "Unit Converters-Acceleration", body: [
        { link: "unit-converter/acceleration/meter-second", title: "Meter/Second", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/acceleration/kilometer-second", title: "Kilometer/Second", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/acceleration/micrometer-second", title: "Micrometer/Second", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/acceleration/nanometer-second", title: "Nanometer/Second", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/acceleration/galileo", title: "Galileo", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/acceleration/mile-second", title: "Mile/Second", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/acceleration/mile-nautical-second", title: "Mile(nautical)/Second", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/acceleration/yard-second", title: "Yard/Second", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/acceleration/foot-second", title: "Foot/Second", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/acceleration/inch-second", title: "Inch/Second", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/acceleration/gravity", title: "Gravity", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/acceleration/knots-second", title: "Knots/Second", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
    ]
},
{
    icon: "nav-icon tkd11-table-fan", title: "Unit Converters-Area", body: [
        { link: "unit-converter/area/qing", title: "Qing", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/area/mu", title: "Mu", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/area/fen", title: "Fen", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/area/li", title: "Li", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/area/astron.-unit", title: "Astron.-Unit", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/area/light-year", title: "Light-Year", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/area/nanometer", title: "Nanometer", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/area/micrometer", title: "Micrometer", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/area/millimeter", title: "Millimeter", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/area/centimeter", title: "Centimeter", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/area/decimeter", title: "Decimeter", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/area/meter", title: "Meter", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/area/dekameter", title: "Dekameter", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/area/kilometer", title: "Kilometer", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/area/hectometer", title: "Hectometer", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/area/are", title: "Are", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/area/inch", title: "Inch", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/area/feet", title: "Feet", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/area/yard", title: "Yard", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/area/mile", title: "Mile", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/area/angstrom", title: "Angstrom", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/area/millimicron", title: "Millimicron", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/area/micron", title: "Micron", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/area/acre", title: "Acre", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/area/barn", title: "Barn", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
    ]
},
{
    icon: "nav-icon tkd11-table-fan", title: "Unit Converters-Data", body: [
        { link: "unit-converter/data/zettabit", title: "Zettabit", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/data/exabit", title: "Exabit", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/data/exabyte", title: "Exabyte", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/data/petabyte", title: "Petabyte", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/data/terabyte", title: "Terabyte", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/data/yottabyte", title: "Yottabyte", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/data/gigabyte", title: "Gigabyte", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/data/zettabyte", title: "Zettabyte", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/data/megabyte", title: "Megabyte", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/data/kilobyte", title: "Kilobyte", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/data/byte", title: "Byte", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/data/terabit", title: "Terabit", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/data/terabit", title: "Terabit", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/data/bit", title: "Bit", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/data/kilobit", title: "Kilobit", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/data/megabit", title: "Megabit", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/data/gigabit", title: "Gigabit", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
    ]
},
{
    icon: "nav-icon tkd11-table-fan", title: "Unit Converters-Data Transfer", body: [
        { link: "unit-converter/Data-transfer/bit-Second", title: "Bit/Second", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/Data-transfer/bit-Minute", title: "Bit/Minute", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/Data-transfer/bit-Hour", title: "Bit/Hour", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/Data-transfer/byte-Second", title: "Byte/Second", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/Data-transfer/byte-Minute", title: "Byte/Minute", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/Data-transfer/byte-Hour", title: "Byte/Hour", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/Data-transfer/kilobit-Second", title: "Kilobit/Second", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/Data-transfer/kilobit-Minute", title: "Kilobit/Minute", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/Data-transfer/kilobit-Hour", title: "Kilobit/Hour", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/Data-transfer/kilobyte-Second", title: "Kilobyte/Second", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/Data-transfer/kilobyte-Minute", title: "Kilobyte/Minute", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/Data-transfer/kilobyte-Hour", title: "Kilobyte/Hour", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/Data-transfer/megabit-Second", title: "Megabit/Second", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/Data-transfer/ethernet-fast", title: "Ethernet(fast)", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/Data-transfer/ethernet-gigabit", title: "Ethernet(Gigabit)", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/Data-transfer/ethernet", title: "Ethernet", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/Data-transfer/terabyte-Hour", title: "Terabyte/Hour", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/Data-transfer/terabyte-Minute", title: "Terabyte/Minute", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/Data-transfer/terabyte-Second", title: "Terabyte/Second", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/Data-transfer/terabit-Hour", title: "Terabit/Hour", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/Data-transfer/terabit-Minute", title: "Terabit/Minute", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/Data-transfer/terabit-Second", title: "Terabit/Second", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/Data-transfer/gigabyte-Hour", title: "Gigabyte/Hour", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/Data-transfer/gigabyte-Minute", title: "Gigabyte/Minute", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/Data-transfer/gigabyte-Second", title: "Gigabyte/Second", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/Data-transfer/megabyte-Hour", title: "Megabyte/Hour", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/Data-transfer/megabyte-Minute", title: "Megabyte/Minute", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/Data-transfer/megabyte-Second", title: "Megabyte/Second", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/Data-transfer/megabit-Hour", title: "Megabit/Hour", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/Data-transfer/megabit-Minute", title: "Megabit/Minute", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/Data-transfer/firewire-ieee-1394)", title: "Firewire(IEEE-1394)", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/Data-transfer/uSB", title: "USB", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/Data-transfer/modem-56k", title: "Modem(56k)", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/Data-transfer/modem-33.6k", title: "Modem(33.6k)", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/Data-transfer/modem-28.8k", title: "Modem(28.8k)", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/Data-transfer/modem-14.4k", title: "Modem(14.4k)", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/Data-transfer/modem-9600", title: "Modem(9600)", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/Data-transfer/modem-2400", title: "Modem(2400)", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/Data-transfer/modem-1200", title: "Modem(1200)", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/Data-transfer/modem-300", title: "Modem(300)", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/Data-transfer/terabyte-hour", title: "Modem(110)", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/Data-transfer/kilobit-hour", title: "ISDN(dual)", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/Data-transfer/iSDN-single", title: "ISDN(single)", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
    ]
},
{
    icon: "nav-icon tkd11-table-fan", title: "Unit Converters-Time", body: [
        { link: "unit-converter/time/millisecond", title: "Millisecond", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/time/microsecond", title: "Microsecond", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/time/nanosecond", title: "Nanosecond", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/time/second", title: "Second", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/time/minute", title: "Minute", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/time/hour", title: "Hour", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/time/day", title: "Day", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/time/week", title: "Week", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/time/month-31", title: "Month(31)", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/time/month-30", title: "Month(30)", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/time/month-29", title: "Month(29)", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/time/month-28", title: "Month(28)", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/time/year", title: "Year", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
    ]
},
{
    icon: "nav-icon tkd11-table-fan", title: "Unit Converters-Pressure", body: [
        { link: "unit-converter/pressure/pascal", title: "Pascal", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/pressure/kilopascal", title: "Kilopascal", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/pressure/hectopascal", title: "Hectopascal", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/pressure/millipascal", title: "Millipascal", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/pressure/newton-meter", title: "Newton/Meter", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/pressure/bar", title: "Bar", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/pressure/millibar", title: "Millibar", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/pressure/kip-inch", title: "Kip/Inch", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/pressure/pounds-inch", title: "Pounds/Inch", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/pressure/torr", title: "Torr", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/pressure/millimeter-mercury", title: "Millimeter Mercury", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/pressure/inches-mercury", title: "Inches Mercury", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
    ]
},
{
    icon: "nav-icon tkd11-table-fan", title: "Unit Converters-Mass Weight", body: [
        { link: "unit-converter/Mass-weight/microgramm", title: "Microgramm", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/Mass-weight/milligramm", title: "Milligramm", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/Mass-weight/gramm", title: "Gramm", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/Mass-weight/kilogramm", title: "Kilogramm", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/Mass-weight/ton-us", title: "Ton(US)", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/Mass-weight/ton-uk", title: "Ton(UK)", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/Mass-weight/ounce", title: "Ounce", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/Mass-weight/pound", title: "Pound", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/Mass-weight/pound-metric", title: "Pound(metric)", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/Mass-weight/stone", title: "Stone", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/Mass-weight/carat", title: "Carat", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/Mass-weight/grain", title: "Grain", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
    ]
},
{
    icon: "nav-icon tkd11-table-fan", title: "Unit Converters-Luminance", body: [
        { link: "unit-converter/luminance/candela-meter", title: "Candela/Meter", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/luminance/kilocandela-meter", title: "Kilocandela Meter", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/luminance/candela-centimeter", title: "Candela/Centimeter", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/luminance/candela-foot", title: "Candela/Foot", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/luminance/foot-lambert", title: "Foot Lambert", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/luminance/lambert", title: "Lambert", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/luminance/nit", title: "Nit", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/luminance/stilb", title: "Stilb", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
    ]
},
{
    icon: "nav-icon tkd11-table-fan", title: "Unit Converters-Fuel Consumption", body: [
        { link: "unit-converter/Fuel-consumption/miles-liter", title: "Miles/Liter", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/Fuel-consumption/kilometer-liter", title: "Kilometer/Liter", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/Fuel-consumption/miles-gallon-us", title: "Miles/Gallon(US)", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/Fuel-consumption/miles-gallon-uk", title: "Miles/Gallon(UK)", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/Fuel-consumption/kilometer-gallon-us", title: "Kilometer/Gallon(US)", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/Fuel-consumption/kilometer-gallon-uk", title: "Kilometer/Gallon(UK)", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
    ]
},
{
    icon: "nav-icon tkd11-table-fan", title: "Unit Converters- Electrical Charge", body: [
        { link: "unit-converter/Electrical-charge/coulomb", title: "Coulomb", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/Electrical-charge/kilocoulomb", title: "Kilocoulomb", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/Electrical-charge/megacoulomb", title: "Megacoulomb", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/Electrical-charge/abcoulomb", title: "Abcoulomb", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/Electrical-charge/nanocoulomb", title: "Nanocoulomb", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/Electrical-charge/microcoulomb", title: "Microcoulomb", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/Electrical-charge/millicoulomb", title: "Millicoulomb", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/Electrical-charge/milliampere-hour", title: "Milliampere Hour", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/Electrical-charge/ampere-hour", title: "Ampere Hour", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/Electrical-charge/faraday", title: "Faraday", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/Electrical-charge/statcoulomb", title: "Statcoulomb", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/Electrical-charge/elementary-charge", title: "Elementary Charge", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
    ]
},
{
    icon: "nav-icon tkd11-table-fan", title: "Unit Converters-Flow Rate", body: [
        { link: "unit-converter/Flow-rate/meter-second", title: "Meter/Second", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/Flow-rate/meter-minute", title: "Meter/Minute", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/Flow-rate/meter-hour", title: "Meter/Hour", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/Flow-rate/kilometer-second", title: "Kilometer/Second", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/Flow-rate/kilometer-minute", title: "Kilometer/Minute", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/Flow-rate/kilometer-hour", title: "Kilometer/Hour", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/Flow-rate/decimeter-second", title: "Decimeter/Second", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/Flow-rate/decimeter-minute", title: "Decimeter/Minute", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/Flow-rate/decimeter-hour", title: "Decimeter/Hour", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/Flow-rate/centimeter-second", title: "Centimeter/Second", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/Flow-rate/centimeter-minute", title: "Centimeter/Minute", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/Flow-rate/centimeter-hour", title: "Centimeter/Hour", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/Flow-rate/millimeter-second", title: "Millimeter/Second", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/Flow-rate/millimeter-minute", title: "Millimeter/Minute", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/Flow-rate/millimeter-hour", title: "Millimeter/Hour", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/Flow-rate/foot-second", title: "Foot/Second", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/Flow-rate/foot-minute", title: "Foot/Minute", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/Flow-rate/foot-hour", title: "Liter/Second", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/Flow-rate/liter-second", title: "Liter/Second", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/Flow-rate/liter-minute", title: "Liter/Minute", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/Flow-rate/liter-hour", title: "Liter/Hour", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/Flow-rate/gallon-us-minute", title: "Gallon(US)/Minute", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/Flow-rate/gallon-us-minute", title: "Gallon(US)/Minute", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/Flow-rate/gallon-us-hour", title: "Gallon(US)/Hour", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/Flow-rate/gallon-imperial-second", title: "Gallon(Imperial)/Second", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/Flow-rate/gallon-imperial-minute", title: "Gallon(Imperial)/Minute", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/Flow-rate/gallon-imperial-hour", title: "Gallon(Imperial)/Hour", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/Flow-rate/morgen-foot-second", title: "Morgen-Foot/Second", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/Flow-rate/morgen-foot-minute", title: "Morgen-Foot/Minute", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/Flow-rate/morgen-foot-hour", title: "Morgen-Foot/Hour", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/Flow-rate/scheffel-us-second", title: "Scheffel(US)/Second", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/Flow-rate/scheffel-us-minute", title: "Scheffel(US)/Minute", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/Flow-rate/scheffel-us-hour", title: "Scheffel(US)/Hour", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/Flow-rate/scheffel-uk-second", title: "Scheffel(UK)/Second", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/Flow-rate/scheffel-uk-minute", title: "Scheffel(UK)/Minute", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/Flow-rate/scheffel-us-hour", title: "Scheffel(UK)/Hour", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/Flow-rate/barrel-oil-second", title: "Barrel(Oil)/Second", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/Flow-rate/barrel-oil-minute", title: "Barrel(Oil)/Minute", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/Flow-rate/barrel-Oil-Hour", title: "Barrel(Oil)/Hour", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
    ]
},
{
    icon: "nav-icon tkd11-table-fan", title: "Unit Converters-Energy & Work", body: [
        { link: "unit-converter/Energy-Work/joule", title: "Joule", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/Energy-Work/kilojoule", title: "Kilojoule", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/Energy-Work/megajoule", title: "Megajoule", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/Energy-Work/millijoule", title: "Millijoule", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/Energy-Work/kilowatt-hour", title: "Kilowatt Hour", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/Energy-Work/kilowatt-second", title: "Kilowatt Second", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/Energy-Work/watt-hour", title: "Watt Hour", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/Energy-Work/watt-second", title: "Watt Second", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/Energy-Work/newton-meter", title: "Newton Meter", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/Energy-Work/horsepower-hour", title: "Horsepower Hour", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/Energy-Work/kilocalorie-int", title: "Kilocalorie(int.)", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/Energy-Work/kilocalorie-therm", title: "CKilocalorie(therm.)", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/Energy-Work/calorie-int", title: "Calorie(int.)", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/Energy-Work/calorie-therm", title: "Calorie(therm.)", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/Energy-Work/kilocalorie-nutrition", title: "Kilocalorie(Nutrition)", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/Energy-Work/hartree-energy", title: "Hartree Energy", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/Energy-Work/rydberg", title: "Rydberg", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/Energy-Work/british-thermal-unit", title: "British Thermal Unit", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/Energy-Work/erg", title: "Erg", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/Energy-Work/electron-volt", title: "Electron Volt", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/Energy-Work/foot-pound", title: "Foot Pound", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
    ]
},
{
    icon: "nav-icon tkd11-table-fan", title: "Unit Converters-Power", body: [
        { link: "unit-converter/power/watt", title: "Watt", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/power/milliwatt", title: "Milliwatt", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/power/kilowatt", title: "Kilowatt", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/power/joule-second", title: "Joule/Second", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/power/kilojoule-second", title: "Kilojoule/Second", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/power/horsepower", title: "Horsepower", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/power/horsepower-metric", title: "Horsepower(metric)", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/power/horsepower-boiler", title: "Horsepower(Boiler)", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/power/decibel-milliwatt", title: "Decibel Milliwatt", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/power/calories-second", title: "Calories/Second", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/power/calories-hour", title: "Calories/Hour", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/power/kilocalories-second", title: "Kilocalories/Second", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/power/kilocalories-hour", title: "Kilocalories/Hour", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/power/foot-pound-second", title: "Foot-Pound/Second", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/power/foot-pound-hour", title: "Foot-Pound/Hour", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/power/newton-meter-hour", title: "Newton Meter/Hour", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/power/btu-second", title: "BTU/Second", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/power/btu-minute", title: "BTU/Minute", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/power/btu-hour", title: "BTU/Hour", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
    ]
},
{
    icon: "nav-icon tkd11-table-fan", title: "Unit Converters-Speed", body: [
        { link: "unit-converter/speed/meter-second", title: "Meter/Second", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/speed/meter-hour", title: "Meter/Hour", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/speed/kilometer-hour", title: "Kilometer/Hourr", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/speed/foot-hour", title: "Foot/Hour", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/speed/yard-hour", title: "Yard/Hour", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/speed/miles-hour", title: "Miles/Hour", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/speed/knots", title: "knots", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/speed/mach-si-standard", title: "Mach(SI Standard)", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/speed/speed-of-light", title: "Speed of Light", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
    ]
},
{
    icon: "nav-icon tkd11-table-fan", title: "Unit Converters-Torque", body: [
        { link: "unit-converter/torque/newton-meter", title: "Newton Meter", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/torque/newton-centimeter", title: "Newton Centimeter", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/torque/newton-millimeter", title: "Newton Millimeter", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/torque/kilonewton-meter", title: "Kilonewton Meter", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/torque/meganewton-meter", title: "Meganewton Meter", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/torque/micronewton-meter", title: "Millinewton Meter", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/torque/millinewton-meter", title: "Millinewton Meter", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/torque/pound-force-foot", title: "Pound-Force Foot", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/torque/pound-force-inch", title: "Pound-Force Inch", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/torque/ounce-force-foot", title: "Ounce-Force Foot", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/torque/ounce-force-inch", title: "Ounce-Force Inch", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/torque/kilogramm-force-meter", title: "Kilogramm-Force Meter", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/torque/gramm-force-centimeter", title: "Gramm-Force Centimeter", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/torque/dyne-meter", title: "Dyne Meter", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/torque/dyne-centimeter", title: "Dyne Centimeter", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/torque/dyne-millimeter", title: "Dyne Millimeter", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
    ]
},
{
    icon: "nav-icon tkd11-table-fan", title: "Unit Converters-Radioactivity", body: [
        { link: "unit-converter/radioactivity/curie", title: "Curie", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/radioactivity/kilocurie", title: "Kilocurie", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/radioactivity/millicurie", title: "Millicurie", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/radioactivity/microcurie", title: "Microcurie", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/radioactivity/nanocurie", title: "Nanocurie", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/radioactivity/picocurie", title: "Picocurie", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/radioactivity/becquerel", title: "Becquerel", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/radioactivity/terabecquerel", title: "Terabecquerel", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/radioactivity/gigabecquerel", title: "Gigabecquerel", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/radioactivity/megabecquerel", title: "Megabecquerel", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/radioactivity/kilobecquerel", title: "Kilobecquerel", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/radioactivity/milliecquerel", title: "Milliecquerel", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/radioactivity/rutherford", title: "Rutherford", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/radioactivity/1-Second", title: "1/Second", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/radioactivity/disintegrations-second", title: "Disintegrations/Second", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/radioactivity/disintegrations-minute", title: "Disintegrations/Minute", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
    ]
},
{
    icon: "nav-icon tkd11-table-fan", title: "Unit Converters-Density", body: [
        { link: "unit-converter/density/kilogramm-liter", title: "Kilogramm/Liter", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/density/gramm-liter", title: "Gramm/Liter", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/density/milligramm-liter", title: "Milligramm/Liter", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/density/microgramm-liter", title: "Microgramm/Liter", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/density/nanogramm-liter", title: "Nanogramm/Liter", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/density/kilogramm-meter", title: "Kilogramm/Meter", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/density/gramm-meter", title: "Gramm/Meter", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/density/kilogramm-centimeter", title: "Kilogramm/Centimeter", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/density/gramm-centimeter", title: "Gramm/Centimeter", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/density/gramm-millimeter", title: "Gramm/Millimeter", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/density/pound-inch", title: "Pound/Inch", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/density/pound-foot", title: "Pound/Foot", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/density/ounze-inch", title: "Ounze/Inch", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/density/ounze-foot", title: "Ounze/Foot", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
    ]
},
{
    icon: "nav-icon tkd11-table-fan", title: "Unit Converters-Force", body: [
        { link: "unit-converter/force/newton", title: "Newton", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/force/kilonewton", title: "Kilonewton", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/force/millinewton", title: "millinewton", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/force/dyne", title: "Dyne", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/force/joule-meter", title: "Joule/Meter", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/force/pond", title: "Pond", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/force/kilopond", title: "Kilopond", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
    ]
},
{
    icon: "nav-icon tkd11-table-fan", title: "Unit Converters-Volume", body: [
        { link: "unit-converter/volume/barrel-oil", title: "Barrel(Oil)", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/volume/foot", title: "Foot", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/volume/inch", title: "Inch", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/volume/yard", title: "Yard", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/volume/millimeter", title: "Millimeter", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/volume/centimeter", title: "Centimeter", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/volume/meter", title: "Meter", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/volume/fluid-ounze-us", title: "Fluid Ounze(US", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/volume/gallon-us", title: "Gallon(US)", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/volume/liter", title: "Liter", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/volume/milliliter", title: "Milliliter", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/volume/centiliter", title: "Centiliter", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/volume/deciliter", title: "Deciliter", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/volume/hectoliter", title: "Hectoliter)", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/volume/pint-uk", title: "Pint(UK)", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/volume/pint-us", title: "Pint(US)", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/volume/tablespoon-us", title: "Tablespoon(US)", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/volume/tablespoon-us", title: "Tablespoon(UK)", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/volume/teaspoon-us", title: "Teaspoon(US)", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/volume/teaspoon-uk", title: "Teaspoon(UK)", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/volume/cup-us", title: "Cup(US)", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/volume/cup-uk", title: "Cup(UK)", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
    ]
},
{
    icon: "nav-icon tkd11-table-fan", title: "Unit Converters-Distance Length", body: [
        { link: "unit-converter/Distance-length/millimeter", title: "Millimeter", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/Distance-length/centimeter", title: "Centimeter", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/Distance-length/decimeter", title: "Decimeter", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/Distance-length/micrometer", title: "Micrometer", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/Distance-length/meter", title: "Meter", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/Distance-length/nanometer", title: "Nanometer", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/Distance-length/kilometer", title: "Kilometer", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/Distance-length/picometer", title: "Picometer", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/Distance-length/femtometer", title: "Femtometer", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/Distance-length/attommeter", title: "Attommeter", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/Distance-length/zeptometer", title: "Zeptometer", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/Distance-length/yoctometer", title: "Yoctometer", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/Distance-length/inch", title: "Inch", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/Distance-length/feet", title: "Feet", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/Distance-length/yard", title: "Yard", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/Distance-length/mile", title: "Mile", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/Distance-length/mile-nautical", title: "Mile(nautical)", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/Distance-length/light-year", title: "Light-Year", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/Distance-length/light-day", title: "Light-Day", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/Distance-length/light-min", title: "Light-Min", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/Distance-length/light-sec", title: "Light-Sec", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/Distance-length/astron.-unit", title: "Astron. Unit", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/Distance-length/parsec", title: "Parsec", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/Distance-length/chain", title: "Chain", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/Distance-length/furlong", title: "Furlong", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/Distance-length/point", title: "Point", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/Distance-length/cun", title: "Cun", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/Distance-length/chi", title: "Chi", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/Distance-length/li", title: "Li", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
        { link: "unit-converter/Distance-length/gongli", title: "Gongli", icon: "tkd13-BONAIRE_CIRCLE nav-icon" },
    ]
},
{
    icon: "nav-icon tkd11-table-fan", title: "Password", body: [
        { link: "./api/password.html", icon: "tkd11-social-media-marketing", title: "Password" },
    ],
},];
router.post("/add", fetchuser, async (req, res) => {
    try {
        for (let i = 0; i < navbar.length; i++) {
            const element = navbar[i];
            for (let j = 0; j < element.body.length; j++) {
                const element1 = element.body[j];
                var templ = await tools.find({head:element1.title}); 
                if(templ.length == 0){
                    console.log(i);
                    const temp = new tools({
                        user: req.user.id,
                        link: element1.link,
                        head: element1.title,
                        svg: element.svg ? element.svg : NaN,
                        icon: element.icon,
                        img: element.img ? element.svg : NaN,
                        sourcecode: element.githublink ? element.githublink : NaN,
                        title: element1.title,
                        tooltypehead: element.title,
                        tooltypeicon: element.icon,
                        tooltypeimg: element.tooltypeimg ? element.tooltypeimg : NaN,
                    });
                    await temp.save();
                }
            }
        }
        res.json({ success: true });
    } catch (error) { console.error(error.message); res.json({ success: false, errors: error.message }); }
});
// router.post("/update", fetchuser, async (req, res) => {
//     try { 
//         const temp = await music.find(); 
//         for (var i = 0; i < temp.length; i++) {
//             music.findById(temp[i].id, function(err, p) {
//                 if (!p)
//                   return next(new Error('Could not load Document'));
//                 else {
//                     p.image=p.image.replace("http://koushikchandrasaha.thekoushikdurgas.in/music/","http://koushikchandrasaha.thekoushikdurgas.in/music/")
//                     p.audio_file=p.audio_file.replace("http://koushikchandrasaha.thekoushikdurgas.in/music/","http://koushikchandrasaha.thekoushikdurgas.in/music/")
//                     p.save(function(err) {
//                         if (err)
//                         console.log('error')
//                         else
//                         console.log('success')
//                     });
//                 }
//             });
//         }
//     }
//     catch (error) { console.error(error.message); res.json({ success: false,errors:error.message }); }
//     console.log('update');
// });
// router.post("/social",fetchuser,[
//     body("title", "Enter a valid title").isLength({ min: 3 }),
//     body("title1", "Enter a valid title1").isLength({ min: 3 }),
//     body("icon", "Enter a valid icon").isLength({ min: 3 }),
//     body("link", "Enter a valid link").isLength({ min: 3 }),
//   ],async (req, res) => {
//     try {
//       const { title, title1, icon,link } = req.body;
//       const errors = validationResult(req);
//       if (!errors.isEmpty()) {return res.json({ errors: errors.array() });}
//       const temp = new social({user: req.user.id,title,title1,icon,link,});
//       const savedsocial = await temp.save();
//       res.json(savedsocial);
//     } catch (error) {console.error(error.message);res.send("Internal Server Error");}
//   }
// );

// router.put("/social/:id",fetchuser,async (req, res) => {
//   const { title, title1, icon,link } = req.body;
//   try {
//     const newtemp = {};
//     if (title) { newtemp.title = title };
//     if (title1) { newtemp.title1 = title1 };
//     if (icon) { newtemp.icon = icon };
//     if (link) { newtemp.link = link };
//     var temp = await social.findById(req.params.id);
//     if (!temp) { return res.status(404).send("Not Found") }
//     if (temp.user.toString() !== req.user.id) {return res.status(401).send("Not Allowed");}
//     temp = await social.findByIdAndUpdate(req.params.id, { $set: newtemp }, { new: true })
//     res.json({temp});
//   } catch (error) {console.error(error.message);res.send("Internal Server Error");}
//   }
// );

// router.delete('/social/:id', fetchuser, async (req, res) => {
//   try {
//       var temp = await social.findById(req.params.id);
//       if (!temp) { return res.status(404).send("Not Found") }
//       if (temp.user.toString() !== req.user.id) {return res.status(401).send("Not Allowed");}
//       temp = await social.findByIdAndDelete(req.params.id)
//       res.json({ "Success": "deleted Successfully", note: note });
//     } catch (error) {console.error(error.message);res.send("Internal Server Error");}
// })

function strongpassword(len) {
    var length = (len) ? (len) : (10);
    var string = "abcdefghijklmnopqrstuvwxyz";
    var numeric = '0123456789';
    var punctuation = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';
    var password = "";
    var character = "";
    while (password.length < length) {
        entity1 = Math.ceil(string.length * Math.random() * Math.random());
        entity2 = Math.ceil(numeric.length * Math.random() * Math.random());
        entity3 = Math.ceil(punctuation.length * Math.random() * Math.random());
        hold = string.charAt(entity1);
        hold = (password.length % 2 == 0) ? (hold.toUpperCase()) : (hold);
        character += hold;
        character += numeric.charAt(entity2);
        character += punctuation.charAt(entity3);
        password = character;
    }
    password = password.split('').sort(function () { return 0.5 - Math.random() }).join('');
    return password.substring(0, len);
}
function formatDate(date, format, utc) {
    var MMMM = ["\x00", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var MMM = ["\x01", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var dddd = ["\x02", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var ddd = ["\x03", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    function ii(i, len) {
        var s = i + "";
        len = len || 2;
        while (s.length < len) s = "0" + s;
        return s;
    }
    var y = utc ? date.getUTCFullYear() : date.getFullYear();
    format = format.replace(/(^|[^\\])yyyy+/g, "$1" + y);
    format = format.replace(/(^|[^\\])yy/g, "$1" + y.toString().substr(2, 2));
    format = format.replace(/(^|[^\\])y/g, "$1" + y);
    var M = (utc ? date.getUTCMonth() : date.getMonth()) + 1;
    format = format.replace(/(^|[^\\])MMMM+/g, "$1" + MMMM[0]);
    format = format.replace(/(^|[^\\])MMM/g, "$1" + MMM[0]);
    format = format.replace(/(^|[^\\])MM/g, "$1" + ii(M));
    format = format.replace(/(^|[^\\])M/g, "$1" + M);
    var d = utc ? date.getUTCDate() : date.getDate();
    format = format.replace(/(^|[^\\])dddd+/g, "$1" + dddd[0]);
    format = format.replace(/(^|[^\\])ddd/g, "$1" + ddd[0]);
    format = format.replace(/(^|[^\\])dd/g, "$1" + ii(d));
    format = format.replace(/(^|[^\\])d/g, "$1" + d);
    var H = utc ? date.getUTCHours() : date.getHours();
    format = format.replace(/(^|[^\\])HH+/g, "$1" + ii(H));
    format = format.replace(/(^|[^\\])H/g, "$1" + H);
    var h = H > 12 ? H - 12 : H == 0 ? 12 : H;
    format = format.replace(/(^|[^\\])hh+/g, "$1" + ii(h));
    format = format.replace(/(^|[^\\])h/g, "$1" + h);
    var m = utc ? date.getUTCMinutes() : date.getMinutes();
    format = format.replace(/(^|[^\\])mm+/g, "$1" + ii(m));
    format = format.replace(/(^|[^\\])m/g, "$1" + m);
    var s = utc ? date.getUTCSeconds() : date.getSeconds();
    format = format.replace(/(^|[^\\])ss+/g, "$1" + ii(s));
    format = format.replace(/(^|[^\\])s/g, "$1" + s);
    var f = utc ? date.getUTCMilliseconds() : date.getMilliseconds();
    format = format.replace(/(^|[^\\])fff+/g, "$1" + ii(f, 3));
    f = Math.round(f / 10);
    format = format.replace(/(^|[^\\])ff/g, "$1" + ii(f));
    f = Math.round(f / 10);
    format = format.replace(/(^|[^\\])f/g, "$1" + f);
    var T = H < 12 ? "AM" : "PM";
    format = format.replace(/(^|[^\\])TT+/g, "$1" + T);
    format = format.replace(/(^|[^\\])T/g, "$1" + T.charAt(0));
    var t = T.toLowerCase();
    format = format.replace(/(^|[^\\])tt+/g, "$1" + t);
    format = format.replace(/(^|[^\\])t/g, "$1" + t.charAt(0));
    var tz = -date.getTimezoneOffset();
    var K = utc || !tz ? "Z" : tz > 0 ? "+" : "-";
    if (!utc) {
        tz = Math.abs(tz);
        var tzHrs = Math.floor(tz / 60);
        var tzMin = tz % 60;
        K += ii(tzHrs) + ":" + ii(tzMin);
    }
    format = format.replace(/(^|[^\\])K/g, "$1" + K);
    var day = (utc ? date.getUTCDay() : date.getDay()) + 1;
    format = format.replace(new RegExp(dddd[0], "g"), dddd[day]);
    format = format.replace(new RegExp(ddd[0], "g"), ddd[day]);
    format = format.replace(new RegExp(MMMM[0], "g"), MMMM[M]);
    format = format.replace(new RegExp(MMM[0], "g"), MMM[M]);
    format = format.replace(/\\(.)/g, "$1");
    return format;
}
module.exports = router