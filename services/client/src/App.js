import React, { Component } from 'react';
import { Container, Header, Grid, Icon } from 'semantic-ui-react';
// import UsersList from './components/UsersList';
// import axios from 'axios';

class App extends Component {
  // For authentication of users
  // constructor() {
  //   super();
  //   this.state = {
  //     users: []
  //   };
  // }

  // componentDidMount() {
  //   this.getUsers();
  // };

  // getUsers() {
  //   axios.get(`${process.env.REACT_APP_USERS_SERVICE_URL}/users`)
  //   .then((res) => { this.setState({ users: res.data }); })
  //   .catch((err) => { console.log(err); });
  // }

  render() {
    const textStyle = {
      color: '#011627',
      marginTop:'0.5em',
    };
    const linkStyle = {
        color: '#FF9F1C',
        textDecoration: 'none',
    }
    return (
    <div style={{ backgroundColor: 'white', height: '100vh' }}>
    <Grid textAlign='center' style={{ height: '80vh', border: '0em' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 500 }}>
            <Container stacked textAlign='center' style={{ backgroundColor: 'white' }} >
                <Header
                    as='h1'
                    content='Gareth Veale.'
                    textAlign='center'
                    style={{
                      fontSize: '2em',
                      fontWeight: 'bold',
                      marginBottom: '0.2em',
                      padding: '0em',
                      color: '#011627',
                    }}
                />           
                <p style={textStyle}>Self-learning software engineer. I like building things, solving problems, and gaining knowledge. 
                Technology, Business, and Economics. Student of philosophy/life. <b><u><a href='https://www.strava.com/athletes/27098014' target="_blank" style={linkStyle}>Pushing myself daily.</a></u> </b>
                Check out my <b><u><a href='/software' style={linkStyle}>software</a></u></b>.</p>
                
                <Container textAlign='center' style={{ paddingTop: '1em' }}>
                  <a href='https://twitter.com/garethveale' target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}><Icon size='big' name='twitter' link style={{color:'#011627', }}></Icon></a>
                  <a href='https://github.com/garethiv' target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>  <Icon size='big' name='github' link style={{color:'#011627'}} /></a>
                  <a href='mailto:gareth@garethveale.dev' style={{ textDecoration: 'none' }}>  <Icon size='big' name='mail' link style={{color:'#011627'}} /></a>
                  <a href='https://www.youtube.com/channel/UCN71dsoRmbKXWWihXB2VOqw/featured?view_as=subscriber' target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>  <Icon size='big' name='youtube' link style={{color:'#011627'}} /></a>
                  <a href='https://www.twitch.tv/garethv' target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>  <Icon size='big' name='twitch' link style={{color:'#011627'}} /></a>
                  <a href='https://www.linkedin.com/in/garethveale/' target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>  <Icon size='big' name='linkedin' link style={{color:'#011627'}} /></a>
                </Container>
            </Container>
        </Grid.Column>
      </Grid>
      </div>
    )
  }
};

export default App;
