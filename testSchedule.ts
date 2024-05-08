import schedule from 'node-schedule';
import request from 'request';

// 定义一个定时任务
const job = schedule.scheduleJob('*/5 * * * * *', () => {
    console.log('定时任务执行了');
    request('http://localhost:3000/api/test', (error, response, body) => {
        if (!error && response.statusCode === 200) {
            console.log(body);
        }   
    })
})
