# rollup-plugin-replacer

Replace strings after files have been bundled, to reach all processed files like (.css, .svg etc.)


## Installation

```bash
npm install --save-dev rollup-plugin-replacer
```


## Instructions

Because rollup-plugin-replacer starts at the end of the bundling process, you have to be sure that it is placed *after* other plugins in your `plugins` array.


```js
// rollup.config.js
import replacer from 'rollup-plugin-replacer';

export default {
  // ...
  plugins: [
    replacer({
			replace: {
				'../fonts': 'fonts',
				'../img': path.join(mediapath, 'img')
			}
     })
  ]
};
```


## Options

```js
{
	// replace patterns property to value
	replace: {
		'oldstring': 'newstring'
	}

	// pattern, or array of patterns
	include: 'bundle.css',

	// also pattern, or array of patterns
	exclude: 'node_modules/**',
}
```

## License

MIT
