import logo from './logo.svg';
import './App.css';
import './components/about'

function App() {
  return (
    <>

      {/* header start  */}

      <header class="text-white body-font sticky top-0 bg-gray-950 transition duration-300 ease-in-out transform-gpu">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between transition duration-300 ease-in-out transform-gpu">
          <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img src="logo.png" class="w-6 h-6" alt="Logo" />
            <span class="ml-3 text-xl text-gray-200">Explore.</span>
          </a>

          {/* <!-- Mobile Menu Button --> */}
          <div class="md:hidden">
            <button id="mobile-menu-button" class="text-gray-600 border-0 focus:outline-none">
              <svg fill="currentColor" viewBox="0 0 20 20" class="w-6 h-6">
                <path
                  fill-rule="evenodd"
                  d="M2 4.75C2 4.33579 2.33579 4 2.75 4H17.25C17.6642 4 18 4.33579 18 4.75C18 5.16421 17.6642 5.5 17.25 5.5H2.75C2.33579 5.5 2 5.16421 2 4.75ZM2.75 9H17.25C17.6642 9 18 9.33579 18 9.75C18 10.1642 17.6642 10.5 17.25 10.5H2.75C2.33579 10.5 2 10.1642 2 9.75C2 9.33579 2.33579 9 2.75 9ZM17.25 14.5H2.75C2.33579 14.5 2 14.1642 2 13.75C2 13.3358 2.33579 13 2.75 13H17.25C17.6642 13 18 13.3358 18 13.75C18 14.1642 17.6642 14.5 17.25 14.5Z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>

          <nav class="md:ml-auto md:mr-auto md:flex hidden space-x-4" id="mobile-menu">
            <a class="active border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 text-gray-600 rounded text-base mt-4 md:mt-0" href="#">Home</a>
            <a class="border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 text-gray-600 rounded text-base mt-4 md:mt-0" href="com">About</a>
            <a class="border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 text-gray-600 rounded text-base mt-4 md:mt-0" href="#events">Events</a>
            <a class="border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 text-gray-600 rounded text-base mt-4 md:mt-0" href="#blogs">Blogs</a>
          </nav>

        <a href="contact"> <button
            class="md:inline-flex hidden items-center border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 text-gray-600 rounded text-base mt-4 md:mt-0" href="contact">
            contact 
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
              stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button> </a>
        </div>
      </header>


      {/* hero start  */}

      <section class="text-gray-400 bg-gray-900 body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Get ready for real time Adventure
            </h1>
            <p class="mb-8 leading-relaxed">Making an Online Travel Guide has Never Been so Easy, Get your own customized travel guide to share your local travel tips, favorite neighborhood restaurants, popular tours and activities nearby and places of interest.

            </p>
            <div class="flex justify-center">
              <button class="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">Book</button>
              <button class="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">Destination</button>
            </div>
          </div>
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img class="object-cover object-center rounded" alt="hero" src="https://images.unsplash.com/photo-1503220317375-aaad61436b1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTQ4MTE0Nw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080" />
          </div>
        </div>
      </section>

      {/* download section  */}

      <section class="text-gray-400 bg-gray-950 body-font" id='about'>
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-4 text-center">
            <div class="p-4 sm:w-1/4 w-1/2">
              <h2 class="title-font font-medium sm:text-4xl text-3xl text-white">2.7K</h2>
              <p class="leading-relaxed">Members</p>
            </div>
            <div class="p-4 sm:w-1/4 w-1/2">
              <h2 class="title-font font-medium sm:text-4xl text-3xl text-white">1.8K</h2>
              <p class="leading-relaxed">Activities
              </p>
            </div>
            <div class="p-4 sm:w-1/4 w-1/2">
              <h2 class="title-font font-medium sm:text-4xl text-3xl text-white">35</h2>
              <p class="leading-relaxed">Countries</p>
            </div>
            <div class="p-4 sm:w-1/4 w-1/2">
              <h2 class="title-font font-medium sm:text-4xl text-3xl text-white">4</h2>
              <p class="leading-relaxed">Languages
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* blogs section  */}

      <section class="text-gray-400 bg-gray-800 body-font" id='blogs'>
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-4">
            <div class="p-4 lg:w-1/3">
              <div class="card h-full bg-gray-900 bg-opacity-40 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                <h2 class="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">Explore</h2>
                <h1 class="title-font sm:text-2xl text-xl font-medium text-white mb-3">Mark Antony</h1>
                <p class="leading-relaxed mb-3">"Let’s start your journey with us, your dream will come true. Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
                <a class="text-green-400 inline-flex items-center">Learn More
                  <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
                <div class="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                  <span class="text-gray-500 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-700 border-opacity-50">
                    <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>1.2K
                  </span>
                  <span class="text-gray-500 inline-flex items-center leading-none text-sm">
                    <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>6
                  </span>
                </div>
              </div>
            </div>
            <div class="p-4 lg:w-1/3">
              <div class="card h-full bg-gray-900 bg-opacity-40 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                <h2 class="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">Explore</h2>
                <h1 class="title-font sm:text-2xl text-xl font-medium text-white mb-3">Mark Antony</h1>
                <p class="leading-relaxed mb-3">Let’s start your journey with us, your dream will come true. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <a class="text-green-400 inline-flex items-center">Learn More
                  <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
                <div class="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                  <span class="text-gray-500 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-700 border-opacity-50">
                    <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>1.2K
                  </span>
                  <span class="text-gray-500 inline-flex items-center leading-none text-sm">
                    <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>6
                  </span>
                </div>
              </div>
            </div>
            <div class="p-4 lg:w-1/3">
              <div class="card h-full bg-gray-900 bg-opacity-40 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                <h2 class="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">Explore</h2>
                <h1 class="title-font sm:text-2xl text-xl font-medium text-white mb-3">Mark Antony</h1>
                <p class="leading-relaxed mb-3">Let’s start your journey with us, your dream will come true. Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
                <a class="text-green-400 inline-flex items-center">Learn More
                  <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
                <div class="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                  <span class="text-gray-500 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-700 border-opacity-50">
                    <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>1.2K
                  </span>
                  <span class="text-gray-500 inline-flex items-center leading-none text-sm">
                    <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>6
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* developers  */}

      <section class="text-gray-400 bg-gray-900 body-font" id='events'>
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-4">
            <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div class="h-full text-center">
                <img alt="testimonial" class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-800 bg-gray-800 bg-opacity-10" src="prof.jpg" />
                <p class="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                <span class="inline-block h-1 w-10 rounded bg-green-500 mt-6 mb-4"></span>
                <h2 class="text-white font-medium title-font tracking-wider text-sm">HOLDEN CAULFIELD</h2>
                <p class="text-gray-500">Senior Product Designer</p>
              </div>
            </div>
            <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div class="h-full text-center">
                <img alt="testimonial" class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-800 bg-gray-800 bg-opacity-10" src="prof-2.jpg" />
                <p class="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                <span class="inline-block h-1 w-10 rounded bg-green-500 mt-6 mb-4"></span>
                <h2 class="text-white font-medium title-font tracking-wider text-sm">ALPER KAMU</h2>
                <p class="text-gray-500">UI Develeoper</p>
              </div>
            </div>
            <div class="lg:w-1/3 lg:mb-0 p-4">
              <div class="h-full text-center">
                <img alt="testimonial" class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-800 bg-gray-800 bg-opacity-10" src="prof-3.jpg" />
                <p class="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                <span class="inline-block h-1 w-10 rounded bg-green-500 mt-6 mb-4"></span>
                <h2 class="text-white font-medium title-font tracking-wider text-sm">HENRY LETHAM</h2>
                <p class="text-gray-500">CTO</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* contact  */}

      <section class="text-gray-400 bg-gray-900 body-font relative" id=' '>
        <div class="absolute inset-0 bg-gray-900">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d206438.8725409813!2d72.7163707397183!3d19.08250200716349!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e1!3m2!1sen!2sin!4v1692367214309!5m2!1sen!2sin" width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0" scrolling="no" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div class="container px-5 py-24 mx-auto flex">
          <div class="lg:w-1/3 md:w-1/2 bg-gray-900 shadow-md rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10">
            <h2 class="text-white text-lg mb-1 font-medium title-font">Contact</h2>
            <p class="leading-relaxed mb-5">Post-ironic portland shabby chic echo park, banjo fashion axe</p>
            <div class="relative mb-4">
              <label for="email" class="leading-7 text-sm text-gray-400">Email</label>
              <input type="email" id="email" name="email" class="w-full bg-gray-800 rounded border border-gray-700 focus:border-green-500 focus:ring-2 focus:ring-green-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div class="relative mb-4">
              <label for="message" class="leading-7 text-sm text-gray-400">Message</label>
              <textarea id="message" name="message" class="w-full bg-gray-800 rounded border border-gray-700 focus:border-green-500 focus:ring-2 focus:ring-green-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
            </div>
            <button class="text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">Send</button>
            <p class="text-xs text-gray-400 text-opacity-90 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
          </div>
        </div>
      </section>

      {/* footer  */}

      <footer class="text-gray-400 bg-gray-900 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap md:text-left text-center -mb-10 -mx-4">
            <div class="lg:w-1/6 md:w-1/2 w-full px-4">
              <h2 class="title-font font-medium text-white tracking-widest text-sm mb-3">Navigation</h2>
              <nav class="list-none mb-10">
                <li>
                  <a class="text-gray-400 hover:text-white">Home</a>
                </li>
                <li>
                  <a class="text-gray-400 hover:text-white">About</a>
                </li>
                <li>
                  <a class="text-gray-400 hover:text-white">Event</a>
                </li>
                <li>
                  <a class="text-gray-400 hover:text-white">Blog</a>
                </li>
              </nav>
            </div>
            <div class="lg:w-1/6 md:w-1/2 w-full px-4">
              <h2 class="title-font font-medium text-white tracking-widest text-sm mb-3">EXPLORE</h2>
              <nav class="list-none mb-10">
                <li>
                  <a class="text-gray-400 hover:text-white">Bhutan</a>
                </li>
                <li>
                  <a class="text-gray-400 hover:text-white">Paris</a>
                </li>
                <li>
                  <a class="text-gray-400 hover:text-white">Dubai</a>
                </li>
                <li>
                  <a class="text-gray-400 hover:text-white">England</a>
                </li>
              </nav>
            </div>
            <div class="lg:w-1/6 md:w-1/2 w-full px-4">
              <h2 class="title-font font-medium text-white tracking-widest text-sm mb-3">EXPLORE</h2>
              <nav class="list-none mb-10">
                <li>
                  <a class="text-gray-400 hover:text-white">Bhutan</a>
                </li>
                <li>
                  <a class="text-gray-400 hover:text-white">Paris</a>
                </li>
                <li>
                  <a class="text-gray-400 hover:text-white">Dubai</a>
                </li>
                <li>
                  <a class="text-gray-400 hover:text-white">England</a>
                </li>
              </nav>
            </div>
            <div class="lg:w-1/6 md:w-1/2 w-full px-4">
              <h2 class="title-font font-medium text-white tracking-widest text-sm mb-3">EXPLORE</h2>
              <nav class="list-none mb-10">
                <li>
                  <a class="text-gray-400 hover:text-white">Bhutan</a>
                </li>
                <li>
                  <a class="text-gray-400 hover:text-white">Paris</a>
                </li>
                <li>
                  <a class="text-gray-400 hover:text-white">Dubai</a>
                </li>
                <li>
                  <a class="text-gray-400 hover:text-white">England</a>
                </li>
              </nav>
            </div>
            <div class="lg:w-1/6 md:w-1/2 w-full px-4">
              <h2 class="title-font font-medium text-white tracking-widest text-sm mb-3">EXPLORE</h2>
              <nav class="list-none mb-10">
                <li>
                  <a class="text-gray-400 hover:text-white">Bhutan</a>
                </li>
                <li>
                  <a class="text-gray-400 hover:text-white">Paris</a>
                </li>
                <li>
                  <a class="text-gray-400 hover:text-white">Dubai</a>
                </li>
                <li>
                  <a class="text-gray-400 hover:text-white">England</a>
                </li>
              </nav>
            </div>
            <div class="lg:w-1/6 md:w-1/2 w-full px-4">
              <h2 class="title-font font-medium text-white tracking-widest text-sm mb-3">EXPLORE</h2>
              <nav class="list-none mb-10">
                <li>
                  <a class="text-gray-400 hover:text-white">Bhutan</a>
                </li>
                <li>
                  <a class="text-gray-400 hover:text-white">Paris</a>
                </li>
                <li>
                  <a class="text-gray-400 hover:text-white">Dubai</a>
                </li>
                <li>
                  <a class="text-gray-400 hover:text-white">England</a>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div class="border-t border-gray-800">
          <div class="container px-5 py-8 flex flex-wrap mx-auto items-center">
            <div class="flex md:flex-nowrap flex-wrap justify-center items-end md:justify-start">
              <div class="relative sm:w-64 w-40 sm:mr-4 mr-2">
                <label for="footer-field" class="leading-7 text-sm text-gray-400">Placeholder</label>
                <input type="text" id="footer-field" name="footer-field" class="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:ring-2 focus:ring-green-900 focus:bg-transparent focus:border-green-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
              <button class="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded">Button</button>
              <p class="text-gray-500 text-sm md:ml-6 md:mt-0 mt-2 text-center sm:text-left">Bitters chicharrones fanny pack
                <br class="lg:block hidden" />waistcoat green juice
              </p>
            </div>
            <span class="inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto">
              <a class="text-gray-400">
                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a class="ml-3 text-gray-400">
                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a class="ml-3 text-gray-400">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a class="ml-3 text-gray-400">
                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
                  <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </span>
          </div>
        </div>
        <div class="bg-gray-800 bg-opacity-75">
          <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p class="text-gray-400 text-sm text-center sm:text-left">© 2020 borgetech —
              <a href="https://twitter.com/knyttneve" class="text-gray-500 ml-1" target="_blank" rel="noopener noreferrer">@kiran borge</a>
            </p>
            <span class="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-400 text-sm">Enamel pin tousled raclette tacos irony</span>
          </div>
        </div>
      </footer>


    </>


  );
}

export default App;
