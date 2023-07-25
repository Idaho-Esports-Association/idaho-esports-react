export function ApexRules() {
  return (
    <>
      <h4 className="pb-4">Team Distribution</h4>
      <p>
        At the beginning of the season, all Varsity teams will be distributed
        evenly into groups of 10 depending on total teams register. This is to
        ensure that each group will have at least 15 teams. Distribution will be
        based on previous seasons rank (in the event of no previous season rank,
        effected teams will be randomly distributed). Distribution will be as
        follows (Example of 40 competing teams):
      </p>
      <table className="table--lg table-bordered table-thead-color table__cell-center">
        <thead>
          <tr>
            <th>Group A</th>
            <th>Group B</th>
            <th>Group C</th>
            <th>Group D</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
          </tr>
          <tr>
            <td>5</td>
            <td>6</td>
            <td>7</td>
            <td>8</td>
          </tr>
          <tr>
            <td>9</td>
            <td>10</td>
            <td>11</td>
            <td>12</td>
          </tr>
          <tr>
            <td>13</td>
            <td>14</td>
            <td>15</td>
            <td>16</td>
          </tr>
          <tr>
            <td>17</td>
            <td>18</td>
            <td>19</td>
            <td>20</td>
          </tr>
          <tr>
            <td>21</td>
            <td>22</td>
            <td>23</td>
            <td>24</td>
          </tr>
          <tr>
            <td>25</td>
            <td>26</td>
            <td>27</td>
            <td>28</td>
          </tr>
          <tr>
            <td>29</td>
            <td>30</td>
            <td>31</td>
            <td>32</td>
          </tr>
          <tr>
            <td>33</td>
            <td>34</td>
            <td>35</td>
            <td>36</td>
          </tr>
          <tr>
            <td>37</td>
            <td>38</td>
            <td>39</td>
            <td>40</td>
          </tr>
        </tbody>
      </table>

      <h4>Matchups</h4>
      <p>
        Each Group will play each other in a round robin format during the
        season. The rotation will follow a structure similar to described:
      </p>
      <ul>
        <li>Week 1: A vs B, C vs D</li>
        <li>Week 2: A vs C, B vs D</li>
        <li>Week 3: A vs D, B vs C</li>
        <li>Week 4: A vs B, C vs D</li>
        <li>Week 5: A vs C, B vs D</li>
        <li>Week 6: A vs D, B vs C</li>
        <li>Week 7: A vs B, C vs D</li>
        <li>Week 8: A vs C, B vs D</li>
      </ul>

      <h4>Scoring</h4>
      <p>
        The season will be an eight (8) week long season with points from each
        week accumulating to determine playoff standing. Scoring will determine
        standings for the State Qualifier. Any tournament hosted during the
        regular season will not factor into the season point accumulation. Point
        Values are as follows:
      </p>
      <table className="table--lg table-bordered table-thead-color table__cell-center table-hover">
        <thead>
          <tr>
            <th>Placement</th>
            <th>Point Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>12</td>
          </tr>
          <tr>
            <td>2</td>
            <td>9</td>
          </tr>
          <tr>
            <td>3</td>
            <td>7</td>
          </tr>
          <tr>
            <td>4</td>
            <td>5</td>
          </tr>
          <tr>
            <td>5</td>
            <td>4</td>
          </tr>
          <tr>
            <td>6-7</td>
            <td>3</td>
          </tr>
          <tr>
            <td>8-10</td>
            <td>2</td>
          </tr>
          <tr>
            <td>11-15</td>
            <td>1</td>
          </tr>
          <tr>
            <td>16-20</td>
            <td>0</td>
          </tr>
        </tbody>
      </table>
      <p>1 point per kill</p>
      <p>
        If a Team misses a match (no Competitors from the Team competed in the
        match), then the Team receives a Match Score of zero (0) for that match.
      </p>
      <p>
        At the end of each round or match series, a Team’s total points will
        include the Team’s Match Scores for all matches in that round or match
        series (“Round Score”).
      </p>
      <p>
        Reporting the score will be distinct to clarify point totals. Each
        report will separate Placement Points and KP.
      </p>
      <p>
        After the completion of the 8th week series, all week point totals will
        be tallied and the State Qualifier seeding will be based on Team Score
        ranked highest to lowest.Once seeding is finalized, all team point
        totals will be reset to 0 and Advanced Starting Points will be rewarded.
      </p>
      <p>
        In the event there is a tie, Tie break will be determined as Highest
        Average Placement Points &gt; Highest Total Kills &gt; Best Placements
        Total.
      </p>

      <h4 className="pb-4">Game Lobby</h4>
      <p>
        At the beginning of the year, A minimum of 1 and a maximum of 4 host
        schools will be chosen to host matches. Host Schools must have a
        dedicated machine for hosting the lobby. The Host School will create the
        match with the following settings:
      </p>
      <h5 style={{ padding: "0px", margin: "0px" }}>Lobby Settings:</h5>
      <ul className="">
        <li>
          Rename Slots with the appropriate team name according to week
          assignment.{" "}
        </li>
        <li>Game Mode: Battle Royal</li>
        <li>Select a Map: World's Edge or Storm Point (Depending on week)</li>
        <li>Chat: Allow All</li>
        <li>Rename Team: Off</li>
        <li>Self Assign Team: On</li>
        <li>Aim Assist Override: On</li>
        <li>Anonymous Mode: On</li>
        <li>Server: US Oregon</li>
      </ul>
      <h6>
        A lobby must have a minimum Ten (10) teams to begin and can not exceed
        the maximum of 20 teams. Teams do not have to be complete to be counted
        as a “Team”
      </h6>

      <h4>Map Selection</h4>
      <h6>
        The Season will alternate competitive matches based on Current ALGS map
        Pool following the defined rotation.
      </h6>
      <ol>
        <li>Worlds Edge</li>
        <li>Storm Point</li>
        <li>Worlds Edge</li>
        <li>Storm Point</li>
        <li>Worlds Edge</li>
        <li>Storm Point</li>
        <li>Worlds Edge</li>
        <li>Storm Point</li>
      </ol>

      <h4>New maps or Legends or Legend reworks</h4>
      <p>
        New maps or legends will be banned for 2 weeks. This may also apply to
        big legend reworks. Legend and map bans will be communicated via the
        student and admin Discords, the tournament site, and the IEA website.
      </p>
      <h5>Current hero ban</h5>
      <ul>
        <li>None</li>
      </ul>

      <h4>Players</h4>
      <p>
        Players must meet all IEA eligibility rules in order to participate in
        an IEA sanctioned event.
      </p>

      <h4>Equipment</h4>
      <p>
        Players may use a keyboard and mouse, or default-style controllers
        regardless of console. Modified controllers are not allowed.
      </p>

      <h4>Teams</h4>
      <h5>Roster</h5>
      <p>
        Teams must have 3 players on a roster and may have up to 3 substitutes
        in order to register for any IEA sanctioned event. Coaches should have
        the roster up to date 24 hours prior to the match.
      </p>

      <h5>Incomplete Teams</h5>
      <p>
        A team may elect to start a game with fewer than 3 players on the map.
        They must complete the map before the additional players join. The team
        will play with a player down, no bots or random joins are permitted.
      </p>

      <h4>Coaching</h4>
      <p>
        Coaches are allowed as long as they are registered as a coach on the
        team. Coaches are not permitted to play.
      </p>
      <p>
        Coaches are allowed to communicate with their team in the pregame lobby,
        during “legend selection” and during the match up to the moment “Round
        1” begins.{" "}
      </p>
      <p>
        Coaches are permitted to be un-deafened in voice chat, but mic must be
        software muted.
      </p>

      <h4>Stoppage of Play</h4>
      <ul>
        <li>
          In the event any portion of a team is disconnected prior to the start
          of “Round 1” of the match, the Match will be restarted.{" "}
        </li>
        <li>
          If disconnection happens anypoint after the start of “Round 1”, the
          team will be required to play less than a complete team unless the
          player can reconnect to the match before the start of “Round 2”
        </li>
        <li>After “Round 2” begins, players are not allowed to reconnect.</li>
        <li>
          Shortly after a match restart is initiated, a reason must be given to
          the IEA representative acting as referee for the match (i.g: player
          disconnect, ping issues, technical difficulties, ect.)
        </li>
        <li>
          The Host team is responsible for timing their pause (any issues should
          be discussed with the IEA representative)
        </li>
        <li>
          In the case of a player disconnect, after the 5 minutes are used, the
          team must continue the game (less than a complete team)
        </li>
        <li>No subs are allowed to be subbed in the middle of a match.</li>
      </ul>
    </>
  );
}

