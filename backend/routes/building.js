const express = require("express");
const router = express.Router();

const { buildingDetails, createBuilding, buildingList, updateBuilding, delBuilding } =  require("../controllers/building");

router.get("/", buildingDetails);

router.post("/createBuilding", createBuilding);

router.get("/buildings", buildingList);

router.post("/building/:id", updateBuilding);

router.delete("/deleteBuilding/:id", delBuilding);


module.exports = router;
