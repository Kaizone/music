/**
 * Created by kk on 2018/1/25.
 */

/**
 * Created by kk on 2018/1/24.
 */

import React,{Component} from 'react';
import axios from 'axios';

class Radios extends React.Component{

    constructor(args){
        super(args);

        this.state= {
            datas:[]
        }
    }

    componentWillMount(){

        axios.get('http://localhost:3000/personalized/djprogram')
            .then( res => {
                console.log(res);

                this.setState({
                    datas:res.data
                })
            } )
    }

    show(){
        let dataList = this.state.datas.result;
        if(dataList){
            return (
                <ul className="recommend-list clear">
                    {dataList.map( (item,index) => {
                        return (
                            <li className="fl" key={index}>
                                <div>
                                    <img src={item.picUrl}/>
                                </div>
                                <p>{item.name}</p>
                            </li>
                        )

                    } )}
                </ul>
            )
        }


    }

    render(){
        console.log(this.state.datas.result)
        return(
            <div className="recommend-wrap">
                <div className="recommend-title clear">
                    <h3 className="fl">推荐电台</h3>
                    <p className="fr">更多></p>
                </div>
                <div>
                    {this.show()}
                </div>

            </div>
        )
    }
}

export default Radios;