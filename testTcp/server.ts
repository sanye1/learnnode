import net from 'net';
const server = net.createServer((socket) => {
    setInterval(() => {
        socket.write('hello world\r\n');
    },1000)
    socket.on('data', (data) => {
        console.log(data.toString());
    })
})


server.listen(8080, () => {
    console.log('server is running at http://localhost:8080');
})
