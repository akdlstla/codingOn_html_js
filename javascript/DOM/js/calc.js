//alert("testing");
function calc(){
let v1 = document.getElementById("v1");
let v2 = document.getElementById("v2");
let op = document.getElementById("op");
console.log(v1, v2, op);

let v1val = v1.value;
let v2val = v2.value;
let opval = op.value;
console.log(v1val, v2val, opval);
//input value가 string(문자)항
console.log(typeof (v1val), typeof (v2val));


//숫자(정수, 실수)로 형변환
v1val = Number(v1val);
v2val = Number(v2val);

let result = 0; //계산 결과값
switch(opval){
    case '+':
        result = v1val + v2val; break;
    case '-':
        result = v1val - v2val; break;
    case '*':
        result = v1val * v2val; break;
    case '/':
        result = v1val / v2val; break;
}
console.log(result);

//계산된 결과(result) 결과 input에 출력
let res = document.getElementById("res");
res.value = result;
}
//취소하기 함수 정의
function reset(){
    console.log('reset')
    //빈문자열로 초기화
    document.getElementById("v1"). value="";
    document.getElementById("v2"). value="";
    document.getElementById("op"). value="";
    document.getElementById("res"). value="";
}