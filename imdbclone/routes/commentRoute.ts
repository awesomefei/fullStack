import * as express from 'express';
import Comment from '../models/comment'

let commetRoute = express.Router();

commetRoute.get('/', (req,res) =>{
    Comment.find()
    .then((comments) =>{
        res.send(comments)
    })
    .catch((err) =>{
        res.sendStatus(404).send(err);
    })
});
commetRoute.delete('/:id', (req, res) =>{
    Comment.findByIdAndRemove(req.params['id'])
    .then(() =>{
        res.sendStatus(200);
    })
    .catch(() =>{
        res.sendStatus(404);
    })
})



export default commetRoute;
