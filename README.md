# Order Pro
### Overview 
__Order Pro__ is an order management tool for retail/commerce businesses. 
Easily create , manage,  search , and fulfill orders from a simple interface.

## Pages/Routes
 ***Note*** : each page features a navigation bar , which features links to the main pages
### 1.  Home Page
![Home Page] ('./src/assets/readme/homepage.png')
  - The homepage features an introduction to Order Pro 
  - 
### 2. My Orders Page
![Orders Page] ('./src/assets/readme/my-orders-page.png')
  - This page displays a table of all user generated orders 
  - The searchbar allows users to search by order number, date , customer name , or item name
### 3. Create Order Page
![Create Order Page] ('./src/assets/readme/create-order-page.png')
  - Create a new order by filling out the form
    - each is input required 
    - order numbers are generated automatically , no order number is repeated
### 4. Order Number 
![Order Number Page] ('./src/assets/readme/order-number-page.png')
  - Each order number page is generated when a new order is submitted
  - Access all order-specific information from this page
  - all order number pages follow the same url structure
### Requirements
* Node 16.14.2
* React Bootstrap 2.3.0 (Bootstrap 5)
* React Router

### Installation and Setup
* Fork and clone 
* Open project , run npm install
* Run npm add bootstrap bootstrap-react
  - if you'd like to customize the Bootstrap Sass files , then install Vanilla Bootstrap
    - npm install bootstrap
* open another command terminal and access the src file
 - run json-server --watch db.json to setup localhost database
* run npm start

## Contributors
- [Nick Mendez (Me)](https://github.com/nickmendezFlatiron)
### License - 3-Clause BSD License
*Copyright <2022> <COPYRIGHT Nicholas Mendez - github: nickmendezFlatiron>

*Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

*THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
