## Fantastic Fries In-Store Kiosk and Order Manager

[http://a3-joseph-yuen.glitch.me](http://a3-joseph-yuen.glitch.me)

### Admin Account Details 
Username: admin

Password: fantastic

### Description
The goal of the application is to provide an admin experience for the already existing Fantastic Fries kiosk site. By creating a login portal for admins and add/edit/delete tools, admins are able to manage orders from the kitchen, while customers can order in the front of the restaurant. 

I initially had issues figuring out the role of Express. Once I understood that it was meant to compeletely replace my exisiting server, I realized how simple express is and how powerful it can be with the proper middleware. While developing, I also ran into issues with authentication. For the most part, I was confused with how it worked and how to make passport fit to my needs. Since my needs were relatively simple, I think I was able to make it work as it directs on success to the right page.

I chose the local strategy because the professor suggested it in his notes, and I just ran with it. It seemed the most simple as I didn't know much about authentication going into the project. I used lowdb as a database because we were told to use it. Besides that reason, I found it to be simple and easy to implement. 

I used the Bootstrap framework because I had heard it was very popular and was useful for mobile development. By using containers, it made all of my elements shrink automatically for mobile. I also liked the pre-designed buttons with their own hover design. On my end, I had to add a bit of custom margins, and continued to use my column structure because of its simplicity.

Express Middleware Packages:
1. passport - authenticates users for using the local strategy using a username and password
2. body-parser - parses json files depending on the set Content-Type header
3. helmet - secures Express apps to enforce site security
4. serve-favicon - uploads site favicon 
5. connect-image-optimus - converts images in my static folder into .webp or .jxr if possible to optimize performance

## Technical Achievements
- **Table Scrolling**: I initially had my tables load completely so that my pages were super long. Since I generated tables in Javascript, I realized I had to make edits to the inital HTML, restructure my tables with the tbody tag, and then update the CSS with overflow capabilities. 

### Design/Evaluation Achievements
- **Alt Tags**: I only have 1 image which is the logo, and I added an Alt Tag for it. Since background images don't have alt tags, I didn't add alt tags for them.  
- **Fixed Buttons**: I utilized the fixed CSS attribute to keep the transition buttons (login/kiosk/logout) always at the top of the screen. 
- **Update Button**: In the admin page, to make sure users update the right order entry, I disable the "Update Order" button before users select "Edit" on a particular row. Once the "Edit" button is pressed, I customize the button's words for that speicfic order to make the edit process more intuitive. However, if a user simply wanted to duplicate the order, they can press "Add Order" after clicking "Edit" on a particular order. I implemented this system, so the user never has to back track.
