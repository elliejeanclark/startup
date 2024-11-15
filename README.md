# Pop In!
## Specification Deliverable
### Elevator Pitch
Have you ever wondered what move or show you should start watching next? Or have you ever wanted a place to keep track of your thoughts on shows and movies that you have watched? My application, Pop In!, will provide an environment where people can write down reviews of movies and tv shows and save them to their profile for later when talking to friends or just trying to remember that show what you wanted to watch! You will also be able to look up other public reviews, and rate them, to get an idea of what to watch next!
### Design
![rough layout for Pop In!](./public/Rough%20Design.png)
### Key Features
* Secure login over HTTPS
* Ability to write and save reviews to an individual profile.
    - Ability to make reviews public or private
* Ability to rate other reviews so that others know if they are trustworthy/relatable.
    - Ability to see total ratings for a review
* Reviews will be saved consistantly.
* Ability to add an image to your review
* Ability to leave a 1-10 :popcorn: review.
### Technologies
I will utilize the required techologies in these ways:
* *HTML -* I will use correct HTML to design a page that provides an area to write and publish your own review, as well as view recent reviews and rate them. I am also hoping to add a search functionality to look up specific reviews, view them larger and rate them.
* *CSS -* I will use clean and interesting color choices and stying that isn't garish or shocking to invite users to stay and interact with my application for extended periods of time.
* *JavaScript -* I will use this to provide login, publishihng reviews, and applying ratings to other reviews.
* *React -* This will provide the ability for my application to compartmentalize my users reviews and ratings of other reivews.
* *Service -* I will randomly generate a movie quote at the top of the landing page where you can see and rate other reviews. (this was modified and swapped from the original random dog meme.)
* *Authentication and Database Data -* This will store users past reviews in the database as well as help users log in and register them in the firstplace. You won't be able to rate another reivew unless you have created an account. Credentials will be securely stored.
* *WebSocket -* This will be realtime updates from the ratings on other reviews.
## HTML Deliverable
- [x] Two HTML pages. One as a landing page and a place to see and search other reviews. Pages link together successfully.
- [x] Use of Header, Footer, Body, and Nav tags in both pages. 
- [x] Links to each page in nav tags.
- [x] There are labels for each of the reviews and voting areas as well as text to invite users to create and rate reviews.
- [x] In the MyReviews page there is a placeholder for calling a third party service to quote movies.
- [x] Logo image for the website was created and integrated. Logo was created with Canva Education.
- [x] Login placeholder/create account placeholder as well as place to display username.
- [x] Websocket placeholder where realtime communication about rating of other reviews will be shown.
- [x] Placeholders for data that will be saved in the database (previous reviews)
## CSS Deliverable
- [x] Header, Footer, and main all styled. Footer leaves when resized, header always stays. 
- [x] Navigation elements in my header lead to my home page and the personal review page.
- [x] Responds to the natrual viewport, and the home page switches to a column layout when sized down.
- [x] All application elements styled with css.
- [x] All application text content styled with css. Raleway was the font I used.
- [x] My logo image was styled.
As a note, I have removed the emoji rating system and opted for a slider for simplicity.
## React Deliverable
- [x] Bundled Using Vite
- [x] There are three components, login, other reviews, and my reviews either fully functional or mocking full functionality.
- [x] Login component prevents user from accessing the website unless they have logged in. Logging out is an option and a welcome message is displayed to let the user know they logged in.
- [x] Other reviews component lets users rate a review, and then doesn't let them change that result after they have clicked the submit button. Current rating is displayed as only what the user has rated the review, but will be updated with other users ratings as well.
- [x] My reviews component saves completed reviews to a container below the form to write a new review.
- [x] React router used to navigate between components
- [x] All functionality styled nicely with css.
- [x] useState and useEffect and other hooks utilized in all components.
As a note, I have removed the search bar functionality as getting the functionality I already have took many hours, and I feel that going further is beyond my skill level currently with this class.
## Service Deliverable
- [x] I have created an HTTP Service with Node.js and Express
- [x] There is middleware to serve up my public and source frond end code.
- [x] Front end calls third party service random dad joke endpoint on the My Reviews page. This has changed from the movie quote because that API actually wasn't open resource. https://icanhazdadjoke.com/
- [x] Backend provides service endpoints for logging in, creating, and logging out users, as well as storing and updating a users reviews and ratings on other users reviews. 
- [x] Frontend calls the above endpoints.
As a note, I have changed which third party I am calling, as well as some of the functionality isn't fully there because i haven't loaded to a database yet. Logging in and consistently calling files will be fully implemented in the next deliverable. 
## Login Deliverably
- [x] You can create a new user, you will be informed if the username is already taken
- [x] Existing users can log in and log out. 
- [x] Application data like users, reviews, and ratings are all saved in my mongoDB.
- [x] User credentials are retrieved and stored in database.js and index.js
- [x] You can only actually go to the other reviews and my reivews page if you are logged in