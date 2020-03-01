import React from "react"
import { Link } from "gatsby"
import Img from 'gatsby-image'
import localStorageAvailable from '../components/storage_check'
import { getPlayer, } from '../components/game_state'

import ChooseCharacter from "../components/choose_character"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  let message = <p>Sadly, at the moment Vim&Dragons requires a modern browser supporting localStorage,
                   please try to switch to a more updated version or in case leave the incognito mode</p>

  if(localStorageAvailable()){
    const player = getPlayer()
    if(player){
      message = (
        <div>
          <p>Welcome back {player.name}</p>
          <Link to={`/level-${player.nextLevel}`}>Continue from level {player.nextLevel}</Link>
        </div>
      )
    } else {
      message = (
        <div>
          <p>Welcome to Vim&Dragons, an eco-friendly, free web-quest for those wizards who longs for the mythical Vim knowledge</p>
          <ChooseCharacter />
        </div>
      )
    }
  }

  return(
    <div>
      <SEO title="Home" />
      <h1><Img
        className='logo'
        fixed={data.file.childImageSharp.fixed}
        alt='Vim and Dragons'
        /></h1>
      {message}
    </div>
  )
}

export const query = graphql`
  query {
    file(relativePath : { eq : "images/dnd.png"}) {
      childImageSharp {
        fixed(width: 800, height: 310) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default IndexPage
