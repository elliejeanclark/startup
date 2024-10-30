# Startup Notes
If you are looking for the read me file, then [Click on me](/README.md)
# Writing in MD
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
# Getting Started
### Technologies
The laptop connects through wifi to an edge browser. The wifi is a physical layer, then there is an internet layer, a transport layer, and finally an application layer. Physical layers can be different, like a cellphone connected to cell service. Routers all speak "IP" or "internet protocol." wifi --> IP --> TCP --> HTTP --> "Hello world."  
The IP is like the post office. It has shipping labels. However, it is also unreliable. They connect routers in the internet.  
The TCP is more reliable. It waits for agkowledgement before sending a package.  
DNS converts a human readable name into an IP address.  
- an A record is a type of DNS that maps the domain name to the IP address of the computer that hosts the domain.
### Ports
Ports are where network connections start and end. 
- 443 encrypts communication between a web browser and the website.
- 80 is for HTTPS communications between a client computer and the server they are accessing
- 23 is the telnet protocal, and it allows remote communication between a user and a computer.  
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
Through AWS I purchased the domain ellie-jean.com It was $14.00. I also went and added records to my domain so that the domain name points and takes the user to my IP address. After this was successful, I can now reach my website by going to http://ellie-jean.com The top level domain is the thing following the final period. In my case it is "com"
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
* div - A block division of content. A container for HTML content. Puts a line break before and after the element.
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
CSS defines rules for the HTML. A rule has a selector which chooses the HTML element to apply the styling to, and then uses a colon to declare a value for a certain property, like a color. 
### CSS and HTML
There are a couple different ways that you can incorporate CSS. 
- Use the "style" attribute directly inside the HTML itself. 
- Use a `<style>` element in the `<head>` of the HTML document to apply CSS to an entire HTML document. 
- Use the `<link>` element in the `<head>` of the HTML document to link to a relative CSS file that has all the rules defined. This is the preferred ways to include CSS inside your HTML.
### Cascading Styles
Because of the way that CSS works, as you get more specific with an element having a specific rule, it will override the more general rule. All p tags are told to be red, then p tags in this specific table are told to be blue, and then this specific p tag in the table it told to be green. So there will be red, blue, and green tags, blue in the table, and then one specific tag will be green.
### Box Model
Everything in CSS is held inside of boxes. The box contains margins, borders, padding, and content. How big your content box is will automatically determine the size of the other boxes. You can change the height and width of the content and border boxes by using the `box sizing` property of CSS. The inner layer is content, then padding, then border, than margins.
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
- margin: sets the margin spacing, this is spacing OUTSIDE of the element.
- max: restricts the width or height to no more than the unit.
- min: restricts the width or height to no less than the unit.
- opacity
- overflow: defines what happens when content doesn't fit inside the box. 
- position: defines how the element is positioned in the document.
- padding: sets the padding spacing, this is spacing INSIDE of the element
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
## Debugging
In a browser, you can right click on text and press the `inspect` button to look at the code for the website. The `styles` pane will show you what css properties are applied to the selected element. You can also move your mouse over the different parts of the css pane and see the different box parts in the browser window. 
## Frameworks
CSS frameworks provide functions and components that commonly appear in web applications. 
### Tailwind
Moves a lot of CSS directly into the HTML. It deals with more specific HTML elements recieving specific CSS rules rather than large rule groups. 
### Bootstrap
The Reigning Chamption for CSS. This is so widley used, that it also sometimes makes it harder for websites to stand out and catch attention.
#### Getting Bootstrap
You can link to Bootstraps CDN (content delivery network), in the head with the following code. (note: this might not be for the newest version of Bootstrap, so this might not be how you do it later.)  `<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous"/>`  
You also will want to add `<meta name="viewport" content="width=device-width, initial-scale=1">` to help the application start to be visually good for mobile devices, and then make it bigger for web browsers.  
If you are going to use javascript with bootstrap, you will also need that module. `<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>`  
You can also download bootstrap and include it in your code with this in the terminal: `npm install bootstrap@5.2.3`. 
#### Using Bootstrap
When using Bootstrap, you add a class to your element from the bootstrap library. Inside the HTML file itself. The CSS file is where you then overwrite anything you don't want the bootstrap to do. ie to use the basic button you would say `<button type="button" class="btn btn-primary">Bootstrap</button>` The btn-primary shades the color with the color that is the current primary color for the application. If I then wanted to override the color, I would go into my css document and assign a color to that button different from the one that bootstrap assigned.
# JavaScript
## Introduction
It is an interpreter that runs at runtime and not just at compiling. Makes it very portable, but prone to crash. The build it function `console.log()` outputs the contents to the debugger console. You can also write your own javascript functions. It is good practice to include a semicolon after every statment, and keep code blocks in curly braces.
## JavaScript Console
This is a useful tool (not your terminal) to help debug your code by outputting things to the console. 
### Log
The log parameter is used to output things. You can also format strings with the log parameter. You can also specify CSS stylings for the output. ie, `console.log('%c JavaScript Demo', 'font-size:1.5em; color:green;');`
### Time
The time and timeEnd console parameters allow you to wrap code and see how long it takes. ie, `console.time('demo time'); //some code... console.timeEnd('demo time');` outputs `demo time: *insert time here* ms`
### Count
The count console parameter allows you to see how many times a block of code is called. ie, `console.count('a')` would output `a: 1` but then if I called `console.count('a')` again I would get `a: 2`
## Adding JavaScript to HTML
You can either reference an outside javaScript file with the `src` attribute of script, or you can inside of a `<script>` element you can type the javaScript directly. There are special attributes that you can then add to your HTML with javaScript like `onclick` which creates an automatic event listener that call the code created in the attribute's value. The call can be a JavaScript function, or anything inside of JavaScript code.  
Using the `document.getElementByID('id')` you can do a lot of things, like change the style, call different javascript, fill in different text, and so much more. You can also set `.display` and `.style` to different things based on clicks or other user inputs.
### Other Cool things from Lecture
- window.alert is very useful to find and see if we are entering code, it throws up an alert in the window.
- Parameters are suggestions in JavaScript
- The indexOf() method returns the position of the first occurence of a string in a string. 
## JavaScript type and contsruct
### Declaring Variables
Variables are declared using either the `let` or `const` keyword. let allows you to change the value of the variable while const will cause an error if you try to change it. 
### Types
- null: they type of variable that has not been assigned a value. 
- undefined: the type of a variable that has not been defined.
- boolean: true or false.
- number: a 64-bit signed number
- BigInt: A number of arbitrary magnitude.
- String: a textual sequence of characters
- symbol: a unique value. 
### Object Types
- Object: a collection of properties represented by name-value pairs. Values can be of any type. 
- Function: An object that has the ability to be called.
    * function a() {}
