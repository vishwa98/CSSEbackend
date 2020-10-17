const express = require("express");
const router = express.Router();

const {createRoom, allRooms, roomByBuilding, delRoom, updateRoom, roomByUt } =  require("../controllers/room");


router.post("/addRoom", createRoom);

router.get("/viewrooms", allRooms);

router.get("/room/:building", roomByBuilding );

router.get("/ut/:slug", roomByUt);


router.post("/updroom/:id", updateRoom);

router.delete("/deleteRoom/:id", delRoom);


module.exports = router;
