import React from "react";
import { graphql } from 'gatsby';
import Layout from '../components/layout'

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
<Layout>
    <div>
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

       <div class="bd-callout-info">
           This is a callout box!
       </div>
            
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
</Layout>
)
   