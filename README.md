# Timeline

This is a customized production version of the SIMILE Timeline widget
which has optimized JavaScript, images, and stylesheets. If you're
looking for the actual Timeline source code, check out the 
[Timeline Widget Website][tl]. 

[tl]: http://www.simile-widgets.org/timeline/

## Getting Started

### In the browser
Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/waynegraham/timeline/master/dist/timeline.min.js
[max]: https://raw.github.com/waynegraham/timeline/master/dist/timeline.js

In your web page:

```html
<script src="dist/timeline.min.js"></script>
<script>
var element = document.getElementById('timeline');
var bands = [
  Timeline.createBandInfo({
    width: '70%',
    intervalUnit: Timeline.DateTime.MONTH,
    intervalPixels: 100
  })
];
var timeline = Timeline.create(element, bands);
</script>
```

In your code, you can attach timeline's methods to any object.

```html
<script>
this.exports = Bocoup.utils;
</script>
<script src="dist/timeline.min.js"></script>
<script>
Bocoup.utils.awesome(); // "awesome"
</script>
```

## Documentation
_(Coming soon)_

## Examples
_(Coming soon)_

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [grunt](https://github.com/cowboy/grunt).

_Also, please don't edit files in the "dist" subdirectory as they are generated via grunt. You'll find source code in the "lib" subdirectory!_

## Release History
_(Nothing yet)_

## License
Copyright (c) 2012 Wayne Graham  
Licensed under the New BSD license.
