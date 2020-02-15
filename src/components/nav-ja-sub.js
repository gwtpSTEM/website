import React from "react";

export default () => (
<nav class="navbar navbar-expand-lg navbar-light bg-white sticky-top py-2 border-bottom">
<div class="container">
    <a class="navbar-brand" href="/ja"><img src="../../gwtp-logo.png" alt="Get with the Program" width="120"></img></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
        <ul class="navbar-nav">
            <li class="nav-item mr-2">
                <a class="nav-link" href="/ja">ホーム</a>
            </li>
            {/* <li class="nav-item dropdown mr-2">
                <a class="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    さらに詳しく
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <a class="dropdown-item" href="/camp">ブレイン・キャンプ</a>
                    <a class="dropdown-item" href="/academy">ブレイン・アカデミー</a>
                    <a class="dropdown-item" href="/lab">ブレイン・ラボ</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="/history">これまでの活動</a>
                </div>
            </li> */}
            <li class="nav-item">
                <a class="nav-link" href="#sscontact">お問い合わせ</a>
            </li>
        </ul>
        {/* <form class="form-inline pl-lg-5 mt-2 mt-lg-0">
        <a  href="https://gwtp2020.square.site" class="btn btn-danger font-weight-bolder" target="_blank" rel="noopener noreferrer">寄付</a>
        </form> */}
    </div>
</div>
</nav>
)