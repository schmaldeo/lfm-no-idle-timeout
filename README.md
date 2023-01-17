# LFM no idle

This is a plugin meant to be ran in [Tampermonkey](https://www.tampermonkey.net/). It's made to avoid idle timeout that occurs at [lowfuelmotorsport.com](https://lowfuelmotorsport.com) if you're inactive for some time.
  
## Running

In order to run this script you need [Tampermonkey](https://www.tampermonkey.net/) installed in your browser.
  
In Tampermonkey settings, go to utilities, paste <https://github.com/schmatteo/lfm-no-idle/blob/master/index.js> into _Import from URL_ input and press _Install_ ([see here](https://i.imgur.com/o70wzno.png)).

## Contributing

I'm currently trying to find a better way to handle this problem, than just refreshing the page. If you've got an idea (especially for how to detect a change of location in an Angular app), feel free to make a pull request.
