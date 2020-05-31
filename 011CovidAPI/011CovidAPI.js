const url = "https://api.covid19api.com/summary";

fetch(url)
    .then((response) => response.json())
    .then((data) => doSomething(data));

let sortedData = [];
function doSomething(data) {
    let content = document.querySelector(".content");

    data.Countries.forEach((a) => {
        sortedData.push(a);
    });
}

sortedData.sort((a, b) => (a.TotalConfirmed < b.TotalConfirmed ? 1 : -1));

function doSomething(data) {
    globalNumbers(data.Global);
    data.Countries.forEach((a) => {
        sortedData.push(a);
    });
    // we take the smallest to the biggest number
    sortedData.sort((a, b) => (a.TotalConfirmed > b.TotalConfirmed ? 1 : -1));
    cardData(sortedData);
}
// global Data
function globalNumbers(data) {
    let totalConfirmed = document.querySelector("#totalConfirmed");
    let newConfirmed = document.querySelector("#newConfirmed");
    let totalDeaths = document.querySelector("#totalDeaths");
    let newDeaths = document.querySelector("#newDeaths");
    let totalRecovered = document.querySelector("#totalRecovered");
    let newRecovered = document.querySelector("#newRecovered");
    totalConfirmed.innerHTML = ` ${data.TotalConfirmed}`;
    newConfirmed.innerHTML = ` ${data.NewConfirmed}`;
    totalDeaths.innerHTML = ` ${data.TotalDeaths}`;
    newDeaths.innerHTML = ` ${data.NewDeaths}`;
    totalRecovered.innerHTML = ` ${data.TotalRecovered}`;
    newRecovered.innerHTML = ` ${data.NewRecovered}`;
}

function cardData(data) {
    let position = data.length;
    for (let i = 0; i < data.length; i++) {
        let content = document.querySelector(".content");
        let divCard = '<div class="card"></div>';

        // afterbegin puts the smallest first and like that we can always get the first card

        content.insertAdjacentHTML("afterbegin", divCard);
        let card = document.querySelector(".card");
        card.insertAdjacentHTML(
            "afterbegin",
            `
        
                <div class="row">
                    <h3>#${position--} </h3>
                    <img src="https://www.countryflags.io/${data[i].CountryCode}/shiny/48.png" alt="" />
                    <div class="country">
                        

                        <h3>${data[i].Country}</h3>
                    </div>
                </div>

                <div class="row">
                    <div class="leftData dataBlock totalConfirmed">
                        <h4>Total Confirmed:</h4>
                        <h3 class="totalConfirmedNumber">${data[i].TotalConfirmed}</h3>
                    </div>
                    <div class="rightData dataBlock newConfirmed">
                        <h4>New Confirmed:</h4>
                        <h3 class="newConfirmedNumber">${data[i].NewConfirmed}</h3>
                    </div>
                </div>

                <div class="row">
                    <div class="leftData dataBlock totalDeaths">
                        <h4>Total Deaths:</h4>
                        <h3 class="totalDeathsNumber">${data[i].TotalDeaths}</h3>
                    </div>
                    <div class="rightData dataBlock newDeaths">
                        <h4>New Deaths:</h4>
                        <h3 class="newDeathsNumber">${data[i].NewDeaths}</h3>
                    </div>
                </div>

                <div class="row">
                    <div class="leftData dataBlock totalRecovered">
                        <h4>Total Recovered:</h4>
                        <h3 class="totalRecoveredNumber">${data[i].TotalRecovered}</h3>
                    </div>
                    <div class="rightData dataBlock newRecovered">
                        <h4>New Recovered:</h4>
                        <h3 class="newRecoveredNumber">${data[i].NewRecovered}</h3>
                    </div>
                </div>
            
        `
        );
    }
}
