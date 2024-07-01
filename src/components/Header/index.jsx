import  './style.scss'

export default function Header() {

  return (
    <>
      <h1><b><span>NEWS</span>ROOM</b></h1>
        <ul>
          <div>
            <li><a href="#home">Home</a></li>
              <li><a href="#categories">Categories</a></li>
              <li><a href="#singlenews">Single News</a></li>
              <li class="dropdown">
                <a href="javascript:void(0)" class="dropbtn">Dropdown</a>
                <div class="dropdown-content">
                  <a href="#">Link 1</a>
                  <a href="#">Link 2</a>
                  <a href="#">Link 3</a>
                </div>
              </li>
              <li><a href="#contact">Contact</a></li>
          </div>
          <div class="search-container">
          <form action="/action_page.php">
            <input type="text" placeholder="keyword" name="keyword" />
            <button type="submit"><i class="fa fa-search"></i></button>
          </form>
        </div>
        </ul>
    </>
  );
}