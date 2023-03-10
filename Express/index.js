const express = require('express'); // nạp(import) thư viện express vào
const morgan = require('morgan'); // nạp(import) thư viện morgan vào
const app = express(); // express là một function được viết sẵn và mình chỉ cần gọi hàm và dùng
const port = 3000; // cổng, có thể đặt cổng tuỳ thích 

app.use(morgan('combined')); // dùng logger tiêu chuẩn 'combined' của thư viện morgan để hiện được tất request, còn nhiều kiểu khác như 'commom', 'dev', 'short', 'tiny' (lên trang npm morgan xem thêm) 

// tham số thứ nhất '/' là một route, kiểu đường dẫn vào website, tham số thứ 2 là callback, trong callback gồm 2 tham số: request và response
app.get('/', (req, res) => {
    res.send('Hello World!');
})

// thử 1 route(đường dẫn) khác
app.get('/about', (req, res) => {
    res.send('i am Toniiplaycode');
})

app.listen(port, () => { // app.listen được hiểu là mình muốn chạy trên cổng nào, dưới là cổng 3000
    console. log(`Example app listening at http: //Localhost:${port}`)
});