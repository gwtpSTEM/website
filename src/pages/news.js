import React from "react";
import { graphql } from 'gatsby';
import Layout from '../components/layout-sub'

export const query = graphql`
  {
      allAirtable(filter: {table: {eq: "Media Coverage"}, data: {Status: {eq: "Published"}}}, sort: {fields: data___Date, order: DESC}) {
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
   