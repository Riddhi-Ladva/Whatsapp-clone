import { request,response } from "express";
import Conversation from "../models/Conversation.js";

export const newConversation=async(request,response)=>{
    try{
        const senderId=request.body.senderId;
        const receiverId=request.body.receiverId;

        const exists= await Conversation.findOne({members:{$all:[receiverId,senderId]}});

        if(exists){
            return response.status(200).json('Conversation exists');
        }

        const newconv=new Conversation({
            members:[senderId,receiverId]
        })
        await newconv.save();

        return response.status(200).json('conversation saved succesfully');
    }catch(error){
        console.log(error.message);
    }
}

export const getConversation=async(request,response)=>{
    try{
        const senderId=request.body.senderId;
        const receiverId=request.body.receiverId;

        let conversation=await Conversation.findOne({members:{$all:[receiverId,senderId]}});
        return response.status(200).json(conversation);
    }catch(error){
        return response.status(500).json(error.message);
    }
}