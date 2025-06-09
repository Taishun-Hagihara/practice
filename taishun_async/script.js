async function fetchUser() {
  try{
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if(!response.ok) {
      throw new Error("レスポンスの取得に失敗しました。");
    }

    const users = await response.json();
    const userList = document.getElementById("user-list");
    users.forEach(user => {
      const li = document.createElement("li");
      li.textContent = `${user.name} (${user.email})`;
      userList.appendChild(li);
    })

  }catch (error){

    const errorMessage = document.getElementById("error-message");
    errorMessage.textContent = "データの取得に失敗しました：" + error.message;
  }
}
fetchUser();