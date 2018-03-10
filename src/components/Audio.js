/**
 * Created by kk on 2018/1/23.
 */
import React,{Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';

class Audio extends React.Component{

    constructor(args){
        super(args);

        this.state = {
            musicData:{
                URL:'',
                musicID:''
            }
        }
    }

    componentWillMount(){
        console.log(this.props)
        let ID = this.props.match.params.id;
        console.log(ID)
        /*通过音乐的id 获取该音乐的音频地址（和其相关关于音频的时长等数据），把音频地址传给audio的src */
        axios.get('http://localhost:3000/music/url?id=' + ID)
            .then( res => {
                console.log(res)

                this.setState({

                    musicData:{
                        URL:res.data.data[0].url,
                        musicID:ID
                    }
                })
                console.log(this.state.musicData.URL)
            } );


    }


    render(){

        return(
            <div>
                <audio autoPlay="autoplay" controls  src={this.state.musicData.URL}></audio>
                <div>

                </div>
            </div>
        )
    }
}

export default Audio