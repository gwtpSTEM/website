import React from "react";
import { Helmet } from "react-helmet"
import { graphql } from 'gatsby';
import Layout from '../components/layout-sub'

export const query = graphql`
    {
        allAirtable(filter: {table: {eq: "History"}}, sort: {fields: data___Sort, order: ASC}) {
        nodes {
            data {
            TimelineDate
            TimelineTitle
            TimelineDescription
            }
        }
        }
    }
`;

export default ({ data }) => (
<div>
<Helmet><title>History | Get with the Program</title></Helmet>
<Layout>
    {/* jumbotron */}
    <div class="jumbotron jumbotron-fluid bg-dark text-white mb-0">
        <div class="container text-center py-5">
            <h1 class="display-2">History</h1>
        </div>
    </div>
    {/* /jumbotron */}
    <div class="container my-5">
        <div class="row">
            <div class="col-md-12">
                <div class="main-timeline8">
                    {data.allAirtable.nodes.map(node => (
                    <div class="timeline">
                        <span class="timeline-icon"></span>
                        <h2 class="year h3">{node.data.TimelineDate}</h2>
                        <div class="timeline-content">
                            <h3 class="title h5">{node.data.TimelineTitle}</h3>
                            <p class="description">
                            {node.data.TimelineDescription}
                            </p>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
</Layout>
</div>
)