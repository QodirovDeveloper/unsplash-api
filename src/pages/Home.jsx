import React from "react";

function Home() {
  return (
    <>
      <div className="container mx-auto max-lg:flex-col pl-2 pr-2 max-w-[1300px] py-3 bg-base-100 flex items-center justify-between min-lg:gap-10 mt-24">
        <div className="mb-8">
          <p className="text-5xl font-bold mt-8 mb-8 max-w-[610px]">
            The most powerful photo engine in the world.
          </p>
          <p className="text-lg max-w-[650px] mb-8">
            Welcome to the Official Unsplash API. Create with the largest open
            collection of high-quality photos.
          </p>
          <div className="flex items-center gap-4">
            <button className="btn btn-neutral">Your apps</button>
            <button className="btn ">View the documentation</button>
          </div>
        </div>
        <div>
          <div className="lg:w-[580px] max-lg:max-w-[580px] h-[350px] bg-neutral text-neutral-content rounded-b-sm rounded-t-md">
            <div className="w-full h-4 bg-neutral-content items-center pl-1 flex rounded-t-sm gap-1">
              <div className="bg-orange-600 w-1.5 h-1.5 rounded-full"></div>
              <div className="bg-warning w-1.5 h-1.5 rounded-full"></div>
              <div className="bg-green-500 w-1.5 h-1.5 rounded-full"></div>
            </div>
            <div className="p-6">
              <div className="flex gap-2 items-center justify-start">
                <p className="mb-1 text-warning">$</p>
                <img
                  src="https://readme-typing-svg.demolab.com?font=Fira+Code&duration=3000&pause=1000&vCenter=true&width=700&lines=curl+https://api.unsplash.com/search/photos?query=canada;curl+https://api.unsplash.com/users/samuelzeller/photos;curl+https://api.unsplash.com/photos"
                  alt="Typing animation"
                />
              </div>
              <div className="text-[11px] line-clamp-16">
                <p className="text-green-400">&#123;</p>

                <p className="pl-4">
                  <span className="text-white">"total"</span>:{" "}
                  <span className="text-warning">4160</span>,
                </p>
                <p className="pl-4">
                  <span className="text-white">"total_pages"</span>:{" "}
                  <span className="text-warning">208</span>,
                </p>
                <p className="pl-4">
                  <span className="text-white">"results"</span>:
                  <span className="text-warning">[</span>
                </p>

                <p className="pl-8 text-green-400">&#123;</p>
                <p className="pl-12">
                  <span className="text-white">"id"</span>:{" "}
                  <span className="text-warning">"cu28RXNesPo"</span>,
                </p>
                <p className="pl-12">
                  <span className="text-white">"created_at"</span>:{" "}
                  <span className="text-warning">
                    "2016-11-22T20:12:51-05:00"
                  </span>
                  ,
                </p>
                <p className="pl-12">
                  <span className="text-white">"updated_at"</span>:{" "}
                  <span className="text-warning">
                    "2017-10-29T11:55:59-04:00"
                  </span>
                  ,
                </p>
                <p className="pl-12">
                  <span className="text-white">"width"</span>:{" "}
                  <span className="text-warning">2848</span>,
                </p>
                <p className="pl-12">
                  <span className="text-white">"height"</span>:{" "}
                  <span className="text-warning">4288</span>,
                </p>
                <p className="pl-12">
                  <span className="text-white">"color"</span>:{" "}
                  <span className="text-warning">"#030302"</span>,
                </p>
                <p className="pl-12">
                  <span className="text-white">"likes"</span>:{" "}
                  <span className="text-warning">177</span>,
                </p>
                <p className="pl-12">
                  <span className="text-white">"user"</span>:{" "}
                  <span className="text-warning">&#123;</span>
                </p>

                <p className="pl-16">
                  <span className="text-white">"id"</span>:{" "}
                  <span className="text-warning">"12Vv_V1gdv4"</span>,
                </p>
                <p className="pl-16">
                  <span className="text-white">"updated_at"</span>:{" "}
                  <span className="text-warning">
                    "2018-04-08T06:10:42-04:00"
                  </span>
                  ,
                </p>
                <p className="pl-16">
                  <span className="text-white">"username"</span>:{" "}
                  <span className="text-warning">"emcomeau"</span>,
                </p>
                <p className="pl-16">
                  <span className="text-white">"name"</span>:{" "}
                  <span className="text-warning">"Ezra Jeffrey"</span>,
                </p>
                <p className="pl-16">
                  <span className="text-white">"first_name"</span>:{" "}
                  <span className="text-warning">"Ezra"</span>,
                </p>
                <p className="pl-16">
                  <span className="text-white">"last_name"</span>:{" "}
                  <span className="text-warning">"Jeffrey"</span>
                </p>

                <p className="pl-12">
                  <span className="text-warning">&#125;</span>
                </p>
                <p className="pl-8 text-warning">&#125;</p>
                <p className="pl-4 text-warning">]</p>
                <p className="text-green-400">&#125;</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="">
    
      </div>
    </>
  );
}
// sm	40rem (640px)	@media (width >= 40rem) { ... }
// md	48rem (768px)	@media (width >= 48rem) { ... }
// lg	64rem (1024px)	@media (width >= 64rem) { ... }
// xl	80rem (1280px)	@media (width >= 80rem) { ... }
// 2xl	96rem (1536px)	@media (width >= 96rem) { ... }

export default Home;
