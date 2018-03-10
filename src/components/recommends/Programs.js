/**
 * Created by kk on 2018/1/25.
 */

/**
 * Created by kk on 2018/1/24.
 */

import React,{Component} from 'react';
import axios from 'axios';

class Programs extends React.Component{

    constructor(args){
        super(args);

        this.state= {
            datas:[]
        }
    }

    componentWillMount(){

        axios.get('http://localhost:3000/program/recommend')
            .then( res => {
                console.log(res);

                this.setState({
                    datas:res.data.programs
                })
            } )
    }

    show(){
        let dataList = this.state.datas;
        if(dataList){
            return (
                <ul className="recommend-list clear">
                    {dataList.map( (item,index) => {
                        return (
                            <li className="fl" key={index}>
                                <div>
                                    <img src={item.coverUrl}/>
                                </div>
                                <p>{item.name}</p>
                                <p>{item.dj.brand}</p>
                            </li>
                        )

                    } )}
                </ul>
            )
        }


    }

    render(){
        console.log(this.state.datas)
        return(
            <div className="recommend-wrap">
                <div className="recommend-title clear">
                    <h3 className="fl">主播电台</h3>
                    <p className="fr">更多></p>
                </div>
                <div>
                    {this.show()}
                </div>

            </div>
        )
    }
}

export default Programs;