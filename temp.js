//find One
        app.get('/notes/:id', (req, res)=>{
                const id =req.params.id;
                const details ={'_id': new ObjectId(id)}
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