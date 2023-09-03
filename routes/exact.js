const express = require('express');
const router = express.Router();
// const task = require('../models/task');
// const fetchuser = require('../middleware/fetchuser');
const puppeteer = require("puppeteer");
const cheerio = require("cheerio");

router.get('/scandalplanet/:url', async (req, res) => {
    try {
        puppeteer.launch({headless: 'new'}).then(async (browser) => {
            var json = {};
            var encodedurl = req.params.url;
            var decodedurl = decodeURIComponent(encodedurl);
            json["url"] = decodedurl;
            const page = await browser.newPage();
            await page.goto(decodedurl);
            const $ = cheerio.load(await page.content());
            const imgList = $("img");
            // var allimage = await page.evaluate(() => {
            //   const imgList = document.body.querySelectorAll("img");
            let allimage = [];
            imgList.each(function (idx, ele) {
                var targeted = $(ele);
                var img = targeted.attr("src");
                allimage.push(img);
            });
            //   return fruits;
            // });
            json["image"] = allimage;
            // var allvideo = await page.evaluate(() => {
            //   const imgList = document.body.querySelectorAll("video source");
            //   let fruits = [];
            //   imgList.forEach((value) => {
            //     fruits.push(value.getAttribute("src"));
            //   });
            //   return fruits;
            // });
            // json["video"] = allvideo;
            res.json(json);
            await browser.close();
        });
    } catch (error) {
        console.error(error.message);
        res.json({ success: false, errors: error.message });
    }
});

module.exports = router