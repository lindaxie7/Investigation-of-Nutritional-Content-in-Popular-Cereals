const fs = require("fs")
const csv = require('csv-parser')
const postgres = require('postgres')
globalFoods = fs.readFileSync('pruned.json')

data = JSON.parse(globalFoods)
const kaggleData = JSON.parse(fs.readFileSync("kaggle_with_ingredients.json"))

function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}

async function setupDatabase() {
    const sql = postgres({
        host: process.env.POSTGRES_DB_HOST,
        port: process.env.POSTGRES_DB_PORT,
        database: process.env.POSTGRES_DB_NAME,
        username: process.env.POSTGRES_DB_USERNAME,
        password: process.env.POSTGRES_DB_PASSWORD,
        ssl: 'require'
    })

    for (const i1 of kaggleData
        .flatMap(d => d.ingredients)
        .map(i => i.toUpperCase())
        .filter(i => i.length <= 128)
        .filter(onlyUnique)) {
        await sql`INSERT INTO Ingredient (name)
                  VALUES (${i1})`;
    }

}

setupDatabase()
.then(() => {})