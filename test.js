function onTextareaInput() {
    const textarea = document.getElementById('input_sentence');
    const sendButton = document.getElementById('send_btn_img');
    console.log('들어옴');
    // textarea의 입력 내용이 비어있으면 기본 이미지로 변경
    if (textarea.value.trim() === '') {
        sendButton.src = './send.png'; // 기본 이미지 파일명
    } else {
        sendButton.src = './send_on.png'; // 변경된 이미지 파일명
    }
}

function sendSentence() {
    
}

// textarea 입력 내용이 변경될 때마다 onTextareaInput 함수 호출
document.getElementById('input_sentence').addEventListener('input', onTextareaInput);
document.getElementById('input_sentence').addEventListener('keydown', function(e) {
    if (e.keyCode === 13) {
        alert('엔터키눌림');
    }
    else if(e.shiftKey && e.keyCode === 13){
        alert('줄바꿈하자')
    }
});

function send_Sinjoword() {
    const input_sentence = document.getElementById('input_sentence').value;
    const data = { 'input_sentence': input_sentence };
    
    // AJAX 요청
    let xhr = new XMLHttpRequest();
    // 요청 보내는부분
    xhr.open('POST', 'http://127.0.0.1:8000/request', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            // 임시로 버튼 1에 테스트해보기
            if (xhr.status === 200) {
                const result = JSON.parse(xhr.responseText);
                document.getElementById('test').innerText += `Response: ${result.sentence}`;
            } else {
                console.error('Error:', xhr.status);
                document.getElementById('but1').innerText = 'Error occurred. Please try again.';
            }
        }
    };
    xhr.send(JSON.stringify(data));
}