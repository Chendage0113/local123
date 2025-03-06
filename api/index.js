module.exports = (req, res) => {
  const { lat, long } = req.query;
  const now = new Date().toISOString();
  res.status(200).json({
    time: now,
    latitude: lat,
    longitude: long,
    status: "位置接收成功"
  });
};
module.exports = (req, res) => {
  const { lat, long } = req.query;
  const mapUrl = `https://maps.google.com/?q=${lat},${long}`;
  res.status(200).send(`点击这里查看具体位置`);
};
