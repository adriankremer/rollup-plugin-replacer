# rollup-plugin-replacer

<p>
    <a href="LICENSE">
        <img src="https://img.shields.io/badge/license-MIT-brightgreen.svg" alt="Software License" />
    </a>
    <a href="https://github.com/differui/rollup-plugin-sass/issues">
        <img src="https://img.shields.io/github/issues/adriankremer/rollup-plugin-replacer.svg" alt="Issues" />
    </a>
    <a href="https://npmjs.org/package/rollup-plugin-sass">
        <img src="https://img.shields.io/npm/v/rollup-plugin-replacer.svg?style=flat-squar" alt="NPM" />
    </a>
    <a href="https://travis-ci.org/adriankremer/rollup-plugin-replacer">
        <img src="https://travis-ci.org/adriankremer/rollup-plugin-replacer.svg?branch=master" />
    </a>
</p>

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
