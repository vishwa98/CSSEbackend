const Building = require("../models/building");



exports.buildingDetails = (req,res) => {

    res.json({ message : "Hello brooo"});
};

exports.createBuilding = (req,res) => {

    console.log("req.body", req.body);

    const building = new Building(req.body);

    building.save((error, building) => {

        if (error){
            res.json(error);
        }

        res.json(building);

    })
}

exports.buildingList = (req,res) => {

    Building.find().exec((error, data) => {
        if(error){
            res.json(error)

        }
        else

        res.json(data);
    });
}

exports.updateBuilding = (req,res) => {

    Building.findByIdAndUpdate(req.params.id, {
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

exports.delBuilding = (req,res) => {

    Building.findByIdAndRemove(req.params.id, (error, data) => {
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