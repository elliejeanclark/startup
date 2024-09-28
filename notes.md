# Startup Setup Notes
If you are looking for the read me file, then [Click on me](/README.md)
## Styling
###  Headers
Headers have a pound symbol before them. Each following pound makes a smaller header. You can have up to six.  
### Styling Text
If you want your text to be bold you add two stars or two underscore before and after. **bold**  
Italic text is just one star or underscore. *italic*  
Two tildas is a strike through. ~~I'll never use that though.~~  
You can next italic inside your bold by doing the single underscore around the italizied words in a bold section. **like _this_!**  
But if you are feeling extra you can do three stars and do both italic and bold. ***you gotta BAT CHOU EIEYS!!! LIKE DISS***  
Believe it or not <sub> subscript </sub> and <sup> superscript </sup> work very similar and simply have sub and sup with the greater/less than symbols and a / before the closing one.  
### Quoting Text
The less than sign makes quotes.  
> "Remember when I told you about the GIANT WALL?! And you said: Don't worry Snips! We won't be going anywhere ***NEAR*** that!" - The great Ahsoka  

### Quoting Code
you can call out code with single back ticks. `like this.`  
However I can also just be fancy and do a bo of code with three back ticks before and after. ```like this.```
### Color Models
call out colors within a sentence by using back ticks. `#000000`  
Hex, RGB, and HSL work. 
### Links
Links work by wrapping the link text in straight brackets, and then the WRL in parentheses. [Click Me](https://www.youtube.com/watch?v=dQw4w9WgXcQ)
Relative links also work in the same way. 
### Images
add an ! and then wrap the alt text in square brackets and then the image link in parentheses to add images.
### Lists
Make unordered lists by preceding one or more lines of text with a dash, star, or plus.  
To order the list, precede each line with a number.  
Nested lists work by indenting one or more items below another item. Then add a list marker star or dash.  
Task lists preface the list items with a hyphen and a space then square brackets. To mark the task as complete, put an x in the braket. To escape the parentheses at the beginng of a task if you are adding them, you will need to use the '\' character.
### Emojis
Emojis are fun and you can use them with the : symbols surrounding the name of the emoji. :grin: :poop: :cat:
### MISC
Paragraphs are creating by leaving a blank line in between lines of text.   
New lines are created by two or more spaces after the line and then hitting enter.  
Footnotes have the square brackets, and then the carrot symbol with the number of the footnote. Then at the bottom of the document you add the cooresponding foot note symbol and a :.
## Sep 9
### Technologies
The laptop connects through wifi to an edge browser. The wifi is a physical layer, then there is an internet layer, a transport layer, and finally an application layer. Physical layers can be different, like a cellphone connected to cell service. Routers all speak "IP" or "internet protocol." wifi --> IP --> TCP --> HTTP --> "Hello world."  
The IP is like the post office. It has shipping labels. However, it is also unreliable. They connect routers in the internet.  
The TCP is more reliable. It waits for agkowledgement before sending a package.  
DNS converts a human readable name into an IP address.
## Creating an AWS Instance  
### Access
My public IP address is 54.208.80.51  
The link is http://54.208.80.51 [link](http://54.208.80.51)
The command for accessing my server from my terminal is `ssh -i ~/Documents/CS260/inclass.pem ubuntu@54.208.80.51`  
### What I learned
Creating an instance is easy, but managing it is diffucult. If you are getting the "permissions are too open" error, you can run the command `chmod 600 CS260/inclass.pem` which will override it. This is safe in my case because *I created* the server and the instance.  
If you aren't going to keep your instance/server running all the time, you will want either never shut down your server, or create an elastic IP address so that you can keep your same IP address.  
The Caddyfile is for the configuration of the gateway of your webservices. The public_html directory contains all the static files you are giving to Cady when used as a web service. The services directory is the place where you install all web services once built.  
The size of the server will change how much traffic your address can run as well as they types of things it can do. I am using a t2.micro
## Getting a Domain
### Creating the domain
Through AWS I purchased the domain ellie-jean.com It was $14.00. I also went and added records to my domain so that the domain name points and takes the user to my IP address. After this was successful, I can now reach my website by going to http://ellie-jean.com  
### Making it Secure
using the command `vi Caddyfile` and then pressing the "i" key to enter insert mode I edited the Caddyfile so that now the requests go through a web certificate making it so that the person using my webiste knows that it is me they are connecting to. Pressing the escape key followed `:wq` saved my changes. I then used the command `sudo service caddy restart` to restart caddy and make sure the changes took effect. Now my website uses https so the link is ***now*** https://ellie-jean.com
## The Console
### Viewing the File System
- **pwd**  - shows you what directory you are in.
- **ls** - shows what files are in the current directory. the `-la` addition shows you all files including hidden ones. the `-l` shows you premissions. The `-lh` will show you human readable information.
### Basic Commands
* **echo** - Output the parameters of the command
* **cd** - Change directory
* **mkdir** - Make directory
* **rmdir** - Remove directory
* **rm** - Remove file(s)
* **mv** - Move file(s)
* **cp** - Copy files
* **ls** - List files
* **curl** - Command line client URL browser
* **grep** - Regular expression search
* **find** - Find files
* **top** - View running processes with CPU and memory usage
* **df** - View disk statistics
* **cat** - Output the contents of a file
* **less** - Interactively output the contents of a file
* **wc** - Count the words in a file
* **ps** - View the currently running processes
* **kill** - Kill a currently running process
* **sudo** - Execute a command as a super user (admin)
* **ssh** - Create a secure shell on a remote computer
* **scp** - Securely copy files to a remote computer
* **history** - Show the history of commands
* **ping** - Check if a website is up
* **tracert** - Trace the connections to a website
* **dig** - Show the DNS information for a domain
* **man** - Look up a command in the manual
### More information
The | symbol takes the output from the command on the left and pass it to the command on the right.
The > - symbols Redirect output to a file. Overwrites the file if it exists
The >> - symbols Redirect output to a file. Appends if the file exists
# HTML
## The Basics
### Elements and Tags
Tags designate what type of text or element your text should be. For example the p tag means that the text that is wrapped in that tag is a paragraph element. Tags are creates with the less than and greater than symbols before and after the tag. The ending tag will have a forward slash / before its name.  
Common Elements:
* html - The page container
* head - Header information
* title - Title of the page
* meta - Metadata for the page such as character set or viewport settings
* script - JavaScript reference. Either a external reference, or inline
* include - External content reference
* body - The entire content body of the page
* header - Header of the main content
* footer - Footer of the main content
* nav - Navigational inputs
* main - Main content of the page
* section - A section of the main content
* aside - Aside content from the main content
* div - A block division of content
* span - An inline span of content
* h<1-9> - Text heading. From h1, the highest level, down to h9, the lowest level
* p - A paragraph of text
* b - Bring attention
* table - Table
* tr - Table row
* th - Table header
* td - Table data
* ol,ul - Ordered or unordered list
* li - List item
* a - Anchor the text to a hyperlink
* img - Graphical image reference
* dialog - Interactive component such as a confirmation
* form - A collection of user input
* input - User input field
* audio - Audio content
* video - Video content
* svg - Scalable vector graphic content
* iframe - Inline frame of another HTML page
### Attributes
Attributes describe the specific details of the element. Examples include id and class. They are written inside the element tag after the tag name and before the closing greater than sign. Single or double quotes are used. Remember to use the equal sign and not the colon when deliminating what an attribute is. 
### Hyperlinks
The ability to move from one page to another. Hyperlinks are represented with the an anchor element (a) and has an attribute containing the address of the hyperlink reference (href).
### Other things of Import
HTML defines a header `<!Doctype html>` that tells the broswer the type and version of the document. Always include this at the top of the HTML file.  
Comments: `<!--my comment here-->`
Special characters need entity syntax because they have special meaning in HTML.  
By default a web server displays the HTML file named index.html when a specific request is not made.
## HTML structure elements
HTML provides structure and content to a web application.
A Block element is supposed to be a distinct block in the flow of the content structre. An inline element is meant to be inline with the content flow of a block element. 
## HTML Input
### Input Elements
* form - Input container and submission: <form action="form.html" method="post">
* fieldset - Labeled input grouping: <fieldset> ... </fieldset>
* input - Multiple types of user input: <input type="" />
    - Inputs can have multiple types. Some common ones include text, password, email, tel, url, number, checkbox, radio (exclusive selection ie which of the following is your favorite of these three options), range, date, datetime-local, month, week, color, file, and submit.
    - Inputs also have some common elements. These include name, disabled (which makes it so the user can't interact with the input), value (initial value), and required (makes it so you have to submit something, a value is required).
* select - Selection dropdown: <select><option>1</option></select>
* optgroup - Grouped selection dropdown: <optgroup><option>1</option></optgroup>
* option - Selection option: <option selected>option2</option>
* textarea - Multiline text input: <textarea></textarea>
* label - Individual input label: <label for="range">Range: </label>
* output - Output of input: <output for="range">0</output>
* meter - Display value with a known range: <meter min="0" max="100" value="50"></meter>
### Input Validation
A lot of inputs have validation, which means that only certain things are allowed to be inputed.  
The pattern attribute works with the following elements: text, search, url, tel, email, and password. The pattern element creates a regular expression that must match for the input to be valid.  
Input Validation will also be a big part of javascript. CSS will provide feedback early on to show the user if they are providing valid input or not, as well as showing that the input was accepted.
## HTML Media
### Media elements
* img
    - reference to an external file.
    - alt attribute is the text that describes the image
    - src is the link to the image.
* audio
    - reference to an external file.
    - src is the link to the audio.
    - include controls if you want the user to be able to control audio playback. 
    - autoplay attribute starts the audio playing as soon as the audio file is loaded.
    - loop keeps it looping believe it or not. 
* video
    - reference to an external file.
    - src for url
    - also has contros and autoplay attributes.
    - if you are requesting files from a different domain than the one serving your content, you may need to use the attribute `crossorigin="anonymous"` so that you can access it. 
* svg
    - contain code to render visual image that can be animated.
* canvas
    - contain code to render visual image that can be animated.
### External Media
Media tags that reference external media all take a URL as an attribue. It can be a relative or full path. (Relative path means that it is served from the same location as the HTML page rendering the element.)
### Internal media
Both the canvas and svg elements require code that you write. CSS is used with svg to help make great images, and the cavnas tool needs JavaScript support to help us "draw" in the area.
# Deployment
Deploying deletes any previous deployment, copies up all the files found in the project directory, and makes sure Caddy is hosting the files under the simon subdomain of your domain.
`./deployFiles.sh -k <yourpemkey> -h <yourdomain> -s <service>` To deploy simon to my project the command looks like `./deployFiles.sh -k ~/Documents/CS260/inclass.pem -h ellie-jean.com -s simon`  
If you want to update your HTML, save changes to the code and then redeploy. For deploying to my domain now because I copied the deployFiles.sh content into my [deploy.sh](/deploy.sh) file, the command is `./deploy.sh -k ~/Documents/CS260/inclass.pem -h ellie-jean.com -s <service>`
# CSS
## CSS Introduction
CSS defines rules for the HTML. A rule has a selector which chooes the HTML element to apply the styling to, and then uses a colon to declare a value for a certain property, like a color. 
### CSS and HTML
There are a couple different ways that you can incorporate CSS. 
- Use the "style" attribute directly inside the HTML itself. 
- Use a `<style>` element in the `<head>` of the HTML document to apply CSS to an entire HTML document. 
- Use the `<link>` element in the `<head>` of the HTML document to link to a relative CSS file that has all the rules defined. This is the preferred ways to include CSS inside your HTML.
### Cascading Styles
Because of the way that CSS works, as you get more specific with an element having a specific rule, it will override the more general rule. All p tags are told to be red, then p tags in this specific table are told to be blue, and then this specific p tag in the table it told to be green. So there will be red, blue, and green tags, blue in the table, and then one specific tag will be green.
### Box Model
Everything in CSS is held inside of boxes. The box contains margins, borders, padding, and content. How big your content box is will automatically determine the size of the other boxes. You can change the height and width of the content and border boxes by using the `box sizing` property of CSS.
## Selectors
### Element Type Selectors
This is used to select an entire element to change the style of. For example this is how we would change the "default" font for our document.  
There is a wildcard selector to pick all elements, that is the `*` selector.  
### Combinators
Descendant cobinators combine two elements. The second is the descendant. For example, if I wanted all h2 tags in a secion to be blue, then I would have section then h2 followed by the rule. There are a couple different types of combinators.
- Descendant - a list of descendants
    * ie `body section` would mean that the following rules apply to any section that is a descendant of a body.
- Child - a list of direct children.
    * ie `secion > p` so that any p that is a *direct* child of a section.
- General Siblings - a list of siblings 
    * ie `div ~ p` is any p that has a div sibling.
- Adjacent siblings - a list of adjacent siblings
    * ie `div + p` is any p that has an adjacent div sibling.
### Class Selector
Any element can have zero or more classifications applied to it. If you want to apply a rule to a specific element by class, you prefix that class name with a period. ie `.summary`.  
You can also combind the lement name and class selectors to select all of an element name with a specific class. ie `p.summary` would get all paragraphs with the summary class.
### ID Selector
You can also reference the ID of an element. Prefix it with the hash symbol `#` to select it. 
### Attribute Selector
Allows you to select elements based on attributes. They also suuport wildcards. So you could do `p[href*="https://"]`
### Pseudo Selector
Pseudo Selectors are based on positional relationships, mouse interactions, hyperlink visitation states, and attributes. To accomplish this, we can change the selector to have a colon and then what the action is doing. ie `section:hover`. 
## Declarations
CSS Rule declarations specify a property and a value to assignewhen the rule selector matches one or more elements. Here are some commonly used ones.
- background-color
- border
- border-radius: creates rounded corners on elements. Percentages and pixels accepted.
- box-shadow: adds shadow effects.
    - horizontal-offset is the horizontal distance of the shadow. Potivie values to the right, negative to the left.
    - vertical-offset is the vertical distance of the shadow. positive values move the shadow ***down*** and negative move them ***up***.
- columns: creates a multi-column layout for element. `columns` is shorthand for `column-width` and `column-count`. 
- color
- cursor: sets the cursor to display when hovering over the element.
- display: defines how to display the element and its children.
- filter: applies a visual filter.
- float: places element to left or right in flow.
- flex: flex layout, used for responsive design
- font
- grid: grid layout
- height: sets the height of the box
- margin: sets the margin spacing
- max: restricts the width or height to no more than the unit.
- min: restricts the width or height to no less than the unit.
- opacity
- overflow: defines what happens when content doesn't fit inside the box. 
- position: defines how the element is positioned in the document.
- padding: sets the padding spacing
- left: the horizontal value of a positioned element
- text-align: defines how the text is aligned in the element
- top: thevertical value of a positioned element
- transform: applies a transformation to the element.
- width: sets the width of the box.
- z-index: controls the positioning of the element on the z axis.
### Units
Units can change based on the element you are trying to define. Here are some common ones. They are all prefixed with a number when used as a property.
- px: number of pixels
- pt: number of points (1/72 of an inch)
- in: number of inches
- cm: number of centimeters
- %: percentage of the parent element
- emj: a multiplier of the width of the letter m in the parent's font
- rem: a multiplier of the width of the letter m in the root's font.
- ex: a multiplier of the height of the element's font.
- vw: a percentage of the viewport's width
- vh: a percentage of the viewport's height
- vmin: a percentage of the viewport's smaller dimension
- vmax: a percentage of the viewport's larger dimension.
### Color
There are multiple ways to describe color.
- keyword ie red
- RGB hex
- RGB function
    - red green and blue as a percentage or number between 0-225 with an optional alpha opacity percentage.
- HSL
    - hue, saturation, light
## Fonts
The `font-family` property of CSS is what controls fonts for a webpage. It is good to stick with one font family. 
### Font Families
There are four major families of fonts. Serif, sans-serif, fixed, and symbol. Serifs are extra strokes at the ends of letters. So sans-serif fonts do not have the extra strokes. Fixed font characters are all the same size. (useful for lining up text.) Symbols are non-language characters like arrows and emojis.
### Importing fonts
The `@font-face` property will pick a family that you can import from a url. You can also use the `@import` property to import a font family. Font-Face is for a font on your family, and import is for an open source font you are pulling from. 
## Animations
Use the `animation` and `keyframes` properties to change what the animation looks like at different times.
### The Basics
You will want to specify the the `animation-name` and `animation-duration` to tell the code what animation to use and how long to complete the animation.  
The `alternate` tag tells it to go backwards through the animation as well. `infinite` tells the animation to loop for infinite times.  
The `animation-iteration-count` will allow you to specify how many times you want the animation to occur.  
You can also just use the `animate` property, and then what you enter after will be in the following order: duration, optional easing-function, delay, iteration-count, direction (aka going backwords or forwards through your keyframe), fill-mode, play-state, name of animation.
### Keyframes
Keywords like from and to help you tell keyframe what to do as time progresses. You can also specify a specific point at which you want a different thing to happen. Like `95%`. To name the animation put the name of the animation after the `@keyframes` property.
## Responsive Design
This is the ability to recognize the interface and changes to the interface so that your design can adapt and still be clear and understandable.
### Display
The display element in CSS allows you to change how a thing is displaying in HTML. Here are some common options with this element. 
- none: Don't display this element. The element still exists, but the browser will not render it.
- block: Display this element with a width that fills its parent element. A p or div element has block display by default.
    - The div element in HTML uses the diplay property block.
- inline: Display this element with a width that is only as big as its content. A b or span element has inline display by default.
- flex: Display this element's children in a flexible orientation.
- grid: Display this element's children in a grid orientation.
### Viewport Meta Tag
These tell the website not to just scale everything based on the different viewports. This is included in the `<head>` of your html document. An example: `<meta name="viewport" content="width=device-width,initial-scale=1" />`
### Float
Moves an element to the left or right of it's container element and allows inline elements to wrap around it. I.e. causing text to wrap around an image.
### Media Queries
The `@media` selector allows us to know which side of the screen is the longest. It takes one or more predicates (parameters). ie `@media (orientation: portrait)`. You then tell what you want your website to do if things are changing. 
## Grid
This is used when you want to display child elements in a responsive grid. The `grid-template-columns` property can specify the layout of the grid columns. In this example, `grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));` we are telling it to repeatedly auto size the grid elements to be a minimum of 300px wide and a maximum of 1 fr (fraction unit of the parent) wide. You can then add things like gaps in between the grid elements using the `grid-gap` property, and you can also specify what height you want the elements to be using the `grid-auto-rows` property. 
## Flex
Allows the design to move in reponse to the user. `display: flex` tells all the children of the element are to be displayed in a flex flow. The `flex-direction` property will tell the container which direction the children are placed in the container. So it defines the main axis along which the flex items are laid out. (column/row) Row is side by side, and column is on top of each other.
### Children
Each child then gets flex properties. `flex: 0 80px` will mean that it will not grow and the 80px means it has a starting base height of 80 pixels. `flex: 1` means it will get one fractional unit of growth. Other children that have flex properties with numbers will then get that much fractional units in relation to the other objects.
### Media Query
To handle small screen sizes we drop the header and footer if the viewport gets too short, and then orient the main sections as rows if it gets too narrow. To suppors portrait mode, we include a media query that detects when we are in portrait orientation and sets the flex-direction of the main element to be a column instead of a row. 