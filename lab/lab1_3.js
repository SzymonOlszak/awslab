var AWS = require('aws-sdk');

AWS.config.loadFromPath('./config.json');

let task = function(request, callback){

    let ec2 = new AWS.EC2();
    let params = {
          ImageId: "ami-080254318c2d8932f",
          InstanceType: "t3.micro",
          MaxCount: 1,
          MinCount: 1,
    };
     ec2.runInstances(params, function(err, data) {
          if (err) {
              callback(err);
          } else {
              callback(null, data);
          }
     })

    // let instanceId = data.Instances[0].InstanceId;
    //
    // setTimeout(function(){
    //     ec2.describeInstances({
    //         InstanceIds: [instanceId]
    //     }, function(err2, data2){
    //
    //         let instance = data2.Reservations[0].Instances[0];
    //
    //         callback(null, {
    //             id: instance.InstanceId,
    //             ip: instance.PublicIpAddress,
    //             dns: instance.PublicDnsName
    //         });
    //     });
    // }, 5000);
}

exports.lab = task