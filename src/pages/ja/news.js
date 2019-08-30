import React from "react";
import { Helmet } from "react-helmet"
import { graphql } from 'gatsby';
import Layout from '../../components/layout-ja-sub'

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
<div>
<Helmet>
<title>News</title>
<meta name="title" content="メディア掲載情報 | Get with the Program" />
<meta name="description" content="Get with the Programは幼稚園から高校生までのSTEM教育を推進します" />

<meta property="og:type" content="website" />
<meta property="og:url" content="https://www.gwtp.us/ja/news" />
<meta property="og:title" content="メディア掲載情報 | Get with the Program" />
<meta property="og:description" content="Get with the Programは幼稚園から高校生までのSTEM教育を推進します" />
<meta property="og:image" content="https://www.gwtp.us/og.jpg" />

<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:url" content="https://www.gwtp.us/ja/news" />
<meta property="twitter:title" content="メディア掲載情報 | Get with the Program" />
<meta property="twitter:description" content="Get with the Programは幼稚園から高校生までのSTEM教育を推進します" />
<meta property="twitter:image" content="https://www.gwtp.us/og.jpg" />
</Helmet>
<Layout>
    <div>
       {/* news-list */}
        <div class="container py-5">
            <h1 class="mb-4">In the News</h1>
            <div class="list-group">
                {data.allAirtable.nodes.map(node => (
                <a href={node.data.URL} class="list-group-item list-group-item-action lead" target="_blank" rel="noopener noreferrer">{node.data.Japanese}<br></br><small>{node.data.Date} | <span class={node.data.Color}>{node.data.Source}</span></small></a>
                ))}
            </div>
        </div>
       {/* /news-list */}
   </div>
</Layout>
</div>
)
   