import React from "react";

function ListUi({ response }) {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {response &&
            response.map((item) => (
              <div className="xl:w-1/4 md:w-1/2 p-4">
                <div className="bg-gray-100 p-6 rounded-lg">
                  {item.avatar_url ? (
                    <img
                      className="h-40 rounded w-full object-cover object-center mb-6"
                      src={item.avatar_url}
                      alt="Profile_picture"
                    />
                  ) : (
                    <img
                      className="h-40 rounded w-full object-cover object-center mb-6"
                      src="./assets/general.jpg"
                      alt="Profile_picture"
                    />
                  )}
                  <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                    <a href={item.url.html_url} target="blank">
                      {item.url.html_url}
                    </a>
                  </h3>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                    <b>login: </b>
                    {item.login}
                  </h2>
                  <p className="leading-relaxed text-base">
                    <b>avatar_url: </b>
                    {item.avatar_url}
                    <br />
                    <b>html_url: </b>
                    <a href={item.url.html_url} target="blank">
                      {item.url.html_url}
                    </a>
                    <br />
                    <b>type: </b>
                    {item.type}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}

export default ListUi;
