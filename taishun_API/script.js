//予想通りgetElementで得た値にそのまま.addEventListenerをつけている
document.getElementById("search-btn").addEventListener("click" ,async () => {

  const name  = document.getElementById("pokemon-name").value.toLowerCase();
  const resultDiv = document.getElementById("result");
  const errorMsg = document.getElementById("error-message");

  resultDiv.innerHTML = "";
  errorMsg.textContent = "";

  try{
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/${name}");

    if(!response.ok){
      throw new Error("ポケモンが見つかりません")
    }

    const date = await response.json();

    const html = `
    <h2>${data.name.toUpperCase()}</h2>  <!-- 名前を大文字で表示 -->
    <img src="${data.sprites.front_default}" alt="${data.name}" />
    <p>タイプ: ${data.types.map(t => t.type.name).join(", ")}</p>  <!-- 複数タイプ対応 -->
  `;

  resultDiv.innerHTML = html;
  }catch (error) {
    // エラーが発生したときの表示
    errorMsg.textContent = "エラー：" + error.message;
  }
});
  

