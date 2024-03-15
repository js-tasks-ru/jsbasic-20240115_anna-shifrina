function makeDiagonalRed(table) {
    let rows = Array.from(table.rows);
    rows.forEach(
        (row, index) => row.cells[index].style.backgroundColor ='red'
    );
}