- Date: calander dates and times
    * new Date('1995-12-17')
- Map: a collection of key-value paris that support efficient lookups. 
- JSON: A Lightweight data-interchange format used to share information across programs. 
### Common operators
Mathmatical: + = * / and === (equality). String: + (concatenation) and === equality.
### Type Conversions
Types can be automatically converted based upon context. The strict equality +++ and inequality !== skip the type conversion when computing equality. This is always preferred. 
### Conditionals
if, else, and else if are supported. You can also use ternary operator, here is an example: `a === 1 ? console.log(1) : console.log('not 1');`  
Common boolean operations: && (and) || (or) ! (not)  
### Loops
You can use for, for in, for of, while, do while, and switch loops in JavaScript. for in statment iterates over an object's property name. For of iterates over an iterable's property values like array, map, set. Break and continue statements are used to abort or advance the loop. Switch statments have a bunch of `case`s that will compare the output of the expression to and then run code inside of the block and then break the statment. If you don't have anything that matches none of the cases will run.
## String Functions
- length: the number of characters in the string. 
- indexOf(): the starting index of a given substring
- split(): split the string into an array on the given delimter string
- startsWith(): true is the string has a given prefix
- endsWith(): true if the string has a given suffix
- toLowerCase(): converts all characters to lowercase.
## Functions
JavaScript functions are first class objects. They can be passed parameters and referenced from an object or array just like any other variable. You start functions with the `function` keyword followed by any passed in parameters in () and then a body that can have one or more return statements. 
### Parameters
If parameters aren't assigned they will be assigned a value of undefined. You can also assign default values in the parameter creation of the funciton. ie `function labeler(value, title="title"){}`. Functions can also be passed in as parameters. 
### Anonymous Functions
It is common to assign a function to a variable so that they can be passed as a parameter into other functions. To delcare an anonymous function you assign a function to a variable name. Like this: `const add = function (a, b) {return a + b; };` Then if I wanted to use that function in another function I could say something like `domath(add, a, b)` if domath was a function I already delcared. You can also declare the function in the parameter itself. ie. `domath(function (a, b) {return a + b;}, a, b)` and it would do the same thing.
### Inner Functions
You can create functions inside of functions, and then based on values passed into the original function call, call certian functions and assign them to the return value of the original statement. 
## Arrow Functions
Arrow syntax replaces the need for the `function` keyword. The arrow symbol `=>` is then used after the parameter declaration. The following {} are then optional. For example, this function always returns 3. `() => 3;`. Arrow functions cannot be used for constructors or iterator generators.
### Return values
Arrow syntax has special rules with return. The return keyword isn't required if there are no {} and the function only has a single expression. When this is true, the result of the expression is automatically returned. If {} are present then it just acts like a normal function. ie `() => 3;` returns 3, but `() => {3;}` returns undefined because 3 is a variable not the expression.
### This pointer
A closure allows a function to reference its creation scope. This is often used for functions returning another function. This helps when we want to remember what something is when we originally created it, and not when the function is executed. It can also be used like we saw in class to create functions that can do different things based on what is passed in. 
## Arrays
It functions like you think it does :joy:
### Functions
- push:	Add an item to the end of the array	`a.push(4)`
- pop:	Remove an item from the end of the array	`x = a.pop()`
- slice:	Return a sub-array	`a.slice(1,-1)`
- sort:	Run a function to sort an array in place    `a.sort((a,b) => b-a)`
- values:	Creates an iterator for use with a for of loop	f`or (i of a.values()) {...}`
- find:	Find the first item satisfied by a test function	`a.find(i => i < 2)`
- forEach:	Run a function on each array item	`a.forEach(console.log)`
- reduce:	Run a function to reduce each array item to a single item	`a.reduce((a, c) => a + c)`
- map:	Run a function to map an array to a new array	`a.map(i => i+i)`
- filter:	Run a function to remove items	`a.filter(i => i%2)`
- every:	Run a function to test if all items match	`a.every(i => i < 3)`
- some:	Run a function to test if any items match	`a.some(i => i < 1)`
## JSON
Stands for JavaScript Object Notation. 
### Format
Here are the common data types that JSON files have. 
- string
- boolean
- number
- array
- object
- null

