const express = require('express');
const router = express.Router();
const payment = require('../models/payment');
const fetchuser = require('../middleware/fetchuser');

router.get("/createpayment", fetchuser, async (req, res) => {
    try {
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
module.exports = router