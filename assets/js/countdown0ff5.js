(function () {
    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

    let birthday = "May 02, 2023 09:00:00 UTC",
        countDown = new Date(birthday).getTime(),
        x = setInterval(function () {
            let now = new Date().getTime(),
                distance = countDown - now;

            (document.getElementById("days").innerText = Math.floor(distance / day)),
            (document.getElementById("hours").innerText = Math.floor(
                (distance % day) / hour
            )),
            (document.getElementById("minutes").innerText = Math.floor(
                (distance % hour) / minute
            )),
            (document.getElementById("seconds").innerText = Math.floor(
                (distance % minute) / second
            ));

            //do something later when date is reached
            if (distance < 0) {
                let headline = document.getElementById("headline"),
                    countdown = document.getElementById("countdown"),
                    content = document.getElementById("content");

                headline.innerHTML = "🚀 LFGO... buy buy on <a href='https://pancakeswap.finance/swap?outputCurrency=0x8520568339c077ad035e94b660f3258ee8fd4b45&inputCurrency=BNB' class='btn' target='_blank' style='color:orange'>PancakeSwap 🚀</a> ";
                //headline.innerText = "🚀 LFGO... buy buy on PinkSale";
                countdown.style.display = "none";
                content.style.display = "block";

                clearInterval(x);
            }
            //seconds
        }, 0);
})();