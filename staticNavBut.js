// render to the dom element #staticnavbut 

// create a function to render to the dom element #staticnavbuttons
function renderStaticNavBut() {
    var staticNavBut = document.getElementById("staticnavbuttons");
    staticNavBut.innerHTML = `
    <div class="container-fluid  w-75 d-flex align-items-center justify-content-around flex-wrap mb-3">
    <a href="/newLien.html"> 
        <button type="button" 
                class="btn btn-success navbut m-2" 
                style="width: 210px; border-radius: 30px">
                <div class="d-flex align-items-center justify-content-center">
                    <img src="/images/start.svg" 
                        alt="..."
                        style="width: 20px; height: 20px; margin-right: 10px"
                        >
                    Start New Lien
                </div>
        </button>
    </a>
    <a href="/demoAuctions.html">
        <button type="button" 
            class="btn btn-success navbut m-2" 
            style="width: 210px; border-radius: 30px">
                <div class="d-flex align-items-center justify-content-center">
                    <img src="/images/update.svg"
                        alt="..."
                        style="width: 20px; height: 20px; margin-right: 10px"
                        >
                   Update Property
                </div>
        </button>
    </a>
    <a href="/manageBidders.html">
    <button type="button" 
    class="btn btn-success navbut m-2" 
    style="width: 210px; border-radius: 30px">
        <div class="d-flex align-items-center justify-content-center">
            <img src="/images/query.svg"
                alt="..."
                style="width: 20px; height: 20px; margin-right: 10px"
                >
            Reports & Queries
        </div>
</button>
    </a>
    <a href="/wonParcels.html">
    <button type="button" 
    class="btn btn-success navbut m-2" 
    style="width: 210px; border-radius: 30px">
        <div class="d-flex align-items-center justify-content-center">
            <img src="/images/map.svg"
                alt="..."
                style="width: 20px; height: 20px; margin-right: 10px"
                >
            County Settings
        </div>
</button>
    </a>

    <a href="/invoices.html">
    <button type="button" 
    class="btn btn-success navbut m-2" 
    style="width: 210px; border-radius: 30px">
        <div class="d-flex align-items-center justify-content-center">
            <img src="/images/city.svg"
                alt="..."
                style="width: 20px; height: 20px; margin-right: 10px"
                >
            Municipal Settings
        </div>
</button>
    </a>

  </div>
    `
}

renderStaticNavBut();
