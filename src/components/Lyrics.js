/**
 * Created by kk on 2018/1/26.
 */

import React,{Component} from 'react';

import axios from 'axios';
import {connect}from 'react-redux';

class Lyrics extends React.Component{

    constructor(args){
        super(args);

        this.state = {

        }
    }

    componentWillMount(){
        axios.get('http://localhost:3000/lyric?id=' + 33894312)
        .then( res => {
            console.log(res)
        } )
    }

    render(){
        return(
            <div></div>
        )
    }
}

export default connect() (Lyrics);