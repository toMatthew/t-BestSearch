import { Container  }   from '@mui/material';
import SearchBox from '../../components/searchBox';

import { Fragment } from 'react';
import {
    Link,
} from "react-router-dom";
function Home() {
    return (
        <Fragment>
            <div className='header'><Link to={ '/' }>BestSearch</Link></div>

<Container className='container' style={{display: 'flex', alignItems: 'center' }} disableGutters={true} maxWidth="md">
    <Container>
        <center style={{ marginBottom: '60px' }}><h1>Search Trends</h1></center>
        <SearchBox></SearchBox>
    </Container>            
</Container>
        </Fragment>
        
    );
  }
  
  export default Home;
  