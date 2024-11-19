// const url = "https://fakestoreapi.com/products ";
// let products = []; // حفظ المنتجات
// let cart = [];
// let total = 0;

// جلب النتجات من ابي اي وعرضعا

// عرض التصنيفات في القايمه المنسدله

// عرض المنجات في الصفحه

const url = "https://jsonplaceholder.typicode.com/users";

async function getusers() {
  try {
    const response = await fetch(url);
    const users = await response.json();
    userdirectory(users);
    console.log(users);
  } catch (error) {
    console.error("error your users", error);
  }
}

function userdirectory(user) {
  const userList = document.getElementById("user-list");
  userList.innerHTML = "";

  user.forEach((users) => {
    const userElement = document.createElement("div");
    userElement.className = "user";
    userElement.textContent = users.name;
    userElement.onclick = () => showUsers(users);
    userList.appendChild(userElement);
  });
}

function showUsers(user) {
  document.getElementById("user-name").textContent = user.name;
  document.getElementById("user-email").textContent = user.email;
  document.getElementById("user-phone").textContent = user.phone;
  document.getElementById("user-website").textContent = user.website;
  document.getElementById("user-details").classList.remove("hidden");

}
function Closedetails() {
  document.getElementById('user-details').classList.add('hidden');
}


getusers();
