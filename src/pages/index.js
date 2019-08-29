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
  {/* <div className="container">
      <div className="row">
          <div className="col-lg-9 mx-auto">
              <div className="alert alert-danger alert-dismissible fade show my-3" role="alert">
                  <strong>Hurry!</strong> Summer Camp Session 3 (RC Car) is starting in two week! <a href="#home" target="_blank" className="alert-link">Register now</a>! <span className="badge badge-danger ml-4">2 spots left</span>
                  <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                  </button>
              </div>
          </div>
      </div>
  </div> */}
{/* /alert */}

{/* jumbotron */}
  <div className="jumbotron jumbotron-fluid bg-dark text-white d-xl-none mb-0">
      <div className="container text-center py-5">
          <h1>Get with the Program</h1>
          <p className="lead">Preparing ALL kids for a future in STEM...<br />Little kids, BIG opportunity!</p>
      </div>
  </div>
{/* /jumbotron */}

{/* carousel */}
  <div id="carouselExampleSlidesOnly" className="carousel slide carousel-fade d-none d-xl-block" data-ride="carousel">
      <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://source.unsplash.com/collection/6882791/1800x700" className="d-block w-100 hero" alt=""></img>
            <div className="carousel-caption">
                <h1 className="display-2">Get with the Program</h1>
                <p className="lead">Preparing ALL kids for a future in STEM...<br />Little kids, BIG opportunity!</p>
            </div>
          </div>
          <div className="carousel-item">
              <img src="gwtp-hero-1.jpg" className="d-block w-100 hero" alt="A group of camp participants in front of a library building."></img>
          </div>
          <div className="carousel-item">
              <img src="gwtp-hero-2.jpg" className="d-block w-100 hero" alt="Three participants smiling at a drone camp."></img>
          </div>
          <div className="carousel-item">
              <img src="gwtp-hero-3.jpg" className="d-block w-100 hero" alt="Girl coders working on their project."></img>
          </div>
      </div>
  </div>
{/* /carousel */}

{/* news */}
<div className="py-5 bg-blue news">
    <div className="container">
      <div className="row">
        <div className="col-lg-5 mb-3">
          <h2 className="mb-4 h1 text-white" id="ssnews">Announcement</h2>
          <div className="card">
            <img src="https://source.unsplash.com/collection/7008843/500x300" className="card-img-top img-fluid" alt="" />
            <div className="card-body">
            <h5 className="card-title">Fall Program Dates</h5>
            <p className="card-text">Check back soon for dates, or subscribe to our newsletter!</p>
            <a href="http://eepurl.com/bPGvNr" className="btn btn-primary" target="_blank" rel="noopener noreferrer">Join Our Mailing List</a>
            </div>
          </div>
        </div>
        <div className="col-lg-7">
          <h2 className="mb-4 h1 text-white">
              In the News
          </h2>
          <div className="list-group">
              {data.news.nodes.map(node => (
              <a href={node.data.URL} className="list-group-item list-group-item-action" target="_blank" rel="noopener noreferrer"><span className="font-weight-bold">{node.data.Name}</span><br /><small>{node.data.Date} | {node.data.Source}</small></a>
              ))}
          </div>
          <h3 className="mt-3 text-right"><a href="news" className="btn btn-danger">See all news</a></h3>
        </div>
      </div>
    </div>
</div>
{/* /news */}

{/* wave */}
<div className="wave">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 80 1440 170"><path fill="#2AABCC" fill-opacity="1" d="M0,192L40,186.7C80,181,160,171,240,165.3C320,160,400,160,480,170.7C560,181,640,203,720,202.7C800,203,880,181,960,160C1040,139,1120,117,1200,112C1280,107,1360,117,1400,122.7L1440,128L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg>
</div>
{/* /wave */}

