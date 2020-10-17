const Driver = require("../models/driver");

exports.createDriver = (req,res) => {

    console.log("req.body", req.body);

    const driver = new Driver(req.body);

    driver.save((error, driver) => {

        if (error){
            res.json(error);
        }

        res.json(driver);

    })
}

exports.allDrivers = (req,res) => {

    Driver.find().exec((error, data) => {
        if(error){
            res.json(error)

        }
        else

        res.json(data);
    });
}


exports.updateDriver = (req,res) => {

    Driver.findByIdAndUpdate(req.params.id, {
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



exports.deleteDriver = (req,res) => {

    Driver.findByIdAndRemove(req.params.id, (error, data) => {
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




