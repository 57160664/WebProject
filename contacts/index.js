const express = require('express')
const router = express.Router()

let contactList = [
    {id: 0, name: 'Chonticha Seeda', email: '57160626@go.buu.ac.th', phone: '0845300080'},

    {id: 1, name: 'Woraprot Suksawat', email: '57660062@go.buu.ac.th', phone: '0805746734'},

    {id: 2, name: 'Suwijak Thepwichian', email: '57550532@go.buu.ac.th', phone: '0633800099'},

    {id: 3, name: 'Sootthikiat Mungkhunthod', email: '57160664@go.buu.ac.th', phone: '08111123465'},

    {id: 4, name: 'Meena Rukna', email: '5716778@go.buu.ac.th', phone: '0856123789'},

    {id: 5, name: 'Monthikan Wongratanapiboon', email: '57160477@go.buu.ac.th', phone: '0887632569'},

    {id: 6, name: 'Kanok Jantarasirijan', email: '57550522@go.buu.ac.th', phone: '0891236578'},

    {id: 7, name: 'Piyabut Nawanitbumrung', email: '57160638@go.buu.ac.th', phone: '0876234980'},

    {id: 8, name: 'Nuchanad Banmai', email: '57667788@go.buu.ac.th', phone: '0923578125'},

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

