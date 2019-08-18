import React from "react";
import { graphql } from 'gatsby';
import Layout from '../../components/layout-index'

export const query = graphql`
  {
      allAirtable(filter: {table: {eq: "Media Coverage"}, data: {Status: {eq: "Published"}}}, sort: {fields: data___Date, order: DESC}) {
      nodes {
        data {
          Date(locale: "ja", formatString: "YYYY年M月D日")
          Japanese
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
                <a href={node.data.URL} class="list-group-item list-group-item-action lead" target="_blank" rel="noopener noreferrer">{node.data.Name}<br></br><small>{node.data.Date} | <span class={node.data.Color}>{node.data.Source}</span></small></a>
                ))}
            </div>
        </div>
       {/* /news-list */}
   </div>
</Layout>
)
   