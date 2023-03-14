// const express = require('express'); // nạp(import) thư viện express vào, cú pháp ES5
import express from 'express'; // cú pháp ES7 mới hơn, phải cấu hình babel mới chạy được cú pháp mới
import configViewEngine from './configs/viewEngine';
require('dotenv').config(); // nạp package dotenv vào, nếu không nạp thì lệnh process.env.PORT sẽ lỗi
const morgan = require('morgan'); // nạp(import) thư viện morgan vào
const app = express(); // express là một function được viết sẵn và mình chỉ cần gọi hàm và dùng
// const port = 8080; // cổng, có thể đặt cổng tuỳ thích: 3000, 8080...
const port = process.env.PORT || 8080; // dùng để gán tham số PORK bên file .env cho biến pork(nhưng muốn sử dụng được lệnh proess.env.PORK này thì phải cài package dotenv), và || 8080 để dự phòng nếu file môi trường bị lỗi;

app.use(morgan('combined')); // dùng logger tiêu chuẩn 'combined' của thư viện morgan để hiện được tất request, còn nhiều kiểu khác như 'commom', 'dev', 'short', 'tiny' (lên trang npm morgan xem thêm) 

configViewEngine(app); // truyền đối số express vào hàm configViewEngine 

// tham số thứ nhất '/' là một route, kiểu đường dẫn vào website, tham số thứ 2 là callback, trong callback gồm 2 tham số: request và response
// app.get('/', (req, res) => {
//     res.send('Hello World!');
// })

// thử 1 route(đường dẫn) khács
// app.get('/about', (req, res) => {
//     res.send('i am Toniiplaycode');
// });

app.get('/', (req, res) => { 
    res.render('index.ejs'); // dùng để chạy file ejs template engine, không cần tìm đường dẫn thư mục vì bên file viewEngine.js nó đã tìm đường dẫn tới file index.ejs giúp mình rồi 
});

app.listen(port, () => { // app.listen được hiểu là mình muốn chạy trên cổng nào, ở đây là cổng 3000
    console. log(`Example app listening at http: //Localhost:${port}`)
});

