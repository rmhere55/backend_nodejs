 
 const users = require('../models/user')
 
 async function handleGetAllUser(req , res) {
    const allDbusers = await users.find({})
    return res.jason(allDbusers)
    
 }

 async function GetUserById(req , res) {
    const id = Number(req.params.id);
    const user = users.find(user => user.id === id)
    return res.json(user)
 }
 
//  update
 async function putUser(req , res) {
    // return res.json({status:'pending'})
    try {
        const id = Number(req.params.id);
        const updatedData = req.body;

        // Update the user with the given ID
        const updatedUser = await users.findOneAndUpdate({ id }, updatedData, { new: true });
        
        if (!updatedUser) {
            return res.status(404).json({ error: 'User not found' });
        }

        return res.json({ status: 'success', data: updatedUser });
    } catch (error) {
        return res.status(500).json({ error: 'Failed to update user' });
    }

 }


//  delete a user 
 async function DeleteUser(req , res) {
    // return res.json({status:'pending'})
    try {
        const id = Number(req.params.id);

        // Delete the user with the given ID
        const deletedUser = await users.findOneAndDelete({ id });
        
        if (!deletedUser) {
            return res.status(404).json({ error: 'User not found' });
        }

        return res.json({ status: 'success', message: 'User deleted successfully' });
    } catch (error) {
        return res.status(500).json({ error: 'Failed to delete user' });
    }


 }

//  async function CreateUserbyPost(req , res) {
 
//     const body = req.body
//     if(!body || !body.first_name|| !body.last_name|| !body.email || !body.gender ||!body.IT){
//         return res.status(400).json({message:'invalid request'})
//     }
//     const result = await User.create({
//         first_name:body.first_name ,
//         last_name:body.last_name ,
//         email:body.email ,
//         gender:body.gender ,
//         IT:body.IT ,

//     })
//     return res.status(201).json({
//         message:'success'
//     })

// }


// Create a new user
async function CreateUserbyPost(req, res) {
    const { first_name, last_name, email, gender, IT } = req.body;

    if (!first_name || !last_name || !email || !gender || !IT) {
        return res.status(400).json({ message: 'Invalid request' });
    }

    try {
        const newUser = await User.create({ first_name, last_name, email, gender, IT });
        return res.status(201).json({
            message: 'User created successfully',
            data: newUser
        });
    } catch (error) {
        return res.status(500).json({ error: 'Failed to create user' });
    }
}

 module.exports={
handleGetAllUser,
GetUserById,
putUser,
DeleteUser,
CreateUserbyPost,
 }