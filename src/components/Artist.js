/**
 * Created by kk on 2018/1/23.
 */
import React,{Component} from 'react';
import {Link,Route} from 'react-router-dom';
import axios from 'axios';
import {connect} from 'react-redux';

import './style/songer.css'
class Artist extends React.Component{
    constructor(args){
        super(args);

        this.state = {
            datas:{
                artist:'',
                hotSongs:[]
            }
        }
    }

    componentDidMount(){
        console.log(this.props)
        let ID = this.props.match.params.id
        axios.get('http://localhost:3000/artists?id=' + ID)
            .then( response => {
                console.log(response.data);
                let artist = response.data.artist;
                let hotSongs = response.data.hotSongs;
                console.log(artist)
                console.log(hotSongs)

                this.setState({
                    datas:{
                        artist,
                        hotSongs
                    }
                })

            } )
            .catch( error => {
                console.log(error);
            } )
    }

    show(){
        console.log(this.state.datas.artist)
        if(this.state.datas.artist){
            let artist = this.state.datas.artist;
            let hotSongs  = this.state.datas.hotSongs;
            return(
                <div className="songer-wrap clear">
                    <img className="avater fl" src={artist.picUrl}/>
                    <div className="message fl">
                        <p>{artist.name}</p>
                        <p> <span> 歌手 </span> ：{artist.name}</p>
                        <p> <span> 英文名 </span> ：{artist.alias.map( (item,index) => {return(<span key={index}> {item} </span>)} )}</p>
                        <p> <span> 单曲数 </span> ：{artist.musicSize}</p>
                        <p> <span> 专辑数 </span> ：{artist.albumSize}</p>
                        <p> <span> MV数 </span> ：{artist.mvSize}</p>
                    </div>
                </div>
            )
        }

    }

    render(){
        return(
            <div>
                {this.show()}
            </div>
        )
    }
}

export default connect( state => {
    return{
        aritistData:state.getSearchData
    }
} ) (Artist)