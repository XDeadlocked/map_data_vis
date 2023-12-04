const express = require('express');
const path = require('path');
const app = express();
const port = 8000; // 您可以选择任何空闲端口

app.use(express.static(path.join(__dirname, ''))); // 设置静态文件目录

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
    console.log(`服务器运行在 http://localhost:${port}`);
});
