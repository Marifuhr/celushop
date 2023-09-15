const { RepairRequest } = require('../Models/RepairRequestModel.js');

function createRepair(req, res){
    const { name, email, phoneNumber, description, deviceType } = req.body;
    if(!name || !email || !phoneNumber || !description || !deviceType){
        return res.status(400).json({message: 'Todos los campos son obligatorios'});
    }
    const repair = {
        name,
        email,
        phoneNumber,
        description,
        deviceType
    }
    RepairRequest(repair).then((data) => {
        return res.json(data);
    }).catch((err) => {
        console.log(err);
    })
}


module.exports = {
   createRepair
}