export function ValorantRules() {
  return (
    <>
      <h4 className="pb-4">Game Lobby</h4>
      <p>
        The Home Team (the team listed on left in the bracket) will create the
        match with the following settings
      </p>
      <h5 style={{ padding: "0px", margin: "0px" }}>Lobby Settings:</h5>
      <ul className="">
        <li>Mode: Standard</li>
        <li>Allow Cheats: Off</li>
        <li>Tournament Mode: On</li>
        <li>Overtime: Win By Two: On</li>
        <li>Play Out All Rounds: Off</li>
      </ul>

      <h4 style={{ padding: "0px", margin: "0px" }}>Map Selection</h4>
      <h5>Regular Season Maps(Based on Official Competitve Pool)</h5>
      <ul>
        <li>Haven</li>
        <li>Ascent</li>
        <li>Icebox</li>
        <li>Fracture</li>
        <li>Pearl</li>
        <li>Split</li>
        <li>Lotus</li>
      </ul>

      <h5>Map Selection Protocol</h5>
      <ol>
        <li>Home bans the first map</li>
        <li>Away bans the second map</li>
        <li>Home picks from remaining list of maps</li>
      </ol>

      <h4>New maps or agents or agent reworks</h4>
      <p>
        New maps or agents will be banned for 2 weeks. This may also apply to
        big agent reworks, agent and map bans will be communicated via the
        student and admin Discords, the tournament site, and the IEA website.
      </p>
      <h5>Current agent ban</h5>
      <ul>
        <li>None</li>
      </ul>

      <h4>Players</h4>
      <p>
        Players must meet all IEA eligibility rules in order to participate in
        an IEA sanctioned event.
      </p>

      <h4>Equipment</h4>
      <p>
        Players may use a keyboard and mouse, or default-style controllers
        regardless of console. Modified controllers are not allowed.
      </p>

      <h4>Teams</h4>
      <h5>Roster</h5>
      <p>
        Teams must have 5 players on a roster and may have up to 5 substitutes
        in order to register for any IEA sanctioned event. Coaches should have
        the roster up to date 24 hours prior to the match.
      </p>

      <h5>Incomplete Teams</h5>
      <p>
        A team may elect to start a game with fewer than 5 players on the map.
        They must complete the map before the additional players join. The team
        will play with a player down, no bots or random joins are permitted.
      </p>

      <h5>Substitution</h5>
      <p>
        Teams may substitute players between maps. The substitute player’s
        Battle.net account must match the roster.
      </p>

      <h4>Spectators</h4>
      <p>
        Each team is allowed 1 spectator, taking the coach slot for the purpose
        of streaming the game to their school account (youtube, twitch, etc).
      </p>
      <p>
        The spectator is not allowed to communicate with the team during the
        matches and are to only use their teams POV or similar.
      </p>
      <p>
        Streams or recordings are to be shared with the opposing team when
        posted.
      </p>

      <h4>Coaching</h4>
      <p>
        Coaches are allowed as long as they are registered as a coach on the
        team. Coaches are not permitted to play.
      </p>
      <p>
        Coaches are not allowed to talk to players during the match. Coaches can
        only communicate with the players before the map starts, during tactical
        timeouts, and between maps.
      </p>
      <p>
        Coaches are permitted to be un-deafened in voice chat, but mic must be
        software muted.
      </p>

      <h4>Stoppage of Play</h4>
      <ul>
        <li>
          Shortly after a pause is initiated, a reason must be given via game
          chat (e.g.: player disconnect, ping issues, technical difficulties,
          etc.).{" "}
        </li>
        <li>
          Each team will have 5 cumulative minutes to pause. When 5 minutes have
          been exhausted, teams are required to continue play. Both teams should
          consider keeping track of time.
        </li>
        <li>
          Each team is responsible for timing their pause (any issues should be
          discussed with the other team and IHSEA Administrators)
        </li>
        <li>
          In the case of a player disconnect, after the 5 minutes are used, the
          team must continue the game (4 v 5)
        </li>
        <li>
          If the player is able to reconnect, the player can rejoin the match.
          It must be the same player with the same battle.net account in the
          same role.
        </li>
      </ul>
    </>
  );
}

