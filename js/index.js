
import num from "./export01"
//import {color,ram} from "./export02"
//import {useState} from 'react' -> react 불러오기 등등
//외부파일넣기 를 하게될 경우 각각의 bundle에 따라서 다를 수있다.
import * as main from "./export02"
num('this is export1')

console.log(main.color.name)
main.ram(10)
console.log(main.default)