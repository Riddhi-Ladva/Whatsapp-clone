import axios from 'axios';

const url = 'http://localhost:8000';

export const addUser = async (data) => {
    try {
        await axios.post(`${url}/add`, data);
    } catch (error) {
        console.log(error.message);
    }
}

export const getUsers = async () => {
    try {
        const responses = await axios.get(`${url}/users`);
        return responses.data;
    } catch (error) {
        console.log(error.message);
    }
}

export const setConversation=async(data)=>{
    try{
        await axios.post(`${url}/conversation/add`,data);
    }catch(error){
        console.log(error.message);
    }
}

export const getConversation=async(data)=>{
    try{
        let responses=await axios.post(`${url}/conversation/get`,data);
        return responses.data;
    }catch(error){
        console.log(error.message);
    }
}

export const newMessage=async(data)=>{
    try{
        await axios.post(`${url}/message/add`,data);
    }catch(e){
console.log(e.message);
    }
} 

export const getMessage=async(id)=>{
    try{
        let responses=await axios.get(`${url}/message/get/${id}`);
        return responses.data;
    }catch(e){
           console.log(e.message);
    }
}

export const uploadFile = async (data) => {
  try {
   
     const res=await axios.post(`http://localhost:8000/file/upload`, data);
      return res;
  } catch (e) {
    console.log("Upload Error:", e.message);
  }
};

