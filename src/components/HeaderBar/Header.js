import React from "react";
import Socials from "./Socials";
import { Link, useLocation } from "react-router-dom";
import WidgetItem from "./WidgetItem";

function Header() {
  const highlights = [
    {
      category: "4",
      image: "https://picsum.photos/400",
      alt: "Xenowatch's new patch will fix the faces bugs",
      title: "Xenowatch",
      description: "Xenowatch's new patch will fix the faces bugs",
      date: "August 27th, 2018",
      link: "_esports_blog-post-1.html",
    },
    {
      category: "2",
      image: "https://picsum.photos/400",
      alt: "A new mage character is coming to the League",
      title: "L.O. Heroes",
      description: "A new mage character is coming to the League",
      date: "July 16th, 2018",
      link: "_esports_blog-post-1.html",
    },
    {
      category: "3",
      image: "https://picsum.photos/400",
      alt: "New Teach vehicles will be added in July's patch",
      title: "Striker GO",
      description: "New Teach vehicles will be added in July's patch",
      date: "June 12th, 2018",
      link: "_esports_blog-post-1.html",
    },
  ];
  const location = useLocation();
  const { part1, part2 } = getPageName(location.pathname);
  function getPageName(url) {
    const cleanUrl = url.replace(/_/g, " ");
    const breadcrumb = cleanUrl.split("/");
    const lastPart = breadcrumb[breadcrumb.length - 1];
    const parts = lastPart.split(" ");
    const isEven = parts.length % 2 === 0;
    const middle = Math.floor(parts.length / 2);
    let part1, part2;

    if (parts.length === 0) {
      part1 = "Home";
      part2 = "";
    } else {
      part1 = parts.slice(0, isEven ? middle : middle + 1).join(" ");
      part2 = parts.slice(isEven ? middle : middle + 1).join(" ");
    }

    return { part1, part2 };
  }

  function Breadcrumb() {
    const cleanurl = location.pathname.replace(/_/g, " ");
    const breadcrumb = cleanurl.split("/");
    let breadcrumbItems = [];

    // Add Home breadcrumb
    breadcrumbItems.push(
      <li key="home" className="breadcrumb-item">
        <Link to="/">Home</Link>
      </li>
    );

    for (let i = 1; i < breadcrumb.length; i++) {
      const breadcrumbtrail = breadcrumb.slice(0, i + 1).join("/"); // Join the parts of the breadcrumb to create the URL path

      if (i === breadcrumb.length - 1) {
        breadcrumbItems.push(
          <li key={i} className="breadcrumb-item active" aria-current="page">
            {breadcrumb[i]}
          </li>
        );
      } else {
        breadcrumbItems.push(
          <li key={i} className="breadcrumb-item">
            <Link to={breadcrumbtrail}>{breadcrumb[i]}</Link>
          </li>
        );
      }
    }

    return (
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">{breadcrumbItems}</ol>
      </nav>
    );
  }

  function HighlightMenu($id) {
    const parent_location = location.pathname.split("/")[1];

    switch (parent_location) {
      case "":
        if ($id === "Home") {
          return "active";
        }
        break;
      case "info":
        if ($id === "Info") {
          return "active";
        }
        break;
      case "program":
        if ($id === "Program") {
          return "active";
        }
        break;
      case "competition":
        if ($id === "Competition") {
          return "active";
        }
        break;
      default:
        break;
    }
  }
  //   const [click, setClick] = useState(false);
  //   const [button, setButton] = useState(true);

  //   const handleClick = () => setClick(!click);

  //   const closeMobileMenu = () => setClick(false);

  //   const showButton = () => {
  //     if (window.innerWidth <= 960) {
  //       setButton(false);
  //     } else {
  //       setButton(true);
  //     }
  //   };

  //   const [smallScreen, setSmallScreen] = useState(window.innerWidth < 960);

  //   const Size = () => {
  //     if (window.innerWidth < 960) {
  //       setSmallScreen(true);
  //     } else {
  //       setSmallScreen(false);
  //     }
  //   };

  //   useEffect(() => {
  //     showButton();
  //     Size();
  //   }, []);

  //   window.addEventListener("resize", showButton);
  return (
    <>
      <div className="header-mobile clearfix" id="header-mobile">
        <div className="header-mobile__logo">
          <Link href="index.html">
            <img
              src="/images/esports/logo.png"
              srcSet="/images/esports/logo@2x.png 2x"
              alt="Idaho Esports"
              className="header-mobile__logo-img"
            />
          </Link>
        </div>
        <div className="header-mobile__inner">
          <Link id="header-mobile__toggle" className="burger-menu-icon">
            <span className="burger-menu-icon__line"></span>
          </Link>
          <span
            className="header-mobile__search-icon"
            id="header-mobile__search-icon"
          ></span>
        </div>
      </div>
      <header className="header header--layout-3">
        {/* <!-- Header Top Bar --> */}
        <div className="header__top-bar clearfix">
          <div className="container">
            <div className="header__top-bar-inner">
              <Socials />

              {/* <!-- Account Navigation --> */}
              <ul className="nav-account">
                <li className="nav-account__item nav-account__item--wishlist">
                  <Link href="_esports_shop-wishlist.html">
                    Wishlist <span className="highlight">8</span>
                  </Link>
                </li>
                <li className="nav-account__item">
                  <Link href="/">
                    Currency: <span className="highlight">USD</span>
                  </Link>
                  {/* <ul className="main-nav__sub">
                    <li>
                      <Link href="/" >USD</Link>
                    </li>
                    <li>
                      <Link href="/" >EUR</Link>
                    </li>
                    <li>
                      <Link href="/" >GBP</Link>
                    </li>
                  </ul> */}
                </li>
                <li className="nav-account__item">
                  <Link href="/">
                    Language: <span className="highlight">EN</span>
                  </Link>
                  {/* <ul className="main-nav__sub">
                    <li>
                      <Link href="/" >English</Link>
                    </li>
                    <li>
                      <Link href="/" >Spanish</Link>
                    </li>
                    <li>
                      <Link href="/" >French</Link>
                    </li>
                    <li>
                      <Link href="/" >German</Link>
                    </li>
                  </ul> */}
                </li>
                <li className="nav-account__item">
                  <Link href="_esports_shop-account.html">Your Account</Link>
                </li>
                <li className="nav-account__item nav-account__item--logout">
                  <Link href="_esports_shop-login.html">Logout</Link>
                </li>
              </ul>
              {/* <!-- Account Navigation / End --> */}
            </div>
          </div>
        </div>
        {/* <!-- Header Top Bar / End --> */}

        {/* <!-- Header Primary --> */}
        <div className="header__primary">
          <div className="container">
            <div className="header__primary-inner">
              {/* <!-- Header Logo --> */}
              <div className="header-logo">
                <Link to="/">
                  <img
                    src="/images/esports/logo.png"
                    srcSet="/images/esports/logo@2x.png"
                    alt="Idaho Esports"
                    className="header-logo__img"
                  />
                </Link>
              </div>
              {/* <!-- Header Logo / End --> */}

              <nav className="main-nav">
                <ul className="main-nav__list">
                  <li className={HighlightMenu("Home")} id="Home">
                    <Link to="/">Home</Link>
                  </li>
                  <li className={HighlightMenu("Info")} id="Info">
                    <Link href="/">Information</Link>
                    {/* <!-- Mega Menu --> */}
                    <div className="main-nav__megamenu">
                      <div className="row">
                        <div className="col-12">
                          {/* <!-- Widget: Latest Posts / End --> */}
                          <div className="widget widget--megamenu widget-latest-posts">
                            <div className="widget__content">
                              <ul className="posts posts--simple-list posts-layout-horizontal posts-layout-horizontal--3cols">
                                <WidgetItem highlights={highlights} />
                              </ul>
                            </div>
                          </div>
                          {/* <!-- Widget: Latest Posts / End --> */}
                        </div>
                        <div className="w-100"></div>
                        <ul className="col-lg-3 col-md-2 col-12 main-nav__ul main-nav__ul-2cols">
                          <li className="main-nav__title">Game Rules</li>
                          <li>
                            <Link to="/info/apex_legends">Apex Legends</Link>
                          </li>
                          <li>
                            <Link to="/info/valorant">Valorant</Link>
                          </li>
                          <li>
                            <Link to="/info/overwatch_2">Overwatch 2</Link>
                          </li>
                          <li>
                            <Link to="/info/rocket_league">Rocket League</Link>
                          </li>
                          <li>
                            <Link to="/info/league_of_legends">
                              League of Legends
                            </Link>
                          </li>
                          <li>
                            <Link to="/info/omega_strikers">
                              Omega Strikers
                            </Link>
                          </li>
                          <li>
                            <Link to="/info/super_smash_bros_ultimate">
                              Super Smash Bros Ultimate
                            </Link>
                          </li>
                        </ul>
                        <ul className="col-lg-2 col-md-2 col-12 main-nav__ul main-nav__ul-2cols">
                          <li className="main-nav__title">League Rules</li>
                          <li>
                            <Link href="_esports_blog-1.html">General</Link>
                          </li>
                          <li>
                            <Link href="_esports_blog-post-1.html">
                              High School
                            </Link>
                          </li>
                          <li>
                            <Link href="_esports_blog-2.html">
                              Middle School
                            </Link>
                          </li>
                          <li>
                            <Link href="_esports_blog-post-2.html">
                              Spectators
                            </Link>
                          </li>
                        </ul>
                        <ul className="col-lg-2 col-md-3 col-12 main-nav__ul">
                          <li className="main-nav__title">Non-Profit</li>
                          <li>
                            <Link href="_esports_page-sponsors.html">
                              Articles of Incorporation
                            </Link>
                          </li>
                          <li>
                            <Link href="_esports_page-faqs.html">Bylaws</Link>
                          </li>
                          <li>
                            <Link href="_esports_page-contacts.html">
                              Transparency docs
                            </Link>
                          </li>
                        </ul>
                        <ul className="col-lg-2 col-md-3 col-12 main-nav__ul">
                          <li className="main-nav__title">Sponsors</li>
                          <li>
                            <Link href="_esports_page-sponsors.html">
                              Current
                            </Link>
                          </li>
                          <li>
                            <Link href="_esports_page-faqs.html">Benefits</Link>
                          </li>
                          <li>
                            <Link href="_esports_page-contacts.html">
                              Packages
                            </Link>
                          </li>
                        </ul>
                        <ul className="col-lg-2 col-md-3 col-12 main-nav__ul">
                          <li className="main-nav__title">Our Schools</li>
                          <li>
                            <Link href="_esports_page-sponsors.html">
                              High Schools
                            </Link>
                          </li>
                          <li>
                            <Link href="_esports_page-faqs.html">Middle Schools</Link>
                          </li>
                          <li>
                            <Link href="_esports_page-contacts.html">
                              Join us
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* <!-- Mega Menu / End --> */}
                  </li>
                  <li className={HighlightMenu("Program")} id="Program">
                    <Link href="/">Program Management</Link>
                    {/* <!-- Mega Menu --> */}
                    <div className="main-nav__megamenu">
                      <div className="row">
                        <div className="col-12">
                          {/* <!-- Widget: Latest Posts / End --> */}
                          <div className="widget widget--megamenu widget-latest-posts">
                            <div className="widget__content">
                              <ul className="posts posts--simple-list posts-layout-horizontal posts-layout-horizontal--3cols">
                                <WidgetItem
                                  category="4"
                                  image="assets/images/esports/samples/post-img2-grid.jpg"
                                  alt="Xenowatch&#x27;s new patch will fix the faces bugs"
                                  title="Xenowatch"
                                  description="Xenowatch&#x27;s new patch will fix the faces bugs"
                                  date="August 27th, 2018"
                                  link="_esports_blog-post-1.html"
                                />
                                <WidgetItem
                                  category="2"
                                  image="assets/images/esports/samples/post-img2-grid.jpg"
                                  alt="A new mage character is coming to the League"
                                  title="L.O. Heroes"
                                  description="A new mage character is coming to the League"
                                  date="July 16th, 2018"
                                  link="_esports_blog-post-1.html"
                                />
                                <WidgetItem
                                  category="3"
                                  image="assets/images/esports/samples/post-img2-grid.jpg"
                                  alt="New Teach vehicles will be added in July&#x27;s patch"
                                  title="Striker GO"
                                  description="New Teach vehicles will be added in July&#x27;s patch"
                                  date="June 12th, 2018"
                                  link="_esports_blog-post-1.html"
                                />
                              </ul>
                            </div>
                          </div>
                          {/* <!-- Widget: Latest Posts / End --> */}
                        </div>
                        <div className="w-100"></div>
                        <ul className="col-lg-5 col-md-3 col-12 main-nav__ul main-nav__ul-3cols">
                          <li className="main-nav__title">Starting</li>
                          <li>
                            <Link href="_esports_features-shortcodes.html">
                              General Process
                            </Link>
                          </li>
                          <li>
                            <Link href="_esports_features-widgets-blog.html">
                              School Approval
                            </Link>
                          </li>
                          <li>
                            <Link href="index.html">Equipment</Link>
                          </li>
                          <li>
                            <Link href="_esports_features-typography.html">
                              Funding
                            </Link>
                          </li>
                          <li>
                            <Link href="_esports_features-widgets-sports.html">
                              Competition
                            </Link>
                          </li>
                          <li>
                            <Link href="index-2.html">Home V2</Link>
                          </li>
                          <li>
                            <Link href="_esports_features-404.html">
                              404 Error
                            </Link>
                          </li>
                          <li>
                            <Link href="_esports_features-widgets-shop.html">
                              Widgets - Shop
                            </Link>
                          </li>
                          <li></li>
                          <li>
                            <Link href="_esports_features-search-results.html">
                              Search Results
                            </Link>
                          </li>
                          <li>
                            <Link href="_esports_shop-login.html">
                              Login/Register
                            </Link>
                          </li>
                        </ul>
                        <ul className="col-lg-3 col-md-3 col-12 main-nav__ul main-nav__ul-2cols">
                          <li className="main-nav__title">Running</li>
                          <li>
                            <Link href="_esports_blog-1.html">
                              Improving Image
                            </Link>
                          </li>
                          <li>
                            <Link href="_esports_blog-post-1.html">
                              Marketing
                            </Link>
                          </li>
                          <li>
                            <Link href="_esports_blog-2.html">
                              Engaging Players
                            </Link>
                          </li>
                          <li>
                            <Link href="_esports_blog-post-2.html">
                              Not Just Gaming
                            </Link>
                          </li>
                          <li>
                            <Link href="_esports_blog-3.html">Health Life</Link>
                          </li>
                          <li>
                            <Link href="_esports_blog-post-3.html">
                              Practice Ideas
                            </Link>
                          </li>
                          <li>
                            <Link href="_esports_blog-4.html">
                              Team Bonding
                            </Link>
                          </li>
                        </ul>
                        <ul className="col-lg-2 col-md-3 col-12 main-nav__ul">
                          <li className="main-nav__title">Troubleshooting</li>
                          <li>
                            <Link href="_esports_page-sponsors.html">
                              Engagement
                            </Link>
                          </li>
                          <li>
                            <Link href="_esports_page-faqs.html">Parents</Link>
                          </li>
                          <li>
                            <Link href="_esports_page-contacts.html">
                              Community
                            </Link>
                          </li>
                          <li>
                            <Link href="_esports_features-404.html">
                              404 Error
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* <!-- Mega Menu / End --> */}
                  </li>
                  <li className={HighlightMenu("Competition")} id="Competition">
                    <Link href="_esports_team-overview.html">Competition</Link>
                    {/* <!-- Mega Menu --> */}
                    <div className="main-nav__megamenu main-nav__megamenu--no-paddings ">
                      <div className="row">
                        <ul className="col-lg-4 col-md-4 col-12 main-nav__ul main-nav__ul-2cols">
                          <li className="main-nav__title main-nav-banner  main-nav-banner--img-1">
                            <Link href="/" className="main-nav-banner__link">
                              <span className="main-nav-banner__subtitle"></span>
                              <span className="main-nav-banner__title">
                                High School
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link href="_esports_event-overview-1a.html">
                              Overwatch 2
                            </Link>
                          </li>
                          <li>
                            <Link href="_esports_event-overview-1b.html">
                              Valorant
                            </Link>
                          </li>
                          <li>
                            <Link href="_esports_event-overview-1c.html">
                              Apex
                            </Link>
                          </li>
                          <li>
                            <Link href="_esports_event-overview-2.html">
                              Rocket League
                            </Link>
                          </li>
                          <li>
                            <Link href="_esports_event-overview-3.html">
                              Super Smash Bros
                            </Link>
                          </li>
                          <li>
                            <Link href="_esports_event-calendar.html">
                              Omega Strikers
                            </Link>
                          </li>
                          <li>
                            <Link href="_esports_event-tournament.html">
                              League of Legends
                            </Link>
                          </li>
                        </ul>
                        <ul className="col-lg-4 col-md-4 col-12 main-nav__ul main-nav__ul-2cols">
                          <li className="main-nav__title main-nav-banner  main-nav-banner--img-2">
                            <Link href="/" className="main-nav-banner__link">
                              <span className="main-nav-banner__subtitle"></span>
                              <span className="main-nav-banner__title">
                                Middle School
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link href="_esports_team-video-single.html">
                              Single Video
                            </Link>
                          </li>
                          <li>
                            <Link href="_esports_team-player.html">
                              Player Page
                            </Link>
                          </li>
                          <li>
                            <Link href="_esports_team-overview.html">
                              Single Team Page
                            </Link>
                          </li>
                          <li>
                            <Link href="_esports_blog-post-1.html">
                              Single Post Page
                            </Link>
                          </li>
                          <li>
                            <Link href="_esports_event-overview-3.html">
                              Single Event
                            </Link>
                          </li>
                          <li>
                            <Link href="_esports_shop-product.html">
                              Single Product
                            </Link>
                          </li>
                          <li>
                            <Link href="_esports_team-gallery-album.html">
                              Single Album
                            </Link>
                          </li>
                        </ul>
                        <ul className="col-lg-4 col-md-4 col-12 main-nav__ul main-nav__ul-2cols">
                          <li className="main-nav__title main-nav-banner  main-nav-banner--img-3">
                            <Link href="/" className="main-nav-banner__link">
                              <span className="main-nav-banner__subtitle"></span>
                              <span className="main-nav-banner__title">
                                Unaffiliated
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link href="_esports_team-overview.html">
                              Team Overview
                            </Link>
                          </li>
                          <li>
                            <Link href="_esports_team-roster.html">
                              Team Roster
                            </Link>
                          </li>
                          <li>
                            <Link href="_esports_team-standings.html">
                              Team Standings
                            </Link>
                          </li>
                          <li>
                            <Link href="_esports_team-last-results.html">
                              Latest Results
                            </Link>
                          </li>
                          <li>
                            <Link href="_esports_team-schedule.html">
                              Next Matches
                            </Link>
                          </li>
                          <li>
                            <Link href="_esports_team-gallery.html">
                              Team Gallery
                            </Link>
                          </li>
                          <li>
                            <Link href="_esports_team-gallery-album.html">
                              Team Album
                            </Link>
                          </li>
                          <li>
                            <Link href="_esports_team-videos.html">
                              Team Videos
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* <!-- Mega Menu / End --> */}
                  </li>
                </ul>
              </nav>
              {/* <!-- Main Navigation / End --> */}

              <div className="header__primary-spacer"></div>

              {/* <!-- Header Search Form --> */}
              {/* <div className="header-search-form ">
              <form action="#" id="mobile-search-form" className="search-form">
                <input
                  type="text"
                  className="form-control header-mobile__search-control"
                  value=""
                  placeholder="Enter your search here..."
                />
                <button type="submit" className="header-mobile__search-submit">
                  <i className="fas fa-search"></i>
                </button>
              </form>
            </div> */}
              {/* <!-- Header Search Form / End --> */}

              {/* <!-- Header Info Block --> */}
              <ul className="info-block info-block--header">
                <li className="info-block__item info-block__item--shopping-cart js-info-block__item--onclick">
                  <Link
                    href="_esports_shop-cart.html"
                    className="info-block__link-wrapper"
                  >
                    <svg role="img" className="df-icon df-icon--shopping-cart">
                      {/* <use xLink:href="assets/images/esports/icons-esports.svg#cart"/> */}
                    </svg>
                    <h6 className="info-block__heading">Your Bag (8 items)</h6>
                    <span className="info-block__cart-sum">$256,30</span>
                  </Link>

                  {/* <!-- Dropdown Shopping Cart --> */}
                  <ul className="header-cart header-cart--inventory">
                    <li className="header-cart__item header-cart__item--title">
                      <h5>Bag Inventory</h5>
                    </li>

                    <li className="header-cart__item">
                      <figure className="header-cart__product-thumb">
                        <Link href="_esports_shop-product.html">
                          <img
                            src="assets/images/esports/samples/cart-sm-1.jpg"
                            alt="Jaxxy Framed Art Print"
                          />
                        </Link>
                      </figure>
                      <div className="header-cart__badges">
                        <span className="badge badge-primary">2</span>
                        <span className="badge badge-default badge-close">
                          <i className="fas fa-times"></i>
                        </span>
                      </div>
                    </li>
                    <li className="header-cart__item">
                      <figure className="header-cart__product-thumb">
                        <Link href="_esports_shop-product.html">
                          <img
                            src="assets/images/esports/samples/cart-sm-2.jpg"
                            alt="Tech Warrior Framed Art Print"
                          />
                        </Link>
                      </figure>
                      <div className="header-cart__badges">
                        <span className="badge badge-primary">4</span>
                        <span className="badge badge-default badge-close">
                          <i className="fas fa-times"></i>
                        </span>
                      </div>
                    </li>
                    <li className="header-cart__item">
                      <figure className="header-cart__product-thumb">
                        <Link href="_esports_shop-product.html">
                          <img
                            src="assets/images/esports/samples/cart-sm-3.jpg"
                            alt="Idaho Esports White Mug"
                          />
                        </Link>
                      </figure>
                      <div className="header-cart__badges">
                        <span className="badge badge-default badge-close">
                          <i className="fas fa-times"></i>
                        </span>
                      </div>
                    </li>
                    <li className="header-cart__item">
                      <figure className="header-cart__product-thumb">
                        <Link href="_esports_shop-product.html">
                          <img
                            src="assets/images/esports/samples/cart-sm-4.jpg"
                            alt="Mercenaries Framed Art Print"
                          />
                        </Link>
                      </figure>
                      <div className="header-cart__badges">
                        <span className="badge badge-default badge-close">
                          <i className="fas fa-times"></i>
                        </span>
                      </div>
                    </li>

                    <li className="header-cart__item">
                      <figure className="header-cart__product-thumb"></figure>
                    </li>
                    <li className="header-cart__item">
                      <figure className="header-cart__product-thumb"></figure>
                    </li>
                    <li className="header-cart__item">
                      <figure className="header-cart__product-thumb"></figure>
                    </li>
                    <li className="header-cart__item">
                      <figure className="header-cart__product-thumb"></figure>
                    </li>
                    <li className="header-cart__item">
                      <figure className="header-cart__product-thumb"></figure>
                    </li>

                    <li className="header-cart__item header-cart__item--subtotal">
                      <span className="header-cart__subtotal">
                        Inventory Subtotal
                      </span>
                      <span className="header-cart__subtotal-sum">$256.30</span>
                    </li>
                    <li className="header-cart__item header-cart__item--action">
                      <Link
                        href="_esports_shop-cart.html"
                        className="btn btn-primary-inverse btn-block"
                      >
                        Go to Shopping Cart
                      </Link>
                      <Link
                        href="_esports_shop-checkout.html"
                        className="btn btn-primary btn-block"
                      >
                        Proceed to Checkout
                      </Link>
                    </li>
                  </ul>
                  {/* <!-- Dropdown Shopping Cart / End --> */}
                </li>
              </ul>
              {/* <!-- Header Info Block / End --> */}
            </div>
          </div>
        </div>
        {/* <!-- Header Primary / End --> */}
      </header>
      {/* <!-- Header / End --> */}
      <div className="page-heading page-heading--horizontal effect-duotone effect-duotone--primary">
        <div className="container">
          <div className="row">
            <div className="col align-self-start">
              <h1 className="page-heading__title">
                {part1} <span className="highlight">{part2}</span>
              </h1>
            </div>
            <div className="col align-self-end">
              <ol className="page-heading__breadcrumb breadcrumb font-italic">
                <Breadcrumb />
              </ol>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
