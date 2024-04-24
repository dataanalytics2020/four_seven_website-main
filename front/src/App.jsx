import React from "react";
import axios from "axios";
import bgImage from "./assets/images/bg_image.png";
import fourseven_500_250 from "./assets/images/fourseven_500_250.jpg";
import sss_banner from "./assets/images/sss_banner.png";
import ppp_banner from "./assets/images/ppp_banner.png";
import fourseven_icon from "./assets/images/fourseven_icon.png";

function App() {
	const [data, setData] = React.useState();
	const url = "http://127.0.0.1:8000";
  //const url = "https://four-seven-website-main-bdf74fbf8d75.herokuapp.com";

	const GetData = () => {
		axios.get(url).then((res) => {
			setData(res.data);
		});
	};
	return (
    <html data-theme="synthwave">
      <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="w-10">
          <img alt="fourseven_icon" src={fourseven_icon} />
        </div>
      </div>
      <div className="navbar-center">
        <a className="btn btn-ghost text-xl">【7777】 フォーセブン</a>
      </div>
      <div className="navbar-end">
      </div>
    </div>
      <div className="h-screen" style={{background:`url(${bgImage}) 0 0 no-repeat`}} >
        <div className="container mx-auto p-2">
          <div class="max-w-2xl mx-auto">
            <img class="my-5 w-full" src={fourseven_500_250} />
            <div role="tablist" className="tabs tabs-lg tabs-lifted my-3 w-full">
              <input type="radio" name="my_tabs_2" role="tab" className="tab  whitespace-nowrap" aria-label="取材予定" checked/>
              <div role="tabpanel" className="tab-content bg-base-100  rounded-box p-6 ">
                <div className="card bg-indigo-700 card-side my-5 border-sky-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_3px_#08f]">
                  <div class="my-auto">
                    <div class="sm:flex justify-items-center">
                      <img class="object-contain h-22 w-44 pl-3 py-1" src={sss_banner} alt="SSS"/>
                      <img class="object-contain h-22 w-44 pl-3 py-1" src={ppp_banner} alt="PPP"/>
                    </div>
                  </div>
                  <div class="my-auto">
                    <div className="card-body justify-center">
                      <h2 class="bg-pink-600 w-120 h-120 mx-auto font-bold text-xl p-2"> 4月26日(金) </h2>
                      <p class="text-2xl text-center p-2">ピーアーク朝霞店</p>
                    </div>
                  </div>
                </div>
                <div className="card bg-indigo-700 card-side my-5 border-sky-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_3px_#08f]">
                  <div class="my-auto">
                    <div class="sm:flex justify-items-center">
                      <img class="object-contain h-22 w-44 pl-3 py-1" src={sss_banner} alt="SSS"/>
                      <img class="object-contain h-22 w-44 pl-3 py-1" src={ppp_banner} alt="PPP"/>
                    </div>
                  </div>
                  <div class="my-auto">
                    <div className="card-body justify-center inline-block md:flex items-center">
                      <h2 class="bg-pink-600 w-120 h-120 mx-auto font-bold text-xl p-2"> 4月27日(土) </h2>
                      <p class="text-2xl text-center  p-2">ピーアーク朝霞店</p>
                    </div>
                  </div>
                </div>
                <div className="card bg-indigo-700 card-side my-5 border-sky-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_3px_#08f]">
                  <div class="my-auto">
                    <div class="sm:flex justify-items-center">
                      <img class="object-contain h-22 w-44 pl-3 py-1" src={sss_banner} alt="SSS"/>
                      <img class="object-contain h-22 w-44 pl-3 py-1" src={ppp_banner} alt="PPP"/>
                    </div>
                  </div>
                  <div class="my-auto">
                    <div className="card-body  inline-block justify-center">
                    <h2 class="bg-pink-600 w-120 h-120 mx-auto font-bold text-xl p-2"> 4月28日(日) </h2>
                      <p class="text-2xl text-center p-2 ">ピーアーク朝霞店</p>
                    </div>
                  </div>
                </div>
              </div>
              <input type="radio" name="my_tabs_2" role="tab" className="tab whitespace-nowrap" aria-label="取材結果"  />
              <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">結果はまだありません</div>
            </div>
          </div>
        </div>
      </div>
    </html>
	);
}

export default App;