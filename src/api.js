import openSocket from 'socket.io-client';

const  socket = openSocket('http://localhost:3000');

function handleMsg(msg) {

}

export { subscribeToChat };