The most common one is an object. Objects contain zero or more key value pairs. The key is always a string, and the value must be a valid JSON type.
### Delimination
Strings are wrapped in double quotes, {} are used for objects, and key value pairs are linked with : and separated by commas. Square brackets wrap arrays with commas seperating the items.
### Converting to JavaScript
To conver from JavaScript to JSON you use  `JSON.strigify()` and to convert from JSON to Javascript you use `JSON.parse()`. Anything that is something JSON cannot reprisent gets dropped when converting from JavaScript to JSON.
## Object and Classes
An object is a collection of value pairs called properties. Properties must be strings or symbols, but the value can be any type. Objects are created with the `new` operator. Properties can be reference with either dot `obj.prop` or bracket `obj['prop']` notation.
### Object Literals
You can declare a varaible of object type with the `object-literal` syntax. IE you can create the base of an ojbect with the {} and then declare some key-pair values inside.
### Object Functions
Common functions:
- entries(): returns an array of key value pairs ie `Object.entries(obj)`
- keys(): returns an array of keys. ie `Object.keys(obj)`
- values(): returns an array of values. ie `Object.values(obj)`
### Constructor
Any function that returns an object is considered a constructor and can be invoked with the `new` operator. So I can create a functio that returns a key-value pair like `name: name,` and takes in "name" as a paramter, and then call it with `new Person("James")` and it will output `name: James`. You can also create methods on an object, ie having a key pair value that the key is the function name, and then the value is a function.
### This Pointer
this.property depends on the scope of where it is used, but with an object it refers to a pointer to the object. 
### Classes
classes can define objects. It is used with the intent to create a reusable component rather than a one-off object. Very similar to declaring an object, but they have an explicit constructor. ie `constructor(name) {this.name = name;}`  
You can make properties and functions of classes private by prefixing them with a #. 
### Inheritance
You can extend classes by using the `extends` keyword to define inheritance. Paramteres passed in are delivered using the `super` function. If a child has the same function name as a parent, the child will override the parent. If you want to access a parent's function, you can explicitly access it using the `super` keyword. ie `class Employee extends Person {constructor(name, position) {super(name);}}`
## Regular Expressions
Regular Expressions are essentially textual pattern matches. You can use it to find a string and know it exists, but then also to replace that string.  
Creation of regular expressions works either with class constructors (ie `const objRegex = new RegExp('ab*', 'i');`) or with a regular expression literal (ie `const literalRegex = /ab*/i;`).  
There are ways to modify how you are doing the search. Add modifiers after the regular expression. `/regularexpression/modifiers`  
There are several string functions that work with regular expressions. They are, match, replace, search, and split. Search returns the index of the first match of the regular expression in the string. Match returns anything that matched the regular expression. Replace takes in the regular expression and what you want to replace it with. Split allows you to separate a string based on a specific seperator provided by the regular expression. You can also specify how many maximum substrings you want out of the total string you are splitting.
### Common Rules with Regular Expressions in JavaScript
1. **Matching a specific string**: Use the string literal directly. For example, `/hello/` will match the string "hello" in a text.

2. **Matching any character**: Use the dot (.) metacharacter. For example, `/a.b/` will match any string that has an "a", followed by any character, and then a "b".

3. **Matching a specific set of characters**: Use square brackets ([]). For example, `/[aeiou]/` will match any vowel in a text.

4. **Matching a range of characters**: Use a hyphen (-) inside square brackets. For example, `/[a-z]/` will match any lowercase letter.

5. **Matching multiple occurrences**: Use the plus sign (+) after the pattern. For example, `/a+/` will match one or more occurrences of the letter "a".

6. **Matching optional occurrences**: Use the question mark (?) after the pattern. For example, `/colou?r/` will match both "color" and "colour".

7. **Matching a specific number of occurrences**: Use curly braces ({}) with a specific number inside. For example, `/a{3}/` will match exactly three occurrences of the letter "a".

8. **Matching word boundaries**: Use the \b metacharacter. For example, `/\bcat\b/` will match the word "cat" but not "catch" or "scattered".

9. **Matching the start or end of a string**: Use the caret (^) to match the start and the dollar sign ($) to match the end. For example, `/^hello/` will match any string that starts with "hello".

