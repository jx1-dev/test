// JavaScript functionality for the chat-based website builder homepage

document.addEventListener('DOMContentLoaded', function() {
    const chatInput = document.getElementById('chat-input');
    const chatButton = document.getElementById('chat-button');
    const chatArea = document.getElementById('chat-area');

    chatButton.addEventListener('click', function() {
        const userMessage = chatInput.value;
        if (userMessage.trim() !== '') {
            const messageElement = document.createElement('div');
            messageElement.classList.add('message');
            messageElement.textContent = userMessage;
            chatArea.appendChild(messageElement);
            chatInput.value = '';  // Clear input after sending
        }
    });
});