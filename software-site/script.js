const list = document.getElementById("app-list");
const search = document.getElementById("search");

let apps = [];

fetch("apps.json")
  .then(res => res.json())
  .then(data => {
    apps = data;
    render(apps);
  });

function render(data) {
  list.innerHTML = "";

  data.forEach(app => {
    list.innerHTML += `
      <div class="card">
        <h2>${app.name}</h2>
        <p>${app.desc}</p>
        <a class="download" href="${app.url}" target="_blank">
          下载
        </a>
      </div>
    `;
  });
}

search.addEventListener("input", () => {
  const value = search.value.toLowerCase();

  const filtered = apps.filter(app =>
    app.name.toLowerCase().includes(value)
  );

  render(filtered);
});

document.getElementById("themeBtn")
  .addEventListener("click", () => {
    document.body.classList.toggle("dark");
});