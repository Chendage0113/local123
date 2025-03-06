// api/index.js
module.exports = (req, res) => {
  // 从查询参数获取 lat 和 long
  const { lat, long } = req.query;
  // 返回包含接收到的经纬度的 JSON 响应
  res.status(200).json({
    latitude: lat,
    longitude: long,
    status: "OK"
  });
};
