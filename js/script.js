let counterup = document.querySelectorAll(".counterup")
let arr = Array.from(counterup)

arr.map ((item)=> {
    let counter = 0;
    function count() {
        counter++;
        item.innerHTML = counter;

        if (counter == item.document.number) {
            clearInterval(stop);
        }
    }

    let stop = setInterval(function () {
        count();
    }, 1000/item.dataset.number)
})