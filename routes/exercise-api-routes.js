module.exports = function(app) {

    var db = require('../models')

    app.get("/", function (req, res) {
        res.render ("index", {})
    })
    
    app.post("/workouts", function (req, res) {
      console.log("we HIT THE ROUTE",req.body);


      db.Workout.findAll().then(function(results,err ){
        //console.log('data from db!!', results, err)

        var calorieTotal = 0
        //var workoutList = []

        for(var i = 0; i < results.length; i++) {
            console.log('each dude from DB!!', results[i].dataValues)

            // if (calorieTotal > req.body.calorie) we go over calorieTotal > req.body.calorie
        }


      })
     

    })

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