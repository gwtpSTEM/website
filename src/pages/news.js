import React from "react";
import { graphql } from 'gatsby';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/pro-solid-svg-icons';
import { far } from '@fortawesome/pro-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

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
 <div id="home" data-spy="scroll" data-target=".navbar" data-offset="120" class="smooth-scroll">
   {/* nav */}
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
    {/* /nav */}
    {/* breadcrumb */}
    <div class="container">
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb mb-0 bg-white pl-0">
                <li class="breadcrumb-item"><a href="/">Home</a></li>
                <li class="breadcrumb-item active" aria-current="page">In the News</li>
            </ol>
        </nav>
    </div>
    {/* /breadcrumb */}
    
    {/* news-list */}
  <div class="container py-5">
  <h1 class="mb-4">In the News</h1>
    <div class="list-group">
      {data.allAirtable.nodes.map(node => (
        
       <a href={node.data.URL} class="list-group-item list-group-item-action lead" target="_blank" rel="noopener noreferrer">{node.data.Name}<br></br><small>{node.data.Date} | {node.data.Source}</small></a>
       
      ))}
    </div>
  </div>
    {/* /news-list */}

  <div class="container my-5">
	<h1>History</h1>
  <div class="row">
		<div class="col-10 mx-auto">
			<ul class="timeline">
				<li>
					<a href="/" class="lead">New Web Design</a>
					<span class="float-right badge badge-danger">21 March, 2014</span>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, et elementum lorem ornare. Maecenas placerat facilisis mollis. Duis sagittis ligula in sodales vehicula....</p>
				</li>
				<li>
					<a href="/" class="lead">21,000 Job Seekers</a>
					<span class="float-right badge badge-danger">4 March, 2014</span>
					<p>Curabitur purus sem, malesuada eu luctus eget, suscipit sed turpis. Nam pellentesque felis vitae justo accumsan, sed semper nisi sollicitudin...</p>
				</li>
				<li>
					<a href="/" class="lead">Awesome Employers</a>
					<span class="float-right badge badge-danger">1 April, 2014</span>
					<p>Fusce ullamcorper ligula sit amet quam accumsan aliquet. Sed nulla odio, tincidunt vitae nunc vitae, mollis pharetra velit. Sed nec tempor nibh...</p>
				</li>
			</ul>
		</div>
	</div>
</div>
</div>
)