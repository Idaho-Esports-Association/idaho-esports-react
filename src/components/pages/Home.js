import React from "react";
import HeroSection from "../HeroSection";
import PostWidget from "../PostWidget";
import Marquee from "../Marquee";
import Result from "../Results";
import TwitchWidget from "../TwitchWidget";

function Home() {
  return (
    <>
      <HeroSection />
      <div className="site-content">
        <div className="container">
          <Marquee />
          <div className="row">
            <div className="content col-lg-8">
              {/* Post Grid 1 */}
              <div className="posts posts--tile posts--tile-alt post-grid row">
                <PostWidget
                  size="6"
                  category="4"
                  image="https://picsum.photos/400"
                  alt="test"
                  link="_esports_blog-post-1.html"
                  categoryTitle="Xenowatch"
                  title="The Idaho Esports reach to the Xenowatch finals"
                  date="August 27th, 2018"
                  excerpt="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do..."
                  authorImage="assets/images/esports/samples/avatar-12-xs.jpg"
                  author="Erick Rodgers"
                  views="2369"
                  likes="530"
                  commentCount="18"
                />
                <PostWidget
                  size="6"
                  category="2"
                  image="https://picsum.photos/400"
                  alt="testing"
                  link="_esports_blog-post-1.html"
                  categoryTitle="L.O. Heroes"
                  title="The new hero is coming to the league"
                  date="August 27th, 2018"
                  excerpt="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do..."
                  authorImage="assets/images/esports/samples/avatar-12-xs.jpg"
                  author="Lagertha Dax"
                  views="2369"
                  likes="530"
                  commentCount="18"
                />
                <PostWidget
                  size="6"
                  category="1"
                  image="https://picsum.photos/400"
                  alt="tester"
                  link="_esports_blog-post-1.html"
                  categoryTitle="The Team"
                  title="The Team defeated the L.A. Pirates 2-1 in the Pro League Quarterfinals"
                  date="July 28th, 2018"
                  excerpt="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do..."
                  authorImage="assets/images/esports/samples/avatar-12-xs.jpg"
                  author="Lagertha Dax"
                  views="2369"
                  likes="530"
                  commentCount="18"
                />
                <PostWidget
                  size="6"
                  category="4"
                  image="https://picsum.photos/400"
                  alt="test"
                  categoryTitle="Xenowatch"
                  title="Xenowatch&#x27;s new patch will fix the faces bugs"
                  date="July 24th, 2018"
                  excerpt="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do..."
                  authorImage="assets/images/esports/samples/avatar-12-xs.jpg"
                  author="Lagertha Dax"
                  views="2369"
                  likes="530"
                  commentCount="18"
                />
                <PostWidget
                  size="6"
                  category="2"
                  image="https://picsum.photos/400"
                  alt="test"
                  categoryTitle="L.O. Heroes"
                  title="A new class is added to the human&#x27;s race"
                  date="July 16th, 2018"
                  excerpt="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do..."
                  authorImage="assets/images/esports/samples/avatar-12-xs.jpg"
                  author="Lagertha Dax"
                  views="2369"
                  likes="530"
                  commentCount="18"
                />
                <PostWidget
                  size="6"
                  category="1"
                  image="https://picsum.photos/400"
                  alt="test"
                  categoryTitle="The Team"
                  title='The Idaho Esports welcome "Logan-X" to the team'
                  date="June 3rd, 2018"
                  excerpt="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do..."
                  authorImage="assets/images/esports/samples/avatar-12-xs.jpg"
                  author="Eric Rodgers"
                  views="2369"
                  likes="530"
                  commentCount="18"
                />
                <PostWidget
                  size="6"
                  category="1"
                  image="https://picsum.photos/400"
                  alt="test"
                  categoryTitle="The Team"
                  title="Kelly_Spiegel9 joins the Xenowatch team"
                  date="May 15th, 2018"
                  excerpt="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do..."
                  authorImage="assets/images/esports/samples/avatar-12-xs.jpg"
                  author="Eric Rodgers"
                  views="2369"
                  likes="530"
                  commentCount="18"
                />
              </div>
            </div>
            <div className="sidebar col-lg-4">
              <aside className="widget widget--sidebar widget-social widget-social--buttons">
                <a
                  href="/" 
                  className="btn-social-counter btn-social-counter--facebook"
                  target="_blank"
                >
                  <div className="btn-social-counter__icon">
                    <i className="fab fa-facebook"></i>
                  </div>
                  <h6 className="btn-social-counter__title">
                    Like Our Facebook Page
                  </h6>
                  <span className="btn-social-counter__count">
                    <span className="btn-social-counter__count-num"></span>
                    Likes
                  </span>
                  <span className="btn-social-counter__add-icon"></span>
                </a>
                <a
                  href="/" 
                  className="btn-social-counter btn-social-counter--twitter"
                  target="_blank"
                >
                  <div className="btn-social-counter__icon">
                    <i className="fab fa-twitter"></i>
                  </div>
                  <h6 className="btn-social-counter__title">
                    Follow Us on Twitter
                  </h6>
                  <span className="btn-social-counter__count">
                    <span className="btn-social-counter__count-num"></span>
                    Followers
                  </span>
                  <span className="btn-social-counter__add-icon"></span>
                </a>
                <a
                  href="/" 
                  className="btn-social-counter btn-social-counter--twitch"
                  target="_blank"
                >
                  <div className="btn-social-counter__icon">
                    <i className="fab fa-twitch"></i>
                  </div>
                  <h6 className="btn-social-counter__title">
                    Follow Us on Twitch
                  </h6>
                  <span className="btn-social-counter__count">
                    <span className="btn-social-counter__count-num"></span>
                    Subs
                  </span>
                  <span className="btn-social-counter__add-icon"></span>
                </a>
                <a
                  href="/" 
                  className="btn-social-counter btn-social-counter--youtube"
                  target="_blank"
                >
                  <div className="btn-social-counter__icon">
                    <i className="fab fa-youtube"></i>
                  </div>
                  <h6 className="btn-social-counter__title">
                    Follow Us on YouTube
                  </h6>
                  <span className="btn-social-counter__count">
                    <span className="btn-social-counter__count-num"></span>
                    Subs
                  </span>
                  <span className="btn-social-counter__add-icon"></span>
                </a>
                <a
                  href="/" 
                  className="btn-social-counter btn-social-counter--rss"
                  target="_blank"
                >
                  <div className="btn-social-counter__icon">
                    <i className="fas fa-rss"></i>
                  </div>
                  <h6 className="btn-social-counter__title">
                    Subscribe to Our RSS
                  </h6>
                  <span className="btn-social-counter__count">
                    <span className="btn-social-counter__count-num">840</span>
                    Subs
                  </span>
                  <span className="btn-social-counter__add-icon"></span>
                </a>
                <a
                  href="/" 
                  className="btn-social-counter btn-social-counter--instagram"
                  target="_blank"
                >
                  <div className="btn-social-counter__icon">
                    <i className="fab fa-instagram"></i>
                  </div>
                  <h6 className="btn-social-counter__title">
                    Follow Us on Instagram
                  </h6>
                  <span className="btn-social-counter__count">
                    <span className="btn-social-counter__count-num"></span>
                    Followers
                  </span>
                  <span className="btn-social-counter__add-icon"></span>
                </a>
              </aside>
              {/* Latest results and all results */}
              <aside className="widget card widget--sidebar widget-results">
                <div className="widget__title card__header card__header--has-btn">
                  <h4>Latest Results</h4>
                  <a
                    href="/" 
                    className="btn btn-default btn-xs card-header__button"
                  >
                    See Full Results
                  </a>
                </div>
                <div className="widget__content card__content">
                  <dl className="widget-results__dl">
                    <Result gameType="Xenowatch" categoryNumber="4" />
                    <dt className="widget-results__dt widget-results__dt--category-2">
                      League of Heroes
                    </dt>
                    <dd className="widget-results__dd">
                      <ul className="widget-results__list">
                        <li className="widget-results__item">
                          <div className="widget-results__header justify-content-between">
                            <div className="widget-results__league">
                              Heroes Razz Tournament
                            </div>
                            <div className="widget-results__title">
                              Saturday, March 6th
                            </div>
                          </div>
                          <div className="widget-results__content">
                            <div className="widget-results__team widget-results__team--first">
                              <figure className="widget-results__team-logo">
                                <img
                                  src="assets/images/esports/logos/alchemists-22x25.png"
                                  alt=""
                                />
                              </figure>
                              <div className="widget-results__team-details">
                                <h5 className="widget-results__team-name">
                                  Idaho Esports
                                </h5>
                                <span className="widget-results__team-info">
                                  United States
                                </span>
                              </div>
                            </div>
                            <div className="widget-results__result">
                              <div className="widget-results__score">
                                <span className="widget-results__score-loser">
                                  15
                                </span>
                                -
                                <span className="widget-results__score-winner">
                                  21
                                </span>
                              </div>
                            </div>
                            <div className="widget-results__team widget-results__team--second">
                              <figure className="widget-results__team-logo">
                                <img
                                  src="assets/images/samples/logos/sharks_shield.png"
                                  alt=""
                                />
                              </figure>
                              <div className="widget-results__team-details">
                                <h5 className="widget-results__team-name">
                                  Sharks
                                </h5>
                                <span className="widget-results__team-info">
                                  South Korea
                                </span>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </dd>
                    <dt className="widget-results__dt widget-results__dt--category-3">
                      Striker GO
                    </dt>
                    <dd className="widget-results__dd">
                      <ul className="widget-results__list">
                        <li className="widget-results__item">
                          <div className="widget-results__header justify-content-between">
                            <div className="widget-results__league">
                              Pro League Quarter-Finals
                            </div>
                            <div className="widget-results__title">
                              Friday, April 26th
                            </div>
                          </div>
                          <div className="widget-results__content">
                            <div className="widget-results__team widget-results__team--first">
                              <figure className="widget-results__team-logo">
                                <img
                                  src="assets/images/esports/logos/alchemists-22x25.png"
                                  alt=""
                                />
                              </figure>
                              <div className="widget-results__team-details">
                                <h5 className="widget-results__team-name">
                                  Idaho Esports
                                </h5>
                                <span className="widget-results__team-info">
                                  United States
                                </span>
                              </div>
                            </div>
                            <div className="widget-results__result">
                              <div className="widget-results__score">
                                <span className="widget-results__score-winner">
                                  3
                                </span>
                                -
                                <span className="widget-results__score-loser">
                                  2
                                </span>
                              </div>
                            </div>
                            <div className="widget-results__team widget-results__team--second">
                              <figure className="widget-results__team-logo">
                                <img
                                  src="assets/images/samples/logos/pirates_shield.png"
                                  alt=""
                                />
                              </figure>
                              <div className="widget-results__team-details">
                                <h5 className="widget-results__team-name">
                                  L.A. Pirates
                                </h5>
                                <span className="widget-results__team-info">
                                  United States
                                </span>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </dd>
                  </dl>
                </div>
              </aside>
              <aside className="widget widget--sidebar widget-twitch">
                <div className="twitch-streams">
                  {/* <!-- Stream #0 --> */}
                  <TwitchWidget
                    isFeatured={true}
                    streamStatus="Online"
                    streamStartTime={null}
                    streamerImage="assets/images/esports/samples/twitch-streamer-4.png"
                    streamerName="Datrix"
                    streamTitle="Destroy Plays Xenowatch"
                    streamDetail="Joined by Kelly and Saki"
                    link="#"

                  />
                  <TwitchWidget
                    isFeatured={false}
                    streamStatus="Online"
                    streamStartTime={null}
                    streamerImage="assets/images/esports/samples/twitch-streamer-2.png"
                    streamerName="Datrix"
                    streamTitle="Assassins League Gameplay"
                    streamDetail="We start the adventure mode!"
                    link="#"

                  />
                    <TwitchWidget
                    isFeatured={false}
                    streamStatus="Offline"
                    streamStartTime="July 23, 2023 21:00:00"
                    streamerImage="assets/images/esports/samples/twitch-streamer-3.png"
                    streamerName="Datrix"
                    streamTitle="League of Heroes: Ether Quest"
                    streamDetail="I’m gonna take the hardest quest"
                    link="#"

                  />
                  <TwitchWidget
                    isFeatured={false}
                    streamStatus="Offline"
                    streamStartTime={null}
                    streamerImage="assets/images/esports/samples/twitch-streamer-4.png"
                    streamerName="Datrix"
                    streamTitle="The Game Huntress&#x27;s Channel"
                    streamDetail="Join me to hunt them all!"
                    link="#"
                  />
                  
                </div>
              </aside>
              {/* <!-- Widget: Twitch Streams / End --> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
