import net from 'net';

const client = net.createConnection({ port: 8080 })

client.on('data', (e) => {
        console.log(e.toString())
})
client.write('This is client')