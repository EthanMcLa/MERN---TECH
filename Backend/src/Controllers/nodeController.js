import Node from "../Models/Node.js";

export async function getAllNodes(_, res) { //Not using req so we just add an underscore. 
    try {
        const notes = await Node.find().sort({createdAt: -1}); //newest one created at the front 
        res.status(200).json(notes);
    } catch(err) {
        console.err("Error in get request", err);
        res.status(500).json({message: "Internal Server Error"});
    }
 };

 export  async function CreateNode(req, res) {
    try {
        const {title, content} = req.body;
        const newNode = new Node({title, content});
        await newNode.save();
        res.status(201).json(newNode);
    } catch(err) {
        console.error("Error in post request", err);
        res.status(500).json({message: "Internal Server Error"});
    }
 };

export async function UpdateNode(req, res) {
    try {
        const {title, content} = req.body;
       const UpdatedNode = await Node.findByIdAndUpdate(req.params.id, {title, content},
            {new: true}
        );
       if(!UpdateNode) return res.status(404).json({message: "Note not found"});
    } catch(err) {
        console.error("Error in put request", err);
        res.status(500).json(UpdateNode);
    }

};

export  async function DeleteNode(req, res) {
   try {
    const  DeleteNode = await Node.findByIdAndDelete(req.params.id);
    if(!DeleteNode) return res.status(404).json({message: "Error Node Doesn't Exist"});
    res.status(200).json({message: "node deleted succesfully"});
   } catch(err) {
    console.error("Error in delete request", err);
    res.status(500).json({message: "Internal Server Error"});
   }
};

export async function GetById(req, res) {
    try  {
        const getById = await Node.findById(req.params.id);
        if(!getById) return res.status(404).json({message: "Error Node Doesn't Exist"});
        res.status(200).json(getById)
    } catch(err) {
        console.error("Error in get by id request", err);
        res.status(500).json({message: "Internal Server Error"});
    }
}