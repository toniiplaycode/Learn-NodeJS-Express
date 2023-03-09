const express = require('express') // nạp thư viện express vào
const morgan = require('morgan') // nạp thư viện morgan vào
const app = express() // express là một function được viết sẵn
const port = 3000 // cổng

app.use(morgan('combined')); // dùng logger tiêu chuẩn 'combined' của thư viện morgan để hiện được tất request, còn nhiều kiểu khác như 'commom', 'dev', 'short', 'tiny' (lên trang npm morgan xem thêm) 

// tham số thứ nhất '/' là một route, kiểu đường dẫn vào website, tham số thứ 2 là callback
app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.listen(port, () => console. log(`Example app listening at http: //Localhost:${port}`));

123