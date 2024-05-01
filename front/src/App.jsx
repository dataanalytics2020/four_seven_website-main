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
      <div className="h-screen" style={{background:`url(${bgImage}) 0 0  repeat-y`}} >
        <div className="container mx-auto p-2">
          <div class="max-w-2xl mx-auto">
            <img class="my-5 w-full" src={fourseven_500_250} />
            <div role="tablist" className="tabs tabs-lg tabs-lifted my-3 w-full">
              <input type="radio" name="my_tabs_2" role="tab" className="tab  whitespace-nowrap" aria-label="取材予定" checked/>
              <div role="tabpanel" className="tab-content bg-base-100  rounded-box p-2 ">
                <div className="card bg-indigo-700 card-side my-5 border-sky-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_3px_#08f]">
                  <div class="my-auto">
                    <div class="sm:flex justify-items-center">
                      <img class="object-contain h-22 w-44 pl-3 py-1" src={sss_banner} alt="SSS"/>
                      <img class="object-contain h-22 w-44 pl-3 py-1" src={ppp_banner} alt="PPP"/>
                    </div>
                  </div>
                  <div class="my-auto">
                    <div className="card-body justify-center">
                      <div class="flex justify-items-center gap-x-2">
                        <h2 class="bg-pink-600 w-120 h-120 mx-auto font-bold text-lg p-1 mx-1 whitespace-nowrap"> 5月4日(土) </h2>
                        <h2 class="bg-neutral w-120 h-120 mx-auto text-lg p-1  whitespace-nowrap">東京都</h2>
                      </div>
                      <p class="text-2xl text-center p-2">ピーアーク<br></br>竹ノ塚</p>
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
                      <div class="flex justify-items-center gap-x-2">
                        <h2 class="bg-pink-600 w-120 h-120 mx-auto font-bold text-lg p-1 mx-1 whitespace-nowrap"> 5月5日(日) </h2>
                        <h2 class="bg-neutral w-120 h-120 mx-auto text-lg p-1  whitespace-nowrap">千葉県</h2>
                      </div>
                      <p class="text-2xl text-center  p-2">ピーアーク<br></br>千葉駅前</p>
                    </div>
                  </div>
                </div>
              </div>
              <input type="radio" name="my_tabs_2" role="tab" className="tab whitespace-nowrap" aria-label="取材結果"  />
              <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">結果はまだありません</div>
            </div>
          </div>
        </div>
      <footer className="footer items-center p-4 bg-neutral text-neutral-content">
        <aside className="items-center grid-flow-col">
          <svg width="36" height="36" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" className="fill-current"><path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path></svg> 
          <p>Copyright © 2024 - All right reserved by fourseven</p>
          <p class="text-2xl p-2">#PR</p>
        </aside> 
      </footer>
      </div>
    </html>
	);
}

export default App;