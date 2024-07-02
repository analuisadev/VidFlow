import { categoryButton, containerVideos } from "./elements.js"
import { filterByCategory} from './filter.js'

async function searchShowVideos() {
    try {
        const search = await fetch("http://localhost:3000/videos")
        const videos = await search.json()
        videos.forEach((video) => {
            if(video.category === '') {
                throw new Error("Vídeo sem categoria")
            }

            containerVideos.innerHTML += `
                    <li class="videos__item">
                        <iframe src=${video.url} title=${video.title} frameborder="0" allowfullscreen></iframe>
                        <div class="description-video">
                            <img class="img-channel" src=${video.image} alt="Logo do Canal">
                            <h3 class="title-video">${video.title}</h3>
                            <p class="title-channel">${video.description}</p>
                            <p class="category-video" hidden>${video.category}</p>
                            </div>
                    </li>
                `
        })
    } catch (error) {
        containerVideos.innerHTML = `<p>Houve um erro inesperado ao carregar os vídeos: ${error}</p>`
    }
}

searchShowVideos()

categoryButton.forEach((button) => {
    let categoryName = button.getAttribute("name")
    button.addEventListener("click", () => filterByCategory(categoryName))
})