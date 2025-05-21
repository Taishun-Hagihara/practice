const Number1 = document.getElementById("num1");
const Number2 = document.getElementById("num2");
const calButn = document.getElementById("func1");
const final1 = document.getElementById("result");
//対象要素.addEventListener(種類, sampleEvent, false);で対象要素に処理を付け加える。
calButn.addEventListener("click", function(){
    const number1 = Number(Number1.value);
    const number2 = Number(Number2.value);
    const resultfirst = number1 + number2;
    //テキストのみ扱えるものでHTMLを書き換えることができる
    final1.textContent = resultfirst;
});



