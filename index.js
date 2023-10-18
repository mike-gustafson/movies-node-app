const express = require('express'); // third party mudule
const app = express(); // instance of the app
const { add, subtract, multiply, divide } = require('./calculator.js')
const {favMovie, favGenre} = require("./new-movie-list.js");
const fs = require('fs');

// gets data from a local API on my network that returns a list of movies and writes it to the movie-list.txt file
// fetch(`http://192.168.10.35:7878/api/v3/movie?excludeLocalCovers=false&apikey=c1b1e0b465734da0940c91d7917a0a47
// `)
//         .then(response => {
//             console.log('--- status ---');
//             console.log(response.status);
//             return response.json();
//         })
//         .then(data => {
//             fs.writeFile('movie-list.json', JSON.stringify(data), err => {
//                 if(err) {
//                     console.log("ERROR:", err);
//                 }
//             })
//         })        
//         .catch(error => {
//             console.log('---- error ----');
//             console.log(error);
//             console.log('---error end---')
//         })




app.get('/', (req, res) => {
    return res.json({ message: 'Welcome to my Node Movie app' });
});

app.get('/DVD', (req, res) => {
    return res.json({ message: 'List of all DVDs:' });
});

app.get('/Blu-Ray', (req, res) => {
    return res.json({ message: 'List of all Blu-Rays:' });
});

app.get('/favMovie/:string', (req, res) => {
    let string = req.params.string;
    let answer = favMovie(string) 
    return res.json({ answer: answer })
})

app.get('/favGenre/:string', (req, res) => {
    let string = req.params.string; 
    let answer = favGenre(string); 
    return res.json({ answer: answer })
})

app.get('/movie-years', (req, res) => {
    fs.readFile('movie-list.json', 'utf8', (error, data) => {
        if (error) {
            console.error('Error reading the JSON file:', error);
            res.status(500).send('Internal Server Error');
            return;
        }

        try {
            const movieList = JSON.parse(data);
            if (Array.isArray(movieList)) {
                const years = movieList.map(movie => movie.year);
                res.json(years);
            } else {
                console.error('Data is not in the expected format.');
                res.status(500).send('Internal Server Error');
            }
        } catch (parseError) {
            console.error('Error parsing data:', parseError);
            res.status(500).send('Internal Server Error');
        }
    });
});

// ----------------------------------------------
// example: localhost:8000/add/7/8
// response  {"answer": 15}
// ----------------------------------------------
// what is req.params? an object
// {num1: '7', num2: '8'}
app.get('/add/:num1/:num2', (req, res) => {
    let num1 = Number(req.params.num1); // comes in as string so Number() converts to int
    let num2 = Number(req.params.num2);
    let answer = add(num1, num2); // returns 15
    return res.json({ answer: answer })
})

app.get('/subtract/:num1/:num2', (req, res) => {
    let num1 = Number(req.params.num1); // comes in as string so Number() converts to int
    let num2 = Number(req.params.num2);
    let answer = subtract(num1, num2); // returns 15
    return res.json({ answer: answer })
})

app.get('/multiply/:num1/:num2', (req, res) => {
    let num1 = Number(req.params.num1); // comes in as string so Number() converts to int
    let num2 = Number(req.params.num2);
    let answer = multiply(num1, num2); // returns 15
    return res.json({ answer: answer })
})

app.get('/divide/:num1/:num2', (req, res) => {
    let num1 = Number(req.params.num1); // comes in as string so Number() converts to int
    let num2 = Number(req.params.num2);
    let answer = divide(num1, num2); // returns 15
    return res.json({ answer: answer })
})


// using core modules and req.query

// ----------------------------------------------
// example: localhost:8000/read?something=story
// response: { "message": "(contents of story.txt)" }
// ----------------------------------------------
// what is req.query? an object
// {something: 'story'}
app.get('/read', (req, res) => {
    // 1. grab the query string,
    let element = req.query.something; // 'story'
    // 2. pass the query string into the fs function
    fs.readFile(`${element}.json`, 'utf8', (error, data) => {
        if (error) {
            return res.json({ message: 'There is an issue, try again later...' });
        } else {
            // 3. return data that comes from the txt file
            return res.json({ message: data })
        }
    });
})



// SETUP A PORT NUMBER, LISTEN FOR SERVER
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log('Server RUNNING on port', PORT);
});
