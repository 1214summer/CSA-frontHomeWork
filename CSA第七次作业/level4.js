const Api = {
    call(url, params) {
      return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url + '?' + new URLSearchParams(params), true);
        xhr.onload = function() {
            if (xhr.status === 200) {
                const response = JSON.parse(xhr.responseText);
                resolve(response);
            } else {
                reject(new Error(`status:${xhr.status}`));
            }
        };
        xhr.onerror = function() {
            reject(new Error('network error'));
        }
        xhr.send();
      })
    },
    // 案例展示：展示豆瓣电影 TOP 250 的数据
    getTop250() {
      return this.call('https://api.douban.com/v2/movie/top250', {});
    }
  }
  
  // 调用方式
  Api.getTop250().then(response => {
    const movies = response.subjects;
    const list = document.createElement('ul');
    movies.forEach(movie => {
      const item = document.createElement('li');
      item.textContent = movie.title;
      list.appendChild(item);
    });
    document.body.appendChild(list);
  }).catch(error => {
    console.error(error);
  });