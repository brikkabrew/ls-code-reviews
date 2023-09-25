## Lizard Spock

1. [x] Lizard Spock This game is a variation on the Rock Paper Scissors game that adds two more options - Lizard and Spock.

### Rules

Scissors cuts Paper covers Rock crushes Lizard poisons Spock smashes Scissors decapitates Lizard eats Paper disproves Spock vaporizes Rock crushes Scissors

Rock >

- scissors
- lizard

Paper >

- Rock
- Spock

Scissors >

- Paper
- Lizard

Lizard >

- Spock
- Paper

Spock >

- Scissors
- Rock

#### Sidebar

One possible way to restructure the code for clarity:

```javascript
const rockPaperScissorRules = {
  rock: ["scissors", "lizard"],
  paper: ["rock", "spock"],
  scissors: ["paper", "lizard"],
  lizard: ["spock", "paper"],
  spock: ["scissors", "rock"],
};
```

## Input

[x] Typing the full word "rock" or "lizard" is tiring. Update the program so the user can type "r" for "rock," "p" for "paper," and so on. Note that if you do bonus #1, you'll have two words that start with "s." How do you resolve that?

### Algorithm

1. User prompted
2. Confirm whether valid choices begin with single letter (r, p, s, l)
3. Validate user choice
4. [Clarify user choice (if 's')]
5. Map user choice -> valid choices

#### Validating user choice

- If choice does not include r, p, l, or s
- - retrn false

### If choice is 's',

#### Clarify user choice

- Ask the user whether they meant spock or scissors
- Validate user choice
- - Return choice
- Reassign `choice` by passing it the function

### If choice is [r, p, l]

#### Map user choice -> valid choices

- r -> rock, p -> paper, l -> lizard
- return the value
- Reassign `choice` by passing it the function
