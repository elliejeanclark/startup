# Pop In!
## Specification Deliverable
### Elevator Pitch
Have you ever wondered what move or show you should start watching next? Or have you ever wanted a place to keep track of your thoughts on shows and movies that you have watched? My application, Pop In!, will provide an environment where people can write down reviews of movies and tv shows and save them to their profile for later when talking to friends or just trying to remember that show what you wanted to watch! You will also be able to look up other public reviews, and rate them, to get an idea of what to watch next!
### Design
![rough layout for Pop In!](/Images/Rough%20Design.png)
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