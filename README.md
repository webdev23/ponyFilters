# ponyFilters
### Dynamic css filtering combo bar.
#### Customize your webpage with fine filters adjustment. 

Brightness, grayscale, hue-rotate, invert, sepia, contrast, background color, foreground color and texts colors can be adjusted, for each web domains.

#### Demo on the reddit new design

<img width=800 src="https://media.giphy.com/media/wof5NvQwJUNC1WM9PP/giphy.gif"></img>

#### Demo on stackoverflow.com
<img width=800 src="https://i.imgur.com/jXIjx4s.gif"></img>

<img align="right" src="http://i.imgur.com/1j0dqg0.png"></a>

### Settings are saved in local storage by pressing the lock icon.
#### How to use:  

Just include <b>pwnyFilter.js</b> in the bottom of your html file. <br>
#### The bar will ponytself. 

### Demo: https://webdev23.github.io/ponyFilters/ 

To load back automatically your personnal css filters settings for any web page, use the userscript. This is optionnal <br>
Or include <b>pwnyFilters.js</b> at the bottom of your page, to allow your users to make their own adjustment.

#### To test via the console: 
    var target = document.getElementsByTagName('script')[0],
    inj = document.createElement('script');
    inj.src= 'https://webdev23.github.io/ponyFilters/pwnyFilter.js';
    target.appendChild(inj);

### The load anywhere bookmarklet:

    javascript:void%20function(){target=document.getElementsByTagName(%22script%22)[0],inj=document.createElement(%22script%22),inj.src=%22https://webdev23.github.io/ponyFilters/pwnyFilter.js%22,target.appendChild(inj)}();

### You may want to defer the load:
    
    setTimeout(function(){
    var target = document.getElementsByTagName('*')[0],
    inj = document.createElement('script');
    inj.src= 'https://webdev23.github.io/ponyFilters/pwnyFilter.js';
    target.appendChild(inj)}, 3000)


### For power users who needs per site personals css filters customisation.
Drop ponyFilters.user.js in Firefox with Greasmonkey/Violentmonkey installed.
Chrome/chromium users can also drop <b>pwnyFilters.user.js</b> into the extension tab<br>
As soon as settings had been saved by pressing the lock symbol, they will emerge back at next reload.<br>

Or click this link:
Userscript : https://webdev23.github.io/ponyFilters/pwnyFilters.user.js

Can also be found here:<br> https://greasyfork.org/en/scripts/25395-pwnyfilters

Note that some websites disallow dynamics sciptings (Web content policy), like github do.
