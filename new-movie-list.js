

const bookSeries_setTwo = {
    book1: {
        name: "title one",
        author: "a author",
        coverImage: "url of image",
        pageCount: 321,
    },
    book2: {
        name: "title two",
        author: "b author",
        coverImage: "url of image",
        pageCount: 411,
    },
    book3: {
        name: "title three",
        author: "c author",
        coverImage: "url of image",
        pageCount: 621,
    },
    book4: {
        name: "title four",
        author: "d author",
        coverImage: "url of image",
        pageCount: 502,
    },
    book5: {
        name: "title five",
        author: "e author",
        coverImage: "url of image",
        pageCount: 555,
    },
};

// function findMovieYears() {
//     return fetch('movie-list.json')
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             return response.json();
//         })
//         .then(data => {
//             if (Array.isArray(data)) {
//                 const years = data.map(movie => movie.year);
//                 return years;
//             } else {
//                 console.error('Data is not in the expected format.');
//             }
//         })
//         .catch(error => {
//             console.error('Error fetching or parsing data:', error);
//         });
// }


// function findMovieYears() {
//     fetch('movie-list.json')
//         .then(response => response.json())
//         .then(data => {
//             if (Array.isArray(data)) {
//                 data.forEach(movie => {
//                     const listItem = movie.year;
//                 });
//             } else {
//                 console.error('Data is not in the expected format.');
//             }
//             return listItem;
//         })
//         .catch(error => {
//             console.error('Error fetching or parsing data:', error);
//         });
// }

function favMovie(string) {
    let movieName = string;
    return movieName;
}

function favGenre(string) {
    let movieGenre = string;
    return movieGenre;
}



module.exports = {
    favMovie,
    favGenre

}