export function OverwatchRules() {
  return (
    <>
      <h4 className="pb-4">Match Overview</h4>
      <h5 className="pb-4">Supported Platforms</h5>
      <ul className="">
        <li>PC</li>
        <li>Xbox</li>
        <li>Playstation 4</li>
        <li>Playstation 5</li>
        <li>Nintendo Switch</li>
      </ul>
      <p>
        This competition is cross-platform. All players will face against each
        other regardless of platform.
      </p>
      <h6 className="pb-4">
        Note: All in-person tournaments will be held on PCs with the option for
        players to plug in a compatible controller.
      </h6>

      <h4 className="pb-4">Game Lobby</h4>
      <p>
        The home team will create the lobby (a "non-player" pc should be used
        when available). The away team will select if they would like to take
        red or blue.
      </p>
      <h5 className="pb-4">Lobby Code: VXH5C</h5>
      <h5 style={{ padding: "0px", margin: "0px" }}>Lobby Settings:</h5>
      <ul className="">
        <li>Select Preset: Competitive</li>
        <li>Modes: ALL</li>
        <li>Kill Cam Disabled Modes: ALL</li>
        <li>Game Mode Start: Manual</li>
        <li>
          Max Spectators: 3 (please note the 3rd spectator position is reserved
          for IHSEA Administrators)
        </li>
        <li>Chosen Map enabled, all other maps disabled</li>
      </ul>
      <h6 style={{ padding: "0px", margin: "0px" }}>
        Note: Aim assist will be disabled if the match is hosted in a PC lobby.
        A PC lobby is any lobby that has one or more PC players in it, including
        spectator slots.
      </h6>
      <p>
        In the event an incorrect lobby code is loaded or the settings were
        changed, the match should be stopped and reset. Previously played maps
        with the incorrect format will not count toward the series. The author
        currently should be listed as “Datrix83864”.
      </p>

      <h4 style={{ padding: "0px", margin: "0px" }}>Match Length</h4>
      <h5 style={{ padding: "0px", margin: "0px" }}>Best of Five</h5>
      <p>
        Game 1 will be played using a defined start control map. For games 2-5,
        the loser of the previous map will select the map, following the map
        type order. The process is repeated for each game until one team reaches
        3 map wins.
      </p>
      <h5 style={{ padding: "0px", margin: "0px" }}>Map type order</h5>
      <ol>
        <li>Control (pre-determined)</li>
        <li>Hybrid</li>
        <li>Escort</li>
        <li>Push</li>
        <li>Control</li>
      </ol>
      <h5 style={{ padding: "0px", margin: "0px" }}>Game 1 Control Map</h5>
      <div className="row">
        <div className="col-sm-6 col-xl-3">
          <h6 style={{ padding: "0px", margin: "0px" }}>Week</h6>
          <ol>
            <li>Oasis</li>
            <li>Nepal</li>
            <li>Lijiang Tower</li>
            <li>Ilios</li>
            <li>Oasis</li>
            <li>Nepal</li>
            <li>Lijiang Tower</li>
            <li>Ilios</li>
          </ol>
        </div>
        <div className="col-sm-6 col-xl-3">
          <h6 style={{ padding: "0px", margin: "0px" }}>
            District/State Play-in Round:
          </h6>
          <ol>
            <li>Nepal - Evening</li>
            <li>Lijiang Tower - Night</li>
            <li>Ilios - Morning</li>
          </ol>
        </div>
      </div>

      <h4 style={{ padding: "0px", margin: "0px" }}>Map Pools</h4>
      <div className="row">
        <div className="col-sm-6 col-xl-3">
          <h5>Control</h5>
          <ul>
            <li>Antarctic Peninsula - Night</li>
            <li>Ilios - Morning</li>
            <li>Lijiang Tower - Night</li>
            <li>Nepal - Evening</li>
            <li>Oasis - Evening</li>
          </ul>
        </div>
        <div className="col-sm-6 col-xl-3">
          <h5>Hybrid</h5>
          <ul>
            <li>Blizzard World - Morning</li>
            <li>King’s Row - Evening</li>
            <li>Midtown - Morning</li>
            <li>Numbani - Morning</li>
            <li>Paraiso - Morning</li>
          </ul>
        </div>
        <div className="col-sm-6 col-xl-3">
          <h5>Escort</h5>
          <ul>
            <li>Dorado - Night</li>
            <li>Havana - Night</li>
            <li>Junkertown - Morning</li>
            <li>Circuit Royal - Morning</li>
            <li>Rialto - Morning</li>
            <li>Shambali Monastery- Night</li>
          </ul>
        </div>
        <div className="col-sm-6 col-xl-3">
          <h5>Push</h5>
          <ul>
            <li>New Queen Street - Morning</li>
            <li>Colosseo - Morning</li>
            <li>Esperanca - Morning</li>
          </ul>
        </div>
      </div>

      <h4>New maps or heroes or hero reworks</h4>
      <p>
        New maps or heroes will be banned for 2 weeks. This may also apply to
        big hero reworks, hero and map bans will be communicated via the student
        and admin Discords, the tournament site, and the IEA website.
      </p>
      <h5>Current hero ban</h5>
      <ul>
        <li>None</li>
      </ul>

      <h4>Players</h4>
      <p>
        Players must meet all IEA eligibility rules in order to participate in
        an IEA sanctioned event.
      </p>

      <h4>Equipment</h4>
      <p>
        Players may use a keyboard and mouse, or default-style controllers
        regardless of console. Modified controllers are not allowed.
      </p>

      <h4>Teams</h4>
      <h5>Roster</h5>
      <p>
        Teams must have 5 players on a roster and may have up to 5 substitutes
        in order to register for any IEA sanctioned event. All members of the
        roster must have their Battle.net information available and readily
        seen. Coaches should have the roster up to date 24 hours prior to the
        match.
      </p>

      <h5>Incomplete Teams</h5>
      <p>
        A team may elect to start a game with fewer than 5 players on the map.
        They must complete the map before the additional players join. The team
        will play with a player down, no bots or random joins are permitted.
      </p>

      <h5>Mid-Game Role Swap</h5>
      <p>
        Players cannot switch roles during side switch portions. Players must
        play the same role throughout the entire map. Players may switch roles
        between maps.
      </p>

      <h5>Substitution</h5>
      <p>
        Teams may substitute players between maps. The substitute player’s
        Battle.net account must match the roster.
      </p>

      <h4>Spectators</h4>
      <p>
        Each team is allowed 1 spectator, taking the spectator slot for the
        purpose of streaming the game to their school account (youtube, twitch,
        etc).
      </p>
      <p>
        The spectator is not allowed to communicate with the team during the
        matches and are to only use their teams POV or similar.
      </p>
      <p>
        Streams or recordings are to be shared with the opposing team when
        posted.
      </p>

      <h4>Coaching</h4>
      <p>
        Coaches are allowed as long as they are registered as a coach on the
        team. Coaches are not permitted to play.
      </p>
      <p>
        Coaches are not allowed to talk during active play. Active play includes
        the pre-round protected area.
      </p>
      <p>Coaching is only allowed between rounds.</p>
      <p>
        Coaches are permitted to be un-deafened in voice chat, but mic must be
        software muted.
      </p>

      <h4>Stoppage of Play</h4>
      <p>The game should automatically pause on a player disconnect.</p>
      <ul>
        <li>
          Shortly after a pause is initiated, a reason must be given via game
          chat (e.g.: player disconnect, ping issues, technical difficulties,
          etc.).{" "}
        </li>
        <li>
          Each team will have 5 cumulative minutes to pause. When 5 minutes have
          been exhausted, teams are required to continue play. Both teams should
          consider keeping track of time.
        </li>
        <li>
          Each team is responsible for timing their pause (any issues should be
          discussed with the other team and IHSEA Administrators)
        </li>
        <li>
          In the case of a player disconnect, after the 5 minutes are used, the
          team must continue the game (4 v 5)
        </li>
        <li>
          If the player is able to reconnect, the player can rejoin the match.
          It must be the same player with the same battle.net account in the
          same role.
        </li>
      </ul>
    </>
  );
}

