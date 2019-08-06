import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from 'gatsby'
import Layout from '../components/layout-sub'

export const query = graphql`
{
    five: allAirtable(sort: {fields: data___Start, order: ASC}, filter: {data: {Start: {lt: "2016-01-01"}}}) {
      nodes {
        data {
          Title
          Start
          Location
          Count
        }
      }
    }
    six: allAirtable(sort: {fields: data___Start, order: ASC}, filter: {data: {Start: {gte: "2016-01-01", lt: "2017-01-01"}}}) {
      nodes {
        data {
          Title
          Start
          Location
          Count
        }
      }
    }
    seven: allAirtable(sort: {fields: data___Start, order: ASC}, filter: {data: {Start: {gte: "2017-01-01", lt: "2018-01-01"}}}) {
        nodes {
          data {
            Title
            Start
            Location
            Count
          }
        }
      }
      eight: allAirtable(sort: {fields: data___Start, order: ASC}, filter: {data: {Start: {gte: "2018-01-01", lt: "2019-01-01"}}}) {
        nodes {
          data {
            Title
            Start
            Location
            Count
          }
        }
      }
      nine: allAirtable(sort: {fields: data___Start, order: ASC}, filter: {data: {Start: {gte: "2019-01-01", lt: "2020-01-01"}}}) {
        nodes {
          data {
            Title
            Start
            Location
            Count
          }
        }
      }
  }  
`;
  
export default ({ data }) => (
<div>
<Helmet><title>Brain Academy | Get with the Program</title></Helmet>
<Layout>
<div>
    {/* jumbotron */}
    <div class="jumbotron jumbotron-fluid bg-dark text-white mb-0 lab">
        <div class="container text-center py-5">
            <h1 class="display-2">Brain Lab</h1>
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
                <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/aOmPUWoWDxY?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title="Program Title"></iframe>
            </div>
        </div>
    </div>
    {/* /overview */}

    {/* past-programs */}
    <div id="past" class="py-5 bg-blue">
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
                            {data.nine.nodes.map(node => (
                                <div class="col-md-6 mb-4">
                                    <div class="card">
                                        <img src="https://source.unsplash.com/400x300/?biology" class="card-img-top" alt="..."></img>
                                        <div class="card-body">
                                            <h3>{node.data.Title}</h3>
                                            <small>{node.data.Start} | {node.data.Location}</small>
                                            <p><span class="badge badge-pill badge-danger">{node.data.Count} participants</span></p>
                                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div class="tab-pane fade" id="list-2018" role="tabpanel" aria-labelledby="list-2018-list">
                        <div class="row mb-4">
                            {data.eight.nodes.map(node => (
                                <div class="col-md-6 mb-4">
                                    <div class="card">
                                        <img src="https://source.unsplash.com/400x300/?chemistry" class="card-img-top" alt="..."></img>
                                        <div class="card-body">
                                            <h3>{node.data.Title}</h3>
                                            <small>{node.data.Start} | {node.data.Location}</small>
                                            <p><span class="badge badge-pill badge-danger">{node.data.Count} participants</span></p>
                                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div class="tab-pane fade" id="list-2017" role="tabpanel" aria-labelledby="list-2017-list">
                        <div class="row mb-4">
                            {data.seven.nodes.map(node => (
                                <div class="col-md-6 mb-4">
                                    <div class="card">
                                        <img src="https://source.unsplash.com/400x300/?chemistry" class="card-img-top" alt="..."></img>
                                        <div class="card-body">
                                            <h3>{node.data.Title}</h3>
                                            <small>{node.data.Start} | {node.data.Location}</small>
                                            <p><span class="badge badge-pill badge-danger">{node.data.Count} participants</span></p>
                                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div class="tab-pane fade" id="list-2016" role="tabpanel" aria-labelledby="list-2016-list">
                        <div class="row mb-4">
                            {data.six.nodes.map(node => (
                                <div class="col-md-6 mb-4">
                                    <div class="card">
                                        <img src="https://source.unsplash.com/400x300/?chemistry" class="card-img-top" alt="..."></img>
                                        <div class="card-body">
                                            <h3>{node.data.Title}</h3>
                                            <small>{node.data.Start} | {node.data.Location}</small>
                                            <p><span class="badge badge-pill badge-danger">{node.data.Count} participants</span></p>
                                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div class="tab-pane fade" id="list-2015" role="tabpanel" aria-labelledby="list-2015-list">
                        <div class="row mb-4">
                            {data.five.nodes.map(node => (
                                <div class="col-md-6 mb-4">
                                    <div class="card">
                                        <img src="https://source.unsplash.com/400x300/?chemistry" class="card-img-top" alt="..."></img>
                                        <div class="card-body">
                                            <h3>{node.data.Title}</h3>
                                            <small>{node.data.Start} | {node.data.Location}</small>
                                            <p><span class="badge badge-pill badge-danger">{node.data.Count} participants</span></p>
                                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* past-programs */}
</div>
</Layout>
</div>
)
