import { dirname, join } from 'path';
import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs';
import { createFilter } from 'rollup-pluginutils';

const applyReplaces = (replaceObj, input) =>
	Object.keys(replaceObj).map((key) => input.replace(new RegExp(key, 'g'), replaceObj[key]));

export default function move(options = {}) {
	let outDir;
	const filter = createFilter(options.include, options.exclude);
	return {
		name: 'move',
		options(opts){
			outDir = dirname(opts.output.file);
		},
		onwrite(){
			const traverse = (dir) => {
				const files = readdirSync(dir);
				files.map((file) => {
					if (!filter(file)) return null;
					let path = join(dir, file);
					let stat = statSync(path);
					if(stat.isFile()){
						const content = readFileSync(path, 'utf-8');
						const result = applyReplaces(options.replace, content);
						writeFileSync(path, result, 'utf-8');
					} else if(stat.isDirectory()){
						traverse(path);
					}
				});
		  };
			traverse(outDir);
		}
	}
}
