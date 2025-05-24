const Name = document.getElementById("name");
const Age = document.getElementById("age");
const Button = document.getElementById("button");
const Result = document.getElementById("result");
const form = document.querySelector("form");


form.addEventListener("submit", function (event) {
    event.preventDefault(); // ページがリロードされないようにする

    if (Name.value === "" || Age.value === "") {
        Result.textContent = "名前と年齢を入力してください";
        Result.style.color = "red";
        return;
    }
    if(isNaN(Age.value) || Number(Age.value)<= 0) {
        Result.textContent = "年齢は正の値で入力してください。";
        Result.style.color = "red";
        return;
    }
    Result.textContent = `ようこそ ${Name} さん（${Age} 歳）！`;
    Result.style.color = "green";
});  