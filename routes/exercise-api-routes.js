module.exports = function(app) {

    var db = require('../models')

    app.get("/", function (req, res) {
        res.render ("index", {})
    })
    
    app.get("/allExercises", function (req, res) {
      db.Fitness.findAll({}).then(function(results,err ){ 
        console.log(results.length)
    var html = "<head>"
    html += "<style> body {background-image: url(/assets/images/exerciseBG.jpg); background-size: 100% 100%; background-attachment: fixed} tr:hover {background-color: #f5f5f5;} table, th, td {border-bottom: 1px solid #ddd; padding; 15px text-align: center} </style>"
    html += "</head><body><h1>Exercises, Activities, And Sports<br></h1><p>Feel free to create your own workout plan with an incredible combination of exercises listed below.</p></body>";
    html += "<table style='width: 50%'>";
    html += "<tr><th>Exercise</th><th>Calories burned per lb<br>(every hour):</th></tr>";
    for (var i = 0; i < results.length; i++) {
    html += "<tr><td>" + results[i].exercise + "</td><td>  " + results[i].calories + "</td></tr>";
  }
    html += "</table>";

        res.send(html)
      });
      });

    app.post("/workouts", function (req, res) {
      console.log("we HIT THE ROUTE",req.body);

var id1 = Math.floor(Math.random() * (248 - 1) + 1);
var id2 = Math.floor(Math.random() * (248 - 1) + 1);
console.log(id1," ",id2);

      db.Fitness.findOne({
        where: {fitnessId: id1

        }
      }).then(function(results,err ){
        //console.log('data from db!!', results, err)
      db.Fitness.findOne({
        where: {fitnessId: id2

        }
      }).then(function(result2){
        console.log(result2.dataValues);

        if(req.body.weight==="130lb"){
          console.log(result2.dataValues.weight130+results.dataValues.weight130);
            var totalCal = result2.dataValues.weight130+results.dataValues.weight130;
            if(totalCal < req.body.calorie){
              res.json({
                exercise1:results, exercise2:result2
              })
            }
        }

        if(req.body.weight==="155lb"){
          console.log(result2.dataValues.weight130+results.dataValues.weight130);
            var totalCal = result2.dataValues.weight130+results.dataValues.weight130;
            if(totalCal < req.body.calorie){
              res.json({
                exercise1:results, exercise2:result2
              })
            }
        }

        if(req.body.weight==="180lb"){
          console.log(result2.dataValues.weight130+results.dataValues.weight130);
            var totalCal = result2.dataValues.weight130+results.dataValues.weight130;
            if(totalCal < req.body.calorie){
              res.json({
                exercise1:results, exercise2:result2
              })
            }
        }

        if(req.body.weight==="205lb"){
          console.log(result2.dataValues.weight130+results.dataValues.weight130);
            var totalCal = result2.dataValues.weight130+results.dataValues.weight130;
            if(totalCal < req.body.calorie){
              res.json({
                exercise1:results, exercise2:result2
              })
            }
        }


      });
        var calorieTotal = 0
        //var workoutList = []

        // for(var i = 0; i < results.length; i++) {
        //     console.log('each dude from DB!!', results[i].dataValues)

        //     // if (calorieTotal > req.body.calorie) we go over calorieTotal > req.body.calorie
        // }
console.log(results.dataValues);

      });
     

    });

}


// var testData = {
//     name: "Cycling, <10 mph, leisure bicycling", 
//     weight130: 236,
//     weight155:281,
//     weight180:327,
//     weight205:372
// }

// db.Workout.create(testData).then(function(err, result){
//     console.log(' we saved workout!!!', err, result)
// })