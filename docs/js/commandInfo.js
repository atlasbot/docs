const el = document.querySelector('#commands');

console.log('Fun Fact: If you scaled an apple up to the size of the earth, the apple\'s skin would be 20 times as thick as the earth\'s atmosphere.');

function escapeHtml(unsafe) {
	return unsafe
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&#039;');
}

if (el) {
	fetch('https://get-atlas.xyz/api/info/commands')
		.then(async (res) => {
			const { commands } = await res.json();

			console.log(`Fetched ${commands.length} commands.`);

			el.innerHTML = `Subcommands are not shown. Do <code>ctrl + f</code> pr <code>cmd + f</code> to search.
			<div class="md-typeset__table" style="padding: 0;"><table>
<thead>
<tr>
<th>Name</th>
<th align="center">Description</th>
<th align="right">Aliases</th>
<th align="right">Module</th>
</tr>
</thead>
<tbody>
${commands.map((c) => {
		const usage = c.usage.split(' ');
		const name = usage.shift();

		return `<tr>
<td><b>${escapeHtml(name)}</b> ${escapeHtml(usage.join(' '))}</td>
<td align="center">${escapeHtml(c.description)}</td>
<td align="right">${escapeHtml((c.aliases || []).join(', '))}</td>
<td align="right">${escapeHtml(c.category)}</td>
</tr>`;
	}).join(' ')}
</tbody>
</table></div>`;
		})
		.catch((e) => {
			el.innerHTML = 'Something bad happened :c';

			console.error(e);
		});
}
