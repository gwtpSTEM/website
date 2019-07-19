import React from "react";
import { graphql } from 'gatsby';
import Layout from '../components/layout'

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
    <Layout>
        <div class="container my-5">
            <h1 class="mb-4">History</h1>
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
)