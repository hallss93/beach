export default {
    methods: {
        animationContainer() {
            let container = document.querySelector("#container-main");
            container.style.marginTop = "-3.75rem";
            container.style.opacity = "1";
        },
        async slide(index) {
            // Get All div with background image
            document.querySelectorAll(".c-gallery").forEach((e, i) => {
                // Hidden other
                if (i != index) e.style.display = "none";
                else {
                    e.style.display = "block";
                    let time = 0;

                    // Array Promises for resolve All background position changes
                    let array = [];
                    for (var l = 1000; l > 800; l--) {
                        array.push(l);
                    }
                    let promises = [];
                    array.map(el => {
                        promises.push(
                            new Promise(resolve => {
                                setTimeout(async () => {
                                    e.style.backgroundPosition = "100% " + el / 10 + "%";
                                    resolve(true);
                                }, time);
                            })
                        );
                        time += 10;
                    });
                    Promise.all(promises);
                }
            });
        }
    }
}