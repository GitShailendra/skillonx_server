const ScheduleConsultation = require('../models/ScheduleConsultation')

exports.createSchedule = async (req,res)=>{
    const {name, scheduleTitle, date, time} = req.body;
    try {
        const newScheduleConsultation = new ScheduleConsultation({
          name,
          scheduleTitle,
          date,
          time,
        });
        await newScheduleConsultation.save();
        res.status(201).json(newScheduleConsultation);
      } catch (error) {
        res.status(500).json({ message: "Error creating enrollment" });
    }
}