const express = require('express');
const path = require('node:path');

const db = require('./config/mongoose.js');
const Contact = require('./modles/contact.js')
const app = express();

const port = 6969
// telling the express to use ejs view engine
app.set('view engine', 'ejs');
// where to place views
app.set('views',path.join(__dirname, 'views'));
// decode the encrypted data recived from form
//middleware
app.use(express.urlencoded());
// middle ware 1
// app.use((req, res, next) => {
//     req.myName = 'jahnashd'
//     console.log('middleware 1 is called');
//     next();
// })
// // middle ware 2
// // MW also use to menupilate data
// app.use((req, res, next) => {
    
//     console.log('middleware 2 is called',req.myName);
//     // calls the next task which is to be executed after this middle ware
//     next();
// })
// static files
app.use(express.static(__dirname + '/assets'));

const contactList = [
   { 
    name :'Anksuh',
    phone:'69745873',
    },
    {
        name:'Annkit',
        phone:'834753798'
    },
    {
        name:'jenny',
        phone:'90283490'
    },
    {
        name:'szaaze',
        phone:'9824537'
    },
]
app.get("/", (req, res) => {
    Contact.find({}).then(contact => {
        return res.render('home',{
            title:'List me',
            contect_List:contact, 
        });
    }).catch(err => {
        console.error("cat not retrive data fron mongodb",err);
    })
   
});
// app.get("/", (req, res) => {
//     // console.log(req)
//     // res.send(`<h1> i am up and finally working</h1>`)
//     //ejs rendering
//     return res.render('home',{
//         title:'List me',
//         contect_List:contactList, 
//     });
// });

app.get('/practice', (req, res) => {
    // this is called context
    console.log("from home route",req.myName);
    return res.render('practice',{
       title:'Practice',
       contect_List:contactList,  
    })
})

app.post('/action', (req, res) => {
console.log(req.body);

 Contact.create({
    name:req.body.name,
    Phone:req.body.Phone
 }).then((newContacts)=>{
    console.log("********",newContacts);
   return res.redirect('back');
 }).catch(err => {
    console.log("Error in pushing the values in database",err);
    return ;
 })

});


// app.post('/action', (req, res) => {
// //    return res.redirect('/practice');
// console.log(req.body);
//  contactList.push(req.body);
//  return res.redirect('back');
//  //we can use this to go to the same page where we are now
// //  return res.redirect('back');
// });

app.get('/delete', (req, res) => {
 console.log(req.query)
  const id = req.query.id;
  console.log(id)
  Contact.findByIdAndDelete(id)
    .then(() => {
        return res.redirect('back');
    }).catch(err => {
        console.log("error in deleting the contact",err)
    })

  
    
});
// app.get('/delete', (req, res) => {
//  console.log(req.query)
//  let phone = req.query.phone;

//  let contactphone = contactList.findIndex(contact => contact.phone == phone);
//   if(contactphone != -1){
//     contactList.splice(contactphone, 1);
//   }

//   return res.redirect('back');
    
// });

app.listen(port,function(err){
    if(err){
        console.log(err);
    }
    console.log('up and unning at port ' , port)
})