import React, { Component } from 'react';
import { Input, Button, IconButton } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import "./Home.css"

class Home extends Component {
  	constructor (props) {
		super(props)
		this.state = {
			url: ''
		}
	}

	handleChange = (e) => this.setState({ url: e.target.value })

	join = () => {
		if (this.state.url !== "") {
			var url = this.state.url.split("/")
			window.location.href = `/${url[url.length-1]}`
		} else {
			var url = Math.random().toString(36).substring(2, 7)
			window.location.href = `/${url}`
		}
	}

	render() {
		return (
			<div className="container2">
				<div>
					<img src="Sulpak-Briefing.png" alt="Sulpak Briefing", width='100px', height='100px'>
				</div>
				<div>
					<h1 style={{ fontSize: "45px" }}>Sulpak Briefing</h1>
					<p style={{ fontWeight: "200" }}>Для видеоконференций, который позволяет тебе оставаться на связи со всеми коллегами.</p>
				</div>

				<div style={{
					background: "white", width: "30%", height: "auto", padding: "20px", minWidth: "400px",
					textAlign: "center", margin: "auto", marginTop: "100px"
				}}>
					<p style={{ margin: 0, fontWeight: "bold", paddingRight: "50px" }}>Начать встречу или присоединиться к ней</p>
					<Input placeholder="Введи ссылку..." onChange={e => this.handleChange(e)} />
					<Button variant="contained" color="primary" onClick={this.join} style={{ margin: "20px" }}>Начать</Button>
				</div>
			</div>
		)
	}
}

export default Home;
