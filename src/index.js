const messages = [
    "Hola",
    "Ana",
    "Nicolay",
    "Diego",
    "Paulina",
    "Lina",
    "Laura"
];

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
};

module.exports = { randomMsg };