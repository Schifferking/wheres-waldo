# wheres-waldo

This project consists of a moderns version of the "Where's Waldo/Wally?" game.

It's done with the knowledge of previous projects and topics plus the following ones:

- context API
- reducers
- refs
- memoization

This project will feature a score, represented with time. The user will be asked to enter a name if his time is one of the best, which will be displayed on a high scores table.

It also has logic to display a box and list of characters to be found when clicked anywhere in the photo. These will disappear when the user clicks in another place. A marker will be put when the user finds a character.

Another feature of this project is the use of backend with frontend. It uses Ruby on Rails for the backend and React for the frontend. The frontend
will make calls to get the character positions in pixels. It will also save the user times on the backend.

# how to play

1. Find Waldo/Wally or other character in the photo
2. Click on the photo to show a box and characters list
3. Select the found character
4. Repeat above steps until all characters are found

## to-do

- build frontend
- build backend
- connect frontend with backend
- after project is "finished", add more photos and let the user select one
- add a "how to play" section before starting a game
- add tests
