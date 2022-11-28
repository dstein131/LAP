function renderNavBar() {
    const navBarRender = `
    
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="/index.html"><img src="/images/logoclear.svg" style="height: 60px"></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="/index.html">Dashboard</a>
                    </li>

                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            Lien Management
                        </a>
                        <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDropdownMenuLink">
                            <li><a class="dropdown-item" href="/newLien.html">Start New Lien</a></li>
                            <li><a class="dropdown-item" href="/updateProp.html">Update Property</a></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/reports.html">Reports & Queries</a>
                    </li>
                </ul>
            </div>

            <div class="collapse navbar-collapse  " id="navbarText">
                <div class="ms-auto d-flex flex-row align-items-center">

                    <div class="">
                        <ul class="navbar-nav mb-2 mb-lg-0">

                            <li class="nav-item dropdown ">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    Notificaitons
                                </a>
                                <ul class="dropdown-menu dropdown-menu-dark" id="notificationContainer"
                                    aria-labelledby="navbarScrollingDropdown">


                                </ul>
                            </li>
                            <li class="nav-item dropdown ">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    $userName
                                </a>
                                <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarScrollingDropdown">
                                    <li><a class="dropdown-item" href="/myAccount.html">My Account</a></li>
                                    <li><a class="dropdown-item" href="/preLogin.html">Logout</a></li>
                            </li>

                        </ul>



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

