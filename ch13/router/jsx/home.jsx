const React = require('react')
const { Link } = require('react-router')

class Home extends React.Component {
  render() {
    return <div className="page">
      <header className="masthead" role="banner">
        <p className="logo">
          <Link to="/">
            <img src="../img/lejournal.png" alt="Le Journal" />
          </Link>
        </p>
        <ul className="social-sites">
          <li>
            <a href="http://www.facebook.com">f</a>
          </li>
          <li>
            <a href="http://www.twitter.com">t</a>
          </li>
          <li>
            <a href="http://www.flickr.com">n</a>
          </li>
        </ul>
        <nav role="navigation">
          <ul className="nav-main">
            <li>
              <Link to="/" activeClassName="current-page">Home</Link>
            </li>
            <li>
              <Link to="/posts" activeClassName="current-page">Blog</Link>
            </li>
          </ul>
        </nav>
      </header>

      <div className="container clear-fix">
        <main role="main">
          {this.props.children}
        </main>
        {/**<!-- start sidebar -->*/}
        <div className="sidebar">
          <article className="about">
            <h2>About Me</h2>

            <img src="../img/about-me.jpg" width="270" height="162" alt="" />

            <p>My name is Eleina Shinn. Exploring the unknown and learning about our planet is what brings me the most pleasure. I enjoy foreign cuisine, culture and discovering social design and architecture. During the last five years I traveled to over 20 countries on 4 continents, often with just my backpack and a map in hand.</p>
          </article>

          <div className="mod">
            <h2>My Travels</h2>
            <img src="../img/map.png" width="298" height="145" alt="" className="map" />
          </div>

          <aside className="mod">
            <h2>Popular Posts</h2>

            <ul className="links">
              <li><a href="#" className="more">The City Named After Queen Victoria</a></li>
              <li><a href="#" className="more">Heaven on Earth? Let's Have Dinner in Paris</a></li>
              <li><a href="#" className="more">Enjoying Strauss at the Volksoper in Vienna</a></li>
            </ul>
          </aside>

          <aside className="mod">
            <h2>Recently Shared</h2>

            <ul className="links">
              <li><a href="#" className="more">Heaven on Earth? Let's Have Dinner in Paris</a></li>
              <li><a href="#" className="more">Experiencing Ramadan in Morocco</a></li>
              <li><a href="#" className="more">Octoberfest in Munich: The Party for The King's Daughter</a></li>
            </ul>
          </aside>
        </div>
        {/**<!-- end sidebar -->*/}
      </div>
      {/**<!-- end container -->*/}
      {/**<!--start page footer--> */}
      <footer role="contentinfo" className="footer">
        <p class="legal"><small>&copy; 2013 Le Journal. All Rights Reserved.</small></p>
      </footer>
      {/**<!--end page footer--> */}
	</div>
  }
}
Home.contextTypes = {
  router: React.PropTypes.object.isRequired
}
module.exports = Home