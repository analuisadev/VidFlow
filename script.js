const containerVideos = document.querySelector(".videos__container")
const searchBar = document.querySelector(".pesquisar__input")
const categoryButton = document.querySelectorAll(".superior__item")

async function searchShowVideos() {
    try {
        const search = await fetch("http://localhost:3000/videos")
        const videos = await search.json()
        videos.forEach((video) => {
            if(video.categoria === '') {
                throw new Error("Vídeo sem categoria")
            }

            containerVideos.innerHTML += `
                    <li class="videos__item">
                        <iframe src=${video.url} title=${video.titulo} frameborder="0" allowfullscreen></iframe>
                        <div class="descricao-video">
                            <img class="img-canal" src=${video.imagem} alt="Logo do Canal">
                            <h3 class="titulo-video">${video.titulo}</h3>
                            <p class="titulo-canal">${video.descricao}</p>
                            <p class="categoria-video" hidden>${video.categoria}</p>
                            </div>
                    </li>
                `
        })
    } catch (error) {
        containerVideos.innerHTML = `<p>Houve um erro inesperado ao carregar os vídeos: ${error}</p>`
    }
}

searchShowVideos()

const filterSearch = () => {
    const videos = document.querySelectorAll(".videos__item")
    let valueFilter = searchBar.value.toLowerCase().trim() 

    if (searchBar.value !== "") {
        videos.forEach(video => {
            const title = video.querySelector(".titulo-video").textContent.toLowerCase()
            video.style.display = title.includes(valueFilter) ? "block" : "none"
        })
    } else {
        videos.forEach(video => video.style.display = "block")
    }
}

const filterByCategory = (filter) => {
    const videos = document.querySelectorAll(".videos__item")
    let valueFilter = filter.toLowerCase()
    videos.forEach(video => {
        let category = video.querySelector(".categoria-video").textContent.toLowerCase()
        video.style.display = !category.includes(valueFilter) && valueFilter != "tudo" ? "none" : "block"
    })
}

categoryButton.forEach((button) => {
    let categoryName = button.getAttribute("name")
    button.addEventListener("click", () => filterByCategory(categoryName))
})

searchBar.addEventListener('input', filterSearch)