export function SuperSmashRules() {
  return (
    <>
      <h1>Super Smash Bros. Ultimate</h1>

      <p>Update: 4/30/2023</p>

      <h2>
        Overview{" "}
      </h2>

      <ul>
        <li>
          IHSEA’s Super Smash Bros: Ultimate gamestyle is a 5-player Crew-Battle
          League.{" "}
        </li>
        <li>The Series will be operated through Nintendo Switch Online.</li>
      </ul>

      <h2>
        Match Rules
      </h2>

      <ul>
        <li>
          Matches are Best of 2 Sets. If tied after 2 sets, the winner will be
          the team that had the most amount of stocks remaining. If tied on
          stocks remaining, the winner will be determined by a 1 v 1, 3 stock
          battle. Each team elects who competes in their 1 v 1.
        </li>
      </ul>

      <h2>
        Weekly Meet Flow
      </h2>

      <p>For the purposes of this Rules Document, </p>

      <ul>
        <li>
          <span>“</span>
          <span style={{ fontWeight: "700" }}>Match</span>” is defined as the
          battle between the two schools,{" "}
        </li>
        <li>
          <span>“</span>
          <span style={{ fontWeight: "700" }}>Set</span>” is defined as one 5v5
          Crew Battle
        </li>
        <li>
          <span>“</span>
          <span style={{ fontWeight: "700" }}>Game</span>” is defined as a
          battle between two players.{" "}
        </li>
      </ul>

      <p>
        The winner is the school that drops their opponents final stock count to
        zero.
      </p>

      <h2>
        Match Day Flow
      </h2>

      <p>
        In Crew Battles, each school gets a total of 15 stocks (3 per player).
        On match day, the first thing schools will do is choose a map for the
        first set (Map banning rules are below). Then the player each school has
        appointed to the first slot will face off against each other in a three
        stock battle (full arena settings are below). The game is over when one
        player has eliminated all three stocks from the opposing player. The
        winning player then plays against the next player on the opposing
        schools roster.
      </p>

      <p>
        However, at the start of the next game, the returning player must
        self-destruct (SDs) until their starting stocks are equal to the number
        of stocks they ended the previous game with. No damage may be inflicted
        by either player until the SDs have been completed. Players waiting on
        SDs may not use that time to charge specials or make any other move that
        will provide advantage - they should stand still.
      </p>

      <p>
        The game begins when the invincibility wears off on the final entrance,
        both players are standing on their starting position, AND both players
        have “taunted” to indicate that they are ready. A player with a charged
        special is not ready even if they taunt.
      </p>

      <p>
        The returning player MUST choose the same character for the next game.
      </p>

      <p>
        IN THE EVENT THAT THE RETURNING PLAYER SDs TOO MANY TIMES, THE GAME
        STANDS AND PLAY BEGINS (unless BOTH coaches decide to remake).
      </p>

      <p>
        Once a player is eliminated, the crew may choose ANY player that has not
        been eliminated to play next. This continues until all members of one
        Crew have been eliminated, this is the conclusion of the set.
      </p>

      <p>
        At the conclusion of the first set, the stage for the next set is
        chosen.
      </p>

      <p>
        A student may not exchange their character in between games, however, if
        they return for the next set, they may use a different character at that
        point.
      </p>

      <p>
        A team may exchange student-athletes in between sets. However, students
        being exchanged must be reflected in your roster AND comply with the
        rules around students playing on only one crew per week.
      </p>

      <h2>
        Game Rules
      </h2>

      <h3>
        Map Banning Rules
      </h3>

      <p>
        Teams will ban maps from the following list, until a single map is
        selected for the set. The maps from the list below should be played in
        their normal versions without stage hazards.
      </p>

      <h4>
        Official Map List:
      </h4>

      <h5>
        Starter Stages
      </h5>

      <ul>
        <li>Battlefield</li>
        <li>Final Destination</li>
        <li>Town &amp; City</li>
        <li>Pokémon Stadium 2</li>
        <li>Smashville</li>
      </ul>

      <h5>
        Counterpick Stages
      </h5>

      <ul>
        <li>Kalos Pokemon Stadium</li>
        <li>Yoshi’s Story</li>
        <li>Small Battlefield</li>
      </ul>

      <h5>
        Stage Striking
      </h5>

      <ul>
        <li>Definitions</li>
      </ul>

      <ul>
        <li>Set 1:</li>
      </ul>

      <ul>
        <li>P1: Home Player</li>
        <li>P2: Away Player</li>
      </ul>

      <ul>
        <li>Set 2:</li>
      </ul>

      <ul>
        <li>P1: Winning crew of set 1</li>
        <li>P2: Losing crew of set 1</li>
      </ul>

      <ul>
        <li>Strike Order</li>
      </ul>

      <ul>
        <li>First game of each set:</li>
      </ul>

      <ul>
        <li>P1-P2-P2-P1 (P2 chooses from remaining stages)</li>
      </ul>

      <h3>
        Set Setup (Online Play)
      </h3>

      <p>
        The Home team will create the Battle Arena and invite the Away Team,
        with the following
      </p>
      <p>ruleset:</p>

      <ul>
        <li>Stock and time are set to 3 stock and 7 minutes</li>
        <li>Final Smash Meter: Off</li>
        <li>Spirits: Off</li>
        <li>Damage Handicap: Off</li>
        <li>Stage Selection: Anyone</li>
        <li>Items: Off and None</li>
        <li>First to: 1 Win</li>
        <li>Stage Morph: Off</li>
        <li>Stage Hazards: Off</li>
        <li>Launch Rate: 1.0x</li>
        <li>Underdog Boost: Off</li>
        <li>Pausing: Off</li>
        <li>Score Display: Off</li>
        <li>% Show Damage: Yes</li>
        <li>Custom Balance: Off</li>
        <li>Mii Fighters: All moveset combinations are legal</li>
        <li>Type: Anything Goes</li>
        <li>Visibility: Friends</li>
        <li>Format: 1-on-1</li>
        <li>Rotation: Bottom One Leaves</li>
        <li>Max Players: 4</li>
        <li>Custom Stages: Off</li>
        <li>Spirits: Off</li>
        <li>Voice Chat: Off</li>
        <li>Room Music: All</li>
        <li>Password: On</li>
      </ul>

      <p>
        Communicate Arena names and password to the coach before the set begins.
        Max players are set to 4 to allow the 2 competing fighters and 1
        spectator per school (for streaming purposes). Whenever possible,
        minimize the number of players in the arena to reduce lag.
      </p>

      <h3>
        Match Restrictions
      </h3>

      <ul>
        <li>
          Amiibos are not allowed in competitive play, otherwise, all currently
          available DLC fighters are allowed except for Steve. In the event a
          new fighter is introduced mid season, the new fighter will not be
          allowed for a period of 2 weeks after the fighter is released.
        </li>
      </ul>

      <ul>
        <li>
          Mii Fighters ARE allowed in competitive play, but the moveset needs to
          be listed on the roster next to the player’s name who plans on using
          the Mii Fighter and communicated to the opposing team. Finally, before
          a game begins, the Mii player must demonstrate their moveset before
          play starts. When the demonstration is over, both players will “taunt”
          to indicate they are ready and then play can begin.
        </li>
        <li>
          Between matches coaching is allowed for up to two minutes - the use of
          a timer is encouraged.
        </li>
        <li>
          Players are encouraged to cheer and verbally support their team
          members, but may not coach during the set.
        </li>
        <li>
          Bad manners: Players who use excessive bad manners, insults, or such
          related behavior as determined by IHSEA administration will be subject
          to the IHSEA Code of Conduct and reviewed by league administrators to
          determine the consequences of such behavior.
        </li>
        <li>
          Hacking, Ghosting, Stream Cheating: Any type of use of an illegal 3rd
          party program or map hack, stream cheating, or other activity that
          leads to one player gaining an unfair advantage will follow the
          guidelines as laid out in the Expectations Documents, based on the
          offender.
        </li>
        <li>
          Due to the Steve tech issue we have banned Steve in all future events
          until such time as the tech is resolved.
        </li>
      </ul>

      <h3>
        Conflict resolution
      </h3>

      <ul>
        <li>
          IHSEA encourages you to attempt to resolve all conflicts with the
          opposing team
        </li>
        <li>
          If your attempts at resolving the conflict have been unsuccessful,
          please reach out to IHSEA via the network discord to explain your
          situation and we will settle the matter for you.
        </li>
        <li>Have screen shots or replays when possible.</li>
      </ul>

      <ul>
        <li>All IHSEA rulings on disputes are final</li>
      </ul>

      <h2>
        Stoppage of Play
      </h2>

      <ul>
        <li>
          Shortly after a pause is initiated, a reason must be given to the
          IHSEA representative acting as referee for the match (i.g: player
          disconnect, ping issues, technical difficulties, ect.)
        </li>
        <li>
          Each team is responsible for timing their pause (any issues should be
          discussed with ){" "}
        </li>
        <li>No subs are allowed to be subbed in the middle of a set</li>
      </ul>

      <h2>
        Coaching
      </h2>

      <ul>
        <li>
          Coaches: Coaches are allowed as long as they are registered as a coach
          on the team. Coaches are not permitted to play.
        </li>
        <li>Coaches are not allowed to talk during active play</li>
        <li>Coaching is only allowed between matches.</li>
        <li>
          Coaches are permitted to be un-deafened in voice chat, but mic must be
          software muted.
        </li>
      </ul>
    </>
  );
}

