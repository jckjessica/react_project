(function()
{
    //------------------------------
    // VARS
    //------------------------------
    var price = ["1000", "2500", "5000", "800", "8745", "450", "6410", "780"];
    var currency = ["EUR", "USD"];
    var container = ["20 pieds", "40 pieds"];
    var departure = ["Marseille", "Le Havre", "Rotterdam", "Hambourg", "Valence", "Londres", "Anvers", "Immingham"];
    var arrival = ["Bremerhaven", "Milford Haven", "Trieste", "Göteberg", "Taranto", "Dunkerque", "Southampton", "Tallinn"];
    var date_start = ["12/08/2017", "01/09/2017", "01/08/2017", "30/12/2017", "15/10/2017", "12/01/2017", "05/12/2017","25/10/2017"];
    var date_end = ["04/08/2018", "03/10/2019", "14/06/2019", "31/08/2018", "17/10/2018", "11/11/2019", "26/05/2018","25/03/2019"];
    var color = ["yellow", "red", "blue", "green", "purple", "antiquewhite", "white", "black", "grey", "cyan", "pink","darkred", "darkblue"];

    var table = document.getElementById("table-prices");
    var tbody = document.getElementById("tbody");
    var tr0 = document.getElementById("row-0");
    var td = tr0.getElementsByTagName("td");
    var td_size = td.length;

    //------------------------------
    // VIEW
    //------------------------------

    function buildTable() {
        for (var i = 0; i < 8; i++)
        {
            var row = document.createElement("tr");
            row.setAttribute("id", "row-" + (i+1));
            row.setAttribute("class", "row");

            for (var j = 0; j < td_size; j++)
            {
                var cell = document.createElement("td");
                cell.setAttribute("id", "cell-" + td[j].id + "-" + (i+1));
                cell.setAttribute("class", "cell cell-" + td[j].id);
                row.appendChild(cell);
            }

            tbody.appendChild(row);
            fillPrice();
            fillCurrency();
            fillContainer();
            fillDeparture();
            fillArrival();
            fillDateStart();
            fillDateStart();
            fillDateEnd();
            enableLines();

        }

    } // buildTable()

    function enableLines() {
        var row = document.getElementsByClassName("row");
        for(var i = 0; i < row.length; i++){
            row[i].addEventListener("mouseover", function(){
                this.style.cursor = "pointer";
            });
            row[i].addEventListener("click", onClickRow);
        }
    } // enableLines()

    function onClickRow() {
        var deleteButton;
        var addButton;

        deleteButton = document.createElement("button");
        addButton = document.createElement("button");
        deleteButton.innerHTML = "Supprimer";
        deleteButton.setAttribute("class", "btn btn-default");
        addButton.setAttribute("class", "btn btn-default");
        addButton.innerHTML = "Ajouter";

        this.appendChild(deleteButton);
        this.appendChild(addButton);
    } // onClickRow()

    //------------------------------
    // FUNCTIONS
    //------------------------------
    function fillPrice(){
        var cell_price = document.getElementsByClassName("cell-price");

        for (var i = 0; i < cell_price.length; i++){
            cell_price[i].innerHTML = getRandomElement(price);
        }
    } // fillPrice()

    function fillCurrency(){
        var cell_currency = document.getElementsByClassName("cell-currency");

        for (var i = 0; i < cell_currency.length; i++){
            cell_currency[i].innerHTML = getRandomElement(currency);
        }
    } // fillCurrency()

    function fillContainer(){
        var cell_container = document.getElementsByClassName("cell-container");

        for (var i = 0; i < cell_container.length; i++){
            cell_container[i].innerHTML = getRandomElement(container);
        }
    } // fillContainer()

    function fillDeparture(){
        var cell_departure = document.getElementsByClassName("cell-departure");

        for (var i = 0; i < cell_departure.length; i++){
            cell_departure[i].innerHTML = getRandomElement(departure);
        }
    } // fillDeparture()

    function fillArrival(){
        var cell_arrival = document.getElementsByClassName("cell-arrival");

        for (var i = 0; i < cell_arrival.length; i++){
            cell_arrival[i].innerHTML = getRandomElement(arrival);
        }
    } // fillArrival()

    function fillDateStart(){
        var cell_date_start = document.getElementsByClassName("cell-date_start");

        for (var i = 0; i < cell_date_start.length; i++){
            cell_date_start[i].innerHTML = getRandomElement(date_start);
        }
    } // fillDateStart()

    function fillDateEnd(){
        var cell_date_end = document.getElementsByClassName("cell-date_end");

        for (var i = 0; i < cell_date_end.length; i++){
            cell_date_end[i].innerHTML = getRandomElement(date_end);
        }
    } // fillDateEnd()

    /**
     * Fonction pour donner une valeur aléatoire du tableau choisi
     * @param tab
     * @returns {*}
     */
    function getRandomElement(tab) {
        return tab[Math.floor(Math.random() * tab.length)];
    } // getRandomElement

    //------------------------------
    // ON DOM READY
    //------------------------------

    buildTable();

})();
