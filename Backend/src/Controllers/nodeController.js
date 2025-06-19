import Node from "../Models/Node.js";

export async function getAllNodes(req, res) {
    try {
        const notes = await Node.find()
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

export function UpdateNode(req, res) {
  
};

export function DeleteNode(req, res) {
    res.status(200).json({messgae:"Delete The Node succesfully"});
};