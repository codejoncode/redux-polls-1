import React from 'react'
import {NavLink} from 'react-router-dom'

export default function Nav () {

    return (
        <nav className='nav'>
          <ul>
            <li>
                <NavLink to ='/' exact activeClassName='active'>
                  Home
                </NavLink>
            </li>
            <li>
                <NavLink to='/leaderboard' activeClassName='active'>
                    Leaderborad
                </NavLink>
            </li>
            <li>
              <NavLink to='/add' activeClassName='active'>
                Add Poll
              </NavLink>
            </li>
            
          </ul>
        </nav>
    )
}
