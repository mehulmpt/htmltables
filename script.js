const table = new Table(document.getElementById('my-table'))

table.addRow()
table.addRow()
table.addRow()
table.addRow()
table.addRow()

for(let i=0;i<5;i++) {
	for(let j=0;j<4;j++) {
		table.set(i,j, `${i} * ${j} = ${i * j}`)
	}
}

console.log(table.getRow(0))