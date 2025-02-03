const test = async (req, res) => {
  return res.status(200).json({ message: "Test controller" });
};
export { test };
