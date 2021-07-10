const exp = require("express");
const pollApi = exp.Router();
const classroom = require("../Models/classroom.model");
const { sendPollSms } = require("../controller/smsController");

pollApi.post("/saveLink/:classroomId", async (req, res) => {
  await classroom.findByIdAndUpdate(
    req.params.classroomId,
    {
      $set: { pollLink: req.body.poll_link },
    },
    (err) => {
      if (err) {
        console.log(err.message);
        res.send({ success: false, message: "some error occured" });
      } else {
        res.send({ success: true, message: "Saved the Link!" });
      }
    }
  );
});

pollApi.get("/sendpoll/:classroomId", async (req, res) => {
  let cls = await classroom.findById(req.params.classroomId);
  let students = JSON.parse(JSON.stringify(cls.students));
  sendPollSms(students, cls.pollLink);
  res.send({ success: true, message: "sent the pollll" });
});

module.exports = pollApi;
