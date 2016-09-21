import * as express from 'express';

let customers = [
    {id:1, firstName:'Jack', secondName:'Lee', age:10,
    url:'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSVcII_ls5EjWgX2jbqXTBWqnFJ9mmcueAip_XMZuXwDDZofULc'
    },
    {id:2, firstName:'Amy', secondName:'Peter', age:12,
    url:'http://southparkstudios.mtvnimages.com/images/shows/south-park/episode-thumbnails/season-19/south-park-s19e03-the-city-part-of-town_4x3.jpg?'
    },
    {id:3, firstName:'Tom', secondName:'Jerry', age:13,
    url:'http://1.images.southparkstudios.com/images/shows/south-park/episode-thumbnails/season-17/south-park-s17e10-the-hobbit_4x3.jpg?width=360&quality=0.8'
    },
]

let idCount = 4;

let customerRouter = express.Router();

customerRouter.get('/', (req,res)=>{
    res.send(customers);
});

customerRouter.get('/:id', (req,res)=>{
    let customerId = req.params['id'];
    let filteredCustomer = customers.filter((e)=>{
        return e['id'] == customerId;
    });
    res.send(filteredCustomer[0]);
});

customerRouter.post('/', (req,res)=>{

    if(req.body.id){
        //save
        req.body.id=idCount++;
        console.log("before array");
        customers.push(req.body);
        console.log("after customers");
        res.sendStatus(201);
    }else{
        //edit
        let customer = customers.filter((e)=>{
            return e['id'] == req.body.id;
        })[0];
        customers[customers.indexOf(customer)] = req.body;
        res.sendStatus(200);
    }


});




customerRouter.delete('/:id', (req,res)=>{
    console.log('hello word');
    console.log('id is ' + req.params['id']);
    let customerToDelete = customers. filter((e)=>{
        return e['id'] == req.params['id'];
    })[0];
    customers.splice(customers.indexOf(customerToDelete), 1);

    res.sendStatus(201);
});

export default customerRouter;
