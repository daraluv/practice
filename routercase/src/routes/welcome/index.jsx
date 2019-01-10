import React from 'react'
import { Link } from 'react-router-dom'
import { Route, Redirect } from 'react-router'
import { HashRouter, Switch } from 'react-router-dom'


class Welcome extends React.Component{
	state = {
		count:5
	}

	componentDidMount() {
		let that = this;
		const {count} = this.state;
		setInterval(() =>{
				that.setState({
					count: this.state.count-1
				})
		},1000)
	}

	render() {
		const {count} = this.state;
		console.log(count)
		return(
		 <>
        {count >= 0 ? (
            <div>当前为启动页，{count}秒之后自动跳过</div>
        ) : (
          <Redirect to='/home' />
        )}
      </>
		)
	}
}



export default Welcome