export function RocketLeagueRules() {
  return (
    <>
      <h1>Rocket League</h1>

      <p>Update: 4/22/2023</p>

      <h2>
        Overview{" "}
      </h2>

      <ul>
        <li>
          IHSEA Rocket League Challenger Series is a 3-player (minimum), 3-sub
          League (Max 6 Players)
        </li>
        <li>The Series will be cross-platform operating through EPIC IDs.</li>
      </ul>

      <h2>
        Match Length
      </h2>

      <p>Matches will be Best-of-5.</p>

      <h2>
        Match Settings
      </h2>

      <p>
        The Home Team (the team listed on left in the bracket) should create the
        private match.
      </p>
      <p>
        Map choice is always at the discretion of the Home Team. Home team will
        pick from the list of maps below:
      </p>

      <ol start="1">
        <li>Urban Central</li>
        <li>Beckwith Park</li>
        <li>Utopia</li>
        <li>Mannfield</li>
        <li>Neo Tokyo</li>
        <li>Aquadome</li>
        <li>Wasteland</li>
        <li>Champion’s Field</li>
      </ol>

      <p>Settings should be online friendly match standard</p>

      <ul>
        <li>No Mutators and No Bots</li>
        <li>
          All ties should continue into extra time until there is a winning
          team.
        </li>
        <li>5 minutes per match</li>
        <li>All cars are allowed</li>
      </ul>

      <h2>
        Stoppage of Play
      </h2>

      <ul>
        <li>
          Shortly after a pause is initiated, a reason must be given to the
          IHSEA representative acting as a referee for the match (e.g.: player
          disconnect, ping issues, technical difficulties, etc.)
        </li>
        <li>
          Each team will have 5 cumulative minutes to pause. When 5 minutes have
          been exhausted, teams are required to continue playing. Both teams
          should consider keeping track of time.
        </li>
        <li>
          Each team is responsible for timing their pause (any issues should be
          discussed with &nbsp;the other team and IHSEA Administrators){" "}
        </li>
        <li>
          In the case of a player disconnect, after the 5 minutes are used, the
          team must continue the game (2 v 3)
        </li>
        <li>
          If the player is able to reconnect, the player can rejoin the match.
        </li>
        <li>No subs are allowed to be subbed in the middle of a game</li>
      </ul>

      <h2>
        Coaching
      </h2>

      <ul>
        <li>
          Coaches: Coaches are allowed as long as they are registered as a coach
          on the team. Coaches are not permitted to play.
        </li>
        <li>
          Coaches are not allowed to talk during active play while the game
          clock is running.
        </li>
        <li>Coaches are only permitted to talk</li>
      </ul>

      <ul>
        <li>Before first kickoff</li>
        <li>During “Goal Replay”</li>
        <li>After match once post game screen is shown</li>
        <li>Between games</li>
      </ul>

      <ul>
        <li>
          Coaches are permitted to be un-deafened in voice chat, but mic must be
          software muted.
        </li>
      </ul>
    </>
  );
}

