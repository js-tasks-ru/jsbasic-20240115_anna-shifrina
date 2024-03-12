let calculator = {
  read: function(a, b){
    this.firstNumber = Number(a);
    this.secondNumber = Number(b);
  },
  sum: function() {
    return this.firstNumber + this.secondNumber;
  },
  mul: function() {
    return this.firstNumber * this.secondNumber;
  }
};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
