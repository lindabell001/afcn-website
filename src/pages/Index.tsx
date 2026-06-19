{/* Three Clean Buttons */}
<div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
  <Link
    to="/resources"
    className="inline-block bg-white hover:bg-gray-100 text-patriot-blue font-bold uppercase tracking-wider px-10 py-4 rounded-lg text-lg shadow-lg transition-all"
  >
    Explore Resources
  </Link>

  <Link
    to="/mission"
    className="inline-block bg-patriot-red hover:bg-red-700 text-white font-bold uppercase tracking-wider px-10 py-4 rounded-lg text-lg shadow-lg transition-all"
  >
    Our Mission
  </Link>

  <Link
    to="/become-one"
    onClick={() => {
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'instant' });
      }, 50);
    }}
    className="inline-block bg-white hover:bg-gray-100 text-patriot-blue font-bold uppercase tracking-wider px-10 py-4 rounded-lg text-lg shadow-lg transition-all"
  >
    Become a Member
  </Link>
</div>
