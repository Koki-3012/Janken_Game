document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('janken-form');
    var resultDiv = document.getElementById('result');
    var userChoiceSpan = document.getElementById('user-choice');
    var computerChoiceSpan = document.getElementById('computer-choice');
    var gameResultSpan = document.getElementById('game-result');

    form.addEventListener('change', function () {
        resultDiv.style.display = 'block';

        var userChoice = document.querySelector('input[name="choice"]:checked').value;
        userChoiceSpan.textContent = userChoice;

        // サーバーに選択を送信し、結果を受け取る（非同期通信などで実装）
        // ここではランダムで相手の選択を生成しています
        var choices = ['rock', 'paper', 'scissors'];
        var computerChoice = choices[Math.floor(Math.random() * choices.length)];
        computerChoiceSpan.textContent = computerChoice;

        var result = determineWinner(userChoice, computerChoice);
        gameResultSpan.textContent = result;
    });

    function determineWinner(userChoice, computerChoice) {
        // じゃんけんの勝敗判定ロジック
        // この部分はサーバーサイドで行っても良い
        if (userChoice == computerChoice) {
            return '引き分け';
        } else if (
            (userChoice == 'rock' && computerChoice == 'scissors') ||
            (userChoice == 'paper' && computerChoice == 'rock') ||
            (userChoice == 'scissors' && computerChoice == 'paper')
        ) {
            return '勝ち';
        } else {
            return '負け';
        }
    }
});
