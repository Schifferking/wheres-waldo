# wheres-waldo

This project consists of a modern version of the "Where's Waldo/Wally?" game.

It's done with the knowledge of previous projects and topics plus the following ones:

- React context API
- React refs
- React memoization
- Ruby on Rail Action Cable (Websockets)

This project features a score, represented with time. The user is asked to enter an optional name if his time is one of the best, which will be displayed on a high scores table, otherwise, it will be displayed as an anonymous user.

It also has logic to display a box and list of characters to be found when clicked anywhere in the photo. These elements will disappear when the user clicks in another place inside the photo. A marker will be put each time the user finds a character.

Another important feature, compared to previous projects is the use of both backend and frontend. It uses Ruby on Rails for the backend and React for the frontend. The frontend will make calls to get the character positions in pixels. It will also save the user times on the backend.

# how to play

1. Find Waldo/Wally or other character in the photo
2. Click on the photo to show a box and characters list
3. Select the found character
4. Repeat above steps until all characters are found
5. If your score is one of the best, you may give a name to be displayed on the best scores.

## to-do

- Refactor (maybe use reducers to decrease the amount of state variables)
- add logic to let mobile users play the game (also update markers position when changing screen size)
- add footer
- consider placing high scores table between score and image
- improve styling
- add more photos and let the user select one before starting
- add an optional "how to play" section before starting a game
- add tests on both back end and front end
