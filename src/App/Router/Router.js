import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Sidebar } from '../components/Sidebar'
import { ContactUs } from '../pages/ContactUs'
import { Disclaimer } from '../pages/Disclaimer'
import { Home } from '../pages/Home'
import { Privacy } from '../pages/Privacy'
import { Recents } from '../pages/Recents'
import { Lyrics } from '../pages/Lyrics'
import { Trending } from '../pages/Trending'

export  const RouterMain = () => {
  return (
    <div className='min-h-full'>
        <Router>
            <div className='flex h-[100vh]'>
                <div className='w-[360px]'>
                    <Sidebar/>
                </div>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/recents" component={Recents} />
                    <Route exact path="/privacy" component={Privacy} />
                    <Route exact path="/disclaimer" component={Disclaimer} />
                    <Route exact path="/contactus" component={ContactUs} />
                    <Route exact path="/lyrics" component={Lyrics} />
                    <Route exact path="/trending" component={Trending} />
                </Switch>
            </div> 
        </Router>
    </div>
  )
}
