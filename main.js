function showLoader() {
    document.getElementById("loader").style.display = "flex";
}

function hideLoader() {
    document.getElementById("loader").style.display = "none";
}
// const gallery = document.getElementsByClassName("hero");
const btn = document.querySelector("button");
const fetchData = async () => {
    const url = 'https://api.thecatapi.com/v1/images/search?limit=10';
    let data = await fetch(url)
        .then((response) => {
                   return response.json()
        })
        .then((data) =>{
           hideLoader()
            data.forEach((item) =>{
                document.querySelector(".hero").innerHTML += `<img class='hero__img' src='${item.url}' alt="котик"/> `
            })
        })
};
    // console.log(data)
    btn.addEventListener('click', () => {
        showLoader()
         fetchData()

    })


