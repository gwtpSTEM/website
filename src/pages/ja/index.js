import React from "react"
import { Helmet } from "react-helmet"
import Layout from "../../components/layout-ja"
import { graphql } from 'gatsby'


export const query = graphql`
{
  news: allAirtable(sort: {fields: data___Date, order: DESC}, filter: {data: {Status: {eq: "Published"}}}, limit: 6) {
    nodes {
      data {
        Date(locale: "ja", formatString: "YYYY年M月D日")
        Japanese
        Source
        URL
        Color
      }
    }
  }
}  
`;

export default ({ data }) => (

<div>
<Helmet>
<title>Get with the Program</title>
<meta name="title" content="Get with the Program: アメリカ・オハイオ州のSTEM教育専門NPO団体" />
<meta name="description" content="Get with the Programは幼稚園から高校生までのSTEM教育を推進します" />

<meta property="og:type" content="website" />
<meta property="og:url" content="https://www.gwtp.us/" />
<meta property="og:title" content="Get with the Program: アメリカ・オハイオ州のSTEM教育専門NPO団体" />
<meta property="og:description" content="Get with the Programは幼稚園から高校生までのSTEM教育を推進します" />
<meta property="og:image" content="https://www.gwtp.us/og.png" />

<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:url" content="https://www.gwtp.us/" />
<meta property="twitter:title" content="Get with the Program:  アメリカ・オハイオ州のSTEM教育専門NPO団体" />
<meta property="twitter:description" content="Get with the Programは幼稚園から高校生までのSTEM教育を推進します" />
<meta property="twitter:image" content="https://www.gwtp.us/og.png" />
</Helmet>
<Layout>
{/* alert */}
  <div className="container">
      <div className="row">
          <div className="col-lg-10 mx-auto">
              <div className="alert alert-danger alert-dismissible fade show my-3" role="alert">
                  9月に東京でSTEM教室を開催します！英語とSTEMを同時に学べるチャンス！ <a href="#home" target="_blank" className="alert-link"><strong>登録受付中！</strong></a> <span className="badge badge-danger ml-4">残り20席</span>
                  <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                  </button>
              </div>
          </div>
      </div>
  </div>
{/* /alert */}

{/* jumbotron */}
  <div className="jumbotron jumbotron-fluid bg-dark text-white d-xl-none mb-0">
      <div className="container text-center py-5">
          <h1>Get with the Program</h1>
          <p className="lead">すべての子どもたちにSTEM教育の機会を・・・<br />子どもたちよ、大きく羽ばたけ！</p>
      </div>
  </div>
{/* /jumbotron */}

{/* carousel */}
  <div id="carouselExampleSlidesOnly" className="carousel slide carousel-fade d-none d-xl-block" data-ride="carousel">
      <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://source.unsplash.com/collection/6882791/1800x550" className="d-block w-100" alt=""></img>
            <div className="carousel-caption">
                <h1 className="display-2">Get with the Program</h1>
                <p className="lead">すべての子どもたちにSTEM教育の機会を・・・<br />子どもたちよ、大きく羽ばたけ！</p>
            </div>
          </div>
          <div className="carousel-item">
              <img src="https://source.unsplash.com/1800x550/?technology" className="d-block w-100" alt="..."></img>
          </div>
          <div className="carousel-item">
              <img src="https://source.unsplash.com/1800x550/?engineering" className="d-block w-100" alt="..."></img>
          </div>
          <div className="carousel-item">
              <img src="https://source.unsplash.com/1800x550/?math" className="d-block w-100" alt="..."></img>
          </div>
      </div>
  </div>
{/* /carousel */}

{/* news */}
<div className="pt-5 bg-blue">
    <div className="container">
      <div className="row">
        <div className="col-lg-5 mb-3">
          <h2 className="mb-4 text-white" id="ssnews">お知らせ</h2>
          <div className="card text-dark">
            <img src="https://source.unsplash.com/collection/7008843/500x300" className="card-img-top img-fluid" alt="..." />
            <div className="card-body">
            <h5 className="card-title">東京でSTEM教室を開催！</h5>
            <p className="card-text">9月14日(土)第一部: 内容がここに入ります<br />9月14日(土)第二部: 内容がここに入ります<br />9月21日(土)第一部: 内容がここに入ります<br />9月21日(土)第二部: 内容がここに入ります<br /><small className="text-danger font-weight-bold">第一部: 10時から正午まで / 第二部: 13時から14時まで</small></p>
            <a href="https://summer-19.paperform.co/" className="btn btn-primary" aria-label="STEM教室の詳しい内容と登録フォームはこちら" target="_blank" rel="noopener noreferrer">参加申し込みフォームへ</a>
            </div>
          </div>
        </div>
        <div className="col-lg-7">
          <h2 className="mb-4 text-white">
              メディア掲載情報
          </h2>
          <div className="list-group">
              {data.news.nodes.map(node => (
              <a href={node.data.URL} className="list-group-item list-group-item-action" target="_blank" rel="noopener noreferrer"><span className="font-weight-bold">{node.data.Japanese}</span><br /><small>{node.data.Date} | {node.data.Source}</small></a>
              ))}
          </div>
          <h3 className="mt-3 text-right"><a href="news" className="btn btn-danger">すべてのニュースを読む</a></h3>
        </div>
      </div>
    </div>
</div>
{/* /news */}

{/* wave */}
<div className="wave">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#2AABCC" fill-opacity="1" d="M0,192L40,186.7C80,181,160,171,240,165.3C320,160,400,160,480,170.7C560,181,640,203,720,202.7C800,203,880,181,960,160C1040,139,1120,117,1200,112C1280,107,1360,117,1400,122.7L1440,128L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg>
</div>
{/* /wave */}

{/* about */}
<div className="container pb-5">
    <div className="row">
        <div className="col-lg mb-3">
            <h2 className="mb-4" id="ssabout">
                私たちについて
            </h2>
            <p className="text-muted text-justify">
            Get with the Program (GwtP) は幼稚園から高校生までの子供たちにSTEM教育を広める活動をアメリカ・オハイオ州を中心に行っているNPO団体です。図画工作、音楽、体育、読み書きなどの要素も取り入れた総合的なアプローチでSTEM教育に取り組むことで、興味や関心の異なるすべての子供たちに楽しんでもらえるプログラムを提供します。
            </p>
        </div>
        <div className="col-lg">
            <h2 className="mb-4">
                ミッション
            </h2>
            <p className="text-muted text-justify">
                Suspendisse in elementum mi, ac sollicitudin sem. Mauris bibendum tellus ut hendrerit accumsan. Nulla sit amet rutrum ligula, id efficitur metus. Cras congue urna ac mi ullamcorper tempor. Pellentesque metus lorem, pharetra in risus in, facilisis bibendum ex. Fusce volutpat venenatis luctus. Praesent lacinia porta mauris, nec tempor nulla gravida non. Mauris convallis odio a odio porttitor, at congue tortor cursus. Suspendisse potenti. Pellentesque eget orci condimentum, mollis sapien at, porttitor felis. Vivamus tempus massa erat. Suspendisse lacus arcu, vulputate in elit nec, sagittis ornare eros.
            </p>
        </div>
    </div>
</div>
{/* /about */}

{/* wave */}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#13AE6C" fill-opacity="1" d="M0,96L80,122.7C160,149,320,203,480,192C640,181,800,107,960,90.7C1120,75,1280,117,1360,138.7L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
{/* /wave */}

{/* founder */}
  <div className="py-5 bg-green">
      <div className="container">
          <div className="row">
              <figure className="figure col-lg mb-5 mb-lg-0">
                      <img src="../jason-williams.jpg" alt="Jason Williams and camp participants playing the banana piano" className="rounded img-fluid figure-img" />
                      <figcaption className="figure-caption text-white">写真: イェヴヘン・グレンコ</figcaption>
              </figure>
              <div className="col-lg text-white">
                  <h2 id="founder">
                      ジェイソン・ウィリアムス
                  </h2>
                  <p className="font-weight-bold">
                      代表/創設者
                  </p>
                  <p className="mb-4 text-justify">
                  Get with the Programの代表であり創設者。アメリカ・オハイオ州ロレイン市生まれ。リベラルアールの名門オーバリン大学卒業は、アメリカ国内外において幅広い年齢の子どもたちの教育活動に携わっている。ここは日本向けのメッセージを入れてください！
                  </p>
              </div>
          </div>
      </div>
  </div>
{/* /founder */}

{/* wave */}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#13AE6C" fill-opacity="1" d="M0,96L80,122.7C160,149,320,203,480,192C640,181,800,107,960,90.7C1120,75,1280,117,1360,138.7L1440,160L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
{/* /wave */}

{/* team */}
  <div className="container py-5">
      <h2 className="mb-5" id="team">キャラクター紹介</h2>
      <div className="row">
          <div className="col-lg text-center text-dark mb-3">
              <img src="../amina.png" alt="Amina" className="rounded-circle"></img>
              <h3 className="mt-4">
                  アミーナ
              </h3>
              <p className="font-weight-bold">
                  Professional Title
              </p>
              <p className="text-muted">
                  Suspendisse in elementum mi, ac sollicitudin sem. Mauris bibendum tellus ut hendrerit accumsan. Nulla sit amet rutrum ligula, id efficitur metus. Cras congue urna ac mi ullamcorper tempor.
              </p>
          </div>
          <div className="col-lg text-center text-dark mb-3">
              <img src="../amir.png" alt="Amir" className="rounded-circle"></img>
              <h3 className="mt-4">
                  アミール
              </h3>
              <p className="font-weight-bold">
                  Professional Title
              </p>
              <p className="text-muted">
                  Suspendisse in elementum mi, ac sollicitudin sem. Mauris bibendum tellus ut hendrerit accumsan. Nulla sit amet rutrum ligula, id efficitur metus. Cras congue urna ac mi ullamcorper tempor.
              </p>
          </div>
          <div className="col-lg text-center text-dark">
              <img src="../anissa.png" alt="Anissa" className="rounded-circle"></img>
              <h3 className="mt-4">
                  アニーサ
              </h3>
              <p className="font-weight-bold">
                  Professional Title
              </p>
              <p className="text-muted">
                  Suspendisse in elementum mi, ac sollicitudin sem. Mauris bibendum tellus ut hendrerit accumsan. Nulla sit amet rutrum ligula, id efficitur metus. Cras congue urna ac mi ullamcorper tempor.
              </p>
          </div>
      </div>
  </div>
{/* /team */}

{/* wave */}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#8962D8" fill-opacity="1" d="M0,192L80,186.7C160,181,320,171,480,186.7C640,203,800,245,960,261.3C1120,277,1280,267,1360,261.3L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
{/* /wave */}

{/* programs */}
  <div className="bg-purple py-5">
      <div className="container text-white">
          <h2 className="mb-5" id="ssprograms">活動内容</h2>
          <div className="row">
              <div className="col-md-9 mx-auto col-xl mb-5">
                  <img src="https://source.unsplash.com/collection/7019254/600x400" alt="Brain Camp" className="rounded img-fluid"></img>
                  <h3 className="mt-4">
                      ブレイン・キャンプ
                  </h3>
                  <p className="text-justify">
                  休日をはじめ、春休み・夏休み・冬休みといった長期休暇中に行っている通年プログラム。過去にはNASA職員を招いた宇宙キャンプや、地域の大学教授による脳科学・地質学・光学キャンプのほか、ロボットの組み立てからプログラミングまでを行うロボット工学キャンプ、オリジナルのゲームをデザインするコーディングキャンプなど多彩なプログラムを実施。
                  </p>
                  {/* <a className="btn btn-primary mt-2" href="camp">Learn More</a> */}
              </div>
              <div className="col-md-9 mx-auto col-xl mb-5">
                  <img src="https://source.unsplash.com/collection/4255424/600x400" alt="Brain Academy" className="rounded img-fluid"></img>
                  <h3 className="mt-4">
                      ブレイン・アカデミー
                  </h3>
                  <p className="text-justify">
                  プロジェクトベースかつ体験型のSTEMアクティビティをとおし、問題を解く力や物事を色々な角度から考える力、STEM分野への興味・関心を養うプログラム。放課後に学校内の施設を利用して行われる。過去には、紙に書いた線を辿って走るロボットOzobotを使用した授業や、パソコンにバナナや粘土など身近なものをつなげて簡易電子ピアノやゲームを作れるMakey Makeyを使った授業を実施。
                  </p>
                  {/* <a className="btn btn-primary mt-2" href="academy">Learn More</a> */}
              </div>
              <div className="col-md-9 mx-auto col-xl">
                  <img src="https://source.unsplash.com/collection/8262090/600x400" alt="Brain Lab" className="rounded img-fluid"></img>
                  <h3 className="mt-4">
                      ブレイン・ラボ
                  </h3>
                  <p className="text-justify">
                  学童保育や児童館などの教育機関外で不定期に行われるプログラム。過去には、ビーズやカードゲームを使いプログラミングの基礎である二進法の授業やHTML/CSSによるウェブサイト作成のほか、アカデミーでも利用されているOzobotやMakey Makeyを使用した授業を展開。
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
