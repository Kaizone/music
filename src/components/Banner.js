/**
 * Created by kk on 2018/1/25.
 */

import React,{Component} from 'react';

import axios from 'axios';

class Banner extends React.Component{

    constructor(args){
        super(args);

        this.state = {
            datas:[]
        }
    }


    componentWillMount(){

        axios.get('http://localhost:3000/banner')
        .then( res => {
            console.log(res);

            this.setState({
                datas:res.data.banners
            })
        } )

    }


    render(){
        console.log(this.state.datas);
        return(
            <div>
                <ul className="banner-list clear">
                    <li className="side">
                        <img src="http://p3.music.126.net/s25q2x5QyqsAzilCurD-2w==/7973658325212564.jpg"/>
                    </li>
                    <li className="middle">
                        <img src="http://p4.music.126.net/tGPljf-IMOCyPvumoWLOTg==/7987951976374270.jpg"/>
                    </li>
                    <li className="side">
                        <img src="http://p3.music.126.net/e0gGadEhjur2UuUpDF9hPg==/7788940372125389.jpg"/>
                    </li>
                </ul>
                <p className="sub-nav">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </p>
                <span className="prev"> &lt; </span>
                <span className="next"> &gt; </span>
            </div>
        )
    }

}

export default Banner;