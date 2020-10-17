const Route = require("../models/route");

exports.createRoute = (req,res) => {

    console.log("req.body", req.body);

    const route = new Route(req.body);

    route.save((error, room) => {

        if (error){
            res.json(error);
        }

        res.json(route);

    })
}

exports.allRoutes = (req,res) => {

    Route.find().exec((error, data) => {
        if(error){
            res.json(error)

        }
        else

        res.json(data);
    });
}



exports.haltsInRoute = (req, res) => {
    const rom = req.params.slug;
    const p = req.query.p ? req.query.p : 1;

    Route.find({ slug: rom }, (error, rooms) => {
        if (error) console.log(error);
        res.json(rooms);
    })

};


exports.updateRoute = (req,res) => {

    Route.findByIdAndUpdate(req.params.id, {
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



exports.deleteRoute = (req,res) => {

    Route.findByIdAndRemove(req.params.id, (error, data) => {
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




