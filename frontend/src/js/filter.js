import { searchBar } from "./elements.js"

export const filterSearch = () => {
    const videos = document.querySelectorAll(".videos__item")
    let valueFilter = searchBar.value.toLowerCase().trim() 

    if (searchBar.value !== "") {
        videos.forEach(video => {
            const title = video.querySelector(".title-video").textContent.toLowerCase()
            video.style.display = title.includes(valueFilter) ? "block" : "none"
        })
    } else {
        videos.forEach(video => video.style.display = "block")
    }
}

export const filterByCategory = (filter) => {
    const videos = document.querySelectorAll(".videos__item")
    let valueFilter = filter.toLowerCase()
    videos.forEach(video => {
        let category = video.querySelector(".category-video").textContent.toLowerCase()
        video.style.display = !category.includes(valueFilter) && valueFilter != "all" ? "none" : "block"
    })
}

searchBar.addEventListener('input', filterSearch)