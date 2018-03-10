/**
 * Created by kk on 2018/1/23.
 */

import React,{Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux'

import {Link,Route} from 'react-router-dom';

class Search extends React.Component{

    constructor(args){
        super(args);

        this.state = {

        }
    }

    getData(){
        let content = this.refs.input.value;
        axios.get('http://localhost:3000/search?keywords=' + content)
        .then( res => {
            console.log(res.data.result);
            this.props.dispatch({
                type:"ADD_SEARCHDATA",
                payload: res.data.result
            })
        } )

    }

    render(){
        return(
            <div>
                <input className="search" ref="input" type="text" placeholder="请输入搜索内容" defaultValue=""/>
                <Link to="/getsonglist">
                    <button className="search-btn" onClick={this.getData.bind(this)}> 搜索</button>
                </Link>
            </div>
        )
    }
}

export default connect() (Search)