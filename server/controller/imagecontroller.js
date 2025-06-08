import grid from 'gridfs-stream';
import mongoose from 'mongoose';

const url = "http://localhost:8000";

const conn = mongoose.connection;
let gfs, gridFsBucket;

conn.once('open', () => {
    gridFsBucket = new mongoose.mongo.GridFSBucket(conn.db, {
        bucketName: 'fs' // ✅ spelling was wrong: "bicketName"
    });
    gfs = grid(conn.db, mongoose.mongo);
    gfs.collection('fs');
});

export const uploadFile = async (req, res) => {
  if (!req.file) return res.status(404).json('File not found');

  const imageUrl = `http://localhost:8000/file/${req.file.filename}`;
  return res.status(200).json(imageUrl);
};


export const getImage = async (request, response) => {
    try {
        const file = await gfs.files.findOne({ filename: request.params.filename });
        if (!file) {
            return response.status(404).json("File not found");
        }

        const readStream = gridFsBucket.openDownloadStream(file._id);
        readStream.pipe(response);
    } catch (e) {
        return response.status(500).json({ message: e.message });
    }
};
