function sumSalary(salaries) {
 let sum = 0;
   for (let key in salaries) {
     if (isNaN(salaries[key]) || salaries[key] === Infinity || salaries[key] === -Infinity) {
            continue;
        }
     if( typeof salaries[key] === 'number') {
       sum += salaries[key]; 
     } 
    } 
    return sum;  
}
