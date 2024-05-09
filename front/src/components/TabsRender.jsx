import React from "react";
import sss_banner from "../assets/images/sss_banner.png";
import ppp_banner from "../assets/images/ppp_banner.png";
import ScheduleDataRender from '../components/GetSchedule.jsx';
const Tabs = ({ color }) => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-md font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 1
                    ? "text-white bg-" + color + "-600"
                    : "text-" + color + "-600 ")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                取材予定
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-md font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 2
                    ? "text-white bg-" + color + "-600"
                    : "text-" + color + "-600 ")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                 取材結果
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-md font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 3
                    ? "text-white bg-" + color + "-600"
                    : "text-" + color + "-600 ")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                 店舗一覧
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-base-100  w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <ScheduleDataRender  />
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3"/>
                    <div className="collapse-title text-xl font-medium">
                      4月27日(火) ピーアーク竹ノ塚
                    </div>
                    <div className="collapse-content"> 
                      <h2 className="text-xl m-2">
                        超優秀機種
                        <span className="badge badge-lg m-2">3台</span>
                      </h2>
                      <div className="overflow-x-auto">
                        <table className="table table-zebra">
                          {/* head */}
                          <thead>
                            <tr>
                              <th>台番号</th>
                              <th>機種名</th>
                              <th>差枚</th>
                              <th>G数</th>
                            </tr>
                          </thead>
                          <tbody>
                            {/* row 1 */}
                            <tr>
                              <th>143</th>
                              <td>スマスロ北斗の拳</td>
                              <td className="text-nowrap">+3000枚</td>
                              <td>5687G</td>
                            </tr>
                            {/* row 2 */}
                            <tr>
                              <th>25</th>
                              <td>エリートサマリーマン鏡</td>
                              <td className="text-nowrap">+400枚</td>
                              <td>1443G</td>
                            </tr>
                            {/* row 3 */}
                            <tr>
                              <th>353</th>
                              <td>ニューアイムジャグラーEX</td>
                              <td className="text-nowrap">-20枚</td>
                              <td>843G</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <h2 className="text-xl m-2">
                        1/2超優秀機種
                        <span className="badge badge-lg m-2">3台</span>
                      </h2>
                      <div className="overflow-x-auto">
                        <table className="table table-zebra">
                          {/* head */}
                          <thead>
                            <tr>
                              <th>台番号</th>
                              <th>機種名</th>
                              <th>差枚</th>
                              <th>G数</th>
                            </tr>
                          </thead>
                          <tbody>
                            {/* row 1 */}
                            <tr>
                              <th>143</th>
                              <td>スマスロ北斗の拳</td>
                              <td className="text-nowrap">+3000枚</td>
                              <td>5687G</td>
                            </tr>
                            {/* row 2 */}
                            <tr>
                              <th>25</th>
                              <td>エリートサマリーマン鏡</td>
                              <td className="text-nowrap">+400枚</td>
                              <td>1443G</td>
                            </tr>
                            {/* row 3 */}
                            <tr>
                              <th>353</th>
                              <td>ニューアイムジャグラーEX</td>
                              <td className="text-nowrap">-20枚</td>
                              <td>843G</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" /> 
                    <div className="collapse-title text-xl font-medium">
                      4月27日(火) ピーアーク新城
                    </div>
                    <div className="collapse-content"> 
                    <h2 className="text-xl m-2">
                        超優秀機種
                        <span className="badge badge-lg m-2">3台</span>
                      </h2>
                      <div className="overflow-x-auto">
                        <table className="table table-zebra">
                          {/* head */}
                          <thead>
                            <tr>
                              <th>台番号</th>
                              <th>機種名</th>
                              <th>差枚</th>
                              <th>G数</th>
                            </tr>
                          </thead>
                          <tbody>
                            {/* row 1 */}
                            <tr>
                              <th>143</th>
                              <td>スマスロ北斗の拳</td>
                              <td className="text-nowrap">+3000枚</td>
                              <td>5687G</td>
                            </tr>
                            {/* row 2 */}
                            <tr>
                              <th>25</th>
                              <td>エリートサマリーマン鏡</td>
                              <td className="text-nowrap">+400枚</td>
                              <td>1443G</td>
                            </tr>
                            {/* row 3 */}
                            <tr>
                              <th>353</th>
                              <td>ニューアイムジャグラーEX</td>
                              <td className="text-nowrap">-20枚</td>
                              <td>843G</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <h2 className="text-xl m-2">
                        1/2超優秀機種
                        <span className="badge badge-lg m-2">3台</span>
                      </h2>
                      <div className="overflow-x-auto">
                        <table className="table table-zebra">
                          {/* head */}
                          <thead>
                            <tr>
                              <th>台番号</th>
                              <th>機種名</th>
                              <th>差枚</th>
                              <th>G数</th>
                            </tr>
                          </thead>
                          <tbody>
                            {/* row 1 */}
                            <tr>
                              <th>143</th>
                              <td>スマスロ北斗の拳</td>
                              <td className="text-nowrap">+3000枚</td>
                              <td>5687G</td>
                            </tr>
                            {/* row 2 */}
                            <tr>
                              <th>25</th>
                              <td>エリートサマリーマン鏡</td>
                              <td className="text-nowrap">+400枚</td>
                              <td>1443G</td>
                            </tr>
                            {/* row 3 */}
                            <tr>
                              <th>353</th>
                              <td>ニューアイムジャグラーEX</td>
                              <td className="text-nowrap">-20枚</td>
                              <td>843G</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" /> 
                    <div className="collapse-title text-xl font-medium">
                      4月28日(水) ピーアーク朝霞
                    </div>
                    <div className="collapse-content"> 
                    <h2 className="text-xl m-2">
                        超優秀機種
                        <span className="badge badge-lg m-2">3台</span>
                      </h2>
                      <div className="overflow-x-auto">
                        <table className="table table-zebra">
                          {/* head */}
                          <thead>
                            <tr>
                              <th>台番号</th>
                              <th>機種名</th>
                              <th>差枚</th>
                              <th>G数</th>
                            </tr>
                          </thead>
                          <tbody>
                            {/* row 1 */}
                            <tr>
                              <th>143</th>
                              <td>スマスロ北斗の拳</td>
                              <td className="text-nowrap">+3000枚</td>
                              <td>5687G</td>
                            </tr>
                            {/* row 2 */}
                            <tr>
                              <th>25</th>
                              <td>エリートサマリーマン鏡</td>
                              <td className="text-nowrap">+400枚</td>
                              <td>1443G</td>
                            </tr>
                            {/* row 3 */}
                            <tr>
                              <th>353</th>
                              <td>ニューアイムジャグラーEX</td>
                              <td className="text-nowrap">-20枚</td>
                              <td>843G</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <h2 className="text-xl m-2">
                        1/2超優秀機種
                        <span className="badge badge-lg m-2">3台</span>
                      </h2>
                      <div className="overflow-x-auto">
                        <table className="table table-zebra">
                          {/* head */}
                          <thead>
                            <tr>
                              <th>台番号</th>
                              <th>機種名</th>
                              <th>差枚</th>
                              <th>G数</th>
                            </tr>
                          </thead>
                          <tbody>
                            {/* row 1 */}
                            <tr>
                              <th>143</th>
                              <td>スマスロ北斗の拳</td>
                              <td className="text-nowrap">+3000枚</td>
                              <td>5687G</td>
                            </tr>
                            {/* row 2 */}
                            <tr>
                              <th>25</th>
                              <td>エリートサマリーマン鏡</td>
                              <td className="text-nowrap">+400枚</td>
                              <td>1443G</td>
                            </tr>
                            {/* row 3 */}
                            <tr>
                              <th>353</th>
                              <td>ニューアイムジャグラーEX</td>
                              <td className="text-nowrap">-20枚</td>
                              <td>843G</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                  <ul className="menu bg-base-200 w-100 ">
                    <li className="disabled"><a>ピーアーク竹ノ塚</a></li>
                    <li className="disabled"><a>ピーアーク朝霞</a></li>
                    <li className="disabled"><a>ピーアーク草加</a></li>
                    <li className="disabled"><a>ピーアーク新城</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default function TabsRender() {
  return (
    <>
      <Tabs color="pink" />
    </>
  );
}