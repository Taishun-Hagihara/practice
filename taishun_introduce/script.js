people = [
    {name:"aさん", age:20},
    {name:"bさん", age:21},
    {name:"cさん", age:22}
]
const list = document.getElementById("introduce");
for (let i = 0; i < people.length; i++) {
    const person = people[i];
    const li = document.createElement("li");
    const int = `${person.name}は${person.age}歳である。`;
    //生成したliにtextContentで文字列を代入することを忘れていた。
    li.textContent = int;
    introduce.appendChild(li);
};