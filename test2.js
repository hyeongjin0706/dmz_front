const messages = [
    "안녕하세요!",
    "반갑습니다.",
    "어떤 도움이 필요하신가요?",
    "GPT처럼 한 글자씩 나오게 할 수 있습니다."
  ];
  
  const chatBox = document.getElementById("chat-box");
  let currentMessageIndex = 0;
  let currentCharacterIndex = 0;
  
  function displayNextCharacter(messages) {
    if (currentMessageIndex < messages.length) {
      const message = messages[currentMessageIndex];
      if (currentCharacterIndex < message.length) {
        const currentCharacter = message[currentCharacterIndex];
        chatBox.innerHTML += currentCharacter;
        currentCharacterIndex++;
        setTimeout(displayNextCharacter, 100); // 글자가 나타나는 간격 (ms)
      } else {
        chatBox.innerHTML += "<br>";
        currentMessageIndex++;
        currentCharacterIndex = 0;
        setTimeout(displayNextCharacter, 500); // 다음 메시지가 나타나는 간격 (ms)
      }
    }
  }
  
  displayNextCharacter();
  