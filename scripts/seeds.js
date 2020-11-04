const db = require("../models")

const fs = require("fs");
const path = require("path");

const seedFileDir = path.join(__dirname, "../datasources/");

db.sequelize.sync({ force: false }).then(() => {
  seedFitness().then((fitness) => {
    process.exit(0);
  }).catch(error => {
    console.log(error);
    process.exit(1);
  });
});

function seedFitness(){
  const csv = fs.readFileSync(path.join(seedFileDir, "dataset.csv"), "utf8");
  const fitnessRecords = csv.trim().split("\n").slice(1).map(parseFitnessLine);
  return db.Fitness.bulkCreate(fitnessRecords);
}

function parseFitnessLine(line) {

    const [exercise, weight130, weight155, weight180, weight205, calories] = line.trim().split(',');
    return {
      exercise,
      weight130,
      weight155,
      weight180,
      weight205,
      calories,
    }
  }
 