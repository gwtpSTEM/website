import React from "react";

export default () => (
<nav class="navbar navbar-expand-lg navbar-light bg-white sticky-top py-2 border-bottom">
<div class="container">
    <a class="navbar-brand" href="/"><img src="../gwtp-logo.png" alt="Get with the Program" width="120"></img></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
        <ul class="navbar-nav font-weight-bold">
            <li class="nav-item mr-2">
                <a class="nav-link" href="#ssnews">News</a>
            </li>
            <li class="nav-item mr-2">
                <a class="nav-link" href="#ssabout">About</a>
            </li>
            <li class="nav-item mr-2">
                <a class="nav-link" href="#ssprograms">Programs</a>
            </li>
            {/* <li class="nav-item mr-2">
                <a class="nav-link" href="#ssquotes">Testimonials</a>
            </li> */}
            <li class="nav-item">
                <a class="nav-link" href="#sscontact">Contact</a>
            </li>
            {/* <li class="nav-item dropdown mr-2 ml-4">
                <a class="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Explore Further
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <a class="dropdown-item" href="camp">Brain Camp</a>
                    <a class="dropdown-item" href="academy">Brain Academy</a>
                    <a class="dropdown-item" href="lab">Brain Lab</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="history">History</a>
                </div>
            </li> */}
        </ul>
        <form class="form-inline pl-lg-4 mt-2 mt-lg-0">
        <a  href="https://gwtp2020.square.site" class="btn btn-danger font-weight-bolder" target="_blank" rel="noopener noreferrer">Donate</a>
        <a  href="/ja" class="ml-3 btn btn-outline-dark font-weight-bolder"><span class="fad fa-globe-asia"></span> 日本語</a>
        </form>
    </div>
</div>
</nav>
)