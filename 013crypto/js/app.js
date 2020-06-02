// Wait until window is loaded
function init() {
    //colors to use for percentage + and -
    const greenFont = "#00ff3b";
    const redFont = "#f4200b";

    // the URL to be called for the header information
    let globalURL = "https://api.coinpaprika.com/v1/global";

    // fetch general data from coinpaprika
    fetch(globalURL)
        .then((resp) => resp.json())
        .then((globalMarketData) => globalInfo(globalMarketData))
        // throw an error if server issue
        .catch((error) => errorMessage(error));

    //START global info to show in the header
    function globalInfo(globalMarketData) {
        // all the selectors from the HTML
        let marketCapUSDValue = document.querySelector(".marketCapUSDValue");
        let marketCapChange24Value = document.querySelector(".marketCapChange24Value");
        let vol24Value = document.querySelector(".vol24Value");
        let vol24changeValue = document.querySelector(".vol24changeValue");
        let btcDominanceValue = document.querySelector(".btcDominanceValue");
        let marketCapATHValue = document.querySelector(".marketCapATHValue");

        // all the data from the API
        let marketCapUSD = globalMarketData.market_cap_usd.toLocaleString();
        let marketCapChange24 = globalMarketData.market_cap_change_24h;
        let vol24 = globalMarketData.volume_24h_usd.toLocaleString();
        let vol24change = globalMarketData.volume_24h_change_24h;
        let btcDominance = globalMarketData.bitcoin_dominance_percentage;
        let marketCapATH = globalMarketData.market_cap_ath_value.toLocaleString();

        // Start adding data in the HTML
        marketCapUSDValue.innerHTML = `$ ${marketCapUSD}`;

        // see if positive the add a plus and do green else red or nothing if 0
        // changeColor(marketCapChange24Value);
        if (marketCapChange24 > 0) {
            marketCapChange24Value.style.color = greenFont;
            marketCapChange24Value.innerHTML = `+${marketCapChange24}%<i class="fas fa-sort-up"></i>`;
        } else if (marketCapChange24 < 0) {
            marketCapChange24Value.style.color = redFont;
            marketCapChange24Value.innerHTML = `${marketCapChange24}%<i class="fas fa-sort-down"></i>`;
        } else {
            marketCapChange24Value.innerHTML = `${marketCapChange24}`;
        }

        vol24Value.innerHTML = `$${vol24}`;
        // changeColor(vol24change);
        if (vol24change > 0) {
            vol24changeValue.style.color = greenFont;
            vol24changeValue.innerHTML = `+${vol24change}%<i class="fas fa-sort-up"></i>`;
        } else if (vol24change < 0) {
            vol24changeValue.style.color = redFont;
            vol24changeValue.innerHTML = `${vol24change}%<i class="fas fa-sort-down"></i>`;
        } else {
            vol24changeValue.innerHTML = `${vol24change}%`;
        }

        btcDominanceValue.innerHTML = `${btcDominance}%`;
        marketCapATHValue.innerHTML = `$${marketCapATH}`;

        // if we get data from the server the server symbol be green
        let serverResponse = document.querySelector(".serverResponse");
        serverResponse.style.color = greenFont;

        // console.log(globalMarketData); // to wor with the data
    }
    // END global info to show in the header

    // START Handle the error
    function errorMessage(error) {
        // if we don't get data from the server the server symbol be red
        let serverResponse = document.querySelector(".serverResponse");
        serverResponse.style.color = "#f4200b";
        console.error(error);
    }
    // END Handle the error

    //INFO ABOUT THE URL TO CALL SPECIFIC DATA

    // sparkline => true is to get 7d data to create a chart
    // The target currency of market data (usd, eur, jpy, etc.)
    // order => default(market_cap_desc), gecko_desc, gecko_asc, market_cap_asc, market_cap_desc, volume_asc, volume_desc, id_asc, id_desc
    // include price change percentage in 1h, 24h, 7d, 14d, 30d, 200d, 1y (eg. '1h,24h,7d' comma-separated, invalid values will be discarded)
    // info about only one coin => The ids of the coin, comma separated cryptocurrencies symbols (base). refers to /coins/list. When left empty, returns numbers the coins observing the params limit and start

    let urlGeko = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h";

    // fetch the data for the next api call for the coins
    fetch(urlGeko)
        .then((resp) => resp.json())
        .then((data) => coinData(data))
        .catch((error) => errorMessage(error));

    // START coinInfo API call function
    function coinData(data) {
        let coinrank = document.querySelector(".coinrank");
        let symbol = document.querySelector(".symbol");
        let coinIMG = document.querySelector(".coinIMG");
        let coinName = document.querySelector(".coinName");
        let coinprice = document.querySelector(".coinprice");
        let coinMarketCap = document.querySelector(".coinMarketCap");
        // let change1h = document.querySelector(".change1h");
        // let change24h = document.querySelectorAll(".change24h");
        let coinvol24 = document.querySelector(".coinvol24");
        let test = document.querySelector(".test");

        for (let i = 0; i < data.length; i++) {
            let symbolValue = data[i].symbol.toUpperCase();
            let coinIMGValue = data[i].image;
            let coinNameValue = data[i].name;
            let priceValue = `$${data[i].current_price.toLocaleString()}`;
            let change1hValue = Math.round(data[i].price_change_percentage_1h_in_currency * 100) / 100;
            let change24hValue = Math.round(data[i].market_cap_change_percentage_24h * 100) / 100;
            let vol24Value = `$${data[i].total_volume.toLocaleString()}`;
            let coinMarketCapValue = data[i].market_cap.toLocaleString();
            let rankValue = data[i].market_cap_rank;

            // FOR THE MOMENT BUT WILL BE CHANGED LATER

            let htmlTemplate = `<div class="listOfCoin">
        <div class="listOfCoinInsideGrid">
            <p class="coinrank"># ${rankValue}</p>
        </div>
        <div class="listOfCoinInsideGrid listOfCoinInsideGridName minim">
            <a href="#" class="symbol">${symbolValue}</a>
            <img src="${coinIMGValue}" alt="${coinNameValue}" class="maximalInfo coinIMG" />
            <a href="#" class="coinName maximalInfo">${coinNameValue}</a>
        </div>
        <div class="listOfCoinInsideGrid">
            <p class="coinprice">${priceValue}</p>
        </div>
        <div class="listOfCoinInsideGrid">
            <p class="coinchange1h">${change1hValue}</p>
        </div>
        <div class="listOfCoinInsideGrid maximalInfo">
            <p class="coinchange24h">${change24hValue}</p>
        </div>
        <div class="listOfCoinInsideGrid maximalInfo">
            <p class="coinvol24">${vol24Value}</p>
        </div>
        <div class="listOfCoinInsideGrid maximalInfo">
            <a href="#" class="coinMarketCap">$${coinMarketCapValue}</a>
        </div>
    </div>`;
            test.innerHTML += htmlTemplate;
        }
        let coinchange1h = document.querySelectorAll(".coinchange1h");
        changeColor(coinchange1h);
        let coinchange24h = document.querySelectorAll(".coinchange24h");
        // console.log(coinchange1h);

        changeColor(coinchange24h);

        console.log(data);
    }

    // END coinInfo API call function

    function changeColor(ele) {
        ele.forEach((element) => {
            if (element.innerHTML < 0) {
                element.style.color = redFont;
                element.innerHTML = `${element.innerHTML}%<i class="fas fa-sort-down"></i>`;
            } else if (element.innerHTML > 0) {
                element.style.color = greenFont;
                element.innerHTML = `+${element.innerHTML}%<i class="fas fa-sort-up"></i>`;
            } else {
                element.innerHTML = `${element.innerHTML}%`;
            }
        });
    }

    //Look if show max info or minimal info
    let minMax = document.querySelector("#minMax");
    minMax.addEventListener("change", maxOrMin);

    // START to handle if show data or not based on min/max switch
    function maxOrMin() {
        let listOfCoin = document.querySelectorAll(".listOfCoin");
        let listOfCoinInsideGridName = document.querySelector(".listOfCoinInsideGridName");
        let maximalInfo = document.querySelectorAll(".maximalInfo");

        if (this.checked) {
            // listOfCoinInsideGridName.style.justifyItems = "center";
            for (let i = 0; i < maximalInfo.length; i++) {
                listOfCoin[i].style.gridTemplateColumns = "1fr 5fr 2.5fr 1.5fr 1.5fr 4fr 4fr";
                listOfCoin[i].style.fontSize = "1em";
                maximalInfo[i].classList.remove("displayNone");
            }
        } else {
            listOfCoinInsideGridName.style.justifyItems = "end";
            for (let i = 0; i < maximalInfo.length; i++) {
                listOfCoin[i].style.gridTemplateColumns = "1fr 5fr 3fr 1.5fr";
                listOfCoin[i].style.fontSize = "2em";
                maximalInfo[i].classList.add("displayNone");
            }
        }
        // Call min max when load to put it to checked
        // maybe later put in object and in local storage
        maxOrMin();
        // START to handle if show data or not based on min/max switch
    }
}

// wait until the page is loaded before we execute something
window.addEventListener("load", init);
