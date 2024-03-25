import json

def handler(event, context):
    player_move = event.get('queryStringParameters', {}).get('move')  # Assuming move from query string

    possible_moves = ["rock", "paper", "scissors"]
    computer_move = random.choice(possible_moves)

    response = {
        'statusCode': 200,
        'body': json.dumps({
            'computerMove': computer_move,
        })
    }
    return response
