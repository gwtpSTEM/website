import React from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/layout-index"
import { graphql } from 'gatsby'


export const query = graphql`
{
  news: allAirtable(sort: {fields: data___Date, order: DESC}, filter: {data: {Status: {eq: "Published"}}}, limit: 6) {
    nodes {
      data {
        Date(formatString: "MMMM D, YYYY")
        Name
        Source
        URL
        Color
      }
    }
  }
  tagline: airtable(data: {Name: {eq: "tagline-en"}}) {
    data {
      Text {
        childMarkdownRemark {
          html
        }
      }
    }
  }
  alert: airtable(data: {Name: {eq: "alert-en"}}) {
    data {
      Text {
        childMarkdownRemark {
          html
        }
      }
    }
  }
}  
`;

export default ({ data }) => (

<div>
<Helmet>
<title>Get with the Program</title>
<meta name="title" content="Get with the Program: STEM Education in Oberlin, OH" />
<meta name="description" content="Get with the Program promotes and reinforces STEM literacy among P-12 students." />

<meta property="og:type" content="website" />
<meta property="og:url" content="https://www.gwtp.us/" />
<meta property="og:title" content="Get with the Program: STEM Education in Oberlin, OH" />
<meta property="og:description" content="Get with the Program promotes and reinforces STEM literacy among P-12 students." />
<meta property="og:image" content="https://www.gwtp.us/og.png" />

<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:url" content="https://www.gwtp.us/" />
<meta property="twitter:title" content="Get with the Program: STEM Education in Oberlin, OH" />
<meta property="twitter:description" content="Get with the Program promotes and reinforces STEM literacy among P-12 students." />
<meta property="twitter:image" content="https://www.gwtp.us/og.png" />
</Helmet>
<Layout>
{/* alert */}
  <div class="container">
      <div class="row">
          <div class="col-lg-9 mx-auto">
              <div class="alert alert-danger alert-dismissible fade show my-3" role="alert">
                  <strong>Hurry!</strong> Summer Camp Session 3 (RC Car) is starting in two week! <a href="#home" target="_blank" class="alert-link">Register now</a>! <span class="badge badge-danger ml-4">2 spots left</span>
                  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                  </button>
              </div>
          </div>
      </div>
  </div>
{/* /alert */}

{/* jumbotron */}
  <div class="jumbotron jumbotron-fluid bg-dark text-white d-xl-none mb-0">
      <div class="container text-center py-5">
          <h1>Get with the Program</h1>
          <div class="lead" dangerouslySetInnerHTML={{
        __html: data.tagline.data.Text.childMarkdownRemark.html,
      }} />
      </div>
  </div>
{/* /jumbotron */}

{/* carousel */}
  <div id="carouselExampleSlidesOnly" class="carousel slide carousel-fade d-none d-xl-block" data-ride="carousel">
      <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://source.unsplash.com/collection/6882791/1800x550" class="d-block w-100" alt="..."></img>
            <div class="carousel-caption">
                <h1 class="display-2">Get with the Program</h1>
                <div class="lead" dangerouslySetInnerHTML={{
        __html: data.tagline.data.Text.childMarkdownRemark.html,
      }} />
            </div>
          </div>
          <div class="carousel-item">
              <img src="https://source.unsplash.com/1800x550/?technology" class="d-block w-100" alt="..."></img>
          </div>
          <div class="carousel-item">
              <img src="https://source.unsplash.com/1800x550/?engineering" class="d-block w-100" alt="..."></img>
          </div>
          <div class="carousel-item">
              <img src="https://source.unsplash.com/1800x550/?math" class="d-block w-100" alt="..."></img>
          </div>
      </div>
  </div>
{/* /carousel */}

{/* news */}
<div class="py-5 bg-blue">
    <div class="container">
      <div class="row">
        <div class="col-lg-5 mb-3">
          <h2 class="mb-4 h1 text-white" id="ssnews">Announcement</h2>
          <div class="card">
            <img src="https://source.unsplash.com/collection/7008843/500x300" class="card-img-top img-fluid" alt="..." />
            <div class="card-body">
            <h5 class="card-title">Upcoming Camps</h5>
            <p class="card-text">July 8–12: Build Your Own Robot<br />July 22–26: Coding Camp<br />August 12–16: Remote Control Car DIY<br /><small class="text-danger font-weight-bold">9:30 a.m. to 4 p.m. (Add-on option until 5 p.m. is available)</small></p>
            <a href="https://summer-19.paperform.co/" class="btn btn-primary" aria-label="Read more about the camps and register" target="_blank" rel="noopener noreferrer">Read More and Register</a>
            </div>
          </div>
        </div>
        <div class="col-lg-7">
          <h2 class="mb-4 h1 text-white">
              In the News
          </h2>
          <div class="list-group">
              {data.news.nodes.map(node => (
              <a href={node.data.URL} class="list-group-item list-group-item-action" target="_blank" rel="noopener noreferrer"><span class="font-weight-bold">{node.data.Name}</span><br /><small>{node.data.Date} | {node.data.Source}</small></a>
              ))}
          </div>
          <h3 class="mt-3 text-right"><a href="news" class="btn btn-danger">See all news</a></h3>
        </div>
      </div>
    </div>
</div>
{/* /news */}

{/* about */}
  <div class="container py-5">
      <div class="row">
          <div class="col-lg mb-3">
              <h2 class="mb-4 h1" id="ssabout">
                  About
              </h2>
              <p class="text-muted text-justify">
              Get with the Program is a nonprofit organization that promotes and reinforces literacy in science, technology, engineering, and mathematics &#40;STEM&#41; from preschool through 12th grade. While our focus is on STEM, we take the holistic approach to child development by incorporating art, music, physical education, and literacy &#40;language arts&#41; into STEM learning.
              </p>
          </div>
          <div class="col-lg">
              <h2 class="mb-4 h1">
                  Mission
              </h2>
              <p class="text-muted text-justify">
                  Suspendisse in elementum mi, ac sollicitudin sem. Mauris bibendum tellus ut hendrerit accumsan. Nulla sit amet rutrum ligula, id efficitur metus. Cras congue urna ac mi ullamcorper tempor. Pellentesque metus lorem, pharetra in risus in, facilisis bibendum ex. Fusce volutpat venenatis luctus. Praesent lacinia porta mauris, nec tempor nulla gravida non. Mauris convallis odio a odio porttitor, at congue tortor cursus. Suspendisse potenti. Pellentesque eget orci condimentum, mollis sapien at, porttitor felis. Vivamus tempus massa erat. Suspendisse lacus arcu, vulputate in elit nec, sagittis ornare eros.
              </p>
          </div>
      </div>
  </div>
  {/* /about */}

{/* founder */}
  <div class="py-5 bg-green">
      <div class="container">
          <div class="row">
              <figure class="figure col-lg mb-5 mb-lg-0">
                      <img src="jason-williams.jpg" alt="Jason Williams and camp participants playing the banana piano" class="rounded img-fluid figure-img" />
                      <figcaption class="figure-caption text-white">Photo credit: Yevhen Gulenko</figcaption>
              </figure>
              <div class="col-lg text-white">
                  <h2 class="h1" id="founder">
                      Jason Williams
                  </h2>
                  <p class="font-weight-bold">
                      CEO/Founder
                  </p>
                  <p class="mb-4 text-justify">
                  Jason Williams, the Founder and CEO of Get with the Program, is a Lorain, OH native and Oberlin College graduate with extensive experience in working with P-12 students, both domestically and internationally. Mr. Williams enjoys learning new things, solving problems, and inspiring youth to reach their fullest potential.
                  </p>
              </div>
          </div>
      </div>
  </div>
{/* /founder */}

{/* team */}
  <div class="container py-5">
      <h2 class="mb-5 h1" id="team">Our Characters</h2>
      <div class="row">
          <div class="col-lg text-center text-dark mb-3">
              <img src="amina.png" alt="Amina" class="rounded-circle"></img>
              <h3 class="mt-4">
                  Amina
              </h3>
              <p class="font-weight-bold">
                  Professional Title
              </p>
              <p class="text-muted">
                  Suspendisse in elementum mi, ac sollicitudin sem. Mauris bibendum tellus ut hendrerit accumsan. Nulla sit amet rutrum ligula, id efficitur metus. Cras congue urna ac mi ullamcorper tempor.
              </p>
          </div>
          <div class="col-lg text-center text-dark mb-3">
              <img src="amir.png" alt="Amir" class="rounded-circle"></img>
              <h3 class="mt-4">
                  Amir
              </h3>
              <p class="font-weight-bold">
                  Professional Title
              </p>
              <p class="text-muted">
                  Suspendisse in elementum mi, ac sollicitudin sem. Mauris bibendum tellus ut hendrerit accumsan. Nulla sit amet rutrum ligula, id efficitur metus. Cras congue urna ac mi ullamcorper tempor.
              </p>
          </div>
          <div class="col-lg text-center text-dark">
              <img src="anissa.png" alt="Anissa" class="rounded-circle"></img>
              <h3 class="mt-4">
                  Anissa
              </h3>
              <p class="font-weight-bold">
                  Professional Title
              </p>
              <p class="text-muted">
                  Suspendisse in elementum mi, ac sollicitudin sem. Mauris bibendum tellus ut hendrerit accumsan. Nulla sit amet rutrum ligula, id efficitur metus. Cras congue urna ac mi ullamcorper tempor.
              </p>
          </div>
      </div>
  </div>
{/* /team */}

{/* programs */}
  <div class="bg-purple py-5">
      <div class="container text-white">
          <h2 class="mb-5 h1" id="ssprograms">Programs</h2>
          <div class="row">
              <div class="col-md-9 mx-auto col-xl mb-5">
                  <img src="https://source.unsplash.com/collection/7019254/600x400" alt="Brain Camp" class="rounded img-fluid"></img>
                  <h3 class="mt-4">
                      Brain Camp
                  </h3>
                  <p class="text-justify">
                  Get with the Program&rsquo;s Brain Camps are year-round, out-of-school learning programs. These camps take place during school in-service days, holidays, and school breaks &#40;spring, summer, winter, etc.&#41;.
                  </p>
                  <a class="btn btn-primary mt-2" href="camp">Learn More</a>
              </div>
              <div class="col-md-9 mx-auto col-xl mb-5">
                  <img src="https://source.unsplash.com/collection/4255424/600x400" alt="Brain Academy" class="rounded img-fluid"></img>
                  <h3 class="mt-4">
                      Brain Academy
                  </h3>
                  <p class="text-justify">
                  The Brain Academy is an onsite afterschool program that works to improve students&rsqup; problem solving/critical thinking skills and attitude towards STEM, through various hands-on, project-based STEM activities.
                  </p>
                  <a class="btn btn-primary mt-2" href="program.html">Learn More</a>
              </div>
              <div class="col-md-9 mx-auto col-xl">
                  <img src="https://source.unsplash.com/collection/8262090/600x400" alt="Brain Lab" class="rounded img-fluid"></img>
                  <h3 class="mt-4">
                      Brain Lab
                  </h3>
                  <p class="text-justify">
                  The Brain Lab offers similar activities, in partnership with youth-serving organizations.
                  </p>
                  <a class="btn btn-primary mt-2" href="program.html">Learn More</a>
              </div>
          </div>
      </div>
  </div>
{/* /programs */}

{/* quotes */}
  <div class="container py-5">
      <h2 class="mb-4 text-dark h1" id="ssquotes">Testimonials</h2>
      <div class="row">
          <div class="col-lg mb-4">
              <i class="fas fa-quote-left fa-2x fa-pull-left text-yellow"></i>
              <p class="text-muted text-justify mb-1">Gatsby believed in the green light, the orgastic future that year by year recedes before us. It eluded us then, but that’s no matter — tomorrow we will run faster, stretch our arms further... And one fine morning — So we beat on, boats against the current, borne back ceaselessly into the past.</p>
              <p class="text-dark">&mdash; Jane Doe</p>
          </div>
          <div class="col-lg">
              <i class="fas fa-quote-left fa-2x fa-pull-left text-yellow"></i>
              <p class="text-muted text-justify mb-1">Gatsby believed in the green light, the orgastic future that year by year recedes before us. It eluded us then, but that’s no matter — tomorrow we will run faster, stretch our arms further... And one fine morning — So we beat on, boats against the current, borne back ceaselessly into the past.</p>
              <p class="text-dark">&mdash; Jane Doe</p>
          </div>
      </div>
      <div class="row">
          <div class="col-lg mb-4">
              <i class="fas fa-quote-left fa-2x fa-pull-left text-yellow"></i>
              <p class="text-muted text-justify mb-1">Gatsby believed in the green light, the orgastic future that year by year recedes before us. It eluded us then, but that’s no matter — tomorrow we will run faster, stretch our arms further... And one fine morning — So we beat on, boats against the current, borne back ceaselessly into the past.</p>
              <p class="text-dark">&mdash; Jane Doe</p>
          </div>
          <div class="col-lg">
              <i class="fas fa-quote-left fa-2x fa-pull-left text-yellow"></i>
              <p class="text-muted text-justify mb-1">Gatsby believed in the green light, the orgastic future that year by year recedes before us. It eluded us then, but that’s no matter — tomorrow we will run faster, stretch our arms further... And one fine morning — So we beat on, boats against the current, borne back ceaselessly into the past.</p>
              <p class="text-dark">&mdash; Jane Doe</p>
          </div>
      </div>
  </div>
{/* /quotes */}
</Layout>
</div>
)
