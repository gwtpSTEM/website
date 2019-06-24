import React from "react";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/pro-solid-svg-icons';
import { far } from '@fortawesome/pro-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(fas, far, fab)

export default ({ data }) => (
<div>
{/* navbar */}
  <nav class="navbar navbar-expand-lg navbar-light bg-white sticky-top py-2 border-bottom">
      <div class="container">
          <a class="navbar-brand" href="/" target="_blank"><img src="http://gwtp.us/images/logo_no_url_rev.png" alt="" width="120"></img></a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
          </button>
          
          
          <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
              <div class="navbar-nav">
              <a class="nav-item nav-link mr-2" href="#home">Home <span class="sr-only">(current)</span></a>
              <a class="nav-item nav-link mr-2" href="#about">About</a>
              <a class="nav-item nav-link mr-2" href="#programs">Programs</a>
              <a class="nav-item nav-link" href="#contact" tabindex="-1" aria-disabled="true">Contact</a>
              </div>
              <form class="form-inline pl-lg-5 mt-2 mt-lg-0">
                  <button class="btn btn-danger font-weight-bolder" type="button">Donate</button>
              </form>
          </div>
          
      </div>
  </nav>
{/* /navbar */}

{/* alert */}
  <div class="container">
      <div class="row">
          <div class="col-lg-7 mx-auto">
              <div class="alert alert-danger alert-dismissible fade show my-3" role="alert">
                  <strong>Hurry!</strong> Camp registration ends in two days. <a href="#home" target="_blank" class="alert-link">Register now</a>! <span class="badge badge-danger ml-4">2 spots left</span>
                  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                  </button>
              </div>
          </div>
      </div>
  </div>
{/* /alert */}

{/* jumbotron */}
  <div class="jumbotron jumbotron-fluid bg-dark text-white d-md-none mb-0">
      <div class="container text-center py-5">
          <h1>Get with the Program</h1>
          <p>Preparing ALL kids for a future in STEM...<br></br>LITTLE kids, BIG opportunity!</p>
      </div>
  </div>
{/* /jumbotron */}

{/* carousel */}
  <div id="carouselExampleSlidesOnly" class="carousel slide carousel-fade d-none d-md-block" data-ride="carousel">
      <div class="carousel-inner">
          <div class="carousel-item active">
              <img src="https://source.unsplash.com/2000x600/?raspberries" class="d-block w-100" alt="..."></img>
              <div class="carousel-caption">
                  <h1 class="display-2">Get with the Program</h1>
                  <p class="lead">Preparing ALL kids for a future in STEM...<br></br>LITTLE kids, BIG opportunity!</p>
              </div>
          </div>
          <div class="carousel-item">
              <img src="https://source.unsplash.com/2000x600/?technology" class="d-block w-100" alt="..."></img>
          </div>
          <div class="carousel-item">
              <img src="https://source.unsplash.com/2000x600/?engineering" class="d-block w-100" alt="..."></img>
          </div>
          <div class="carousel-item">
              <img src="https://source.unsplash.com/2000x600/?math" class="d-block w-100" alt="..."></img>
          </div>
      </div>
  </div>
{/* /carousel */}

{/* about */}
  <div id="about" class="container py-5">
      <div class="row">
          <div class="col-lg mb-3">
              <h2 class="mb-4 h1">
                  About
              </h2>
              <p class="text-muted text-justify">
                  Suspendisse in elementum mi, ac sollicitudin sem. Mauris bibendum tellus ut hendrerit accumsan. Nulla sit amet rutrum ligula, id efficitur metus. Cras congue urna ac mi ullamcorper tempor. Pellentesque metus lorem, pharetra in risus in, facilisis bibendum ex. Fusce volutpat venenatis luctus. Praesent lacinia porta mauris, nec tempor nulla gravida non. Mauris convallis odio a odio porttitor, at congue tortor cursus. Suspendisse potenti. Pellentesque eget orci condimentum, mollis sapien at, porttitor felis. Vivamus tempus massa erat. Suspendisse lacus arcu, vulputate in elit nec, sagittis ornare eros.
              </p>
          </div>
          <div class="col-lg">
              <h2 class="mb-4 h1">
                  Mission
              </h2>
              <p class="text-muted text-justify">
                  Suspendisse in elementum mi, ac sollicitudin sem. Mauris bibendum tellus ut hendrerit accumsan. Nulla sit amet rutrum ligula, id efficitur metus. Cras congue urna ac mi ullamcorper tempor. Pellentesque metus lorem, pharetra in risus in, facilisis bibendum ex. Fusce volutpat venenatis luctus. Praesent lacinia porta mauris, nec tempor nulla gravida non. Mauris convallis odio a odio porttitor, at congue tortor cursus. Suspendisse potenti. Pellentesque eget orci condimentum, mollis sapien at, porttitor felis. Vivamus tempus massa erat. Suspendisse lacus arcu, vulputate in elit nec, sagittis ornare eros.
              </p>
          </div>
      </div>
  </div>
  {/* /about */}

{/* founder */}
  <div id="about" class="py-5 bg-secondary">
      <div class="container">
          <div class="row">
              <div class="col-lg mb-5 mb-lg-0">
                      <img src="https://source.unsplash.com/600x350/?portrait" alt="Jason Williams" class="rounded img-fluid"></img>
              </div>
              <div class="col-lg text-white">
                  <h2 class="h1">
                      Jason Williams
                  </h2>
                  <p class="font-weight-bold">
                      CEO/Founder
                  </p>
                  <p class="mb-4 text-justify">
                      Suspendisse in elementum mi, ac sollicitudin sem. Mauris bibendum tellus ut hendrerit accumsan. Nulla sit amet rutrum ligula, id efficitur metus. Cras congue urna ac mi ullamcorper tempor. Pellentesque metus lorem, pharetra in risus in, facilisis bibendum ex. Fusce volutpat venenatis luctus. Praesent lacinia porta mauris, nec tempor nulla gravida non. Mauris convallis odio a odio porttitor, at congue tortor cursus. Suspendisse potenti. Pellentesque eget orci condimentum, mollis sapien at, porttitor felis. Vivamus tempus massa erat. Suspendisse lacus arcu, vulputate in elit nec, sagittis ornare eros.
                  </p>
              </div>
          </div>
      </div>
  </div>
{/* /founder */}

{/* team */}
  <div id="team" class="container py-5">
      <h2 class="mb-5 h1">Our Team</h2>
      <div class="row">
          <div class="col-lg text-center text-dark mb-3">
              <img src="https://source.unsplash.com/250x250/?portrait" alt="xxx" class="rounded-circle"></img>
              <h3 class="mt-4">
                  Jane Doe
              </h3>
              <p class="font-weight-bold">
                  Professional Title
              </p>
              <p class="text-muted">
                  Suspendisse in elementum mi, ac sollicitudin sem. Mauris bibendum tellus ut hendrerit accumsan. Nulla sit amet rutrum ligula, id efficitur metus. Cras congue urna ac mi ullamcorper tempor.
              </p>
          </div>
          <div class="col-lg text-center text-dark mb-3">
              <img src="https://source.unsplash.com/250x250/?portrait" alt="xxx" class="rounded-circle"></img>
              <h3 class="mt-4">
                  Jane Doe
              </h3>
              <p class="font-weight-bold">
                  Professional Title
              </p>
              <p class="text-muted">
                  Suspendisse in elementum mi, ac sollicitudin sem. Mauris bibendum tellus ut hendrerit accumsan. Nulla sit amet rutrum ligula, id efficitur metus. Cras congue urna ac mi ullamcorper tempor.
              </p>
          </div>
          <div class="col-lg text-center text-dark">
              <img src="https://source.unsplash.com/250x250/?portrait" alt="xxx" class="rounded-circle"></img>
              <h3 class="mt-4">
                  Jane Doe
              </h3>
              <p class="font-weight-bold">
                  Professional Title
              </p>
              <p class="text-muted">
                  Suspendisse in elementum mi, ac sollicitudin sem. Mauris bibendum tellus ut hendrerit accumsan. Nulla sit amet rutrum ligula, id efficitur metus. Cras congue urna ac mi ullamcorper tempor.
              </p>
          </div>
      </div>
  </div>
{/* /team */}

{/* programs */}
  <div class="bg-secondary py-5" id="programs">
      <div class="container text-white">
          <h2 class="mb-5 h1">Programs</h2>
          <div class="row">
              <div class="col-md-9 mx-auto col-xl mb-5">
                  <img src="https://source.unsplash.com/600x400/?chemistry" alt="xxx" class="rounded img-fluid"></img>
                  <h3 class="mt-4">
                      Program Title
                  </h3>
                  <p class="text-justify">
                      Suspendisse in elementum mi, ac sollicitudin sem. Mauris bibendum tellus ut hendrerit accumsan. Nulla sit amet rutrum ligula, id efficitur metus. Cras congue urna ac mi ullamcorper tempor.
                  </p>
                  <a class="btn btn-primary mt-2" href="program">Learn More</a>
              </div>
              <div class="col-md-9 mx-auto col-xl mb-5">
                  <img src="https://source.unsplash.com/600x400/?classroom" alt="xxx" class="rounded img-fluid"></img>
                  <h3 class="mt-4">
                      Program Title
                  </h3>
                  <p class="text-justify">
                      Suspendisse in elementum mi, ac sollicitudin sem. Mauris bibendum tellus ut hendrerit accumsan. Nulla sit amet rutrum ligula, id efficitur metus. Cras congue urna ac mi ullamcorper tempor.
                  </p>
                  <a class="btn btn-primary mt-2" href="program.html">Learn More</a>
              </div>
              <div class="col-md-9 mx-auto col-xl">
                  <img src="https://source.unsplash.com/600x400/?studying" alt="xxx" class="rounded img-fluid"></img>
                  <h3 class="mt-4">
                      Program Title
                  </h3>
                  <p class="text-justify">
                      Suspendisse in elementum mi, ac sollicitudin sem. Mauris bibendum tellus ut hendrerit accumsan. Nulla sit amet rutrum ligula, id efficitur metus. Cras congue urna ac mi ullamcorper tempor.
                  </p>
                  <a class="btn btn-primary mt-2" href="program.html">Learn More</a>
              </div>
          </div>
      </div>
  </div>
{/* /programs */}

{/* quotes */}
  <div class="container py-5" id="quotes">
      <h2 class="mb-4 text-dark h1">Testimonials</h2>
      <div class="row">
          <div class="col-lg">
              <i class="fas fa-quote-left fa-2x fa-pull-left text-primary"></i>
              <p class="text-muted text-justify mb-1">Gatsby believed in the green light, the orgastic future that year by year recedes before us. It eluded us then, but that’s no matter — tomorrow we will run faster, stretch our arms further... And one fine morning — So we beat on, boats against the current, borne back ceaselessly into the past.</p>
              <p class="text-dark">&mdash; Jane Doe</p>
          </div>
          <div class="col-lg">
              <i class="fas fa-quote-left fa-2x fa-pull-left text-primary"></i>
              <p class="text-muted text-justify mb-1">Gatsby believed in the green light, the orgastic future that year by year recedes before us. It eluded us then, but that’s no matter — tomorrow we will run faster, stretch our arms further... And one fine morning — So we beat on, boats against the current, borne back ceaselessly into the past.</p>
              <p class="text-dark">&mdash; Jane Doe</p>
          </div>
      </div>
  </div>
{/* /quotes */}

{/* footer */}
  <div class="bg-dark py-5" id="contact">
      <div class="container">
          <div class="row">
              <div class="col-lg-6 ml-auto text-white order-lg-2 mb-5">
                  <h2 class="mb-4">Contact Us</h2>
                  <form action="https://formsubmit.io/send/ec804f6a-9293-4415-b680-5bf83cf40ce9">
                      <div class="form-group">
                          <label for="Name" class="sr-only">Your Name</label>
                          <input type="text" class="form-control" id="Name" placeholder="Your Name"></input>
                      </div>
                      <div class="form-group">
                          <label for="Email" class="sr-only">Your Email</label>
                          <input type="email" class="form-control" id="Email" placeholder="Your Email"></input>
                      </div>
                      <div class="form-group">
                          <label for="Message" class="sr-only"></label>
                          <textarea type="text" class="form-control" id="Message" rows="5" placeholder="Message"></textarea>
                      </div>
                      <button type="submit" class="btn btn-danger">Send</button>
                  </form>
              </div>
              <div class="col-lg-4 text-white order-lg-1">
                  <div class="flex-column">
                      <div>
                        <span class="mr-3"><FontAwesomeIcon icon={['fab', 'facebook']} size="2x"/></span>
                        <span class="mr-3"><FontAwesomeIcon icon={['fab', 'twitter']} size="2x" /></span>
                        <FontAwesomeIcon icon={['fab', 'instagram']} size="2x" />
                      </div>
                      <p class="mt-3 pb-3 border-bottom border-white">2019 &copy; Get with the Program, Inc.</p>
                      <p class="lead">Stay up to date with the latest from Get with the Program!</p>
                      <a href="" class="btn btn-danger mt-2">Join Our Mailing List</a>
                  </div>
              </div>
          </div>
      </div>
  </div>
{/* /footer */}
</div>

)
