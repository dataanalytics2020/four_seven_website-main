import React from "react";
import axios from "axios";

const REPORT_URL = "https://four-seven-website-main-bdf74fbf8d75.herokuapp.com/top_report_data";
const TopReportData = () => {
  const [posts, setPost] = React.useState('');

  React.useEffect(() => {
    axios.get(REPORT_URL).then((response) => {
      setPost(response.data);
    });
  }, []);
  console.log('posts');
  console.log(posts);
  if (!posts.length) return '取材結果はありません';
  return ( posts.map((post) =>
    <div className="card bg-indigo-700 card-side my-5 border-sky-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_3px_#08f]">
      <div className="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="my-accordion-4"/>
        <div className="collapse-title text-xl font-medium">
          <h2 class="text-center  my-auto font-bold text-lg p-1 whitespace-nowrap"> {post.date} {post.hall_name} </h2>
        </div>
        <div className="collapse-content collapse-close">
          <div class="w-full">
            <div class="flex flex-row">
                <h2 class="basis-1/3 bg-pink-600 text-center  my-auto font-bold text-lg p-3 whitespace-nowrap"> {post.date} </h2>
                <div class="basis-2/3 text-xl bg-white text-black text-center p-3  w-full bg-violet-700 whitespace-nowrap">{post.hall_name}</div>
            </div>
            {
              post.detail_report_json_list.map((report_detail) => (
              <>
              
              <div class="bg-violet-900 my-2">
                <p class="text-xl text-center bg-violet-900">{report_detail.subject_name}</p>
                <div className="overflow-x-auto">
                  <table className="table table-xs bg-violet-900">
                    <thead>
                      <tr>
                        <th className="text-center bg-neutral-800 text-white">台番号</th>
                        <th className="text-center bg-neutral-800 text-white">機種名</th>
                        <th className="text-center bg-neutral-800 text-white">G数</th>
                        <th className="text-center bg-neutral-800 text-white">差枚</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                      report_detail.extract_subject_num_df.map((td_obj, index) => (
                        <tr key={index}>
                          <td className="text-center bg-white text-black font-semibold whitespace-nowrap text-base">{td_obj.machine_number}</td>
                          <td className="text-center bg-white text-black font-semibold whitespace-nowrap ">{td_obj.machine_name}</td>
                          <td className="text-center bg-white text-black font-semibold whitespace-nowrap px-2 text-base">{td_obj.game_count}G</td>
                          <td className="text-center bg-white text-black font-semibold whitespace-nowrap text-base">{td_obj.diff_coins}枚</td>
                        </tr>
                      ))
                      }
                    </tbody>
                  </table>
                </div>
                    {
                      (() => {
                        if (!report_detail.subject_name.includes('台並び')) {
                          return( 
                          <>
                            <table className="table table-xs bg-violet-900 border border-black">
                              <tbody>
                                <tr><th className="text-center text-base bg-neutral-800 text-white" >集計台数</th><td className="text-center text-base bg-white text-black font-semibold " >{report_detail.extract_subject_num_df.length}台</td></tr>
                                <tr><th className="text-center text-base bg-neutral-800 text-white" >合計差枚</th><td className="text-center text-base bg-white text-black font-semibold" >{report_detail.sum_diff_coins}枚</td></tr>
                                <tr><th className="text-center text-base bg-neutral-800 text-white" >平均差枚</th><td className="text-center text-base bg-white text-black font-semibold" >{report_detail.ave_diff_coins}枚</td></tr>
                                <tr><th className="text-center text-base bg-neutral-800 text-white" >平均出率</th><td className="text-center text-base bg-white text-black font-semibold" >{report_detail.ave_output_rate}%</td></tr>
                                <tr><th className="text-center text-base bg-neutral-800 text-white" >差枚プラス台数</th><td className="text-center text-base bg-white text-black font-semibold" >{report_detail.win_count_str}</td></tr>
                              </tbody>
                            </table>
                          </>
                        )
                        } else {
                          return ( "" )
                        }
                      })()
                    }

              </div>
              </>
              ))
            
            }
            
          </div>
        </div>
      </div>
    </div>


    
  ));

}


export default function TopReportDataRender() {
    return (
      <>
        <TopReportData  />
      </>
    );
  }