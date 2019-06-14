import React, { Component } from "react";

import './news.css';

import Badge from "react-bootstrap/Badge";

class News extends Component {
  componentDidMount() { }

  render() {
    return (
      <section id="news" className="">
        <div className="container">
          <div className="header row">
            <div className="col">
              <h1>News</h1>
            </div>
          </div>

          <div className="body">

            <div className="row justify-content-sm-center no-gutters">
              <div className="news col-sm-10 col-md-4 col-lg-3 col-xl-3 m-auto mt-2 pt-xl-0">
                <div className="mt-2">
                <div className="head row">
                    <div className="col-6"><Badge variant="primary">NATIONWIDE</Badge></div>
                    <div className="col-6"><div className="date">17/09/2019</div></div>
                  </div>
                  <h2>Cannabis referendum now binding</h2>
                  <div className="teaser mt-2">
                    <p>Pariliament passed legislation today to make the Cannabis Referendum binding.</p>
                    <p>Legislative changes related to the referendum will come into effect on 1st November 2020 unless actively repealed by the standing government (in the case of a no vote).</p>
                  </div>
                  <p className="mt-2">
                    <a href="/about">
                      Learn More
                      <i className="fas fa-angle-right" />
                    </a>
                  </p>
                </div>
              </div>
              <div className="news col-sm-10 col-md-4 col-lg-3 col-xl-3 m-auto mt-2 pt-xl-0">
                <div className="mt-2">
                  <div className="head row">
                    <div className="col-6"><Badge variant="success">BAY OF PLENTY</Badge></div>
                    <div className="col-6"><div className="date">16/09/2019</div></div>
                  </div>
                  <h2>Cannabis Legalised in the Bay of Plenty</h2>
                  <div className="teaser mt-2">
                    <p>The Bay of Plenty Regional Council has enacted bylaws legalising the sale of recreational cannabis to users over the age of 20.</p>
                    <p>Due the success of the Rō Ora movement in the Bay Of Plenty the government has succeeded that they will not send ground troops to force national law on the regions peoples.</p>
                  </div>
                  <p className="mt-2">
                    <a href="/about">
                      Learn More
                      <i className="fas fa-angle-right" />
                    </a>
                  </p>
                </div>
              </div>
              <div className="news col-sm-10 col-md-4 col-lg-3 col-xl-3 m-auto mt-2">
                <div className="mt-2">
                  <div className="head row">
                    <div className="col-6"><Badge variant="primary">NATIONWIDE</Badge></div>
                    <div className="col-6"><div className="date">15/09/2019</div></div>
                  </div>
                  <h2>Referendum Question Released</h2>
                  <div className="teaser mt-2">
                    <p>At 0905 this morning Andrew Minister released the final text of the New Zealand Cannabis Referendum 2020.</p>
                    <p>As expected, the text is that which has been publically available for some weeks now following the collaboration with Rō ora.</p>
                  </div>
                  <p className="mt-2">
                    <a href="/about">
                      Learn More
                      <i className="fas fa-angle-right" />
                    </a>
                  </p>
                </div>
              </div>
              <div className="news col-sm-10 col-md-4 col-lg-3 col-xl-3 m-auto mt-2 pt-xl-0">
                <div className="mt-2">
                  <div className="head row">
                    <div className="col-6"><Badge variant="primary">NATIONWIDE</Badge></div>
                    <div className="col-6"><div className="date">04/09/2019</div></div>
                  </div>
                  <h2>Unprecedented peoples cannabis movement leads way for groundbreaking policy reform</h2>
                  
                  <div className="teaser mt-2">
                    <p>The Rō ora peoples cannabis movement started in mid 2019 has been the most successful collaboration in NZ for decades.</p>
                    <p>As of September 2019 a membership of over 480,000 members has enabled the group to write the full legislation for the referendum.</p>
                  </div>
                  <p className="mt-2">
                    <a href="/about">
                      Learn More
                      <i className="fas fa-angle-right" />
                    </a>
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
    );
  }
}

export default News;
