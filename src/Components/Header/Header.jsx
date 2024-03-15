

const Header = () => {
    return (


        <div className="md:px-20 px-5 pt-10">


            <div class="navbar rounded-3xl">
  <div class="navbar-start">
    <div class="dropdown">
      <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Home</a></li>
        <li><a>About</a></li>
        <li><a>Recipes</a></li>
        <li><a>Search</a></li>
      </ul>
    </div>
    <a class="text-2xl md:text-4xl font-extrabold text-red-600">Chef Table</a>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal px-1 font-bold">
      <li><a className="text-red-600">Home</a></li>
      <li><a>About</a></li>
      <li><a>Recipes</a></li>
      <li><a>Search</a></li>
    </ul>
  </div>
  <div class="navbar-end">
  <label class="input input-bordered flex items-center gap-2 ">
  <input type="text" class="hidden lg:block" placeholder="Search" />
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4 opacity-70"><path fill-rule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clip-rule="evenodd" /></svg>
</label>
<div class="avatar">
  <div class="w-14 ml-3 rounded-full">
    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
  </div>
</div>
  </div>
</div>


        {/* Banner Section */}
        <div className=" mt-10 rounded-3xl">
        <div className="rounded-3xl hero min-h-screen" style={{backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)'}}>
  <div className="hero-overlay bg-opacity-60 rounded-3xl"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="">
      <h1 className="mb-5 text-5xl font-bold">Discover an exceptional cooking class tailored for you!</h1>
      <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quas dolores hic, ex facilis enim tempore magnam, harum reprehenderit molestiae libero, consequatur sapiente quasi deleniti? Nobis aperiam eaque facilis velit.</p>
      <button className="btn btn-active btn-secondary">Explore Now</button>
      <button className="ml-5 btn btn-outline btn-secondary">Our Feedback</button>
    </div>
  </div>
</div>
        </div>



        {/* Recipes Document */}
        <div className="px-2 md:px-10 my-20 text-center">
            <h1 className="text-5xl font-extrabold mb-5">Our Recipes</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis maiores quos, excepturi reiciendis tenetur earum corporis vitae vel. Quam ex ad commodi esse quis blanditiis eum saepe qui nostrum fugiat!</p>
        </div>

        </div>

    );
};

export default Header;