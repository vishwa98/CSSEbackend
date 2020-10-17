const Inspector = require("../models/inspector");

exports.createInspector = (req,res) => {

    console.log("req.body", req.body);

    const inspector = new Inspector(req.body);

    inspector.save((error, inspector) => {

        if (error){
            res.json(error);
        }

        res.json(inspector);

    })
}

exports.allInspectors = (req,res) => {

    Inspector.find().exec((error, data) => {
        if(error){
            res.json(error)

        }
        else

        res.json(data);
    });
}


exports.updateInspector = (req,res) => {

    Inspector.findByIdAndUpdate(req.params.id, {
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



exports.deleteInspector = (req,res) => {

    Inspector.findByIdAndRemove(req.params.id, (error, data) => {
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




