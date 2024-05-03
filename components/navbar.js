function getnavbar() {
  return `<header >
      <nav>
  
          <h1 id="logo">
              <a href="./index.html"><img src="https://i.postimg.cc/wB0s9Zdm/Crystal-Villas-Navbar-Logo-resized-removebg-preview.png
                  " alt="CRYSTALVILLAS"></a>
                  <a id="admin" href="./Admin/admin.html"><h6>Admin</h6></a>
          </h1>
          
          <ul class="right">
              <ul id="signin"><span><img id="userimg" src="https://i.ibb.co/7N39t8r/Capture3.png" alt="error"></span><span id="name1"></span>
                  <ul id="sign">
                      <li id="signin_page">SIGN IN </li>
                      <li id="signup_page">SIGN UP</li>
                  </ul>
                  
              </ul>
              
              <ul id="currency" ><span id="india">INR</span>
                 <i style="color:white" class="fas fa-caret-down"></i>
                  <ul id="allCurr">
                      <li class="opt">AED</li>
                      <li class="opt">AUD</li>
                      <li class="opt">BRL</li>
                      <li class="opt">CAD</li>
                      <li class="opt">CHF</li>
                      <li class="opt">CZK</li>
                      <li class="opt">DKK</li>
                      <li class="opt">EUR</li>
                      <li class="opt">GBP</li>
                      <li class="opt">HKD</li>
                      <li class="opt">HUF</li>
                      <li class="opt">INR</li>
                      <li class="opt">ILS</li>
                      <li class="opt">INR</li>
                      <li class="opt">JPY</li>
                      <li class="opt">MXN</li>
                      <li class="opt">NOK</li>
                      <li class="opt">NZD</li>
                      <li class="opt">PHP</li>
                      <li class="opt">PLN</li>
                      <li class="opt">SEK</li>
                      <li class="opt">SGD</li>
                      <li class="opt">THB</li>
                      <li class="opt">TRY</li>
                      <li class="opt">TWD</li>
                      <li class="opt">USD</li>
                  </ul>
              </ul>
  
              <input type="checkbox"  id="opensidebarmenu">
              <label for="opensidebarmenu" class="sidebaricon">
                  <div class="spinner top"></div>
                  <div class="spinner middle"></div>
                  <div class="spinner bottom"></div>
              </label>
              
              <div class="sidebarmenu">
                  <div class="menu" >
                      <ul>
                          
                          <li>ARE YOU A PROPERTY OWNER/MANAGER?</li>
                          <li><a href="">List New Property</a></li>
                          <li><a href="./newpage.html">Sign Up To Your Dashboard</a></li>
                          <li><a href="./newsignin.html">Sign In To Your Dashboard</a></li>
                      </ul>
                      <ul>
                          <li>HOLIDAY HOMES FOR SALE</li>
                          <li><a href="">Crystalvillas Managed</a> </li>
                          <li><a href="">Homes from A grade developers. Rentals guaranteed</a> </li>
                          <li><a href="">Marketplace</a> </li>
                          <li><a href="">See what homes are up for sale from different property owners.</a> </li>
  
                      </ul>
                      <ul>
                          <li><a href="">About Us</a></li>
                          <li><a href="">Privacy Policy</a></li>
                          <li><a href="">Terms of Use</a></li>
                          <li><a href="">FAQs</a></li>
                          <li><a href="">Contact Us</a></li>
                      </ul>
                      <ul>
                          <li>© Crystalvillas Pte Ltd</li>
                      </ul>
                  </div>
                  
              </div>
          </ul>
  
      </nav>
  </header> 
  
  <div id="sigin">
      <div id="div2">
          <h1>Sign In</h1>
          
         <hr />
         <form action="" id="signinForm" onsubmit="signedIn(event)">
         <div id="numberbar">
           <select name="" id="select1">
             <option value="">+1</option>
             <option value="">+7</option>
             <option value="">+20</option>
             <option value="">+27</option>
             <option value="">+30</option>
             <option value="">+31</option>
             <option value="">+32</option>
             <option value="">+33</option>
             <option value="">+34</option>
             <option value="">+36</option>
             <option value="">+39</option>
             <option value="">+40</option>
             <option value="">+41</option>
             <option value="">+43</option>
             <option value="">+44</option>
             <option value="">+45</option>
             <option value="">+46</option>
             <option value="">+47</option>
             <option value="">+49</option>
             <option value="">+51</option>
             <option value="">+52</option>
             <option value="">+53</option>
             <option value="">+54</option>
             <option value="">+55</option>
             <option value="">+56</option>
             <option value="">+57</option>
             <option value="">+58</option>
             <option value="">+60</option>
             <option value="">+61</option>
             <option value="">+62</option>
             <option value="">+63</option>
             <option value="">+64</option>
             <option value="">+66</option>
             <option value="">+81</option>
             <option value="">+82</option>
             <option value="">+84</option>
             <option value="">+86</option>
             <option value="">+90</option>
             <option value="">+91</option>
             <option value="">+93</option>
             <option value="">+94</option>
             <option value="">+95</option>
             <option value="">+98</option>
           </select>
           <input type="number" id="mobile1" placeholder="Mobile Number" />
           <p id="only">Only digits allowed</p>
         </div>
         <hr>
         <div id="button">
             <input type="button" value="CANCEL" name="cancel" id="signup">
             <input type="submit" value="SIGN IN" name="SIGN IN" id="submit1" >
          
         </div>
        
     </form>
        </div>
  
  </div>
  
  <div id="div" class="signup_div">
      <div id="signhead">
          <h1>Sign Up</h1>
          <a href="./signin.html">Sign In Instead</a>
      </div>
      
      <hr />
      <form action="" id="form">
          <div id="numberbar">
               <select name="" id="select">
                  <option value="">+1</option>
                  <option value="">+7</option>
                  <option value="">+20</option>
                  <option value="">+27</option>
                  <option value="">+30</option>
                  <option value="">+31</option>
                  <option value="">+32</option>
                  <option value="">+33</option>
                  <option value="">+34</option>
                  <option value="">+36</option>
                  <option value="">+39</option>
                  <option value="">+40</option>
                  <option value="">+41</option>
                  <option value="">+43</option>
                  <option value="">+44</option>
                  <option value="">+45</option>
                  <option value="">+46</option>
                  <option value="">+47</option>
                  <option value="">+49</option>
                  <option value="">+51</option>
                  <option value="">+52</option>
                  <option value="">+53</option>
                  <option value="">+54</option>
                  <option value="">+55</option>
                  <option value="">+56</option>
                  <option value="">+57</option>
                  <option value="">+58</option>
                  <option value="">+60</option>
                  <option value="">+61</option>
                  <option value="">+62</option>
                  <option value="">+63</option>
                  <option value="">+64</option>
                  <option value="">+66</option>
                  <option value="">+81</option>
                  <option value="">+82</option>
                  <option value="">+84</option>
                  <option value="">+86</option>
                  <option value="">+90</option>
                  <option value="">+91</option>
                  <option value="">+93</option>
                  <option value="">+94</option>
                  <option value="">+95</option>
                  <option value="">+98</option>
              </select> 
              <input type="number" id="mobile" placeholder="Mobile Number" />
              <p id="only">Only digits allowed</p>
          </div>
  
          <input class="out" type="email" id="email" placeholder="Email Address" />
          <input class="out" type="password" id="password" placeholder="password " /><br />
  
          <div id="inputtag">
              <input class="input" type="text" id="name" placeholder="First Name" />
              <input class="input" type="text" id="lastname" placeholder="Last Name" />
          </div>
          <hr />
  
          <div id="button">
             <a href="./index.html"><input  type="submit" value="CANCEL" name="cancel" id="cancel"></a> 
              <input type="submit" value="VERIFY WITH OTP" name="VERIFY WITH OTP" id="submit">
  
            
          </div>
      </form>
  </div>`;
}

export default getnavbar;
