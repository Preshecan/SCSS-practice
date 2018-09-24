import React, { Component } from 'react';
import './ChildComponent.css';

class ChildComponent extends Component {
  render() {
    return (
      <div className="ChildComponent">
          <div id="bg"></div>

          <header>
          	<a href="#">JibbaJabba</a>
          </header>

          <main>
          	<section id="card">
          		<ul>
          			<li>
          				<span></span>
          				<strong>There's some content here</strong>
          			</li>
          			<li>
          				<span></span>
          				<strong>There's some more content here</strong>
          			</li>
          			<li>
          				<span></span>
          				<strong>There's even more content here</strong>
          			</li>
          		</ul>
          	</section>
          	<section id="primary">
          		<h1>Your Personal Assistant</h1>
          		<p>Get help with your all your daily stuff</p>

          		<a href="#">Get help already</a>
          	</section>
          </main>


      </div>
    );
  }
}

export default ChildComponent;