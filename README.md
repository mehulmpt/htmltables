# HTML Tables

Allows you to manipulate HTML tables using JS.

# Usage

- Install this module using `npm i htmltables --save` or `yarn add htmltables`
- Require it using `import Table from 'html-tables'` or `const Table = require('htmltables')`
- Create a new table using `const table = new Table(document.getElementById('my-table'))`

PS: This would remove existing table contents

# Available Calls

| Method name         | Function                                                                                      | Arguments                                                                                                                                                                 |   |   |
|---------------------|-----------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---|---|
| addRow(index)       | adds a row to table                                                                           | index (optional) - adds a row BEFORE this index                                                                                                                           |   |   |
| removeRow(index)    | removes a row at specified index                                                              | index (required) - removes a row at index given                                                                                                                           |   |   |
| set(row, col, data) | Sets data to given row and col id. The row must exist. The col would be created automatically | row (required) - index of row col (required) - index of column (a new column, i.e. a td would be created if not present) data (required) - text data to go in that column |   |   |
| get(row, col)       | Gets data at specified row and col index                                                      | row (required) - index of row col (required) - index of col                                                                                                               |   |   |
| getRow(rowIndex)    | Gets array of text nodes present in that row                                                  | rowIndex (required) - index of row                                                                                                                                        |   |   |
| getColumn(colIndex) | Gets array of text nodes present in that column                                               | colIndex (required) - index of column                                                                                                                                     |   |   |

# Example

```html
<table id="my-table"></table>
```

```js
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
console.log(table.getColumn(0))
```