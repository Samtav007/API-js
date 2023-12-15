// Progression 1: create a function and fetch the api using axios
function getData() {
  const getBlog = document.getElementById('blog');

  axios
    .get(
      'https://gnews.io/api/v4/search?q=example&apikey=540f889ca6c713540fbe13707371a772'
    )

    .then((res) => {
      console.log(res);
      const listOfArticles = res.data.articles;

      listOfArticles.forEach((article) => {
        const getArticle = document.createElement('div');
        getArticle.setAttribute('id', 'article');
        getArticle.setAttribute('class', 'article');

        const title = document.createElement('h3');
        const content = document.createElement('p');
        const img = document.createElement('img');

        title.innerText = article.title;
        content.innerText = article.content;
        img.setAttribute('src', article.image);

        getArticle.append(title, img, content);

        getBlog.appendChild(getArticle);
      })
    })
      .catch((err)=>{
        console.error(`Error! ${err}`);
    });
}
getData();
