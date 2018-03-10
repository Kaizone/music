/**
 * Created by kk on 2018/1/22.
 */
import React,{Component} from 'react';

import axios from 'axios';
import {Link,Route} from 'react-router-dom';

import Songer from './components/Songer';
import Search from './components/Search';
import GetSongList from './components/GetSongList';

//首页轮播图
import Banner from './components/Banner';
//播放器，歌手
import Audio from './components/Audio';
import Artist from './components/Artist';
//获取歌词
import Lyrics from './components/Lyrics';
//引入推荐歌单
import RecommendedList from './components/recommends/RecommendedList';
//引入最新音乐
import LatestMusic from './components/recommends/LatestMusic';
//电台
import Radios from './components/recommends/Radios';
//推荐节目
import Programs from './components/recommends/Programs';
class App extends React.Component{

    constructor(args){
        super(args);

        this.state = {

        }
    }


    render(){
        return(
            <div>
                <div className="header clear">
                    <h2 className="app-logo fl">云音乐</h2>
                    <div className="search-wrap fl">
                        <Search></Search>
                    </div>
                    <div className="header-side clear fr">
                        <div className="land-wrap fl">
                            <span className="land-logo">☢</span>
                            <span className="land">登录</span>
                        </div>
                        <div className="set-wrap fr">
                            <span className="pi">✪</span>
                            <span className="tip">✉</span>
                            <span className="set">☀</span>
                        </div>
                    </div>
                </div>


                <div className="main ">
                    <div className="side fl">
                        <div className="side-concent-wrap">
                            <h3>推荐</h3>
                            <ul>
                                <li className="hover">发现音乐</li>
                                <li>私人FM</li>
                                <li>MV</li>
                                <li>朋友</li>
                            </ul>
                        </div>
                        <div className="side-concent-wrap">
                            <h3>我的音乐</h3>
                            <ul>
                                <li>本地音乐</li>
                                <li>下载管理</li>
                            </ul>
                        </div>
                        <div className="side-concent-wrap">
                            <h3>创建歌单</h3>
                            <ul>
                                <li>我喜欢的音乐</li>
                            </ul>
                        </div>
                    </div>
                    <div className="section">
                        <div className="nav">
                            <ul className="nav-list clear">
                                <li>个性推荐</li>
                                <li>歌单</li>
                                <li>主播电台</li>
                                <li>排行榜</li>
                                <li>歌手</li>
                                <li>最新音乐</li>
                            </ul>
                        </div>
                        <div className="banner">
                            <Banner></Banner>
                        </div>

                        <div>
                            {/*<RecommendedList></RecommendedList>
                             <LatestMusic></LatestMusic>
                             <Radios></Radios>*/}
                            <Route path="/getsonglist" component={GetSongList}/>
                            <RecommendedList></RecommendedList>
                            <LatestMusic></LatestMusic>
                            <Radios></Radios>
                            <Programs></Programs>

                            <Route  path="/songer" component={Songer}/>
                            <Route  path="/artist/:id" component={Artist}/>
                        </div>
                    </div>

                </div>

                <div className="footer">
                    <div className="play-bar">
                        <Route  path="/audio/:id" component={Audio}/>
                        <Link to="/lyrics">歌词</Link>
                        <Route path="/lyrics" component={ Lyrics }/>
                    </div>

                </div>
            </div>
        )
    }
}

export default App