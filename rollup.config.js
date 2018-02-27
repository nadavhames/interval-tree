import path from 'path';
import babel from 'rollup-plugin-babel';

export default {
	input: 'src/index.js',
	output: {
		format: 'cjs',
		name: 'IntervalTree',
		globals: {
			ramda: 'R',
		},
	},
	external: [
		'ramda',
	],
	plugins: [
		babel({
			exclude: path.join(__dirname, 'node_modules/**')
		})
	],
};

