import React, { Component } from 'react';
import './Footer.css';
import facebook from './img/facebook.svg';
import twitter from './img/twitter.svg';
import instagram from './img/instagram.svg';
import youtube from './img/youtube.svg';


export default class Footer extends Component {
    constructor(props){
        super(props)

            this.state = {
            links: [
                {name: "Home",url: "localhost:3000"},
                    {name: "Products",url: "localhost:3000/products"},
                    {name: "Contact",url: "localhost:3000/contact"}
                ],
                    
            social: [
                {name: "facebook", img: facebook, url: ""},
                     {name: "twitter", img: twitter, url: ""},
                     {name: "instagram", img: instagram, url: ""},
                     {name: "youtube", img: youtube, url: ""}
                    ]        
            }
        }


    render(){
        return (
                <div className="Footer" className="container">
                    <footer>
                        <div className="row">
                            <div className="col">
                                <ul>
                                    {
                                        this.state.links.map((i,k) => <li key={k}><a className="Footer" href={i.url}>{i.name}</a></li> )
                                    }

                                </ul>
                            </div>
                            <div className="col-6"></div>
                            <div className="col">
                                    {
                                        this.state.social.map((i,k) => <a key={k} className="Footer-Social" href={i.url}><img key={k} src={i.img} className="Footer-Social" alt={i.name} /></a> )
                                    }
                            </div>
                        </div>
                    </footer>
                </div>

        );
    }
}
