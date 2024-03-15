function highlight(table) {
    // Индексы различных типов ячеек в строке tr
    const cellIndices = {
        'name' : 0,
        'age' : 1,
        'gender' : 2,
        'status' : 3
    };

    /**
     * Извлекает дочерний узел td из узла tr по имени типа узла
     * @param {*} row - DOM узел строки tr
     * @param {*} cellName - имя типа узла td
     * @returns  DOM - узел td
     */
    const getCell = (row, cellName) => row.querySelectorAll('td')[cellIndices[cellName]];

    /**
     * Проставляет правильное значение класса строки, отвечающего за доступность работника
     * @param {*} row - DOM узел строки tr
     */
    const setAvailable = row => {
        let ds = getCell(row, 'status').dataset;
        if (!('available' in ds)) {
            row.setAttribute('hidden', '');
        } else {
            row.classList.add((ds.available === 'false') ? 'unavailable' : 'available');
        }
    };

    /**
     * Проставляет правильное значение класса строки, отвечающего за пол работника
     * @param {*} row - DOM узел строки tr
     * @returns 
     */
    const setGender = row => {
        row.classList.add(getCell(row, 'gender').textContent === 'm' ? 'male' : 'female');
    }
            
    /**
     * Проставляет правильное значение стиля строки, отвечающего за возраст работника
     * @param {*} row - DOM узел строки tr
     */
    const setAgeStyle = row => {
        if(Number(getCell(row, 'age').textContent) < 18){
            row.setAttribute('style', 'text-decoration: line-through');
        }
    };

    /**
     * Создает функцию на основе массива функций, которая применит функции к аргументу одну за другой
     * @param {*} funcs - Массив функций
     * @returns Функцию одного аргумента
     */
    const applyMany = funcs => (arg => funcs.forEach(func => func(arg))); 

    /**
     * Реализует все требуемые изменения классов и стилей переданного DOM - узла строки таблицы
     * @param {*} row - DOM узел строки tr
     */
    const highlightRow = applyMany([setAvailable, setGender, setAgeStyle]);

    return Array.from(table.querySelector('tbody').querySelectorAll('tr')).forEach(highlightRow);
}
