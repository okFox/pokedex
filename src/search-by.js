import Component from '../Component.js';

class SearchBy extends Component {

    onRender(form) {
        //let searchNameInput = form.querySelector('#name-search');
        //add speed and type search here later
        //const queryString = window.location.hash.slice(1);
        //const searchParams = new URLSearchParams(queryString);
        //searchNameInput.value = searchParams.get('pokemon') || '';
        

        form.addEventListener('submit', event => {
            event.preventDefault();
            const formData = new FormData(form);
            // can use formData.append ('name', 'value'); to customize / also can use foreEach to iterate
            const queryString = window.location.hash.slice(1);
            const searchParams = new URLSearchParams(queryString);

            //searchParams.set('type', formData.get('type')); //when you wire up type search
            searchParams.set('pokemon', formData.get('name-search'));
            //searchParams.set('page', 1);

            window.location.hash = searchParams.toString();

        });

    } //ends onrender

    renderHTML() {
        return /*html*/`

           <form class="search-by-name-form">
            <h4>Name:</h4>
               <input name="name-search">
               <button type="submit" form="name-search" value="submit">🔍</button>
           </form>`;
    }   



// /*     renderHTML() {
//         return /*html*/`
//              <section class='search-section'>
//                  <div class='name-search-div'>
//                      <h4>Name:</h4>
//                     <form class="search-by-name-form">
//                         <input name="name-search">
//                         <button type="submit" form="name-search" value="submit">🔍</button>
//                     </form>
//                  </div>
//                  <div class='type-search'>
//                      <h4>Type:</h4>
//                      <select name="search-by-type" id="search-by-type">
//                      </select>
//                  </div>
//                  <div class='speed-search'>
//                       <h4>Speed:</h4>
//                      <input type="number" name="speed-number" id="speed-number" min='5' max='180' step='5' placeholder='50'>
//                  </div>
//              </section>
// `;
//     } */
}

export default SearchBy;