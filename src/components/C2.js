import image from './image.png';
function C2(){
    return(
        <div class="row ">
           <div class="col-lg-3 col-sm-12 col-md-6 bg-secondary"><h1>Visit us on</h1>
            <ul>
                <li><a class="text-light text-decoration-none" href="https://facebook.com">Facebook</a></li>
                <li><a class="text-light text-decoration-none" href="https://whatsApp.com">WhatsApp</a></li>
                <li><a class="text-light text-decoration-none" href="https://instagram.com">Instagram</a></li>
                <li><a class="text-light text-decoration-none" href="https://twitter.com">Twitter</a></li>
            </ul>
            </div>
            <div class="col-lg-3 col-sm-12 col-md-6 bg-secondary"><h1>Blogs</h1>
            <ol>
                <li><a href="#">Blog 1</a></li>
                <li><a href="#">Blog 2</a></li>
                <li><a href="#">Blog 3</a></li>
                <li><a href="#">Blog 4</a></li>
            </ol>
            </div>
            <div class="col-lg-3 col-sm-12 col-md-6 bg-secondary"><h1>Topics</h1>
            <ol>
                <li>Subtopic</li>
                <li>Subtopic</li>
                <li>Subtopic</li>
                <li>Subtopic</li>
            </ol>
            </div>
            <div class="col-lg-3 col-sm-12 col-md-6 bg-secondary">
               <a href="https://flipkart.com">
               <img src={image} alt="image"/>
               </a>
            </div>
        </div>
    )
}
export default C2;