import pkg from './package.json';

const external = Object.keys(pkg.dependencies).concat('path');

export default {
	input: 'src/index.js',
	external,
	output: [
		{ file: pkg.main, format: 'cjs' },
		{ file: pkg.module, format: 'es' }
	]
};
