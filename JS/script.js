let Car = function (name) {
 
    this.get = function () {
        this.name = name;
        this.name = prompt('Введите марку автомобиля');
        this.carNumber = prompt('Введите номер автомобиля');
        if (confirm('Завести автомобиль?')) {
            this.workTime = +prompt('Сколько времени заняла поедка, ч');
            this.speed = +prompt('Введите среднюю скорость, с которой вы ехали, км/ч');
        } else {
            this.speed = 0;
            this.workTime = 0;
        };
 
        this.operation();
    };
 
    this.operation = function () {
        this.result = this.workTime * this.speed; 
 
        this.show();
    };
 
    this.show = function () {
 
        if (this.workTime == 0 || this.workTime == undefined) {
            console.log('Автомобиль "' + this.name + '" не был использован');
        } else {
            console.log('Автомобиль "' + this.name + '" был в пути - ' + this.workTime + 'ч, его средняя скорость составила ' + this.speed + ' км/ч, а проеденный путь равен ' + this.result + 'км');
        }
    };
};
 
let Car1 = new Car();
Car1.get();
 
let Car2 = new Car();
Car2.get();
 
let Car3 = new Car();
Car3.get();
 
 