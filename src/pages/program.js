import React from "react";
import { graphql } from 'gatsby';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/pro-solid-svg-icons'
import { far } from '@fortawesome/pro-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(fas, far, fab)

export const query = graphql`
  {
      allAirtable(filter: {data: {Status: {eq: "Published"}}}, sort: {fields: data___Date, order: DESC}) {
      nodes {
        data {
          Date(formatString: "MMMM D, YYYY")
          Name
          Source
          URL
          Color
        }
        recordId
      }
    }
  }
`;

export default ({ data }) => (
<div>
{/* navbar */}
    <nav class="navbar navbar-expand-lg navbar-light bg-white sticky-top py-2 border-bottom">
        <div class="container">
            <a class="navbar-brand" href="http://www.gwtp.us" target="_blank"><img src="http://gwtp.us/images/logo_no_url_rev.png" alt="" width="120"></img></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                <a class="nav-item nav-link mr-2" href="/">Home <span class="sr-only">(current)</span></a>
                <a class="nav-item nav-link mr-2" href="/#about">About</a>
                <a class="nav-item nav-link mr-2" href="/#programs">Programs</a>
                <a class="nav-item nav-link" href="/#contact" tabindex="-1" aria-disabled="true">Contact</a>
                </div>
                <form class="form-inline pl-lg-5 mt-2 mt-lg-0">
                    <button class="btn btn-danger font-weight-bolder" type="button">Donate</button>
                </form>
            </div>
        </div>
    </nav>
    {/* /navbar */}

    <div class="container">
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb mb-0 bg-white pl-0">
                <li class="breadcrumb-item"><a href="/">Home</a></li>
                <li class="breadcrumb-item"><a href="/#programs">Programs</a></li>
                <li class="breadcrumb-item active" aria-current="page">Brain Camp</li>
            </ol>
        </nav>
    </div>
    

    {/* jumbotron */}
    <div class="jumbotron jumbotron-fluid bg-dark text-white mb-0">
        <div class="container text-center py-5">
            <h1 class="display-2">Brain Camp</h1>
        </div>
    </div>
    {/* /jumbotron */}

    {/* overview */}
    <div id="overview" class="container py-5">
        <div class="row">
            <div class="col-lg mb-3">
                <h2 class="mb-4 h1">
                    Overview
                </h2>
                <p class="text-muted text-justify">
                    Suspendisse in elementum mi, ac sollicitudin sem. Mauris bibendum tellus ut hendrerit accumsan. Nulla sit amet rutrum ligula, id efficitur metus. Cras congue urna ac mi ullamcorper tempor. Pellentesque metus lorem, pharetra in risus in, facilisis bibendum ex. Fusce volutpat venenatis luctus. Praesent lacinia porta mauris, nec tempor nulla gravida non.
                </p>
            </div>
            <div class="col-lg d-none d-md-block">
                <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/aOmPUWoWDxY?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
    </div>
    {/* /overview */}

    {/* past-programs */}
    <div id="past" class="py-5 bg-secondary">
        <div class="container">
            <h2 class="mb-5 text-white h1">Past Camps</h2>
            <div class="row">
                <div class="col-lg-4 mb-4 col-10 mx-auto col-md-12">
                    <div class="list-group" id="list-tab" role="tablist">
                    <a class="list-group-item list-group-item-action active" id="list-2019-list" data-toggle="list" href="#list-2019" role="tab" aria-controls="2019">2019</a>
                    <a class="list-group-item list-group-item-action" id="list-2018-list" data-toggle="list" href="#list-2018" role="tab" aria-controls="2018">2018</a>
                    <a class="list-group-item list-group-item-action" id="list-2017-list" data-toggle="list" href="#list-2017" role="tab" aria-controls="2017">2017</a>
                    <a class="list-group-item list-group-item-action" id="list-2016-list" data-toggle="list" href="#list-2016" role="tab" aria-controls="2016">2016</a>
                    <a class="list-group-item list-group-item-action" id="list-2015-list" data-toggle="list" href="#list-2015" role="tab" aria-controls="2015">2015</a>
                    </div>
                </div>
                <div class="col-lg-8 col-10 mx-auto col-md-12">
                    <div class="tab-content" id="nav-tabContent">
                    <div class="tab-pane fade show active" id="list-2019" role="tabpanel" aria-labelledby="list-2019-list">
                        <div class="row mb-4">
                            <div class="col-md mb-4">
                                <div class="card">
                                    <img src="https://source.unsplash.com/400x300/?biology" class="card-img-top" alt="..."></img>
                                    <div class="card-body">
                                        <h3>Title of the Camp</h3>
                                        <small>April 21, 2019</small>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md">
                                <div class="card">
                                    <img src="https://source.unsplash.com/400x300/?coding" class="card-img-top" alt="..."></img>
                                    <div class="card-body">
                                        <h3>Title of the Camp</h3>
                                        <small>April 21, 2019</small>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md mb-4">
                                <div class="card">
                                    <img src="https://source.unsplash.com/400x300/?food,science" class="card-img-top" alt="..."></img>
                                    <div class="card-body">
                                        <h3>Title of the Camp</h3>
                                        <small>April 21, 2019</small>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md">
                                <div class="card">
                                    <img src="https://source.unsplash.com/400x300/?animals" class="card-img-top" alt="..."></img>
                                    <div class="card-body">
                                        <h3>Title of the Camp</h3>
                                        <small>April 21, 2019</small>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="list-2018" role="tabpanel" aria-labelledby="list-2018-list">
                        <div class="row mb-4">
                            <div class="col-md mb-4">
                                <div class="card">
                                    <img src="https://source.unsplash.com/400x300/?css" class="card-img-top" alt="..."></img>
                                    <div class="card-body">
                                        <h3>Title of the Camp</h3>
                                        <small>April 21, 2019</small>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md">
                                <div class="card">
                                    <img src="https://source.unsplash.com/400x300/?lab" class="card-img-top" alt="..."></img>
                                    <div class="card-body">
                                        <h3>Title of the Camp</h3>
                                        <small>April 21, 2019</small>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="list-2017" role="tabpanel" aria-labelledby="list-2017-list">
                        <div class="row mb-4">
                            <div class="col-md mb-4">
                                <div class="card">
                                    <img src="https://source.unsplash.com/400x300/?robotics" class="card-img-top" alt="..."></img>
                                    <div class="card-body">
                                        <h3>Title of the Camp</h3>
                                        <small>April 21, 2019</small>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md">
                                <div class="card">
                                    <img src="https://source.unsplash.com/400x300/?developer" class="card-img-top" alt="..."></img>
                                    <div class="card-body">
                                        <h3>Title of the Camp</h3>
                                        <small>April 21, 2019</small>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="list-2016" role="tabpanel" aria-labelledby="list-2016-list">
                        <div class="row mb-4">
                            <div class="col-md mb-4">
                                <div class="card">
                                    <img src="https://source.unsplash.com/400x300/?math" class="card-img-top" alt="..."></img>
                                    <div class="card-body">
                                        <h3>Title of the Camp</h3>
                                        <small>April 21, 2019</small>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md">
                                <div class="card">
                                    <img src="https://source.unsplash.com/400x300/?diy" class="card-img-top" alt="..."></img>
                                    <div class="card-body">
                                        <h3>Title of the Camp</h3>
                                        <small>April 21, 2019</small>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="list-2015" role="tabpanel" aria-labelledby="list-2015-list">
                        <div class="row mb-4">
                            <div class="col-md mb-4">
                                <div class="card">
                                    <img src="https://source.unsplash.com/400x300/?marine,animal" class="card-img-top" alt="..."></img>
                                    <div class="card-body">
                                        <h3>Title of the Camp</h3>
                                        <small>April 21, 2019</small>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md">
                                <div class="card">
                                    <img src="https://source.unsplash.com/400x300/?scientist" class="card-img-top" alt="..."></img>
                                    <div class="card-body">
                                        <h3>Title of the Camp</h3>
                                        <small>April 21, 2019</small>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* past-programs */}

    {/* footer */}
    <div class="bg-dark py-5" id="contact">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 ml-auto text-white order-lg-2 mb-5">
                    <h2 class="mb-3">Contact Us</h2>
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
                        <p class="mt-3">2019 &copy; Get with the Program, Inc.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
{/* /footer */}
</div>
)
