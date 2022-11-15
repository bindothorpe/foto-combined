const wrapper = document.getElementById("wrapper");
wrapper.onclick = () => {
    const images = document.getElementsByClassName("image");

    if (images[0].classList.contains("out")) {
        console.log("classList contains 'out'")
        for (let index = 0; index < images.length; index++) {
            images[index].classList.remove("out")
        }

    } else {
        console.log("classList does not contains 'out'")
        console.log(`Length of list is ${images.length}`)
        for (let index = 0; index < images.length; index++) {
            console.log(index)
            images[index].classList.add("out")
        }
    }
}