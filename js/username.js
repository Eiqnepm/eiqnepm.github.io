async function generate() {
  const response = await fetch(
    "https://www.reddit.com/api/v1/generate_username.json"
  );
  
  if (response.status != 200) {
    setTimeout(generate, 10 * 1000);
    return;
  }
  
  const data = await response.json();
  const table = document.getElementById("table");

  for (const name of data.usernames) {
    const row = table.insertRow(-1);
    const cell = row.insertCell(-1);
    cell.innerHTML = name;
  }
}

generate();
