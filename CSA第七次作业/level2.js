function callApi(url, params, callback) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url + '?' + new URLSearchParams(params), true);
    xhr.onload = function() {
        if (xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            callback(response);
        }
    };
    xhr.send();
  }
  
  // 案例展示：展示豆瓣电影 TOP 250 的数据
  callApi('https://api.douban.com/v2/movie/top250', {}, function(response) {
    const movies = response.subjects;
    const list = document.createElement('ul');
    movies.forEach(function(movie) {
      const item = document.createElement('li');
      item.textContent = movie.title;
      list.appendChild(item);
    });
    document.body.appendChild(list);
  });