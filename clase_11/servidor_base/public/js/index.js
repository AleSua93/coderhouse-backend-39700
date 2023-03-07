const socket = io();

let username;

Swal.fire({
  title: "Identifícate",
  input: "text",
  text: "Ingresa tu nombre de usuario",
  inputValidator: (value) => {
    return !value && "Es obligatorio introducir un nombre de usuario";
  },
  allowOutsideClick: false,
}).then((result) => {
  username = result.value;
});

const chatInput = document.getElementById("chat-input");
chatInput.addEventListener("keyup", (ev) => {
  if (ev.key === "Enter") {
    const inputMessage = chatInput.value;

    if (inputMessage.trim().length > 0) {
      socket.emit("chat-message", { username, message: inputMessage });

      chatInput.value = "";
    }
  }
});

const messagesPanel = document.getElementById("messages-panel");
socket.on("messages", (data) => {
  console.log(data);
  let messages = "";

  data.forEach((m) => {
    messages += `<b>${m.username}:</b> ${m.message}</br>`;
  });

  messagesPanel.innerHTML = messages;
});
