/*
	A word of warning:

	This was not created with readability or resuability in mind (like most things i do lul)
	I have intentions to replace it when I get time.

	Good luck.
*/

const path = require('path');
const fs = require('fs');
const rimraf = require('rimraf');
const mergedirs = require('merge-dirs').default;

const commandInfo = require('atlas-bot/locales/en/info.json');
const capitalize = require('atlas-bot/lib/utils/capitalize');
const walkSync = require('atlas-bot/lib/utils/walkSync');

const tags = walkSync(path.join(__dirname, 'node_modules/atlas-bot/src/tagengine/tags'));
const commands = walkSync(path.join(__dirname, 'node_modules/atlas-bot/src/commands'));

const dependencyMap = {
	msg: 'message',
};

const created = [];
const createdSubs = [];

/* eslint-disable no-loop-func */

/*
	TAGS
*/
for (const dir of ['Tags', 'Commands']) {
	try {
		const loc = path.join(__dirname, 'docs', dir);

		rimraf.sync(loc);
		fs.mkdirSync(loc);
		mergedirs(path.join(__dirname, `templates/${dir}`), loc, 'overwrite');
	} catch (e) {
		console.warn(e);
	}
}

for (const tag of tags.filter(t => !['index.js', 'middleware.js'].some(x => t.includes(x)))) {
	const dirname = capitalize(path.dirname(tag).split('\\').pop());

	try {
		const { info } = require(tag);

		if (info.args && info.args.includes('see examples')) {
			// looking at you {if}
			info.args = null;
		}

		const parts = [`# ${info.name} ${(info.args || '').split('<').join('&lt;').split('>').join('&gt;')}
		
${info.description}`];

		if (info.dependencies && info.dependencies.length) {
			parts.push(`
### Context Requirements

${info.dependencies.map(d => `* ${dependencyMap[d] || d}`).join('\n')}
`);
		}

		if (info.examples.length) {
			parts.push(`
### Examples`);

			for (const example of info.examples) {
				parts.push(`
##### input
\`\`\`${example.input}\`\`\`

##### output
\`\`\`${example.output}\`\`\`
${example.note ? `
!!! note
		${example.note}
` : ''}`);
			}
		}

		const template = parts.join('\n');

		// saving
		let outputFile = path.join(__dirname, 'docs/Tags', `${info.name}.md`);

		if (dirname !== 'Tags') {
			if (!created.includes(dirname)) {
				fs.mkdirSync(path.join(__dirname, `docs/Tags/${dirname}`));
				created.push(dirname);
			}

			outputFile = path.join(__dirname, `docs/Tags/${dirname}`, `${info.name}.md`);
		}

		fs.writeFileSync(outputFile, template.trim());
	} catch (e) {
		console.error(`Error loading ${tag}`);
		console.error(e);
	}
}

/*
	COMMANDS
*/
for (let { loc, info } of commands.map(c => ({ // eslint-disable-line prefer-const
	...require(c),
	loc: c,
})).filter(c => c.info)) {
	const [parentOne, parentTwo, parentThree] = path.dirname(loc).split('\\').reverse();

	let dirname;
	let subDirectory;
	if (parentThree !== 'commands') {
		info = {
			...info,
			...commandInfo[info.name],
		};

		dirname = capitalize(parentOne);
	} else {
		if (commandInfo[parentOne]) {
			info = {
				...info,
				...(commandInfo[parentOne][info.name] || commandInfo[parentOne].base),
			};
		}

		subDirectory = capitalize(parentOne);
		dirname = capitalize(parentTwo);
	}

	try {
		const displayName = `${subDirectory ? `${subDirectory.toLowerCase()} ` : ''}${info.name} ${info.usage ? info.usage.split('<').join('&lt;').split('>').join('&gt;') : ''}`;
		const parts = [`# ${displayName}`];

		if (info.description) {
			parts.push(`
${info.description}
			`);
		}

		if (info.examples && info.examples.length) {
			parts.push(`
##### Examples
`);

			parts.push(`${info.examples.map(e => `${'* a!'}${displayName} ${e}`).join('\n')}\n`);
		}

		parts.push(`
##### Plugin
${dirname}
`);

		if (info.permissions) {
			if (info.permissions.user) {
				parts.push(`
##### User Permissions
\`${Object.keys(info.permissions.user).map(str => str.replace(/([A-Z])/g, ' $1').replace(/^./, s => s.toUpperCase())).join('`, `')}\`
`);
			}

			if (info.permissions.bot) {
				parts.push(`
##### Bot Permissions
\`${Object.keys(info.permissions.bot).map(str => str.replace(/([A-Z])/g, ' $1').replace(/^./, s => s.toUpperCase())).join('`, `')}\`
`);
			}
		}

		const template = parts.join('\n');

		// saving
		let outputFile = path.join(__dirname, 'docs/Commands', `${info.name}.md`);

		if (dirname !== 'Commands') {
			let folder = `docs/Commands/${dirname}`;
			// tags and commands sharing the same created array is /probably/ fine right?
			if (!created.includes(dirname)) {
				fs.mkdirSync(path.join(__dirname, `docs/Commands/${dirname}`));
				created.push(dirname);
			}

			if (subDirectory) {
				if (!createdSubs.includes(subDirectory)) {
					fs.mkdirSync(path.join(__dirname, `docs/Commands/${dirname}/${subDirectory}`));

					createdSubs.push(subDirectory);
				}

				folder = `docs/Commands/${dirname}/${subDirectory}`;
			}

			outputFile = path.join(__dirname, folder, `${info.name}.md`);
		}

		fs.writeFileSync(outputFile, template.trim());
	} catch (e) {
		console.error(`Error loading ${loc}`);
		console.error(e);
	}
}

console.info(`Rendered markdown files for ${commands.length} commands and ${tags.length} tags.`);
