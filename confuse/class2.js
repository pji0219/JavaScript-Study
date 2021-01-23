//다양성과 상속


// 상속( Ingeritance ): 한 클래스의 필드와 메소드를 extends 키워드를 통해서 다른 클래스에게 똑같이 상속 시켜줌
// override: 부모 클래스의 메소드를 자식 클래스의 기능에 알맞게 바꾸어서(재정의해서) 사용할 수 있음 (부모 클래스에 영향은 안감)
// super: 이 키워드를 사용하면 부모 클래스의 메소드도 사용 가능
class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} color!`);
    }

    getArea() {
        return this.width * this.height;
    }
}

class Rectangle extends Shape { }
class Triangle extends Shape {
    draw() {
        super.draw();
        console.log('🔺');
    }
    getArea() {
        return (this.width * this.height) / 2;
    }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());

const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());


// instanceof: 왼쪽에 있는 객체가 오른쪽에 있는 클래스로 만들어진 것인지 확인 하는 연산자
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(rectangle instanceof Object); // 자바스크립트에서 우리가 만든 모든 클래스와 객체는 자바스크립트에 있는 오브젝트를 모두 상속 받은 것이다.

