# ponyFilters
### Dynamic css filtering combo bar for users and webmasters.
### Save changes in a cookie if needed.
#### To use just include in the bottom of your html file. The bar will ponytself.

### Demo: https://ponyhacks.com/open/dev/ponyFilters/ 

#### Drect use on any page by injecting in console like so:
var target = document.getElementsByTagName('script')[0],
inj = document.createElement('script');
inj.src= 'https://ponyhacks.com/open/cdn/pwnyfilter.js';
target.appendChild(inj);
</pre>
### Or with this bookmarklet, to quick add css filtering on a page:
javascript:void%20function(){target=document.getElementsByTagName(%22script%22)[0],inj=document.createElement(%22script%22),inj.src=%22https://ponyhacks.com/open/cdn/pwnyfilter.js%22,target.appendChild(inj)}();

### For power users who needs per site personals css filters customisation.
Drop ponyFilters.user.js in Firefox with greasmonkey installed, or in the extension tab of chromium.<br>
As soon as settings had been saved by pressing the lock symbol, they wil emerge back.
This user script can also be found here: https://greasyfork.org/en/scripts/25395-pwnyfilters
