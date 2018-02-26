import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'
import 'modules/antd/dist/antd.min.css'

import React from 'react'

import Menu from '../template/menu'
import PageHeader from '../template/pageHeader'
import Routes from './routes';

export default props => (
    <div className='container'>
        <Menu/>
        <Routes/>
    </div>
)