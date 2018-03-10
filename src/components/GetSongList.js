/**
 * Created by kk on 2018/1/23.
 */
import React,{Component} from 'react';

import {connect} from 'react-redux';
import {Link,Route} from 'react-router-dom';

class GetSongList extends React.Component{

    constructor(args){
        super(args);
        this.state ={

        }
    }

    showList(){
        if(this.props.singsData.songs){
            return(

                <ul className="songs-list">
                    <li className="operate-bar">
                        <span>序号</span>
                        <span>操作</span>
                        <span>音乐标题</span>
                        <span>歌手</span>
                        <span>专辑</span>
                        <span>时长</span>
                        <span>热度</span>
                    </li>
                    {this.props.singsData.songs.map( (item,index) => {
                        return(
                            <li key={index}>

                                <span>{index}</span>


                                <span>❤</span>
                                <span>{item.name}</span>


                                <Link to={'/artist/'+item.artists[0].id}><span>{item.artists.map( (item,index)=>{return <span key={index}>{item.name}</span>} )}</span></Link>


                                <span>{item.album.name}</span>


                                <span>{item.duration/60}</span>

                                <Link to={'/audio/'+item.id}> 播放 </Link>
                            </li>
                        )
                    } )}
                </ul>
            )
        }

    }

    render(){
        console.log(this.props.singsData.songs)
        return (
            <div className="songs-list-wrap">
                {this.showList()}
            </div>
        )
    }
}

export default connect( state => {
    return {
        singsData: state.getSearchData
    }
} ) (GetSongList);