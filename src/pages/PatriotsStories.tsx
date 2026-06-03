const PatriotsStories = () => {
  return (
    <>
      <div className="max-w-4xl mx-auto px-6 py-16 text-center">
        <h1 className="text-5xl font-bold text-red-600 mb-6">Patriots Stories</h1>
        <p className="text-2xl text-gray-700 mb-12">
          This is what our descendants in 2276 will read.
        </p>

        <div className="bg-white border border-gray-200 rounded-2xl p-12 shadow-sm max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-red-600 mb-8">Patriot Stories are for Members Only</h2>
          
          <p className="text-lg leading-relaxed mb-10">
            Only approved America First members can submit their stories. 
            This helps us maintain the integrity and spirit of the page.
          </p>

          <a 
            href="/become-one" 
            className="inline-block bg-red-600 hover:bg-red-700 text-white text-xl font-bold px-12 py-5 rounded-xl transition mb-6"
          >
            Become a Member → Submit Your Story
          </a>

          <p className="text-sm text-gray-600 mt-6">
            Already a member?<br />
            <a href="/member-login" className="text-red-600 hover:underline">Log in here</a> to submit your story.
          </p>
        </div>
      </div>
    </>
  );
};

export default PatriotsStories;
