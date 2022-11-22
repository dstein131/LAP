function renderNavBar() {
    const navBarRender = `
    
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="#"><img src="/images/logoclear.svg" style="height: 60px"></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                
            </div>

            <div class="collapse navbar-collapse  " id="navbarText">
                



                    </div>

                    <div class="ms-3 ">
                        <ul class="navbar-nav mb-2 mb-lg-0">
                            <li class="nav-item">

                                <a class="navbar-brand" href="#"><img src="/images/SRI Logo with Text-01.svg"
                                        style="height: 60px"></a>
                            </li>
                        </ul>


                    </div>
                </div>
            </div>
    </nav>


    `

    document.getElementById("navContainer").innerHTML = navBarRender;





}

renderNavBar();