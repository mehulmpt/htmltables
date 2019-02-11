class Table {

	constructor(selector) {
		if (!selector || !selector.tagName || selector.tagName.toLowerCase() !== 'table') {
			throw new Error('Invalid selector. Need a table tag')
		}
		this.table = selector
		this.table.innerHTML = ''
	}

	addRow(index) {
		const tr = document.createElement('tr')
		if (!index) {
			// insert a new row
			this.table.appendChild(tr)
		} else {
			const row = this.table.querySelector(`tr:nth-child(${index + 1})`)
			if (!row) {
				throw new Error(`No row found at index ${index}`)
			}
			row.insertBefore(tr)
		}
	}

	removeRow(index) {
		const row = this.table.querySelector(`tr:nth-child(${index + 1})`)
		if (row) {
			row.remove()
		} else {
			throw new Error(`No row found at ${index}`)
		}
	}

	set(row, col, data) {
		try {
			const r = this.table.querySelector(`tr:nth-child(${row + 1})`)
			const c = r.querySelector(`td:nth-child(${col + 1})`)

			if (!c) {
				// c is null => td doesn't exists
				const td = document.createElement('td')
				const textNode = document.createTextNode(data)
				td.appendChild(textNode)
				r.appendChild(td)
			} else {
				c.innerHTML = data
			}

			return true
		} catch {
			throw new Error(`Given row (${row}) doesn't exists`)
		}
	}

	get(row, col) {
		try {
			const row = this.table.querySelector(`tr:nth-child(${row + 1})`)
			const col = row.querySelector(`td:nth-child(${col + 1})`)
			return col.innerText
		} catch {
			throw new Error(`Given cell (${row} x ${col}) doesn't exists`)
		}
	}

	getRow(rowIndex) {
		const row = this.table.querySelector(`tr:nth-child(${rowIndex+1})`)
		if(!row) throw new Error(`Row (${rowIndex}) not found`)

		return [...(row.querySelectorAll('td') || [])].map(t => t.innerText)
	}

	getColumn(colIndex) {
		const rows = [...(this.table.querySelectorAll(`tr`) || [])]
		try {
			return rows.map(row => row.querySelector(`td:nth-child(${colIndex + 1})`).innerText)
		} catch {
			throw new Error(`Some row is missing colIndex ${colIndex}`)
		}
	}
}

module.exports = Table