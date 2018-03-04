#!/usr/bin/env node

require("shelljs/global");
const program = require("commander");
const co = require("co");
const prompt = require("co-prompt");
const axios = require("axios");
const omishima = require("./lib/omishima");

program.version("0.0.1").description("Yadokari management system");

program
  .command("list")
  .alias("l")
  .description("yado list")
  .action(() => {
    co(function*() {
      console.log("welcome yadokari 🎉");
      omishima.get_yados_list();
    });
  });

program
  .arguments("<token>")
  .command("me")
  .alias("m")
  .description("show my reserve info")
  .action(token => {
    co(function*() {
      omishima.get_me(token);
    });
  });

program
  .command("cal")
  .alias("c")
  .description("yado schedules list")
  .action(() => {
    co(function*() {
      omishima.get_schedules();
    });
  });

program
  .arguments("<yadoId>")
  .command("reserve")
  .alias("r")
  .description("make a new reserve")
  .action(yadoId => {
    co(function*() {
      console.log("welcome yadokari reservations 🎉");
      const name = yield prompt("name*: ");
      const email = yield prompt("email*: ");
      const checkInOn = yield prompt("check in date*: ");
      const checkOutOn = yield prompt("check out date*: ");
      const checkInTime = yield prompt("check in time: ");
      const menMumber = yield prompt("men number: ");
      const womenNumber = yield prompt("women number: ");
      const purposeOfUse = yield prompt("purpose_of_use: ");
      const paymentMethod = yield prompt("payment_method: ");
      const tel = yield prompt("tel: ");
      const coupon = yield prompt("coupon: ");
      const note = yield prompt("note: ");

      const params = {
        reservation: {
          name: name,
          email: email,
          tel: tel,
          check_in_on: checkInOn,
          check_out_on: checkOutOn,
          check_in_time: checkInTime,
          men_number: menMumber,
          women_number: womenNumber,
          purpose_of_use: purposeOfUse,
          payment_method: paymentMethod,
          coupon: coupon,
          note: note
        },
        yado_id: yadoId
      };
      // eg.
      // const params = {
      //   reservation: {
      //     name: name,
      //     email: email,
      //     tel: "09012345678",
      //     check_in_on: "2018/01/01",
      //     check_out_on: "2018/01/02",
      //     check_in_time: "15:00",
      //     men_number: 3,
      //     women_number: 3,
      //     purpose_of_use: "開発合宿",
      //     payment_method: "現金支払い",
      //     coupon: "無し",
      //     note: "無し"
      //   },
      //   yado_id: yadoId
      // };
      omishima.reserve_yado(params);
    });
  });
program.parse(process.argv);
