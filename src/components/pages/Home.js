import React from "react";
import HeroSection from "..//elements/HeroSection";
import PostWidget from "..//elements/widgets/PostWidget";
import MarqueeArea from "..//elements/Marquee";
import Result from "..//elements/Results";
import TwitchWidget from "..//elements//widgets/TwitchWidget";
import SocialCounter from "../elements/buttons/SocialCounter";
import GameResultWidget from "../elements/widgets/GameResultWidget";
import CalendarWidget from "../elements/widgets/CalendarWidget";
import MatchAnnouncement from "../elements/widgets/MatchAnnouncementWidget";

function Home() {
  const results = [
    {
      gameid: "1",
      gametype: "Xenowatch",
      team1score: "9",
      team2score: "4",
      team1logo: "assets/images/esports/logos/alchemists-22x25.png",
      team1name: "Idaho Esports",
      team1city: "United States",
      team2logo: "assets/images/samples/logos/icarus_wings_shield.png",
      team2name: "Icarus Wings",
      team2city: "Portugal",
      competitionseries: "L.O. Heroes Cup Qualifiers",
      competitiondate: "Tuesday, March 18th",
    },
    {
      gameid: "2",
      gametype: "League of Heroes",
      team1score: "9",
      team2score: "4",
      team1logo: "assets/images/esports/logos/alchemists-22x25.png",
      team1name: "Idaho Esports",
      team1city: "United States",
      team2logo: "assets/images/samples/logos/icarus_wings_shield.png",
      team2name: "Icarus Wings",
      team2city: "Portugal",
      competitionseries: "L.O. Heroes Cup Qualifiers",
      competitiondate: "Tuesday, March 18th",
    },
    {
      gameid: "3",
      gametype: "League of Heroes",
      competitionseries: "Heroes Razz Tournament",
      competitiondate: "Saturday, March 6th",
      team1logo: "assets/images/esports/logos/alchemists-22x25.png",
      team1name: "Idaho Esports",
      team1city: "United States",
      team1score: 15,
      team2score: 21,
      team2logo: "assets/images/samples/logos/sharks_shield.png",
      team2name: "Sharks",
      team2city: "South Korea",
    },
    {
      gameid: "4",
      gametype: "Striker GO",
      competitionseries: "Pro League Quarter-Finals",
      competitiondate: "Friday, April 26th",
      team1logo: "assets/images/esports/logos/alchemists-22x25.png",
      team1name: "Idaho Esports",
      team1city: "United States",
      team1score: 3,
      team2score: 2,
      team2logo: "assets/images/samples/logos/pirates_shield.png",
      team2name: "L.A. Pirates",
      team2city: "United States",
    },
  ];
  const stories = [
    {
      size: "6",
      category: "4",
      image: "https://picsum.photos/400",
      alt: "test",
      link: "_esports_blog-post-1.html",
      categoryTitle: "Xenowatch",
      title: "The Idaho Esports reach to the Xenowatch finals",
      date: "August 27th, 2018",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do...",
      authorImage: "assets/images/esports/samples/avatar-12-xs.jpg",
      author: "Erick Rodgers",
      views: "2369",
      likes: "530",
      commentCount: "18",
    },
    {
      size: "6",
      category: "2",
      image: "https://picsum.photos/400",
      alt: "testing",
      link: "_esports_blog-post-1.html",
      categoryTitle: "L.O. Heroes",
      title: "The new hero is coming to the league",
      date: "August 27th, 2018",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do...",
      authorImage: "assets/images/esports/samples/avatar-12-xs.jpg",
      author: "Lagertha Dax",
      views: "2369",
      likes: "530",
      commentCount: "18",
    },
    {
      size: "6",
      category: "1",
      image: "https://picsum.photos/400",
      alt: "tester",
      link: "_esports_blog-post-1.html",
      categoryTitle: "The Team",
      title:
        "The Team defeated the L.A. Pirates 2-1 in the Pro League Quarterfinals",
      date: "July 28th, 2018",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do...",
      authorImage: "assets/images/esports/samples/avatar-12-xs.jpg",
      author: "Lagertha Dax",
      views: "2369",
      likes: "530",
      commentCount: "18",
    },
    {
      size: "6",
      category: "4",
      image: "https://picsum.photos/400",
      alt: "test",
      categoryTitle: "Xenowatch",
      title: "Xenowatch&#x27;s new patch will fix the faces bugs",
      date: "July 24th, 2018",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do...",
      authorImage: "assets/images/esports/samples/avatar-12-xs.jpg",
      author: "Lagertha Dax",
      views: "2369",
      likes: "530",
      commentCount: "18",
    },
    {
      size: "6",
      category: "2",
      image: "https://picsum.photos/400",
      alt: "test",
      categoryTitle: "L.O. Heroes",
      title: "A new class is added to the human&#x27;s race",
      date: "July 16th, 2018",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do...",
      authorImage: "assets/images/esports/samples/avatar-12-xs.jpg",
      author: "Lagertha Dax",
      views: "2369",
      likes: "530",
      commentCount: "18",
    },
    {
      size: "6",
      category: "1",
      image: "https://picsum.photos/400",
      alt: "test",
      categoryTitle: "The Team",
      title: 'The Idaho Esports welcome "Logan-X" to the team',
      date: "June 3rd, 2018",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do...",
      authorImage: "assets/images/esports/samples/avatar-12-xs.jpg",
      author: "Eric Rodgers",
      views: "2369",
      likes: "530",
      commentCount: "18",
    },
    {
      size: "6",
      category: "1",
      image: "https://picsum.photos/400",
      alt: "test",
      categoryTitle: "The Team",
      title: "Kelly_Spiegel9 joins the Xenowatch team",
      date: "May 15th, 2018",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do...",
      authorImage: "assets/images/esports/samples/avatar-12-xs.jpg",
      author: "Eric Rodgers",
      views: "2369",
      likes: "530",
      commentCount: "18",
    },
  ];
  return (
    <>
      <HeroSection />
      <div className="site-content">
        <div className="container">
          <MarqueeArea />
          <div className="row">
            <div className="content col-lg-8">
              {/* Post Grid 1 */}
              <div className="posts posts--tile posts--tile-alt post-grid row">
                <PostWidget stories={stories} />
              </div>
            </div>
            <div className="sidebar col-lg-4">
              <aside className="widget widget--sidebar widget-social widget-social--buttons">
                <SocialCounter />
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
                    <Result results={results} />
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
                    streamStartTime="2023-08-03T21:00"
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
              <aside className="widget card widget--sidebar widget-game-result">
                <div className="widget__title card__header card__header--has-btn">
                  <h4>Last Game Result</h4>
                  <a
                    href="#"
                    className="btn btn-default btn-xs card-header__button"
                  >
                    See All Results
                  </a>
                </div>
                <div className="widget__content card__content">
                  <GameResultWidget
                    gameid="1"
                    gameTitle="Striker Go"
                    gameDate="Friday, April 26th"
                    competitionTitle="Pro League - World Championship"
                    competitionRound="Quarter-Finals"
                    team1Logo="assets/images/esports/logos/alchemists-22x25.png"
                    team1Name="Idaho Esports"
                    team1City="United States"
                    team1Score="2"
                    team2Logo="assets/images/samples/logos/pirates_shield.png"
                    team2Name="L.A. Pirates"
                    team2City="United States"
                    team2Score="1"
                    team1Kills="56"
                    team1Deaths="23"
                    team1Assists="14"
                    team1Pentakills="19"
                    team2Kills="40"
                    team2Deaths="38"
                    team2Assists="6"
                    team2Pentakills="12"
                    mvpName="Destory Spiegel"
                    mvpTeam="Idaho Esports"
                    mvpKills="37"
                    mvpDeaths="2"
                    mvpAssists="9"
                    mvpPentakills="13"
                  />
                </div>
              </aside>
              <aside className="widget card card--no-paddings widget--sidebar widget-event-calendar">
                <div className="widget__title card__header">
                  <h4>Events Calendar</h4>
                </div>
                <div className="widget__content card__content">
                  <div className="alc-event-calendar">
                    <CalendarWidget/>
                    <table className="table">
                      <caption>
                        <span className="alc-event-calendar__caption-inner">
                          <span className="alc-event-calendar__caption-nav alc-event-calendar__caption-nav--prev">
                            <a
                              href="#"
                              className="alc-event-calendar__caption-nav-link"
                            ></a>
                          </span>
                          <span className="alc-event-calendar__caption-title">
                            November 2018
                          </span>
                          <span className="alc-event-calendar__caption-nav alc-event-calendar__caption-nav--next">
                            <a
                              href="#"
                              className="alc-event-calendar__caption-nav-link"
                            ></a>
                          </span>
                        </span>
                      </caption>
                      <thead>
                        <tr>
                          <th data-weekday-abbr="Mon">
                            <span className="weekday">Mo</span>
                          </th>
                          <th data-weekday-abbr="Tue">
                            <span className="weekday">Tu</span>
                          </th>
                          <th data-weekday-abbr="Wed">
                            <span className="weekday">We</span>
                          </th>
                          <th data-weekday-abbr="Thu">
                            <span className="weekday">Th</span>
                          </th>
                          <th data-weekday-abbr="Fri">
                            <span className="weekday">Fr</span>
                          </th>
                          <th data-weekday-abbr="Sat">
                            <span className="weekday">Sa</span>
                          </th>
                          <th data-weekday-abbr="Sun">
                            <span className="weekday">Su</span>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <span className="day day--muted">28</span>
                          </td>
                          <td>
                            <span className="day day--muted">29</span>
                          </td>
                          <td>
                            <span className="day day--muted">30</span>
                          </td>
                          <td>
                            <span className="day day--muted">31</span>
                          </td>
                          <td>
                            <span className="day">1</span>
                          </td>
                          <td>
                            <span className="day">2</span>
                          </td>
                          <td>
                            <span className="day">3</span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span className="day">4</span>
                          </td>
                          <td>
                            <span className="day">5</span>
                          </td>
                          <td>
                            <span className="day">6</span>
                          </td>
                          <td>
                            <span className="day">7</span>
                          </td>
                          <td>
                            <span className="day">8</span>
                          </td>
                          <td>
                            <span className="day day--active day--type-1">9</span>
                          </td>
                          <td>
                            <span className="day">10</span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span className="day">11</span>
                          </td>
                          <td>
                            <span className="day">12</span>
                          </td>
                          <td>
                            <span className="day">13</span>
                          </td>
                          <td>
                            <span className="day">14</span>
                          </td>
                          <td>
                            <span className="day">15</span>
                          </td>
                          <td>
                            <span className="day">16</span>
                          </td>
                          <td>
                            <span className="day">17</span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span className="day">18</span>
                          </td>
                          <td>
                            <span className="day">19</span>
                          </td>
                          <td>
                            <span className="day day--active day--type-4">20</span>
                          </td>
                          <td>
                            <span className="day">21</span>
                          </td>
                          <td>
                            <span className="day">22</span>
                          </td>
                          <td>
                            <span className="day">23</span>
                          </td>
                          <td>
                            <span className="day">24</span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span className="day">25</span>
                          </td>
                          <td>
                            <span className="day">26</span>
                          </td>
                          <td>
                            <span className="day">27</span>
                          </td>
                          <td>
                            <span className="day">28</span>
                          </td>
                          <td>
                            <span className="day">29</span>
                          </td>
                          <td>
                            <span className="day">30</span>
                          </td>
                          <td>
                            <span className="day day--muted">1</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <ul className="alc-event-list list-unstyled">
                    <li className="alc-event-list__item alc-event-list-item alc-event-list-item--type-1">
                      <div className="alc-event-list-item__header">
                        <time className="alc-event-list-item__date">
                          Friday, September 9th
                        </time>
                      </div>
                      <div className="alc-event-list-item__body">
                        <div className="alc-event-list-item__time">09:00 PM</div>
                        <div className="alc-event-list-item__info">
                          <h6 className="alc-event-list-item__title">
                            <a href="_esports_event-overview-1a.html">
                              Game Huntress "Inktoon 2" Stream
                            </a>
                          </h6>
                          <p className="alc-event-list-item__desc">
                            Join me to play the multiplayer
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="alc-event-list__item alc-event-list-item alc-event-list-item--type-4">
                      <div className="alc-event-list-item__header">
                        <time className="alc-event-list-item__date">
                          Tuesday, September 20th
                        </time>
                      </div>
                      <div className="alc-event-list-item__body">
                        <div className="alc-event-list-item__time">11:00 PM</div>
                        <div className="alc-event-list-item__info">
                          <h6 className="alc-event-list-item__title">
                            <a href="_esports_event-overview-1b.html">
                              Xenowatch Patch 5.6 Update Release
                            </a>
                          </h6>
                          <p className="alc-event-list-item__desc">
                            Bug fixes and a new character!
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </aside>
              <aside class="widget widget--sidebar card widget-preview">
                <div class="widget__title card__header">
                  <h4>Next Match</h4>
                </div>
                <div class="widget__content card__content">
                  <MatchAnnouncement
                  gameTitle="Xenowatch"
                  gameSpecificDate="Thursday, August 3rd"
                  gameSpecificTime="21:00"
                  seriesTitle="Xeno League"
                  seriesMatch="Semifinals"
                  team1Logo="assets/images/esports/logos/alchemists-22x25.png"
                  team1Name="Idaho Esports"
                  team1City="United States"
                  team2Logo="assets/images/samples/logos/icarus_wings_shield.png"
                  team2Name="Icarus Wings"
                  team2City="Portugal"
                  gameDateTime="2023-08-03T21:00"
                  />
                  
                  </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
