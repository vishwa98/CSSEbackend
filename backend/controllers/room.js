const Room = require("../models/room");

exports.createRoom = (req,res) => {

    console.log("req.body", req.body);

    const room = new Room(req.body);

    room.save((error, room) => {

        if (error){
            res.json(error);
        }

        res.json(room);

    })
}

exports.allRooms = (req,res) => {

    Room.find().exec((error, data) => {
        if(error){
            res.json(error)

        }
        else

        res.json(data);
    });
}


// GET /products/category
exports.roomByBuilding = (req, res) => {
    const cat = req.params.building;
    const p = req.query.p ? req.query.p : 1;

    Room.find({ building: cat }, (error, rooms) => {
        if (error) console.log(error);
        res.json(rooms);
    })

};

exports.roomByUt = (req, res) => {
    const rom = req.params.slug;
    const p = req.query.p ? req.query.p : 1;

    Room.find({ slug: rom }, (error, rooms) => {
        if (error) console.log(error);
        res.json(rooms);
    })

};


exports.updateRoom = (req,res) => {

    Room.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if(error){
            res.json(error);
        }
        else{
            res.json(data);
            console.log('Post updated');
        }
    })
}



exports.delRoom = (req,res) => {

    Room.findByIdAndRemove(req.params.id, (error, data) => {
        if(error){
            res.json(error);
        }
        else{
            res.status(200).json({
                msg : data
            })
        }
    })
}




