const VideosServices = require("../services/videos.services");

const createVideos = async (req, res) => {
  try {
    const newVideo = req.body;
    const result = await VideosServices.create(newVideo);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json(error.messaje);
  }
};

const deleteVideos = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await VideosServices.delete(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.messaje);
  }
};

module.exports = { createVideos, deleteVideos };
