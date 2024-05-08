import Redis from 'ioredis';

// 创建Redis客户端  
const redis = new Redis({
    host: 'localhost', // Redis服务器地址
    port: 6379 // Redis服务器端口
});

// redis.set('key', 'value')
// redis.get('key').then((result) => {
//     console.log(result); // 输出: 'value'
// })
// redis.setex('key', 5,'value')
// redis.sadd('set', 'value1','1234','54354').then(a=>console.log(a))
// redis.smembers('set').then(a=>console.log(a))
// redis.hset('hash', 'field1', 'value1')
// redis.hset('hash', 'name', '1')
// redis.hset('hash', 'age', '10')
// redis.hdel('hash', 'field1')

// 订阅---发布
const redis2 = new Redis({
    host: 'localhost', // Redis服务器地址
    port: 6379 // Redis服务器端口   
})
redis.subscribe('test')
redis.on('message', (channel, message) => {
    console.log(`Received message ${message} in channel ${channel}`)
})
redis2.publish('test', 'Hello from redis2!')