function camelize(str) {
    let tokens = [];
    let arr = str.split('-');
    arr.forEach((tok, index) => {
        if(!tok) return;
        if(index === 0){
            tokens.push(tok);
            return;
        }
        let result = tok[0].toUpperCase() + tok.substring(1);
        tokens.push(result);
    });
    return tokens.join('');
}
