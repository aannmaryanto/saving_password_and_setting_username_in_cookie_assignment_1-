document.addEventListener('DOMContentLoaded', function() {
  // Function to get the value of a cookie by name
  function getCookie(name) {
    let cookieArray = document.cookie.split('; ');
    let cookie = cookieArray.find((row) => row.startsWith(name + '='));
    return cookie ? cookie.split('=')[1] : null;
  }

  // Function to set a cookie
  function setCookie(name, value, daysToExpire) {
    let date = new Date();
    date.setTime(date.getTime() + daysToExpire * 24 * 60 * 60 * 1000);
    document.cookie =
      name + '=' + value + ';expires=' + date.toUTCString() + ';path=/';
  }

  // 1. Get the value of the 'count' cookie
  // 2. If the cookie exists, increment the value and update the cookie
  // 3. If the cookie does not exist, create it and set the value to 1
  // 4. Display the count on the webpage

  // your code here
  function saveToCookies(event) {
  event.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  document.cookie = `username=${username}; max-age=${60 * 60 * 24 * 7}; path=/`;
  document.cookie = `password=${password}; max-age=${60 * 60 * 24 * 7}; path=/`;

  displayCookies();
}

function getCookieValue(name) {
  const cookies = document.cookie.split('; ');
  for (let c of cookies) {
    const [key, value] = c.split('=');
    if (key === name) return value;
  }
  return '';
}

function displayCookies() {
  const username = getCookieValue('username');
  const password = getCookieValue('password');
  const output = document.getElementById('output');
  if (username && password) {
    output.innerHTML = `Saved Cookies:<br>Username: ${username}<br>Password: ${password}`;
  } else {
    output.innerHTML = 'No cookies found.';
  }
}

function clearCookies() {
  document.cookie = "username=; max-age=0; path=/";
  document.cookie = "password=; max-age=0; path=/";
  displayCookies();
}

window.onload = displayCookies;

});