{/* about */}
<div className="container py-5">
    <div className="row">
        <div className="col-lg mb-3">
            <h2 className="mb-4 h1" id="ssabout">
                About
            </h2>
            <p className="text-muted text-justify">
            Get with the Program is a 501&#40;c&#41;&#40;3&#41; nonprofit organization that promotes and reinforces literacy in science, technology, engineering, and mathematics &#40;STEM&#41; among preschool through 12th grade, with a particular focus on underrepresented groups and marginalized communities. While our focus is on STEM, we take the holistic approach to child development by incorporating art, music, physical education, and literacy &#40;language arts&#41; into STEM learning.
            </p>
        </div>
        <div className="col-lg">
            <h2 className="mb-4 h1">
                Mission
            </h2>
            <p className="text-muted text-center h3">
            “To empower <span className="text-blue">ALL</span> children<br />to reach their greatest potential!”
            </p>
        </div>
    </div>
</div>
{/* /about */}

{/* wave */}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 80 1440 160"><path fill="#13AE6C" fill-opacity="1" d="M0,96L80,122.7C160,149,320,203,480,192C640,181,800,107,960,90.7C1120,75,1280,117,1360,138.7L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
{/* /wave */}

{/* founder */}
  <div className="py-5 bg-green founder">
      <div className="container">
          <div className="row">
              <figure className="figure col-lg mb-5 mb-lg-0">
                      <img src="jason-williams.jpg" alt="Jason Williams and camp participants playing the banana piano" className="rounded img-fluid figure-img" />
                      <figcaption className="figure-caption text-white">Photo credit: Yevhen Gulenko</figcaption>
              </figure>
              <div className="col-lg text-white">
                  <h2 className="h1" id="founder">
                      Jason Williams
                  </h2>
                  <p className="font-weight-bold">
                      CEO/Founder
                  </p>
                  <p className="mb-4 text-justify">
                  Jason Williams, the Founder and CEO of Get with the Program, is a Lorain, OH native and Oberlin College graduate with extensive experience in working with P-12 students, both domestically and internationally. Mr. Williams enjoys learning new things, solving problems, and empowering youth to reach their fullest potential.
                  </p>
              </div>
          </div>
      </div>
  </div>
{/* /founder */}

{/* wave */}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 80 1440 160"><path fill="#13AE6C" fill-opacity="1" d="M0,96L80,122.7C160,149,320,203,480,192C640,181,800,107,960,90.7C1120,75,1280,117,1360,138.7L1440,160L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
{/* /wave */}

{/* team */}
  <div className="container py-5">
      <h2 className="mb-5 h1" id="team">Our Characters</h2>
      <div className="row">
          <div className="col-lg text-center text-dark mb-3">
              <img src="amina.png" alt="Amina" className="rounded-circle"></img>
              <h3 className="mt-4">
                  Amina
              </h3>
              {/* <p className="font-weight-bold">
                  Professional Title
              </p>
              <p className="text-muted">
                  Suspendisse in elementum mi, ac sollicitudin sem. Mauris bibendum tellus ut hendrerit accumsan. Nulla sit amet rutrum ligula, id efficitur metus. Cras congue urna ac mi ullamcorper tempor.
              </p> */}
          </div>
          <div className="col-lg text-center text-dark mb-3">
              <img src="amir.png" alt="Amir" className="rounded-circle"></img>
              <h3 className="mt-4">
                  Amir
              </h3>
              {/* <p className="font-weight-bold">
                  Professional Title
              </p>
              <p className="text-muted">
                  Suspendisse in elementum mi, ac sollicitudin sem. Mauris bibendum tellus ut hendrerit accumsan. Nulla sit amet rutrum ligula, id efficitur metus. Cras congue urna ac mi ullamcorper tempor.
              </p> */}
          </div>
          <div className="col-lg text-center text-dark">
              <img src="anissa.png" alt="Anissa" className="rounded-circle"></img>
              <h3 className="mt-4">
                  Anissa
              </h3>
              {/* <p className="font-weight-bold">
                  Professional Title
              </p>
              <p className="text-muted">
                  Suspendisse in elementum mi, ac sollicitudin sem. Mauris bibendum tellus ut hendrerit accumsan. Nulla sit amet rutrum ligula, id efficitur metus. Cras congue urna ac mi ullamcorper tempor.
              </p> */}
          </div>
      </div>
  </div>
{/* /team */}

{/* wave */}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 140 1440 140"><path fill="#8962D8" fill-opacity="1" d="M0,192L80,186.7C160,181,320,171,480,186.7C640,203,800,245,960,261.3C1120,277,1280,267,1360,261.3L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
{/* /wave */}