10. **Matching any character except a specific set**: Use the caret (^) inside square brackets. For example, `/[^0-9]/` will match any character that is not a digit.
## Rest and Spread
### Rest
If you want a function to take a list of unknown parameters, you can use the rest function. This essentially is a parameter in JavaScript to hold the "rest" of the parameters. To create the final parameter into a rest parameter, you prefix it with three periods. ie `...numbers` The things passed into the parameter will automatically be put into an array.  
This is often used with the `.some()` method. This method tests whether there is at least one element in an array that passes a provided function. It returns true or false.  
***Important*** You can only use the rest function on the **last** parameter.
### Spread
The opposite of rest. When you are passed in an iterable object, it expands the object into the rest of the parameters of the function. You still use the three dots as a prefix of the parameter to make it spread. 
## Exceptions
### Try, Catch, and Throw
To catch thrown expressions, wrap code in a `try` block. Then you write a `catch` block. Then any code that throws an exception in a try block will skip the rest of the code in the call block, and move into the catch block. You can also add a `finally` block that will call code every time a try block runs, regardless of whether an exception is thrown in the try block. You can `throw new <ErrorName>(<error message>)` to point out that an error occured, and it will jump to the nearest catch block. 
### Fallbacks
This is a pattern to use if you can't find a specific thing or execute a specific function that allows you to still return something and run code. For example, instead of throwing errors in try and cath block, you can try a line of code, and then if an error happens run a different line of code. 
## Destructuring
This is used to destructure objects and arrays or pull things out of them, and is useful when we only want to focus on a few elements of an array and an object. 
### Destructuring arrays.
This is essentially done by taking a larger array, and assigning them into a smaller array. For example: `const a = [1, 2, 3, 4]` followed by `const [b, c] = a` and then `console.log(b, c)` will output 1, 2.  
You can combine the remaining elements of an array using rest syntax. For example: `const [b, c, ...others]` makes 1, 2, [4, 5]
### Destructuring Objects
Instead of the assignment being based off of position in arrays, when destructuring objects you need to explicitly specify what properties you want to pull from the source object. For example with the following source object: `const o = { a: 1, b: 'animals', c: ['fish', 'cats'] };` you would then declare the next object with the name being the properties you want to pull. `const { a, c } = o;` would then be 1, ['fish', 'cats'].  
If you want to rename the properties you are pulling, you would do something like `const { a: count, b: type}` and then later when you did `console.log(count, type)` it would say 1, animals.  
You can also provide default values if the property doesn't exist. For example if I said `const {a, b = 22} = {}` and then said `console.log(a, b)` it would ouput "undefined, 22". 
## Scope
Scope is the variables that are visible in the current execution. There are 4 types of scope in JavaScript
- Global: Visible to all code
- Module: Visible to all code running in a module
- Function: visible within a function
- Block: Visible within a block of code deliminated by {}
### Var
We started in JavaScript by declaring variables with the `var` keyword, but it ignored block scope. This means that it would overwrite variables named with the same ignoring that it was wrapped in {} in the first place.
### This
The `this` keyword is a variable that points to an object with the context within the scope.
- Global: whenever `this` is referenced outside a function/object, it is referring to the `globalThis` object. This is the context of the runtime environment. If this is running in a browser, it referrs to the window object.
- Function: when referenced inside a function, it references the object that owns the function. If there isn't an object that you haven't defined that owns the function the object referenced is globalThis. However, if we are using JavaScript strict, then then a global functions this variable is undefined.
- Object: If referenced in an object, then this refers to the object
### Closure
A function, but also its surrounding state. `this` inside of a function wrapped in a closrue points towards the thing that it is wrapped inside. Inside of an unreturned arrow function `this` points to the creation scope. So if it is inside of an object, it points to where the object was created. Inside of a *returned* arrow function `this` points to the thing it is wrapped inside like a regular function. See notes on closures in Arrow Functions.
## Modules
Allows you to import packages from third party services. The `import` and `export` keywords are needed to move functions from one file to another because modules have a file based scope. 
### ES Modules in Browser
Modules can only be called from other modules. You cannot access JavaScript contained in a module from the global scope that your non-module JavaScript is executing in. Inside HTMl you can use a `type="module"` to then import and use modules. If you want to reference module code outside of the module 
### Web Frameworks in Modules
Web framework bundlers will make everything good in life. And make it so you don't have to worry about global vs es module scope. 
## DOM Document object Model
An object representation of the HTML elements that the browers uses to render the display. Allows you to write programs that dynamically manipulate the HTML. The "document" is like the root object that contains the rest of the code. If you in your console run `console.log(document)` it will open it in a way that you can collapse and open specific elements. 
### Changing the DOM Programatically
The `document` is the root for the whole web page. There are many functions you can then do with the javascript. For example you can use the `querySelectorAll` and select elements from the document. The `textContent` property contains all of the element's text. You can find and read this way.  
You can also `createElement` and insert that element by appending it on to an existing element in the tree.You can also remove elements with the `removeChild` function on the parent element.
### Injecting HTML
You can inject entire blocks of HTML into an element. You can use the `innerHTML` function to add those blocks of code. HOWEVER this is actually really unsafe and can be a place for users to insert bad things into your website. Sanitize HTML or just use DOM manipulation functions instead of `innerHTML`
### Event Listeners
All DOM elements can have event listeners added to them so that when an event happens, a function is called. You can add event listeners for lots of different things, here are some examples of common events. 
- Clipboard: Cut, copied, pasted
- Focus: An element gets focus
- Keyboard: Keys are pressed
- Mouse: Click events
- Text selection: When text is selected

You can also add some event listeners directly into HTML.
## Local Storage
Browser's `localStorage` API provides the ability to persistently stroe and retrieve data on a user's browser access across user sessions and HTML page renderings. It is also used as a cache for when data cannot be objtained from the server. 
### How to use local storage
Here are the four main functions that can be used with localSotrage
- setitem(name, value) : sets a named item's value into local storage
- getitem(name) : gets a named item's value from local storage
- removeitem(name) : removes a named item from local storage
- clear() clears all items in local storage

Any local storage values must be either strings, numbers, or booleans. If you want to store a JavaScript object or array, then you must first convert it to a JSON string with JSON.strigify() and then parse it back to JavaScript with JSON.parse() when retrieved.
## Promise
JavaScript promise (this is an object) allows the main thread rendering the HTML to keep on running while it runs its longer code it the background. "I promise I will get back to you with that." Promise runs code asynchronously. Executing asynchronously means that promise constructor may return before the promise executor function runs. So the function will return before the full function is done running. A promise function is always in one of three states.  
- pending - Currently running asynchronously
- fulfilled - Completed successfully
- rejected - Failed to complete

There is a `setTimeout()` function that takes in a number of miliseconds to wait, and a function to run after the milisectonds have passed. `setTimeout(() => {console.log(msg, wait);}, 1000 * wait);`
Once a promise is done, you need to throw it away and get a new one. 
### Resolve and Reject
The `promise` executor takes two functions as parameters, `resolve` and `reject`. Calling resolve sets the promise to the fulfilled state, and calling reject sets the promise to the rejected state. `new Promise((resolve, reject) => {//code to run in the promise});`
### Then, Catch, Finally
The promise object has three built in functions. 
- then: gets called when the promise is fulfilled. 
- catch: gets called when the promise is rejected.
- finally: always called when the promise is complete.

