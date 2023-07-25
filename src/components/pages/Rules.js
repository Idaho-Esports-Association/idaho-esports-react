import React from "react";
import { Link, useParams } from 'react-router-dom'
import {ApexRules, LeagueOfLegendsRules, OverwatchRules, RocketLeagueRules, SuperSmashRules, ValorantRules} from "../RulesListed";
import Page404 from "./Page404";

function Rules() {
    const { id } = useParams();

    function Rulings() {
    
    switch (id) {
        case "apex_legends":
        return (
            <ApexRules />
        )

        case "valorant":
        return (
            <ValorantRules />
        )

        case "rocket_league":
        return (
            <RocketLeagueRules />
        )

        case "overwatch_2":
        return (
            <OverwatchRules />
        )

        case "super_smash_bros_ultimate":
        return (
            <SuperSmashRules />
        )

        case "league_of_legends":
        return (
            <LeagueOfLegendsRules />
        )
        default:
        return (
            <Page404 />
        )

    }
}
  return (
    <>
      <div className="site-content">
			<div className="container">
				<Rulings />
			</div>
		</div>
		{/* <!-- Content / End --> */}
        
    </>
  );
    }


export default Rules;
