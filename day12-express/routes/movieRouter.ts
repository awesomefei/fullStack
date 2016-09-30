import * as express from 'express';



//fake database
let movies=[
    {id :1 ,title: "Star Wars1", director : 'Lucas'},
    {id :2 ,title: "Star Wars2", director : 'Lucas'},
    {id :3 ,title: "Star Wars3", director : 'Lucas'},
    {id :4 ,title: "Star Wars4", director : 'Lucas'},
    {id :5 ,title: "Star Wars5", director : 'Lucas'}
]
    let movieId = 7;

// ----------- movie router
let movieRouter = express.Router();





//----------------api reelated to movie -----------------------
movieRouter.get('/', (req,res)=>{
    res.send(movies);
});

movieRouter.get('/:id', (req,res) =>{
    //get the movie id information by using req.params
    let movieId = req.params['id'];
    //filter thru the movies array that has an id that cam from the client side request
    let filteredMovie = movies.filter((elm)=>{
        return elm['id'] == movieId;
    });
    //sebd vack a single movie to clinet side
    res.send(filteredMovie[0]);
});



// movieRouter.post('/api/movies', (req, res) => {
//     let movieToSave = req.body;
//     movieToSave.id = movieId;
//     movies.push(movieToSave);
//     res.sendStatus(201);
//     //res.send(movies);
//     //res.send('POST REQUEST HAS BENN HIT');
// });

movieRouter.post('/', (req, res) => {
    console.log(req.body);
    if(req.body.id){

        let movieToEdit = movies.filter((elm) =>{
            return elm['id'] == req.body.id;
        })[0];
        movieToEdit.title = req.body.title;
        movieToEdit.director = req.body.director;
        res.sendStatus(200);
    }else{
        let movieToSave = req.body;
        movieToSave.id = movieId;
        movies.push(movieToSave);
        res.sendStatus(201);
    }


});

movieRouter.delete('/:id', (req,res) =>{
    let movieToDelete= movies.filter((elm)=>{
        return elm['id'] == req.params['id'];
    })[0];

    movies.splice(movies.indexOf(movieToDelete),1);
    res.sendStatus(200);
})


export default movieRouter;
