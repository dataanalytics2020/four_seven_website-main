import React from "react";
import axios from "axios";
import bgImage from "./assets/images/bg_image.png";
import fourseven_500_250 from "./assets/images/fourseven_500_250.jpg";
import sss_image from "./assets/images/sss.jpg";　
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
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><a>Homepage</a></li>
            <li><a>Portfolio</a></li>
            <li><a>About</a></li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <a className="btn btn-ghost text-xl">7777</a>
      </div>
      <div className="navbar-end">
      </div>
    </div>
      <div style={{background:`url(${bgImage}) 0 0 no-repeat`}} >
        <div className="container mx-auto p-2">
          <div class="max-w-3xl mx-auto">
            <img class="my-5 w-full" src={fourseven_500_250} />
            <div role="tablist" className="tabs tabs-lg tabs-lifted my-3">
              <input type="radio" name="my_tabs_2" role="tab" className="tab  whitespace-nowrap" aria-label="取材予定" checked/>
              <div role="tabpanel" className="tab-content bg-base-100  rounded-box p-6 ">
                <div className="card card-side bg-base-100 shadow-xl border-2 border-rose-600 my-2 ">
                  <figure><img class="object-contain h-18 w-40 p-3" src={sss_image} alt="SSS"/></figure>
                  <div className="card-body justify-center">
                    <h2 className="card-title">4月27日</h2>
                    <p>パーラー山下店</p>
                    <div className="card-actions ">
                      <button className="btn btn-primary">店舗詳細へ</button>
                    </div>
                  </div>
                </div>
                <div className="card card-side  my-5 border-sky-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]">
                  <figure><img class="object-contain h-18 w-40 p-3" src={sss_image} alt="SSS"/></figure>
                  <div className="card-body justify-center">
                    <h2 className="card-title">5月7日</h2>
                    <p>パーラー豪徳寺店</p>
                    <div className="card-actions ">
                      <button className="btn btn-primary">店舗詳細へ</button>
                    </div>
                  </div>
                </div>
                <div className="card card-side bg-base-100 shadow-xl border-2 border-rose-600 my-2 ">
                  <figure><img class="object-contain h-18 w-40 p-3" src={sss_image} alt="SSS"/></figure>
                  <div className="card-body justify-center">
                    <h2 className="card-title">5月17日</h2>
                    <p>パーラー武田店</p>
                    <div className="card-actions ">
                      <button className="btn btn-primary">店舗詳細へ</button>
                    </div>
                  </div>
                </div>
              </div>

              <input type="radio" name="my_tabs_2" role="tab" className="tab whitespace-nowrap" aria-label="取材結果"  />
              <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">結果はまだありません</div>
            </div>
            <div><p> </p></div>
            <div></div>
            <div></div>

            <div
                class="m-5 w-40 h-20 flex justify-center items-center text-sky-200 border-2 rounded-lg border-sky-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]"
            >
                ネオンっぽいボタン
            </div>

            <div>ここkoに処理を書いていきます</div>
            {data ? <div>{data.Hello}</div> : <button onClick={GetData}>データを取得</button>}
            <h1 className="mt-10 text-5xl underline underline-offset-4">
              Hello world!
            </h1>
            <button class="bg-indigo-600 px-4 py-3 text-center text-sm font-semibold inline-block text-white cursor-pointer uppercase transition duration-200 ease-in-out rounded-md hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring">
              Tailwind Button
            </button>
          </div>
        </div>
      </div>
    </html>
    
	);
}

export default App;