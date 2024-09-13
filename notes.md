# September Notes
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