<img align="right" src="http://i.imgur.com/1j0dqg0.png"></a>

# ponyFilters
### Dynamic css filtering combo bar for users and webmasters.
### Settings are saved in a cookie by pressing the lock icon.
#### To use, just include <b>pwnyFilter.js</b> in the bottom of your html file. <br>
#### The bar will ponytself. 

### Demo: https://webdev23.github.io/ponyFilters/ 

To load back the css filters settings, on all domain or any wanted page, include the top cookie script part. <br>
See source files comments.

#### To test via the console: 
    var target = document.getElementsByTagName('script')[0],
    inj = document.createElement('script');
    inj.src= 'https://webdev23.github.io/ponyFilters/pwnyFilter.js';
    target.appendChild(inj);

### To load anywhere with a bookmarklet:

    javascript:void%20function(){target=document.getElementsByTagName(%22script%22)[0],inj=document.createElement(%22script%22),inj.src=%22https://webdev23.github.io/ponyFilters/pwnyFilter.js%22,target.appendChild(inj)}();

### You may want to defer the load:
    (function(){
    setTimeout(function(){
    var target = document.getElementsByTagName('*')[0],
    inj = document.createElement('script');
    inj.src= 'https://webdev23.github.io/ponyFilters/pwnyFilter.js';
    target.appendChild(inj)}, 3000)
    })()


### For power users who needs per site personals css filters customisation.
Drop ponyFilters.user.js in Firefox with greasmonkey installed, or in the extension tab of chromium.<br>
As soon as settings had been saved by pressing the lock symbol, they will emerge back by cookie.<br>
This user script can also be found here:<br> https://greasyfork.org/en/scripts/25395-pwnyfilters

Note that some websites disallow dynamics sciptings, like github do.
