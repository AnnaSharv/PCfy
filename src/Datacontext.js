import React, { createContext } from 'react'


export const Context = createContext('');
export const ContextTeamPosition = createContext('');


export const ContextProvider =  (props) => {
    const [teams, setTeams] = React.useState([])
    // const [teamposition, setteamposition] = React.useState({
    //   "team": "team name",
    //   "position" : "pos name"
    // })
    // const [teamposition, setteamposition] = React.useState([
    //   { team: "foo", position: "positionn"}
    // ])





    React.useEffect(()=> {
       fetch('https://pcfy.redberryinternship.ge/api/teams')
       .then(res => res.json())
       .then(res => setTeams(res.data))
    }, [])



    //console.log(teamposition, "from context")
 


    return (
      <Context.Provider value={teams}>
        {/* <ContextTeamPosition.Provider value={teampo}> */}
            {props.children}
        {/* </ContextTeamPosition.Provider> */}
      </Context.Provider>
    );
  }