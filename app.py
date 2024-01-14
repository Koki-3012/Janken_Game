from flask import Flask, render_template, request
import random

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html', user_choice=None, computer_choice=None, result=None)


@app.route('/play', methods=['POST'])
def play():
    choices = ['rock', 'paper', 'scissors']
    user_choice = request.form['choice']
    computer_choice = random.choice(choices)

    result = determine_winner(user_choice, computer_choice)

    return render_template('index.html', user_choice=user_choice, computer_choice=computer_choice, result=result)

def determine_winner(user_choice, computer_choice):
    # じゃんけんのルールに基づいて勝敗を判定するロジックをここに実装
    # 例: rockがpaperに負ける、paperがscissorsに負ける、scissorsがrockに負ける
    if user_choice == computer_choice:
        return '引き分け'
    elif (
        (user_choice == 'rock' and computer_choice == 'scissors') or
        (user_choice == 'paper' and computer_choice == 'rock') or
        (user_choice == 'scissors' and computer_choice == 'paper')
    ):
        return '勝ち'
    else:
        return '負け'

if __name__ == '__main__':
    app.run(debug=True)
