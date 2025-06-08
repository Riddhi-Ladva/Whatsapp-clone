import Message from "../models/Message.js";
import Conversation from "../models/Conversation.js";
import { request, response } from "express";

export const newMessage = async (request, response) => {
    try {
        const { senderId, receiverId, conversationId, text, type } = request.body;

        if (!senderId || !receiverId || !conversationId || !text) {
            return response.status(400).json({ error: "Missing required fields" });
        }

        const newMessage = new Message({
            senderId,
            receiverId,
            conversationId,
            text,
            type
        });

        await newMessage.save();

        await Conversation.findByIdAndUpdate(
            conversationId,
            { $set: { message: text } }
        );

        return response.status(200).json("Message has been sent successfully");
    } catch (e) {
        return response.status(500).json({ error: e.message });
    }
};


export const getMessage=async(request,response)=>{
    try{
        const data=await Message.find({conversationId:request.params.id});
    
        return response.status(200).json(data);
    }catch(e){
        return response.status(500).json(e.message);
    }
}