export function LeagueOfLegendsRules() {
  return (
    <>
      <h1>League of Legends</h1>

      <p>Update: 4/25/2023</p>

      <h2>
        1. Anti-Cheat
      </h2>

      <p>No additional anti-cheat is required for official matches.</p>

      <h2>
        2. Match Procedure
      </h2>

      <ul>
        <li>
          All players participating in the tournament must be between the ages
          of 13 and 18 years old. Players who turn 19 during the course of the
          regular season or playoffs will be permitted to participate.
        </li>
      </ul>

      <ul>
        <li>
          Players are required to have at least 20 champions unlocked in order
          to participate in official matches.
        </li>
      </ul>

      <p>Supported Platforms</p>

      <ul>
        <li>PC</li>
      </ul>

      <h3>
        2.1. Series Lengths
      </h3>

      <p>Matches are played as a best-of-1</p>

      <h3>
        2.2. Game Lobby
      </h3>

      <p>The home team (pre-determined) will create the lobby.</p>

      <h4>
        2.2.1. Lobby Formation
      </h4>

      <p>
        Both teams will have their players in the lobby in the following order.{" "}
      </p>
      <p>- &nbsp; Top</p>
      <p>- &nbsp; Jungle</p>
      <p>- &nbsp; Mid</p>
      <p>- &nbsp; Bottom</p>
      <p>- &nbsp; Support</p>

      <h3>
        2.3 Side Selection
      </h3>

      <h4>
        2.3.1 Regular Season
      </h4>

      <p>The away team will choose their side for game 1</p>

      <h4>
        2.3.2 Playoffs and Finals
      </h4>

      <p>The away team will choose their side for game 1</p>

      <p>The loser of game 1 will choose their side for game 2</p>

      <p>The loser of game 2 will choose their side for game 3 (if needed)</p>

      <h3>
        2.4. Drafting
      </h3>

      <p>
        Coaches are allowed and encouraged to help players during draft
        selection. After the draft selection has ended, coaches may no longer
        communicate with players. During playoffs, tournaments, and multiple
        game events coaches may communicate with players between games.
      </p>

      <p>
        All game drafts will be through the online drafting tool Draftlol. The
        following steps must be followed for each game’s draft.
      </p>

      <ul>
        <li>
          The team with side selection will set up the draft and provide links
          to their opponent.
        </li>
        <li>
          Blue and red team names should reflect the respective team names shown
          on the match page.
        </li>
        <li>
          After drafting online the same picks and bans should be recreated
          in-game
        </li>
      </ul>

      <p>
        If there is a mistake during the in-game drafting, reset the game lobby
        and go through the in-game drafting process again.
      </p>

      <p>
        If there are multiple mistakes please reach out to an IHSEA
        Administrator.
      </p>

      <h2>
        3. Tournament Rules{" "}
      </h2>

      <h3>
        3.1. Game Connections
      </h3>

      <p>
        All players taking part in IHSEA tournaments are required to have an
        active game account for the tournament they’re participating in. All
        game connection information shown on a team’s roster must match the
        accounts in the game. Players using different accounts or those not
        officially on the roster are prohibited from playing in matches. Only
        one account connection is allowed per game, the use of alternate
        accounts is prohibited. All account connections are prohibited from
        being changed after the team has participated in its first match of a
        tournament’s regular season.
      </p>

      <p>
        If a player’s name does not match what is shown on their roster, please
        reach out to an IHSEA Administrator. Name discrepancy reports will not
        be accepted after a match has been completed.{" "}
      </p>

      <h4>
        3.1.1. Account Ownership
      </h4>

      <p>
        Game accounts used in official tournaments must belong to the student
        participating using that game connection. At no point in time may
        players share accounts with each other or use an account of another
        person, regardless of if they are in the tournament or not.
      </p>

      <h4>
        3.1.2. School-Purchased Accounts
      </h4>

      <p>
        Schools may create accounts or purchase game licenses for their students
        participating in a tournament if they do not already have an active one.
        These accounts will be considered the students’ personal account and may
        only be used by one student each. These accounts and licenses may not be
        transferred to another student upon the previous student’s graduation or
        leaving the team, as this would be against any publisher’s Terms of
        Service or End User License Agreement.
      </p>

      <h3>
        3.2. Match Streaming
      </h3>

      <h4>
        3.2.1. Spectators
      </h4>

      <p>
        Spectators are permitted in game lobbies for the sole purpose of
        streaming their team’s match to the School’s Twitch or Youtube channel
        or to record the match. Spectators may not have any communication with
        team members while the game is currently being played and must not be a
        member of the roster participating in the match. At the end of the
        match, the stream vod or an unedited copy of the recording must be
        shared with the other team.{" "}
      </p>

      <h4>
        3.2.2. Player Streaming
      </h4>

      <p>
        Players may stream to their personal twitch or youtube channel if they
        are participating in the match. The match may only be streamed from the
        player’s in-game point of view and should have at least a 3-minute delay
        set to prevent possible incidents of stream sniping.
      </p>

      <p>
        Players may not at any time stream another player or roster’s match on
        their personal channel.
      </p>

      <h3>
        3.3. Playoff Qualification
      </h3>

      <p>
        Teams must compete in and complete 75% of their Regular Season matches
        in order to be considered for playoff qualification. Teams who do not
        meet this requirement will be removed from qualification consideration
        regardless of their final record.{" "}
      </p>

      <h4>
        3.3.1. Unplayed Matches
      </h4>

      <p>
        Any match or queue that a team misses or does not complete will result
        in the match being counted as a loss against the team's record at the
        end of the regular season.
      </p>

      <h3>
        3.4. Playoff Qualification Tiebreakers
      </h3>

      <p>
        The tiebreaker system will be run as a tiered protocol that will be used
        if multiple teams finish the regular season with the same overall
        record.{" "}
      </p>

      <ol start="1">
        <li>Wins. (Forfeit wins and bye wins are scored as a 0-0 win)</li>
        <li>
          Head-to-head record. (If the two tied teams have played each other,
          their match record against each other is compared)
        </li>
        <li>
          Overall game-win percentage. (e.g. winning a match 3-0 is better than
          3-2)
        </li>
        <li>
          Higher opponents’ game-win percentage. (e.g. it is better to beat an
          opponent who &nbsp;consistently won 3-0 than 3-2)
        </li>
        <li>Fewer forfeit losses.</li>
        <li>Fewer bye wins.</li>
        <li>
          The team who has a higher number of wins before their first loss.
        </li>
        <li>
          If the first loss is received after the same number of wins, then the
          team which lost to the stronger opponent (as defined by game win
          percentage) will be ranked higher.
        </li>
      </ol>

      <h2>
        4. Restrictions
      </h2>

      <h3>
        4.1 Disabled Content
      </h3>

      <p>
        Any champions, skins, wards, ward skin, chromas, or other game content
        currently disabled in the Ranked or Normal game modes will be prohibited
        from use in official matches.
      </p>

      <h3>
        4.2. New or Reworked Champions
      </h3>

      <p>
        New or Reworked champions released during the season are prohibited from
        use in official matches for a set amount of time determined by the IHSEA
        Administration. All other champions are permitted for use in official
        matches unless they're disabled per rule 4.2.1. A rework is defined as,
        when a champion has 50% or more of their gameplay kit changed, balance
        patches are not considered reworks.
      </p>

      <h4>
        4.2.1. Currently Banned Champions
      </h4>

      <h3>
        4.3 Outside Apps and Other Programs
      </h3>

      <p>
        We encourage and strongly promote the use of any tools for help in
        practice or a recreational scrimmage.{" "}
      </p>

      <p>
        Scouting programs, such as op.gg, are allowed to provide teams insight
        into their opponents and are allowed until the end of the draft stage.
      </p>

      <p>
        Outside apps not found within the game itself are NOT to be used in
        matches. Any use of a program, script, or another item not found within
        the game client is strictly prohibited during match play.
      </p>

      <p>
        Players, teams, or coaches found in violation of this rule may face
        disqualification or termination of the season.{" "}
      </p>

      <p>
        Any paper notes or penciled ideas are welcome during draft for all
        levels.
      </p>

      <h2>
        5. Stoppage of Play
      </h2>

      <h3>
        5.1. Game Pauses
      </h3>

      <p>
        Pause requests must be communicated in the match’s all chat and only may
        be called as long as there are no team engagements at the time of the
        request. A pause may be called only for the following reasons
      </p>

      <ul>
        <li>Player Disconnection</li>
        <li>Game Breaking Errors/Issues</li>
        <li>
          IHSEA Administrators may call for a match pause at their discretion
        </li>
      </ul>

      <p>Stoppage of Play</p>

      <ul>
        <li>
          Shortly after a pause is initiated, a reason must be given via chat in
          game or in Discord.
        </li>
        <li>
          Each team will have 5 cumulative minutes to pause. When 5 minutes have
          been exhausted, teams are required to continue play. Both teams should
          consider keeping track of time.
        </li>
        <li>
          Each team is responsible for timing their pause (any issues should be
          discussed with the opposing team){" "}
        </li>
        <li>
          In the case of a player disconnect, after the 5 minutes are used, the
          team must continue the game (4 v 5)
        </li>
        <li>
          If the player is able to reconnect, the player can rejoin the match.
        </li>
        <li>No subs are allowed to be subbed in the middle of a match</li>
      </ul>

      <h3>
        5.2 Match Resets
      </h3>

      <p>Matches Resets will be made at the discretion of IHSEA officials.</p>

      <h2>
        6. Team Rosters
      </h2>

      <p>
        League of Legends team rosters require a minimum of 5 players and are
        limited to a maximum of 10 players (5 starting players, and 5 substitute
        players). Rosters that do not meet the minimum or exceed the maximum
        number of players will not be allowed to participate in official matches
        until their roster size meets the set requirements. Player substitutions
        may be made between maps.
      </p>
    </>
  );
}
