import React from "react"
import Layout from "../components/layout"

export default ({ data }) => (
<Layout>
    {/* jumbotron */}
    <div class="jumbotron not-found jumbotron-fluid bg-dark text-white mb-0">
        <div class="container text-center py-5">
            <h1 class="display-1">Page not found</h1>
            <p class="lead">Oops! The page you are looking for has been removed or relocated.</p>
        </div>
    </div>
    {/* /jumbotron */}
</Layout>
)