import React from 'react'
import { Link } from 'react-router-dom'
import { Route, Redirect } from 'react-router'
import { flows } from './config';
import Item from './item';


class Lista extends React.Component {
  componentDidMount() {
    document.title = '新帖';
  }

  render() {
  	return(

  <div>
    products list
     {flows.map((item, i) => (
       <Item to={`/detail/${item.id}`} title={item.title} author={item.auth} key={i} />
      ))}
  </div>


  	)
  }

}
export default Lista

