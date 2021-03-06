var ObjectId = require('mongodb').ObjectID;
 module.exports= function (app, client) {
        var db = client.db('notable');
        //find One
        app.get('/notes/:title', (req, res)=>{
                //const id =req.params.id;
                const title =req.params.title;
                //const details ={'_id': new ObjectId(id)}
                //var titlereg1="/"+ title +"*/";
                var titlereg = new RegExp(title+"*");
                const details ={'title': titlereg}
                db.collection('notes').findOne(details, (err, item)=>{
                    if(err)
                    {
                        res.send({'error':"An error has occured"})
                    }
                    else
                    {
                        res.send(item)
                    }
                });
            });
            //update rout
            app.put('/notes/:id', (req, res)=>{
                const id =req.params.id;
                const details ={'_id': new ObjectId(id)}
                const note ={text: req.body.body, title: req.body.title};
                db.collection('notes').update(details, note, (err, item)=>{
                    if(err)
                    {
                        res.send({'error':"An error has occured"})
                    }
                    else
                    {
                        res.send(item)
                    }
                });
            });

            //delete route
            app.delete('/notes/:id', (req, res)=>{
                const id =req.params.id;
                const details ={'_id': new ObjectId(id)}
                db.collection('notes').remove(details, (err, item)=>{
                    if(err)
                    {
                        res.send({'error':"An error has occured"})
                    }
                    else
                    {
                        res.send("Note "+id+"deleted!")
                    }
                });
            });
            //insert route
            app.post('/notes', (req, res)=>{
                const note ={text: req.body.body, title: req.body.title};
                db.collection('notes').insert(note, (err, results)=>{
                    if(err)
                    {
                        res.send({'error':"An error has occured"})
                    }
                    else
                    {
                        res.send(results.ops[0])
                    }
                });

            });
        };