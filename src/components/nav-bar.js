import React from "react";

export default () => (
<nav class="navbar navbar-expand-lg navbar-light bg-white sticky-top py-2 border-bottom">
<div class="container">
    <a class="navbar-brand" href="/"><img src="../gwtp-logo.png" alt="Get with the Program" width="120"></img></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
        <ul class="navbar-nav">
            <li class="nav-item mr-2">
                <a class="nav-link" href="/">Home</a>
            </li>
            <li class="nav-item dropdown mr-2">
                <a class="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Programs
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <a class="dropdown-item" href="camp">Brain Camp</a>
                    <a class="dropdown-item" href="academy">Brain Academy</a>
                    <a class="dropdown-item" href="lab">Brain Lab</a>
                </div>
            </li>
            <li class="nav-item mr-2">
                <a class="nav-link" href="history">History</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#sscontact">Contact</a>
            </li>
        </ul>
        <form class="form-inline pl-lg-5 mt-2 mt-lg-0">
        <a  href="http://store.gwtp.us/" class="btn btn-danger font-weight-bolder" target="_blank" rel="noopener noreferrer">Donate</a>
        </form>
    </div>
</div>
</nav>
)