You can chain the functions to your promise object. ie `coinToss //insert tab// .then()...`
## Async/Await
A more consise way of working the promise block. The `await` keyword warps the execution of a promise, and will block until the promise state moves to fulfilled, or throws an exception if the state moves to rejected. Use await in a try catch block to create this code. 
### Async
One restriction to await is that you can't control it unless t is called at the top level of the JavaScript or if it is in a function with the async keyword. The `async` keyword basicly transforms any function into an asynchronous function so that it can make asynchronous requests. It then returns a promise object that it is immediately resovled, and the value is the return value of the function.
### Await
The `async` keyword declares that a function returns a promise. The `await` keyword wraps the call to the async function, blocks execution until the promise has resoved, and then returns the result of the promise. So then if we prefix the call for a function that returns a promise, execution will stop until the promise has resolved, at which point the result of the promise is returned instead of the actual promise object.
## Debugging JavaScript
### Console
This is one of the simplist ways to debug. Add console.log statements. Use these to see the state of your code as it is running.
### Browser
Use the browser debugging to really see what your code is doing. If you select the source tab you can see the different files of your code. Use breakpoints to help.
## Node.js
You can run JavaScript with the -e parameter in your console. You can then also run files of JavaScript by passing it into node on your console as a parameter. You can also run it in interpretive node, by just running node in your console. Then you can type JavaScript directly into the interpreter. 
### Node Package Manager
To load a JavaScript Package you first install the package locally using the NPM and then include a require statement in your code that references the package name. If you want to install packages you will need to initialize your code. This is done by creating a directory that will contain JavaScript and then running `npm init`. You can skip the questions that then come up about the package if you want to use all the defaults by running `npm init -y`. 
### Package.json
The package.json file contains three things. 1: metadata about the project such as name and defailt entry. 2: commands thaty ou can execute to do things. and 3: packages that the project depends upon. To install a package, you run `npm install` and then the name of the package. You can uninstall a package by running `npm uninstall` and then the name of the package. **important** besure to not check the node_modules into your source control system because it will get super big. So include it in your .gitignore file.  
When you clone your sourcecoee from GitHub to a new location, the first thing you should do is run `npm install` in the project directory. This will cause NPM to download all of the previously installed packages and recreate the node_modules directory.  
The `package-lock.json` file tracks the version of the package that you installed. That way if you rebuild your node_modules directory you wil lhave the version of hte package tyou initially installed so that it will still be compatible with your code. 
### Main Steps
- Create project directory
- Initialize for use with NPM by running `npm init -y`
- Make sure .gigignore file contains node_modules
- Install any desired packages
- Add  `require('<package-name-here>')` to your application's JavaScript
- Use the pcode the package provides in your JavaScript
- Run code with `node index.js`
## Debugging Node.js
You can debug a js file in VS by pressing F5, then select node.js. Proceed to debug. You can also continue execution of code by pressing F10 and F11 will step into a function call and F5 while running will continue running from current line. Stop debugging at any time by pressing shift + F5
# React
React runs in your web browser. Why use Web Frameworks? It simplifies common patterns, provides common components, improves performance, and increases device coverage. React abstracts HTML into a JavaScript Variant called JSX. It then uses a preprocessor called Babel to go back into valid HTML and JavaScript. The `React.createElement` function will then generate DOM elements and monitor the data they represent for changes. When a change happens, react triggers dependent changes. 
## Componenets
React components allow you to modularize the functionality of you application. It can also enable code reuse as common application components often show up repeatedly.
### The Render Function
Whatever is retruned from the `render` function is inserted into the component HTML element. 
### Properties
Components also allow you to pass infomration to them in the form of element properties. 
### State
Components can have internal states. It is called by calling the `React.useState` hook function. the `useState` function returns a variable that contains the current state and a function to update the state. 
### Class style components
React supports `class style` components, but is moving away from it.
### Reactivity 
The properties and state are used by the framework to determine the reactivity of the interface. 
## Toolchains
There are a lot of different things that we abstract away with tools as we develop a website. Here is a list of some. 
- Code repository - Stores code in a shared, versioned location.
- Linter - Removes, or warns of, non-idiomatic code usage.
- Prettier - Formats code according to a shared standard.
- Transpiler - Compiles code into a different format. For example, from JSX to JavaScript, TypeScript to JavaScript, or SCSS to CSS.
- Polyfill - Generates backward compatible code for supporting old browser versions that do not support the latest standards.
- Bundler - Packages code into bundles for delivery to the browser. This enables compatibility (for example with ES6 module support), or performance (with lazy loading).
- Minifier - Removes whitespace and renames variables in order to make code smaller and more efficient to deploy.
- Testing - Automated tests at multiple levels to ensure correctness.
- Deployment - Automated packaging and delivery of code from the development environment to the production environment.
## Vite
You will want to use the command line to convert a project over to react. These are the commands you want to run in order to do that for a demonstration that will create a new application on a local server in a file called demoVite.
- npm create vite@latest demoVite -- --template react
- cd demoVite
- npm install
- npm run dev
### Files
In this demo application it loads index.html, main.jsx, and App.jsx. The index file loads the root element for the HTML as well as the script element for the JavaScript. The main file creates the react application by associating the root element with the App component in app.jsx. This causes all of the component render functions to execute and the generated HTML, CSS, and JavaScript to be executed in index.html.
### JSX vs JS
Vite uses JSX and not JS. Babel works with either one, but some editor tools work differently with different ones. So if a file contains JSX use a .jsx file. 
### Building a Production Release
The `npm run dev` command just loads your code on a local HTTP server. When you want to bundle and deploy to a production environment, you run the `npm run build` command. Vite then outputs everything to a distribution subdirectory named `dist`. 
### Simon react
When you deploy the Simon React, it will use the `npm run build` command, and then copy the resulting `dist` directory to your production server. 
## Router
A Web framework router provides essential functionality for single-page applications. It allows us to load only one HTML page and then manipulates it to make it look like several pages. We are going to be using the router package react-router-dom Version 6. So then after you Inject the router into the application with `const root = ReactDOM.createRoot(document.getElementById('root'));` you can then add routes to your application. 
## Reactivity
In React, a component is a piece of reusable code that represents a part of a user interface. Components are used to render, manage, and update the UI elements in your application. Components must start with a capital letter.  
Use Fragments (<> and </>) to wrap multiple adjacent JSX elements. If you just try and have a lot of adjacent JSX elements next to each other it will break.
React enables reactivity with three major pieces of a React component: `props` (properties), `state`, and `render`. React monitors the props and state objects and then if they change they call the components render function to show that change. Understand that you may not be able to access the updated chunk of code in the next line because you dont know when that change is going to occur, you build of the assumption that it will happen eventually.  
State is used to "remember" things. It uses a function called useState that you can call from a component to let it remember things.You need to import it like this `import { useState } from 'react';`  
**To collect data from multiple children, or to have two child components communicate with each other, declare the shared state in their parent component instead. The parent component can pass that state back down to the children via props. This keeps the child components in sync with each other and with their parent.**  
Keys tell React about the identity of each component, which allows React to maintain state between re-renders. If a component’s key changes, the component will be destroyed and re-created with a new state.  
`key` is a special and reserved property in React. When an element is created, React extracts the key property and stores the key directly on the returned element. Even though key may look like it is passed as props, React automatically uses key to decide which components to update. There’s no way for a component to ask what key its parent specified.
## React Hooks
React hooks allow react function style components to be able to do everything that a class style component can do and more. This makes function style components the preferred way of doing things in React. useState is an example of a hook. Hooks can only be used in function style components and must be called at the top scope of the function. That means a hook cannot be called inside of a loop or conditional. This restriction ensures that hooks are always called in the same order when a component is rendered.
### useEffect hook
The `useEffect` hook allows you to represent lifecycle events. You can control what triggers a useEffect hook by specifying its dependencies. To accomplish this you pass an array of dependencies as a second parameter to the useEffect call. ` React.useEffect(() => { console.log(`count1 effect triggered ${count1}`); }, [count1]);` If you specify an empty array as the hook dependency then it is only called when the component is first rendered.
## Converting To React -- Notes from Simon
1) Install and configure Vite
2) Replace deployment script
3) Reorganize the code
4) Convert to React Bootstrap
5) Enable React
6) Create app component
7) Create view components
8) Create the router
9) Convert scores component
10) Convert other components
### Installing/Configuring Vite
Go to the directory you want to install vite in. 
```
npm init -y
npm install vite@latest -D
```
### Replace Deployment Script
Then replace the scripts in the package.json file. 
```
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  }
```
**Make sure you add node_modules to your .gitignore file so that you don't commit the imported NPM code.**
### Reorganize Code
Have a `public` directory where you have static assets. Have a `src` directory where your code components live.
### Convert to React Bootstrap
There is an NPM package called React Bootstrap that wraps the Bootstrap CSS framework in React Components. This allows you to treat boostrap as a react component instead of just imported css and javascript. To use the REact version of Bootstrap, import the NPM package. `npm install bootstrap react-bootstrap`. Now, in the components where you want to refer to bootstrap, you can import the bootstrap style sheet form the imported NPM package just like you would other CSS files. `import 'boostrap/dist/css/bootstrap.min.css';`
### Enabling React
To enable react, you need to install the react components for the basic functionality, DOM manipulation, and request routing to display individual components. `npm install react react-dom react-router-dom`  
With react, we will have a single HTML file that dynamically loads all of the other application components into its DOM using JavaScript. 
### Create App component
To begin, you create a top-level component, stored in src/app.jsx . 
### Create View Components
for old "pages", you create react component ffiles for each one, and they just begin as stubs that we will populate as we move functionality from the old js files into the jsx components. We place each stupped component in a separate directory so we can keep all component files together. 
### Create the Router
We can now create a router that will display each component as the navigation UI requests it. The router controls the whole application by determining what component to display based upon what navigation the user chooses.
Importing the router component into the app component...   `import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';` and then the components ie `import { Login } from './login/login';`  
Then you wrap all the App component's previous elements with the BrowserRouter component so that the Browser router can control links and rendered components for all of its child elements. 
#### Navigating routes
We then replace the a elements with the router's NavLink component .the href attribute is replaced with the routers `to` attribute. The NavLink component prevents the browser's default navigation functionality and instead handles it by replacing the currently displayed component. 
#### Injecting the routed component.
Router definitions are then inserted so the router knows what component to display for a given path. the `Routes` element replaces the `main` element in the component HTML.
### Converting to React components
The code for each of the HTML pages needs to now be converted to the different React components. 
- Copy the `main` element HTML over and put it in the return value of the component. Don't copy the header and footer HTML since they will now be in app.jsx.
- Rename the `class` to `className` so that it doesn't conflict with the JavaScript keyword class.
- Move the CSS over to the component directory and use an `import` statement to bring it into the component's `jsx` file. 
### Deployment Script
See new `deployReact.sh` cause we are using vite now. `./deployReact.sh -k <yourpemkey> -h <yourdomain> -s simon`
# HTTP Service
## The Internet
The internet is a lot of "wires" connecting all the computers in the world. (not all computers are connected but in general they are.)
### Making Connections
In order for devices to communicate, you need to have an IP address. The symbolic name for the IP address is the domain name, which is what humans prefer. Domain names are then converted back into IP addresses by doing a lookup in the domain name service DNS. You can look up the IP address of a given domain using the `dig` command in the console.  
Once you have the IP address, you connect to the device it represents by first asking for a connection route to the device. A connection route consists of many hops across the network until the destination is discovered.  
#### Traceroute
The `traceroute` console utility lets you view the hops across the network. It will start with your network router that your computer is connected, it will jump through some unidentified devices, then it will hit your internet service provider (ISP) then you jump through more unidentified devices until you reach the provided IP address. If you run it again you may see something slightly different because every connection with the internet is unique and dynamic.  
### Network Internals
You actually send data through the TCP/ICP model. At the very top is the application layer. It is user functionality such as web(HTTP),  mail (SMTP), files (FTP), remote shell (SSH), and chat (IRC). Then there is the transport layer which breaks the information from the application layer into smaller chunks and and sends the data. The actual connection is made by the internet layer. The internet finds the device that you want to connect to and keeps the connection to the device going. At the very bottom is the physical link layer that has to do with wires and physical connections/hardware.
- Application: HTTPS - Functionality like web browsing
- Transport: TCP - Moving connection information packets
- Internet: IP - Establishing connections
- Link: Fiber, hardware - Physical connections
## Web Servers
A web server is a device that accepts incoming connections and speaks the HTTP application protocol. 
### Monolithic Web Servers
In early web programming, you would buy a really big and complicated program that spoke HTTP and installed on a hardware server. Initially it also only did static functionality, but dynamic functionality is really what created the need for a better web server.
### Web service gateways
To make it easy for users to remember what port goes to what service we have service gateways. The gateway then looks at requests and maps it to a services on different ports.  
Our application uses Caddy as the gateway.
### Microservices
If a web service provides a single purpose it is called a microservice. If you split functionality this way you can manage the functionality independently in a larger system. You can also scale microservices by creating several instances of them so that you can scale it to larger user capability.
### Serverless
The idea of microservices eventually gave birth to esentially getting rid of the server and writing functions that already speak HTTP. That function is loaded through an gateway that maps a web request to the function. The gateway automatically scales the hardware needed to host the serverless function based on demand. This reduces how much the web programmer needs to think about web services down to the function.
## Domain Names
A Domain name is just a text string that follows a specific naming convention, which is then listed in a special database called domain name registry. Domain names have a root domain with one or more possible subdomain prefixes. The root domain is represented by a secondary level domain and a top level domain. The TLD (top level domain) is things like com, edu, click and others. The possibe list of TLDs is controlled by ICANN, one of the governing boards of the internet.  
The owner of a root domain can create any number of sub domains which can resolve to a different ip address. Use `whois` console utility to see information about a domain name from the domain name registry. It will also give you contact information for who owns the domain and how recently it has been updated etc.
### DNS
Once a domain name is in the registry it can be listed with a domain name system (DNS) server and associated with an IP address. Every DNS server in the world references a few special DNS servers that are considered the authoritative name servers for associating a domain name with an IP address.  
The DNS database records that facilitate mapping come in many different flavors. We are concerned with the address `A` and the canonnical name `CNAME` records. An `A` record maps a domain to an IP address. A `CNAME` record maps a domain to another domain. This acts as a domain name alias and can make it so that both an edu and a com with the same prefix go to the same place.  
When you enter a domain name into a browser, the browser first checks to see if it has the name already in its cache of names. If it does not, it contacts a DNS server and gets the IP address. The DNS server also keeps a cache of names. If the domain name is not in the cache, it will request the name from an authoritative name server. If the authority does not know the name then you get an unknown domain name error. If the process does resolve, then the browser makes the HTTP connection to the associated IP address.
### Leasing a Domain Name
You can pay to lease an unused domain name for a specific period of time. Before the lease expires, you have the right to extend the lease for an additional amount of time. The cost to buy the domain varies from something like $3 to $200 a year. Buying, or sub-leasing, an existing domain name from a private party can be very expensive, and so you are better off buying something obscure like idigfor.gold (currently available for only $101). This is one reason why companies have such strange names these days.
## URLs
The Uniform Resource Locator (URL) is the location of a web resource. This can be a web page, image, font, video stream, JSON object ... It can also be completely short lived, such as a visitation counter, or gaming session. Only the scheme and the domain are required in a url. Here is an example of URL syntax. `<scheme>://<domain name>:<port>/<path>?<parameters>#<anchor>` so it would look like thie `https://byu.edu:443/cs/260/student?filter=accepted#summary`
### Parts of a URL
- Scheme: ie. https 
    * The protocol required to ask for the resource. For web applications, this is usually HTTPS. But it could be any internet protocol such as FTP or MAILTO.
