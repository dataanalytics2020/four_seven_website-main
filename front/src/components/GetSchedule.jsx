import React from "react";
import axios from "axios";
import sss_banner from "../assets/images/sss_banner.png";
import ppp_banner from "../assets/images/ppp_banner.png";

const SCHEDULE_URL = "https://four-seven-website-main-bdf74fbf8d75.herokuapp.com/schedule";
const ScheduleData = () => {
  const [posts, setPost] = React.useState('');

  React.useEffect(() => {
    axios.get(SCHEDULE_URL).then((response) => {
      setPost(response.data);
    });
  }, []);
  console.log('posts');
  console.log(posts);
  if (!posts.length) return '取材予定はありません';
  const schedule_content = posts.map((post) =>
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
                <h2 class="bg-pink-600 w-120 h-120 mx-auto font-bold text-lg p-1 mx-1 whitespace-nowrap"> {post.date} </h2>
                <h2 class="bg-neutral w-120 h-120 mx-auto text-lg p-1  whitespace-nowrap">{post.prefecture}</h2>
            </div>
            <p class="text-2xl text-center p-2">{post.hall_name}</p>
            </div>
        </div>
    </div>
    
  );

  return (
    <div>
        {schedule_content}
    </div>
  );
}


export default function ScheduleDataRender() {
    return (
      <>
        <ScheduleData  />
      </>
    );
  }