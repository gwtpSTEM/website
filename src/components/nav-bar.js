import React from "react";

export default () => (
  <nav class="navbar navbar-expand-lg navbar-light bg-white sticky-top py-2 border-bottom">
      <div class="container">
          <a class="navbar-brand" href="/" target="_blank"><img src="../gwtp-logo.png" alt="" width="120"></img></a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
              <div class="navbar-nav">
              <a class="nav-item nav-link mr-2" href="/">Home <span class="sr-only">(current)</span></a>
              <a class="nav-item nav-link" href="#contact" tabindex="-1" aria-disabled="true">Contact</a>
              </div>
              <form class="form-inline pl-lg-5 mt-2 mt-lg-0">
                  <a href="http://store.gwtp.us/" class="btn btn-danger font-weight-bolder" target="_blank" rel="noopener noreferrer">Donate</a>
              </form>
          </div>
      </div>
  </nav>
)