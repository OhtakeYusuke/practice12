import consumer from "./consumer"

const appRoom = consumer.subscriptions.create("RoomChannel", {
  connected() {
  },

  disconnected() {
  },

  received(message) {
    // viewのidがmessagesのオブジェクトを取得
    const messages = document.getElementById('messages')
    // オブジェクトのHTMLに以下のデータを追加で挿入
    messages.innerHTML += `<p>${message}</p>`
  },

  speak: function(content) {
    return this.perform('speak', {message: content});
  }
});

document.addEventListener("DOMContentLoaded", function(){
  // rooms/show.html.erbのidがchat-inputのオブジェクトを取得
  const input = document.getElementById('chat-input')
  // rooms/show.html.erbのidがbuttonのオブジェクトを取得
  const button = document.getElementById('button')
  // buttonクリック時の操作を記述
  button.addEventListener('click', function() {
    // inputに入力された値を取得
    const content = input.value
    // App.roomのspeakメソッドを実行
    appRoom.speak(content)
    // inputの入力値を空文字にする
    input.value = ''
  })              
})
