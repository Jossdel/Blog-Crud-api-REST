import Article from "../model/Articles.model.js";

const upload = async (req, res) => {
  const filename = req.file.filename;
  const { title, content } = req.body;
  try {
    const article = new Article({
      title: title,
      content: content,
      image: filename,
    });
    await article.save();
    return res.status(200).json({
      message: "Article created successfully",
      article,
    });
  } catch (error) {
    return res.status(500).json({ message: "Error creating article", error });
  }
};
export { upload };
