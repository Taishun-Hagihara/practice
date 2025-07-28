//若干の理解の浅さは感じるものの久しぶりに触っているのでそんなもんかなと思って学習を進めている。
const Name = document.getElementById("name");
const Age = document.getElementById("age");
const Button = document.getElementById("button");
const Result = document.getElementById("result")
//formタグごと取得している（以下によって）なぜformを取得する必要があるかというとformにあるsubmitoを検知するためにはformごと取得する必要があるから
const form = document.querySelector("form")

form.addEventListener("submit",function(event) {
    //submitがされた時にページがリロードされるのでeventに対してpreventDefaultをつける
    event.preventDefault();
    if(Name.value == "" || Age.value == "") {
        Result.textContent = "名前と年齢を入力して下さい"
        Result.style.color = "red";
        return;
    }
    if(isNaN(Age.value) || Number(Age.value) <= 0) {
        Result.textContent = "年齢は正の値で入力して下さい"
        Result.style.color = "red";
        return;
    }
    Result.textContent = `ようこそ、${Name.value}さん：${Age.value}歳`
    Result.style.color = "green"
})
