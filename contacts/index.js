const express = require('express')
const router = express.Router()

let contactList = [
    {id: 0, name: 'Kong', email: 'ned@winterfell.com', phone: '123-456-7890', url: 'www.google.com', notes: 'Winter is coming.'},
    {id: 1, name: 'Theon', email: 'tgreyjoy@winterfell.com', phone: '123-456-7890', url: 'www.google.com', notes: 'Reluctant to pay iron price.'},
    {id: 2, name: 'Samwell', email: 'starly@castleblack.com', phone: '123-456-7890', url: 'www.google.com', notes: 'Loyal brother of the watch.'},
    {id: 3, name: 'Snow', email: 'jsnow@castleblack.com', phone: '123-456-7890', url: 'www.google.com', notes: 'Knows nothing.'},
    {id: 4, name: 'Stark', email: 'waterdancer@winterfell.com', phone: '123-456-7890', url: 'www.google.com', notes: 'Has a list of names.'},
    {id: 5, name: 'Jora Mormont', email: 'khaleesifan100@gmail.com', phone: '123-456-7890', url: 'www.google.com', notes: 'Lost in the friend-zone.'},
    {id: 6, name: 'Tyrion Lannister', email: 'tyrion@lannister.com', phone: '123-456-7890', url: 'www.google.com', notes: 'Currently drunk.'},
    {id: 7, name: 'Stannis Baratheon', email: 'onetrueking@dragonstone.com', phone: '123-456-7890', url: 'www.google.com', notes: 'Nobody expects the Stannish inquisition.'},
    {id: 8, name: 'Hodor', email: 'hodor@hodor.com', phone: '123-456-7890', url: 'www.google.com', notes: 'Hodor? Hodor... Hodor!'},
    {id: 9, name: 'Margaery Tyrell', email: 'mtyrell@highgarden.com', phone: '123-456-7890', url: 'www.google.com', notes: 'Keeper of kings.'},
    {id: 10, name: 'Brienne of Tarth', email: 'oathkeeper@gmail.com', phone: '123-456-7890', url: 'www.google.com', notes: 'Do not cross her.'},
    {id: 11, name: 'Petyr Baelish', email: 'petyr@baelishindustries.com', phone: '123-456-7890', url: 'www.google.com', notes: 'Do not trust anyone.'},
  ];

//Develop GET /contacts API to list all contacts
//Develop GET /contacts?name= API to search contact by name

  router.get('/contacts/',(req,res) =>{
    if(req.query.name){
        for(i=0;i<contactList.length;i++)
            if(contactList[i].name == req.query.name)
                res.json(contactList[i])
    }
    else{
        res.json(contactList)
    }
})

//Develop GET /contacts API to list all contacts
/*router.get('/contacts', (req, res) => {
    res.json(contactList)
})*/

//Develop GET /contact/:id API to get contact information
router.get('/contacts/:id', (req, res) => {
    let id = req.params.id
    res.json(contactList[id])
})

//Develop POST /contacts API to create new contact
router.post('/contacts', (req, res) => {
    let newContact = req.body
    newContact.id = contactList.length
    contactList.push(newContact)
    res.status(201).json(newContact)
})

//Develop PUT /contact/:id API to update contact information
router.put('/contacts/:id', (req, res) => {
    let contact = req.body
    let id = req.params.id
    contactList[id] = contact
    res.status(200).json()
})

//Develop DELETE /contacts/:id API to remove contact from list
router.delete('/contacts/:id', (req, res) => {
    let id = req.params.id
    contactList.splice(id, 1)
    res.status(204).json()
})



module.exports = router

