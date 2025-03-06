const fs = require('fs');

module.exports = (req, res) => {
  const { lat, long } = req.query;
  const now = new Date().toISOString();
  const data = `时间: ${now}, 纬度: ${lat}, 经度: ${long}\n`;

  fs.appendFile('/tmp/location.txt', data, (err) => {
    if (err) {
      return res.status(500).send('保存失败');
    }
    res.status(200).send('位置已记录');
  });
};
