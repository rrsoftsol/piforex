import React from "react";

export default () => {    

    return (

        <section class="pricing-section sec-pad">
        <div class="pattern-layer" ></div>
        <div class="auto-container">
            <div class="sec-title centred"> 
                <h2>Top <span>Pricing</span> List in Market</h2>
            </div>
            <div class="tabs-box">
                <div class="tab-btn-box">
                    <ul class="tab-btns tab-buttons clearfix">
                        <li class="tab-btn active-btn" data-tab="#tab-1"><h5>Option 01</h5></li>
                        <li class="tab-btn" data-tab="#tab-2"><h5>Option 02</h5></li>
                    </ul>
                    <div class="search-inner">
                        <form action="index.html" method="post">
                            <div class="form-group">
                                 
                            </div>
                        </form>
                    </div>
                </div>
                <div class="tabs-content">
                    <div class="tab active-tab" id="tab-1">
                        <div class="table-outer">
                            <table class="pricing-table">
                                <thead class="table-header">
                                    <tr>
                                        <th>Name</th>
                                        <th>&nbsp;</th>
                                        <th>Sell</th>
                                        <th>Buy</th>
                                        <th>Spread</th>
                                        <th>Chart</th>
                                        <th>&nbsp;</th>
                                    </tr>    
                                </thead>
                                
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div class="name-box">
                                                    <p>eur<i class="flaticon-exchange"></i>usd</p>
                                                </div>
                                            </td>
                                            <td>
                                                &nbsp;
                                            </td>
                                            <td>
                                                $1.06199
                                            </td>
                                            <td>
                                                $1.06185
                                            </td>
                                            <td>
                                                <span class="red">-0.14%</span>
                                            </td>
                                            <td>
                                                <div class="chart"></div>
                                            </td>
                                            <td>
                                                <a href="index.html"><i class="flaticon-right-down"></i></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="name-box">
                                                    <p>usd<i class="flaticon-exchange"></i>jpy</p>
                                                </div>
                                            </td>
                                            <td>
                                                &nbsp;
                                            </td>
                                            <td>
                                                $1.22195
                                            </td>
                                            <td>
                                                $1.22199
                                            </td>
                                            <td>
                                                <span class="green">+0.04%</span>
                                            </td>
                                            <td>
                                                <div class="chart"></div>
                                            </td>
                                            <td>
                                                <a href="index.html"><i class="flaticon-right-down"></i></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="name-box">
                                                    <p>gbp<i class="flaticon-exchange"></i>usd</p>
                                                </div>
                                            </td>
                                            <td>
                                                &nbsp;
                                            </td>
                                            <td>
                                                $0.65982
                                            </td>
                                            <td>
                                                $0.65994
                                            </td>
                                            <td>
                                                <span class="green">+0.12%</span>
                                            </td>
                                            <td>
                                                <div class="chart"></div>
                                            </td>
                                            <td>
                                                <a href="index.html"><i class="flaticon-right-down"></i></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="name-box">
                                                    <p>aud<i class="flaticon-exchange"></i>usd</p>
                                                </div>
                                            </td>
                                            <td>
                                                &nbsp;
                                            </td>
                                            <td>
                                                $0.89652
                                            </td>
                                            <td>
                                                $0.89665
                                            </td>
                                            <td>
                                                <span class="green">+0.13%</span>
                                            </td>
                                            <td>
                                                <div class="chart"></div>
                                            </td>
                                            <td>
                                                <a href="index.html"><i class="flaticon-right-down"></i></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="name-box">
                                                    <p>eur<i class="flaticon-exchange"></i>gbp</p>
                                                </div>
                                            </td>
                                            <td>
                                                &nbsp;
                                            </td>
                                            <td>
                                                $25.458
                                            </td>
                                            <td>
                                                $22.398
                                            </td>
                                            <td>
                                                <span class="red">-3.06%</span>
                                            </td>
                                            <td>
                                                <div class="chart"></div>
                                            </td>
                                            <td>
                                                <a href="index.html"><i class="flaticon-right-down"></i></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="name-box">
                                                    <p>aud<i class="flaticon-exchange"></i>cad</p>
                                                </div>
                                            </td>
                                            <td>
                                                &nbsp;
                                            </td>
                                            <td>
                                                $14.785
                                            </td>
                                            <td>
                                                $13.625
                                            </td>
                                            <td>
                                                <span class="red">-1.16%</span>
                                            </td>
                                            <td>
                                                <div class="chart"></div>
                                            </td>
                                            <td>
                                                <a href="index.html"><i class="flaticon-right-down"></i></a>
                                            </td>
                                        </tr>
                                    </tbody>  
                            </table>
                        </div>
                    </div>
                     
                </div>
            </div>
             
        </div>
    </section> 
    );
};