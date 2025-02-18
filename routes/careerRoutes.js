const express = require('express');
const router = express.Router();
const careerController = require('../controllers/careerController');
const multer = require('multer');
const upload = multer({ storage: multer.memoryStorage() });

router.post('/submit', upload.single('resume'), careerController.submitApplication);
router.get('/applications', careerController.getApplications);
// router.get('/applications/:id', getApplication);
router.get('/applications/:id/resume', careerController.downloadResume);
// router.get('/applications', applicationController.getApplications);

module.exports = router;