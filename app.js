let getNews=(search)=>{

fetch(`https://newsapi.org/v2/everything?q=${search}keyword&apiKey=513584fee6f24d3ebdf48d65f01d5ded`)
  .then (res => res.json())
  .then(res =>{
      console.log(res)

      let news=document.getElementById("news")
      const articles=res.articles
      for(var i=0;i<articles.length;i++){
        const {urlToImage,title,description,url}=articles[i]
        // console.log(articles[i])
        news.innerHTML+=
        `
        <div class="card" mt-4 style="width: 18rem;">
        <img src="${urlToImage}" class="news-image card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${title.slice(0,20)}...</h5>
        <p class="card-text">${description.slice(0,50)}...</p>
        <a href="${url}" class="btn btn-primary">Click here</a>
        <span class="badge text-bg-info  p-2">Latest</span>
        </div>
        </div>
        `
        
        
    }
    
    
})
.catch(err=> console.log(err))
}
getNews()
let page=1;

function newsSearch(){
    let search=document.getElementById("search")
    let news=document.getElementById("news")

    news.innerHTML=""
    getNews(search.value)
}

function loadMore(){
    let search=document.getElementById("search")
    // page++
    getNews(search.value,page)


    
}