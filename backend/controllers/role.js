import role from "../models/role.js";

const registerRole = async (req, res) => {
  if (!req.body.name || !req.body.description)
    return res.status(400).send("Incomplete data");

  const existingRole = await role.findOne({ name: req.body.name });
  if (existingRole) return res.status(400).send("The role already exist");

  const roleSchema = new role({
    name: req.body.name,
    description: req.body.description,
    dbStatus: true,
  });


  const result =  await roleSchema.save();

if(!result)return res.status(400).send("Failed to register roler");

res.status(200).send({result});
};  

const listRole = async (req,res)=>{

  const allRoles = await  role.find();  
  
  if (allRoles.lenght == 0) 
  return res.status(400).send("EMPTY ROLE LIST");
  return res.status(200).send({allRoles});
  
  };

export default{registerRole,listRole};

