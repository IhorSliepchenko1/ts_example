// type ReadonlyTodo = {
//      readonly title: string;
//      readonly completed: boolean;
// };

// type Mutable<T> = {
//      - readonly [K in keyof T]: T[K]
// }

// type EditableTodo = Mutable<ReadonlyTodo>;


// type IsBoolean<T> = [T] extends [boolean] ? "boolean" : "not boolean"

// type A = IsBoolean<true>;      // "boolean"
// type B = IsBoolean<false>;     // "boolean"
// type C = IsBoolean<string>;    // "not boolean"
// type Result = IsBoolean<true | "да">;

// type UnpackArray<T> = T extends (infer U)[] ? U : T;

// type A = UnpackArray<string[]>;     // string
// type B = UnpackArray<number[]>;     // number
// type C = UnpackArray<boolean>;      // boolean (не массив — вернёт сам тип)


// type TReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

// // type A = TReturnType<() => number>;      // number
// // type B = TReturnType<() => string[]>;    // string[]
// // type C = TReturnType<() => void>;        // void


// type ArgumentType<T> = T extends (arg: infer A, ...args: any[]) => any ? A : never;

// type A = ArgumentType<(x: number) => void>;             // number
// type B = ArgumentType<(a: string, b: boolean) => void>; // string
// type C = ArgumentType<() => void>;                      // never

// {
//      type MyReturnType<T> = T extends (a: any, b: infer A, ...arg: any[]) => any ? A : never

//      type A = MyReturnType<(a: null, b: number) => string>;
//      type B = MyReturnType<(x: number, y: undefined, z: 'test') => boolean>;
//      type C = MyReturnType<() => void>;
//      type D = MyReturnType<number>;
// }     // never

`✅ Mapped Types
Partial<T> — делает все поля необязательными
Required<T> — делает все поля обязательными
Readonly<T> — запрещает изменять поля
Record<K, T> — создаёт объект с ключами K и значениями типа T
Pick<T, K> — берёт только указанные поля
Omit<T, K> — исключает указанные поля


✅ Union Helpers
Exclude<T, U> — исключает U из T
Extract<T, U> — оставляет только U из T
NonNullable<T> — убирает null | undefined из T

✅ Function Helpers
Parameters<T> — кортеж аргументов
ReturnType<T> — тип возвращаемого значения

✅ String Manipulation Types
Uppercase, Lowercase, Capitalize, Uncapitalize
`



type Keys = 'name' | 'pass' | 'mail'
// делаем объект типов через рекорд
type Obj = Record<Keys, string>

// Partial - не обяз
const objPartial: Partial<Obj> = {
     name: 'dfdffd',
     mail: 'dfdfdf'
}

// Required - обяз
const objRequired: Required<Obj> = {
     name: 'dfdffd',
     mail: 'dfdfdf',
     pass: 'dfdfdf',
}

// Readonly только чтение
const objReadonly: Readonly<Obj> = {
     name: 'dfdffd',
     mail: 'dfdfdf',
     pass: 'dfdfdf',
}

// Exclude - 1й тип, 2й что выкинуть
type NewType = Exclude<Keys, 'mail'>

// Extract - 1й тип, 2й что оставить
type NewEctract = Extract<Keys, "mail">

// Pick делает объект
type NewPick = Pick<Obj, 'name' | 'pass'>

// Omit выкидывает 
type NewOmit = Omit<Obj, 'name' | 'pass'>

// исключает null и undefined:
type NewNonNullable = NonNullable<'test' | null>


function foo(name: string, age: number) {
     return age + name
}

// делаем кортеж из типов ф-ции
type NewParameters = Parameters<typeof foo>

// выдаёт тип который вернёт фция
type NewReturnType = ReturnType<typeof foo>

type NewUppercase = Uppercase<'ttee' | 'ljkkl'>
type NewLowercase = Lowercase<'DSDSSDS' | 'DSSD'>
type NewCapitalize = Capitalize<'dfdf' | 'fddfsdd'>
type NewUncapitalize = Uncapitalize<'Sasasdsdd' | 'Ssddsd'>


type TArray = {
     userId: number
     id: number
     title: string
     body: string
}
type SortKey = keyof TArray

const arraySort: TArray[] = [
     {
          "userId": 1,
          "id": 1,
          "title": "sunt aut facere",
          "body": "text1"
     },
     {
          "userId": 2,
          "id": 2,
          "title": "qui est esse",
          "body": "text2"
     }
]
