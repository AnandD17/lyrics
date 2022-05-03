import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Sidebar } from '../components/Sidebar'
import { Home } from '../pages/Home'
import { Recents } from '../pages/Recents'

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
                </Switch>
            </div> 
        </Router>
    </div>
  )
}
