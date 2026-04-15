var AWS = require('aws-sdk');

AWS.config.loadFromPath('./config.json');

var task =  function(request, callback){
    let autoscaling = new AWS.AutoScaling();
    let desired = request.query.desired;

    if(!desired){
        callback("Brak parametru desired");
        return;
    }

	var params = {
        AutoScalingGroupName: "ASGnr1",
        DesiredCapacity: parseInt(desired),
        HonorCooldown: true
    };
    autoscaling.setDesiredCapacity(params, function(err, data) {
        if(err){
            callback(err);
        } else {
            callback(null, {
                message: "Desired capacity changed",
                desired: desired
            });
        }
    });
}

exports.lab = task