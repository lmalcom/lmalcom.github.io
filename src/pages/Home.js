import React, {Component} from 'react';
class Home extends Component {
    render(){
        return (
            <div>
                <section id="banner" data-video="images/lerenzo_website">
                    <div className="inner">
                        <header>
                            <h1>This is LeRenzo Malcom</h1>
                            <p>Web Developer<br/>
                                vivamus vitae libero in nulla iaculis eleifend non sit amet nulla.</p>
                        </header>
                        <a href="#main" className="button big alt scrolly">Dignissim</a>
                    </div>
                </section>
                <div id="main">
                    {/*Big secion*/}
                    <section className="wrapper style1">
                        <div className="inner">
                            <header className="align-center">
                                <h2>Nam eu nisi non ante sodale</h2>
                                <p>Cras sagittis turpis sit amet est tempus, sit amet consectetur purus tincidunt.</p>
                            </header>
                            <div className="flex flex-2">
                                <div className="video col">
                                    <div className="image fit">
                                        <img src="images/quant7.jpg" alt=""/>
                                        <div className="arrow">
                                            <div className="icon fa-play"></div>
                                        </div>
                                    </div>
                                    <p className="caption">
                                        Pellentesque at nunc vitae urna suscipit mollis nec in arcu
                                    </p>
                                    <a href="generic.html" className="link"><span>Click Me</span></a>
                                </div>
                                <div className="video col">
                                    <div className="image fit">
                                        <img src="images/quant8.jpg" alt=""/>
                                        <div className="arrow">
                                            <div className="icon fa-play"></div>
                                        </div>
                                    </div>
                                    <p className="caption">
                                        Morbi mattis ligula ut eros ipsum aliquam iaculis dictum suscipit
                                    </p>
                                    <a href="generic.html" className="link"><span>Click Me</span></a>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="wrapper style2">
                        <div className="inner">
                            <header>
                                <h2>Previous Work</h2>
                                <p>From Big Data to Genomics to Animation</p>
                            </header>
                            <div className="flex flex-tabs">
                                <ul className="tab-list">
                                    <li><a href="#" data-tab="tab-1" className="active">QuantumViz</a></li>
                                    <li><a href="#" data-tab="tab-2">Phosphorus</a></li>
                                    <li><a href="#" data-tab="tab-3">Kaiju Vs. Brooklyn</a></li>
                                    <li><a href="#" data-tab="tab-4">AnimakeIt!</a></li>
                                </ul>
                                <div className="tabs">

                                    <div className="tab tab-1 flex flex-3 active">
                                        <div className="video col">
                                            <div className="image fit">
                                                <img src="images/quant1.jpg" alt=""/>
                                            </div>
                                            <a href="generic.html" className="link"><span>Click Me</span></a>
                                        </div>
                                        <div className="video col">
                                            <div className="image fit">
                                                <img src="images/quant2.jpg" alt=""/>
                                            </div>
                                            <a href="generic.html" className="link"><span>Click Me</span></a>
                                        </div>
                                        <div className="video col">
                                            <div className="image fit">
                                                <img src="images/quant3.jpg" alt=""/>
                                            </div>
                                            <a href="generic.html" className="link"><span>Click Me</span></a>
                                        </div>
                                        <div className="video col">
                                            <div className="image fit">
                                                <img src="images/quant4.jpg" alt=""/>
                                            </div>
                                            <a href="generic.html" className="link"><span>Click Me</span></a>
                                        </div>
                                        <div className="video col">
                                            <div className="image fit">
                                                <img src="images/quant7.jpg" alt=""/>
                                            </div>
                                            <a href="generic.html" className="link"><span>Click Me</span></a>
                                        </div>
                                        <div className="video col">
                                            <div className="image fit">
                                                <img src="images/quant8.jpg" alt=""/>
                                                <div className="arrow">
                                                    <div className="icon fa-play"></div>
                                                </div>
                                            </div>
                                            <a href="generic.html" className="link"><span>Click Me</span></a>
                                        </div>
                                    </div>

                                    <div className="tab tab-2 flex flex-3">
                                        <div className="video col">
                                            <div className="image fit">
                                                <img src="images/phos1.jpg" alt=""/>
                                            </div>
                                            <a href="generic.html" className="link"><span>Click Me</span></a>
                                        </div>
                                        <div className="video col">
                                            <div className="image fit">
                                                <img src="images/phos2.jpg" alt=""/>
                                            </div>
                                            <a href="generic.html" className="link"><span>Click Me</span></a>
                                        </div>
                                        <div className="video col">
                                            <div className="image fit">
                                                <img src="images/phos3.jpg" alt=""/>
                                            </div>
                                            <a href="generic.html" className="link"><span>Click Me</span></a>
                                        </div>
                                        <div className="video col">
                                            <div className="image fit">
                                                <img src="images/phos4.jpg" alt=""/>
                                            </div>
                                            <a href="generic.html" className="link"><span>Click Me</span></a>
                                        </div>
                                    </div>

                                    <div className="tab tab-3 flex flex-3">
                                        <div className="video col">
                                            <div className="image fit">
                                                <img src="images/kaiju1.jpg" alt=""/>
                                            </div>
                                            <a href="generic.html" className="link"><span>Click Me</span></a>
                                        </div>
                                        <div className="video col">
                                            <div className="image fit">
                                                <img src="images/kaiju2.jpg" alt=""/>
                                            </div>
                                            <a href="generic.html" className="link"><span>Click Me</span></a>
                                        </div>
                                        <div className="video col">
                                            <div className="image fit">
                                                <img src="images/kaiju3.jpg" alt=""/>
                                            </div>
                                            <a href="generic.html" className="link"><span>Click Me</span></a>
                                        </div>
                                    </div>

                                    <div className="tab tab-4 flex flex-3">
                                        <div className="video col">
                                            <div className="image fit">
                                                <img src="images/animaekit1.jpg" alt=""/>
                                            </div>
                                            <a href="generic.html" className="link"><span>Click Me</span></a>
                                        </div>
                                        <div className="video col">
                                            <div className="image fit">
                                                <img src="images/animaekit2.jpg" alt=""/>
                                            </div>
                                            <a href="generic.html" className="link"><span>Click Me</span></a>
                                        </div>
                                        <div className="video col">
                                            <div className="image fit">
                                                <img src="images/animaekit3.jpg" alt=""/>
                                            </div>
                                            <a href="generic.html" className="link"><span>Click Me</span></a>
                                        </div>
                                        <div className="video col">
                                            <div className="image fit">
                                                <img src="images/animaekit4.jpg" alt=""/>
                                            </div>
                                            <a href="generic.html" className="link"><span>Click Me</span></a>
                                        </div>
                                        <div className="video col">
                                            <div className="image fit">
                                                <img src="images/animaekit5.jpg" alt=""/>
                                            </div>
                                            <a href="generic.html" className="link"><span>Click Me</span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="wrapper ">
                        <div className="inner">
                            <header className="align-center">
                                <h2>Aliquam ipsum purus dolor</h2>
                                <p>Cras sagittis turpis sit amet est tempus, sit amet consectetur purus tincidunt.</p>
                            </header>

                            <div className="flex flex-3">
                                <div className="video col">
                                    <div className="image fit">
                                        <img src="images/pic09.jpg" alt=""/>
                                        <div className="arrow">
                                            <div className="icon fa-play"></div>
                                        </div>
                                    </div>
                                    <p className="caption">
                                        Cras eget lacus sed mauris scelerisque tincidunt
                                    </p>
                                    <a href="generic.html" className="link"><span>Click Me</span></a>
                                </div>
                                <div className="video col">
                                    <div className="image fit">
                                        <img src="images/pic10.jpg" alt=""/>
                                        <div className="arrow">
                                            <div className="icon fa-play"></div>
                                        </div>
                                    </div>
                                    <p className="caption">
                                        Vivamus vulputate lacus non massa auctor lobortis
                                    </p>
                                    <a href="generic.html" className="link"><span>Click Me</span></a>
                                </div>
                                <div className="video col">
                                    <div className="image fit">
                                        <img src="images/pic11.jpg" alt=""/>
                                        <div className="arrow">
                                            <div className="icon fa-play"></div>
                                        </div>
                                    </div>
                                    <p className="caption">
                                        Nam eu nisi non ante sodales interdum a vitae neque
                                    </p>
                                    <a href="generic.html" className="link"><span>Click Me</span></a>
                                </div>
                            </div>
                        </div>
                    </section>

                </div>

                <footer id="footer">
                    <div className="inner">
                        <div className="flex flex-3">
                            <div className="col">
                                <h3>Vestibullum</h3>
                                <ul className="alt">
                                    <li><a href="#">Nascetur nunc varius commodo.</a></li>
                                    <li><a href="#">Vis id faucibus montes tempor</a></li>
                                    <li><a href="#">Massa amet lobortis vel.</a></li>
                                    <li><a href="#">Nascetur nunc varius commodo.</a></li>
                                </ul>
                            </div>
                            <div className="col">
                                <h3>Lobortis</h3>
                                <ul className="alt">
                                    <li><a href="#">Nascetur nunc varius commodo.</a></li>
                                    <li><a href="#">Vis id faucibus montes tempor</a></li>
                                    <li><a href="#">Massa amet lobortis vel.</a></li>
                                    <li><a href="#">Nascetur nunc varius commodo.</a></li>
                                </ul>
                            </div>
                            <div className="col">
                                <h3>Accumsan</h3>
                                <ul className="alt">
                                    <li><a href="#">Nascetur nunc varius commodo.</a></li>
                                    <li><a href="#">Vis id faucibus montes tempor</a></li>
                                    <li><a href="#">Massa amet lobortis vel.</a></li>
                                    <li><a href="#">Nascetur nunc varius commodo.</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="copyright">
                        <ul className="icons">
                            <li><a href="#" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
                            <li><a href="#" className="icon fa-facebook"><span className="label">Facebook</span></a>
                            </li>
                            <li><a href="#" className="icon fa-instagram"><span className="label">Instagram</span></a>
                            </li>
                            <li><a href="#" className="icon fa-snapchat"><span className="label">Snapchat</span></a>
                            </li>
                        </ul>
                        &copy; Untitled. Design: <a href="https://templated.co">TEMPLATED</a>. Images: <a
                        href="https://unsplash.com">Coverr</a>. Video: <a href="https://coverr.co">Coverr</a>.
                    </div>
                </footer>
            </div>
        );
    }
}

export default Home;
