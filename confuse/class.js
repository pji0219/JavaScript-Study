/* class를 이용해 객체를 만들면 객체명으로 필드(속성)에 접근 가능
    예: people.name
*/

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

const people = new Person('kim', 23);

console.log(people.name);
console.log(people.age);


// 클래스: 연관 있는 데이터들 끼리 종합적으로 묶여 있다.

class Person {
    constructor() {
        name; // 속성(필드)
        age;
    }
    speak() {

    } // 메서드(함수), 행동
}


// Getter와 setter
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    /* 
        age라는 getter를 정의하는 순간 this.age는 메모리에 올라가 있는 데이터를 읽어오는 것이 아니라
        바로 getter를 호출하게 된다
    */

    /* 
        잘못된 값이 전달 됬을 때를 대비해서 getter와 setter를 사용하는데
        getter로 값을 리턴하고
    */
    get age() {
        return this._age;
    }


    /*
        setter를 정의하는 순간 this.age에 값을 할당할 때 바로 메모리에 할당 하는 것이
        아니라 setter를 호출하게 된다.
        
        즉 그 말은 setter 안에서 전달된 value를 this.age에 할당할 때 메모리에 값을 할당하는 것이
        아니라 이 setter를 호출하게 된다.

        그래서 계속 호출 되는 것을 방지 하기 위해서 getter와 setter의 변수명을 다르게 해줘야 한다 아래와 같이
    */
    // setter로 값을 설정
    set age(value) {
        this._age = value < 0 ? 0 : value;
    }
}

const user = new User('jong ik', 'park', -1);

console.log(user.age);


/* 
    public: 클래스 외부에서 값에 접근 가능
    private: 클래스 내부에서만 접근 가능
    둘다 constructor 없이 쓰면 되고 private 경우에 필드(속성) 앞에 #을 써주면 된다.

    최신 문법이기 때문에 지원하지 않는 브라우저가 많다.
*/

class Experiment {
    pub = 1;
    #pri = 0;
}

const experiment = new Experiment();
console.log(experiment.pub);
console.log(experiment.pri);


/* 
    static

    클래스 안에 들어있는 핃드와 메소드들은 새로운 오브젝트를 만들 때 마다
    고대로 복제 되어서 값만 우리가 지정한 값으로 변경 되어 지는데 간혹 이러한 오브젝트, 데이터에 상관 없이
    클래스가 가지고 있는 고유한 값과 데이터에 상관 없이 동일하게 반복되어 재사용 되어지는 메소드들을 static 키워드를
    붙여주면 오브젝트에 상관없이 클래스 자체에 연결 되어져 있는데 즉 그말은 오브젝트 마다 할당되어 지는 것이 아니라
    클래스 자체에 할당되어 지는 것이다.

    constructor 없이 쓰면 된다.

    오브젝트에 상관 없이, 들어오는 데이터에 상관 없이 공통적으로 클래스에서 쓸 수 있는거라면 static과 static 메소드를 이용해서 작성하는
    것이 메모리의 사용을 조금 더 줄여줄 수 있어서 이런 경우에 사용하면 좋다.
*/

class Article {
    static publisher = 'dream coding';
}

console.log(Article.publisher)