- Domain name: ie. byu.edu
    * The domain name that owns the resource represented by the URL.
- Port: ie. 3000
    * The port specifies the numbered network port used to connect to the domain server. Lower number ports are reserved for common internet protocols, higher number ports can be used for any purpose. The default port is 80 if the scheme is HTTP, or 443 if the scheme is HTTPS.
- Path: ie. /school/byu/user/8014
    * The path to the resource on the domain. The resource does not have to physically be located on the file system with this path. It can be a logical path representing endpoint parameters, a database table, or an object schema.
- Parameters: ie. filter=names&highlight=intro,summary
    * The parameters represent a list of key value pairs. Usually it provides additional qualifiers on the resource represented by the path. This might be a filter on the returned resource or how to highlight the resource. The parameters are also sometimes called the query string.
- Anchor: ie. summary
    * The anchor usually represents a sub-location in the resource. For HTML pages this represents a request for the browser to automatically scroll to the element with an ID that matches the anchor. The anchor is also sometimes called the hash, or fragment ID.
Historically, username and password were passed in before the domain name for authentication, but that is not used for security reasons now. 
### URN and URI
Sometimes you might hear of URN or URI. A Uniform Resource Name (URN) is a unique resource name that does not specify location information. A Uniform Resource Identifier (URI) is a general resource identifier that could refer to either a URL or a URN. With web programming you are almost always talking about URLs and therefore you should not use the more general URI.
## Ports
When connecting a device to the internet, you need two things. A port and an IP address. Port numbers allow a multiple different protocols (ie HTTPS) as well as different services. Different ports can restrict different devices from accessing a service. The internet governing body, IANA, defines the standard usage for port numbers. Ports from 0 to 1023 represent standard protocols. Generally a web service should avoid these ports unless it is providing the protocol represented by the standard. Ports from 1024 to 49151 represent ports that have been assigned to requesting entities. However, it is very common for these ports to be used by services running internally on a device. Ports from 49152 to 65535 are considered dynamic and are used to create dynamic connections to a device.  
Here is a list of some common ports you might see. 
- 20: File Transfer Protocol (FTP) for data transfer
- 22: Secure Shell (SSH) for connecting to remote devices
- 25: Simple Mail Transfer Protocol (SMTP) for sending email
- 53: Domain Name System (DNS) for looking up IP addresses
- 80: Hypertext Transfer Protocol (HTTP) for web requests
- 110: Post Office Protocol (POP3) for retrieving email
- 123: Network Time Protocol (NTP) for managing time
- 161: Simple Network Management Protocol (SNMP) for managing network devices such as routers or printers
- 194: Internet Relay Chat (IRC) for chatting
- 443: HTTP Secure (HTTPS) for secure web requests
### My Ports
When you built your web server you externally exposed port 22 so that you could use SSH to open a remote console on the server, port 443 for secure HTTP communication, and port 80 for unsecure HTTP communication.  
Caddy, is listening on ports 80 and 443. It then manages communciation between the different ports.  
You must make sure that any web service that you are running on your server is using a different port to communicate on. Simon is on 3000 so you **cannot** use port 3000 for another service like startup. It does not matter what high range port you use. It only matters that you are consistent and that they are only used by one service.
## HTTP
HTTP (hypertext transfer protocol) is how the web talks. When a browser and a server talk to each other they use http to send requests and respond to those requests. 
### Request
This is the general syntax for a http request.
```
<verb> <url path, parameters, anchor> <version>
[<header key: value>]*
[

  <body>
]
```
First is the verb of the request, followed by the path, parameters, and the anchor of the url. You then have the version o fHTTP being used. Then you have optional headers using key value pairs. Then you have an optional body.  
Here is an example:
```
GET /hypertext/WWW/Helping.html HTTP/1.1
Host: info.cern.ch
Accept: text/html
```
### Response
Here is a syntax for a Http response.
```
<version> <status code> <status string>
[<header key: value>]*
[

  <body>
]
```
Similar to the request, you have the http version, then you have a status code (the status of the request), and then a status string which is just describing what the status code is really saying.
### Verbs
- GET: Get the requested resource. This can represent a request to get a single resource or a resource representing a list of resources.
- POST: Create a new resource. The body of the request contains the resource. The response should include a unique ID of the newly created resource.
- PUT: Update a resource. Either the URL path, HTTP header, or body must contain the unique ID of the resource being updated. The body of the request should contain the updated resource. The body of the response may contain the resulting updated resource.
- DELETE: Delete a resource. Either the URL path or HTTP header must contain the unique ID of the resource to delete.
- OPTIONS: Get metadata about a resource. Usually only HTTP headers are returned. The resource itself is not returned.
### Status Codes
HTTP Status codes either start with 1 2 3 4 or 5.
- 1xx - Informational.
- 2xx - Success.
- 3xx - Redirect to some other location, or that the previously cached resource is still valid.
- 4xx - Client errors. The request is invalid.
- 5xx - Server errors. The request cannot be satisfied due to an error on the server.
Here are some more common status codes. 
- 100: Continue - The service is working on the request
- 200: Success - The requested resource was found and returned as appropriate.
201: Created - The request was successful and a new resource was created.
204: No Content - The request was successful but no resource is returned.
304: Not Modified - The cached version of the resource is still valid.
307: Permanent redirect - The resource is no longer at the requested location. The new location is specified in the response location header.
308: Temporary redirect - The resource is temporarily located at a different location. The temporary location is specified in the response location header.
400: Bad request - The request was malformed or invalid.
401: Unauthorized - The request did not provide a valid authentication token.
403: Forbidden - The provided authentication token is not authorized for the resource.
404: Not found - An unknown resource was requested.
408: Request timeout - The request takes too long.
409: Conflict - The provided resource represents an out of date version of the resource.
418: I'm a teapot - The service refuses to brew coffee in a teapot.
429: Too many requests - The client is making too many requests in too short of a time period.
500: Internal server error - The server failed to properly process the request.
503: Service unavailable - The server is temporarily down. The client should try again with an exponential back off.
### Headers
HTTP headers specify information about the request of response. This can be stuff from instructions on handling security, caching, data format, cookies and more. Here are some common headers.
- Authorization: A token that authorized the user making the request.
- Accept: The format the client accepts. This may include wildcards.
- Content-Type: The format of the content being sent. These are described using standard MIME types.
- Cookie: Key value pairs that are generated by the server and stored on the client.
- Host: The domain name of the server. This is required in all requests.
- Origin: Identifies the origin that caused the request. A host may only allow requests from specific origins.
- Access-Control-Allow-Origin: Server response of what origins can make a request. This may include a wildcard.
- Content-Length: The number of bytes contained in the response.
- Cache-Control: Tells the client how it can cache the response.
- User-Agent: The client application making the request.
### Body
The format of the body of an HTTP request or response is defined by the Content-Type header. A client can specify what formats it accepts using the accept header.
### Cookies
HTTP itself is stateless. That means that one HTTP request does not know anything about a previous or future request. However, that does not mean that a server or client cannot track state across requests. A common method for tracking state is the `cookie`. They are generated by a server and passed to the client as an HTTP header. The client then caches the cookie and returns it as an HTTP header back to the server on subsequent requests. This allows the server to remember things that the user has provided. Servers can also use cookies to track and share everthing a user does. The problem with cookies comes from web applications that use them as a means to violate a user's privacy or inappropriately monetize their data.
## Fetch
Fetch api is the preferred way to make HTTP requests. The `fetch` function is built into the browser's JavaScript runtime. This means you can call it from JavaScript code running in a browser.  
Fetch basically takes a URL And returns a promise. The `then` function takes a callback function that is asynchronously called when the requested URL content is obtained. If the returned content is of type application/json you can use the json function of the response object to convert it to a JavaScript object. If the request method is unspecified it defaults to GET. To do a POST request you populate the options parameter with the HTTP method and headers.
## Node Web Service
When using node you will want to run `npm init -y` in the directory and then you can run `node index.js` to run on a local host. You can also use F5 and your visual studio code to debug. 
### Nodemon
The nodeman package is a wrapper around node that watches for files that change. When it detects that you saved something it will autmatically restart node. `npm install -g nodemon`
Then, because VS Code does not know how to launch Nodemon automatically, you need create a VS Code launch configuration. In VS Code press CTRL-SHIFT-P (on Windows) or ⌘-SHIFT-P (on Mac) and type the command `Debug: Add configuration`. This will then ask you what type of configuration you would like to create. Type `Node.js` and select the `Node.js: Nodemon setup` option. In the launch configuration file that it creates, change the program from `app.js` to `main.js` (or whatever the main JavaScript file is for your application) and save the configuration file. Now in visual studio when you press F5 to start debugging it will run Nodemon instead of Node.js and your changes will automatically update your application when you save.