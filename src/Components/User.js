import React from 'react';
import { Avatar, Paper, Typography } from '@material-ui/core';

// let userPhotoSrc =
// "http://www.dealnetcapital.com/wp-content/blogs.dir/9/files/2014/10/blank-profile.png";

const styles = {
    Paper: {
        alignItems: 'center',
        display: 'flex',
        padding: 10,
        marginTop: 10
    }
}

//const Kweet = ({displayName}) => <div style={{background:'#38a445'}}>{displayName}</div>;
const Kweet = ({displayName, image, onClick, userId }) => (
    
    <Paper style={styles.Paper} onClick={onClick}>
        <Avatar src={ image || `https://picsum.photos/${userId}` } style={{height: 60, width: 60, marginLeft: 20}}/>
        <Typography variant="h6" style={{flexGrow: 1}}>{displayName}</Typography>
    </Paper>
);

export default Kweet;