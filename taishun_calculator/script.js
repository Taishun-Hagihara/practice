const Number1 = document.getElementById("num1");
const Number2 = document.getElementById("num2");
const calButn = document.getElementById("func1");
const final1 = document.getElementById("result");
const Number3 = document.getElementById("num3");
const Number4 = document.getElementById("num4");
const calButn2 = document.getElementById("func2");
const final2 = document.getElementById("result2");
//対象要素.addEventListener(種類, sampleEvent, false);で対象要素に処理を付け加える。
calButn.addEventListener("click", function(){
    const number1 = Number(Number1.value);
    const number2 = Number(Number2.value);
    const resultfirst = number1 + number2;
    //テキストのみ扱えるものでHTMLを書き換えることができる
    final1.textContent = resultfirst;
});
calButn2.addEventListener("click", function() {
const number3 = Number(Number3.value);
const number4 = Number(Number4.value);
const resultseccond = number3*number4;
final2.textContent = resultseccond;
});



