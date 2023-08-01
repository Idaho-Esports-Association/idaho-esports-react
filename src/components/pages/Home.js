import React from "react";
import HeroSection from "..//elements/HeroSection";
import PostWidget from "..//elements/widgets/PostWidget";
import MarqueeArea from "..//elements/Marquee";
import Result from "..//elements/Results";
import TwitchWidget from "..//elements//widgets/TwitchWidget";
import SocialCounter from "../elements/buttons/SocialCounter";

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
