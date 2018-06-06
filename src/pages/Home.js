import React, {Component} from 'react';
import './Home.css';

class Home extends Component {
    render() {
        return (
            <div>
                <section id="banner" data-video="images/lerenzo_website">
                    <div className="inner">
                        <header>
                            <h1>LeRenzo Malcom</h1>
                            <p>Scala, Javascript, Unity, Big Data</p>
                        </header>
                        <ul className="icons">
                            <li><a href="https://twitter.com/lerenzom" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
                            <li><a href="https://www.linkedin.com/in/lmalcom/" className="icon fa-linkedin"><span className="label">LinkedIn</span></a></li>
                            <li><a href="https://github.com/lmalcom" className="icon fa-github"><span className="label">Github</span></a></li>
                        </ul>
                        <a href="files/Lerenzo_resume_2018.pdf" className="button big alt scrolly" download>Resume</a>
                    </div>
                </section>
                <div id="main">
                    {/*Big secion*/}
                    <section className="wrapper style1">
                        <div className="inner">
                            <header className="align-center">
                                <h2>Most Recently</h2>
                                {/*<p>Cras sagittis turpis sit amet est tempus, sit amet consectetur purus tincidunt.</p>*/}
                            </header>
                            <div className="flex flex-2">
                                <div className="video col">
                                    <div className="image fit height-6">
                                        <img width="100%" src="images/qv_logo.jpg" alt=""/>
                                    </div>
                                    <p className="caption">
                                        QuantumViz - Big Data Visualization
                                    </p>
                                    <a href="https://quantumviz.com" className="link"><span>Click Me</span></a>
                                </div>
                                <div className="video col">
                                    <div className="image fit height-6">
                                        <img height="100%" width="auto" src="images/phos_logo.png" alt=""/>
                                    </div>
                                    <p className="caption">
                                        Phosphorus - Genomics & Healthcare
                                    </p>
                                    <a href="https://phosphorus.com" className="link"><span>Click Me</span></a>
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
                                                <img src="images/quant_nyc.jpg" alt=""/>
                                            </div>
                                        </div>
                                        <div className="video col">
                                            <div className="image fit">
                                                <img src="images/quant2.jpg" alt=""/>
                                            </div>
                                        </div>
                                        <div className="video col">
                                            <div className="image fit" data-video="images/qv_clip">
                                                {/*<img src="images/quant3.jpg" alt=""/>*/}
                                                <video autoPlay loop>
                                                    <source src="images/qv_clip.webm"/>
                                                    <source src="images/qv_clip.mp4"/>
                                                </video>
                                            </div>
                                        </div>
                                        <div className="video col">
                                            <div className="image fit">
                                                <img src="images/quant4.jpg" alt=""/>
                                            </div>
                                        </div>
                                        <div className="video col">
                                            <div className="image fit">
                                                <img src="images/quant7.jpg" alt=""/>
                                            </div>
                                        </div>
                                        <div className="video col">
                                            <div className="image fit">
                                                <img src="images/qv_panama.jpg" alt=""/>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="tab tab-2 flex flex-3">
                                        <div className="video col">
                                            <div className="image fit">
                                                <img src="images/phos1.jpg" alt=""/>
                                            </div>
                                        </div>
                                        <div className="video col">
                                            <div className="image fit">
                                                <img src="images/phos2.jpg" alt=""/>
                                            </div>
                                        </div>
                                        <div className="video col">
                                            <div className="image fit">
                                                <img src="images/phos4.jpg" alt=""/>
                                            </div>
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
                                                {/*<img src="images/kaiju2.jpg" alt=""/>*/}
                                                <video autoPlay loop>
                                                    <source src="images/kaiju_clip.webm"/>
                                                    <source src="images/kaiju_clip.mp4"/>
                                                </video>
                                            </div>
                                            <a href="generic.html" className="link"><span>Click Me</span></a>
                                        </div>
                                        <div className="video col">
                                            <div className="image fit">
                                                <img src="images/kaiju3.jpg" alt=""/>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="tab tab-4 flex flex-3">
                                        <div className="video col">
                                            <div className="image fit">
                                                <img src="images/animaekit3.jpg" alt=""/>
                                            </div>
                                        </div>
                                        <div className="video col">
                                            <div className="image fit">
                                                <img src="images/animaekit4.jpg" alt=""/>
                                            </div>
                                        </div>
                                        <div className="video col">
                                            <div className="image fit" >
                                                <video autoPlay loop>
                                                    <source src="images/livepainter_clip.webm"/>
                                                    <source src="images/livepainter_clip.mp4"/>
                                                </video>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/*<section className="wrapper ">*/}
                        {/*<div className="inner">*/}
                            {/*<header className="align-center">*/}
                                {/*<h2>Aliquam ipsum purus dolor</h2>*/}
                                {/*<p>Cras sagittis turpis sit amet est tempus, sit amet consectetur purus tincidunt.</p>*/}
                            {/*</header>*/}

                            {/*<div className="flex flex-3">*/}
                                {/*<div className="video col">*/}
                                    {/*<div className="image fit">*/}
                                        {/*<img src="images/pic09.jpg" alt=""/>*/}
                                        {/*<div className="arrow">*/}
                                            {/*<div className="icon fa-play"></div>*/}
                                        {/*</div>*/}
                                    {/*</div>*/}
                                    {/*<p className="caption">*/}
                                        {/*Cras eget lacus sed mauris scelerisque tincidunt*/}
                                    {/*</p>*/}
                                    {/*<a href="generic.html" className="link"><span>Click Me</span></a>*/}
                                {/*</div>*/}
                                {/*<div className="video col">*/}
                                    {/*<div className="image fit">*/}
                                        {/*<img src="images/pic10.jpg" alt=""/>*/}
                                        {/*<div className="arrow">*/}
                                            {/*<div className="icon fa-play"></div>*/}
                                        {/*</div>*/}
                                    {/*</div>*/}
                                    {/*<p className="caption">*/}
                                        {/*Vivamus vulputate lacus non massa auctor lobortis*/}
                                    {/*</p>*/}
                                    {/*<a href="generic.html" className="link"><span>Click Me</span></a>*/}
                                {/*</div>*/}
                                {/*<div className="video col">*/}
                                    {/*<div className="image fit">*/}
                                        {/*<img src="images/pic11.jpg" alt=""/>*/}
                                        {/*<div className="arrow">*/}
                                            {/*<div className="icon fa-play"></div>*/}
                                        {/*</div>*/}
                                    {/*</div>*/}
                                    {/*<p className="caption">*/}
                                        {/*Nam eu nisi non ante sodales interdum a vitae neque*/}
                                    {/*</p>*/}
                                    {/*<a href="generic.html" className="link"><span>Click Me</span></a>*/}
                                {/*</div>*/}
                            {/*</div>*/}
                        {/*</div>*/}
                    {/*</section>*/}

                </div>

                <footer id="footer">
                    {/*<div className="inner">*/}
                        {/*<div className="flex flex-3">*/}
                            {/*<div className="col">*/}
                                {/*<h3>Vestibullum</h3>*/}
                                {/*<ul className="alt">*/}
                                    {/*<li><a href="#">Nascetur nunc varius commodo.</a></li>*/}
                                    {/*<li><a href="#">Vis id faucibus montes tempor</a></li>*/}
                                    {/*<li><a href="#">Massa amet lobortis vel.</a></li>*/}
                                    {/*<li><a href="#">Nascetur nunc varius commodo.</a></li>*/}
                                {/*</ul>*/}
                            {/*</div>*/}
                            {/*<div className="col">*/}
                                {/*<h3>Lobortis</h3>*/}
                                {/*<ul className="alt">*/}
                                    {/*<li><a href="#">Nascetur nunc varius commodo.</a></li>*/}
                                    {/*<li><a href="#">Vis id faucibus montes tempor</a></li>*/}
                                    {/*<li><a href="#">Massa amet lobortis vel.</a></li>*/}
                                    {/*<li><a href="#">Nascetur nunc varius commodo.</a></li>*/}
                                {/*</ul>*/}
                            {/*</div>*/}
                            {/*<div className="col">*/}
                                {/*<h3>Accumsan</h3>*/}
                                {/*<ul className="alt">*/}
                                    {/*<li><a href="#">Nascetur nunc varius commodo.</a></li>*/}
                                    {/*<li><a href="#">Vis id faucibus montes tempor</a></li>*/}
                                    {/*<li><a href="#">Massa amet lobortis vel.</a></li>*/}
                                    {/*<li><a href="#">Nascetur nunc varius commodo.</a></li>*/}
                                {/*</ul>*/}
                            {/*</div>*/}
                        {/*</div>*/}
                    {/*</div>*/}
                    <div className="copyright">
                        <ul className="icons">
                            <li><a href="https://twitter.com/lerenzom" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
                            <li><a href="https://www.linkedin.com/in/lmalcom/" className="icon fa-linkedin"><span className="label">LinkedIn</span></a></li>
                            <li><a href="https://github.com/lmalcom" className="icon fa-github"><span className="label">Github</span></a></li>
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