{/* programs */}
  <div className="bg-purple py-5 program">
      <div className="container text-white">
          <h2 className="mb-5 h1" id="ssprograms">Programs</h2>
          <div className="row">
              <div className="col-md-9 mx-auto col-xl mb-5">
                  <img src="https://source.unsplash.com/collection/7019254/600x400" alt="Brain Camp" className="rounded img-fluid"></img>
                  <h3 className="mt-4">
                      Brain Camp
                  </h3>
                  <p className="text-justify">
                  Get with the Program&rsquo;s Brain Camps are year-round, out-of-school learning programs. These camps take place during school in-service days, holidays, and school breaks &#40;spring, summer, winter, etc.&#41;.
                  </p>
                  {/* <a className="btn btn-primary mt-2" href="camp">Learn More</a> */}
              </div>
              <div className="col-md-9 mx-auto col-xl mb-5">
                  <img src="https://source.unsplash.com/collection/4255424/600x400" alt="Brain Academy" className="rounded img-fluid"></img>
                  <h3 className="mt-4">
                      Brain Academy
                  </h3>
                  <p className="text-justify">
                  The Brain Academy is an onsite afterschool program that works to improve students&rsquo; problem solving/critical thinking skills and attitude towards STEM, through various hands-on, project-based STEM activities.
                  </p>
                  {/* <a className="btn btn-primary mt-2" href="academy">Learn More</a> */}
              </div>
              <div className="col-md-9 mx-auto col-xl">
                  <img src="https://source.unsplash.com/collection/8262090/600x400" alt="Brain Lab" className="rounded img-fluid"></img>
                  <h3 className="mt-4">
                      Brain Lab
                  </h3>
                  <p className="text-justify">
                  The Brain Lab offers similar activities, in partnership with youth-serving organizations.
                  </p>
                  {/* <a className="btn btn-primary mt-2" href="lab">Learn More</a> */}
              </div>
          </div>
      </div>
  </div>
{/* /programs */}

{/* quotes */}
  {/* <div className="container py-5">
      <h2 className="mb-4 text-dark h1" id="ssquotes">Testimonials</h2>
      <div className="row">
          <div className="col-lg mb-4">
              <i className="fas fa-quote-left fa-2x fa-pull-left text-yellow"></i>
              <p className="text-muted text-justify mb-1">Gatsby believed in the green light, the orgastic future that year by year recedes before us. It eluded us then, but that’s no matter — tomorrow we will run faster, stretch our arms further... And one fine morning — So we beat on, boats against the current, borne back ceaselessly into the past.</p>
              <p className="text-dark">&mdash; Jane Doe</p>
          </div>
          <div className="col-lg">
              <i className="fas fa-quote-left fa-2x fa-pull-left text-yellow"></i>
              <p className="text-muted text-justify mb-1">Gatsby believed in the green light, the orgastic future that year by year recedes before us. It eluded us then, but that’s no matter — tomorrow we will run faster, stretch our arms further... And one fine morning — So we beat on, boats against the current, borne back ceaselessly into the past.</p>
              <p className="text-dark">&mdash; Jane Doe</p>
          </div>
      </div>
      <div className="row">
          <div className="col-lg mb-4">
              <i className="fas fa-quote-left fa-2x fa-pull-left text-yellow"></i>
              <p className="text-muted text-justify mb-1">Gatsby believed in the green light, the orgastic future that year by year recedes before us. It eluded us then, but that’s no matter — tomorrow we will run faster, stretch our arms further... And one fine morning — So we beat on, boats against the current, borne back ceaselessly into the past.</p>
              <p className="text-dark">&mdash; Jane Doe</p>
          </div>
          <div className="col-lg">
              <i className="fas fa-quote-left fa-2x fa-pull-left text-yellow"></i>
              <p className="text-muted text-justify mb-1">Gatsby believed in the green light, the orgastic future that year by year recedes before us. It eluded us then, but that’s no matter — tomorrow we will run faster, stretch our arms further... And one fine morning — So we beat on, boats against the current, borne back ceaselessly into the past.</p>
              <p className="text-dark">&mdash; Jane Doe</p>
          </div>
      </div>
  </div> */}
{/* /quotes */}
</Layout>
</div>
)
