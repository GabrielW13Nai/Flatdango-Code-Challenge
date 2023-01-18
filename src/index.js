//1. See the first movie's details, including its **poster, title, runtime, 
//showtime, and available tickets** when the page loads

// document.addEventListener('DOMContentLoaded',getFirstMovie)

let title = document.querySelector('#title');
let runtime = document.querySelector('#runtime');
let showtime = document.querySelector('#showtime');
let poster = document.getElementById('poster');
let details = document.getElementById('film');
let remainingTickets = document.getElementById('ticket-num');

function getFirstMovie(){  
fetch('http://localhost:3000/films/1')
.then(res=>res.json())
.then(data => {
    
    title.textContent=data.title;
    runtime.textContent=`${data.runtime} MINUTES`;
    showtime.textContent=data.showtime;
    details.textContent=data.description;
    poster.src=data.poster;
    remainingTickets.textContent = data.capacity - data.tickets_sold;
    
    document.querySelector('.card').appendChild(title);
    document.querySelector('.card').appendChild(runtime);
    document.querySelector('#film').appendChild(details);
    document.querySelector('.four wide column').appendChild(src);
    document.querySelector('#description').appendChild(remainingTickets);

});


}
getFirstMovie();

//2. See a menu of all movies on the left side of the page in the `ul#films`
//element when the page loads. 

document.addEventListener('DOMContentLoaded',getmoviesMenu)

let arr =[];
function getmoviesMenu(){  
return fetch('http://localhost:3000/films')
.then(resp=>resp.json())
.then(info => {
        movieList(info)
    }
    )
 
}

let ul = document.createElement('ul');

function movieList(arr){
    arr.forEach((el)=>{
        // console.log(el);
        let li = document.createElement('li');
        li.textContent = el.title;
        li.className = 'movies-List';
        ul.append(li);  
    })
}
document.querySelector('.ui-divided-list').appendChild(ul);

// Below are trial code lines that were run and did not pass
// arr.forEach(item => {
//     parseInt(item.id,10)
//     let i=1;
//     if(item.id===i){
//     do{
//         console.log(item.title)
//         i++;
//     } while(i<item.id);
// }}
// )
// })
// }
// let movie = data.map(titles => console.log(titles.title));
// let movieList = document.createElement('ul');
// movieList.append(movie);
// document.querySelector('.ui-divided-list').appendChild(movieList);
// let movie = document.querySelector(".film-item");
// movie.innerHTML = '';
// let titles = movie.insertAdjacentHTML("beforebegin", `<li> ${movies.title} </li>`);


// 3. Buy a ticket for a movie. After clicking the "Buy Ticket" button, I should
//    see the number of available tickets decreasing on the frontend. I should not
//    be able to buy a ticket if the showing is sold out (if there are 0 tickets
//    available). 

let btn = document.querySelector('#buy-ticket')

btn.addEventListener('click', buyTicket)


function buyTicket(){
fetch('http://localhost:3000/films/1')
.then(feedback=>feedback.json())
.then(result =>{
    let ticketValue = result.capacity - result.tickets_sold;
    do{ticketValue -=1}
        while(ticketValue>1);
        console.log(ticketValue)
    }

)}



    fetch(`http://localhost:3000/films/`,{
        method:'POST',
        headers: { 
            'Content-Type':'Application/json'
        },
        body: JSON.stringify(ticketsLeft)

    }
    )
.then(response=>response.json())
.then(film => console.log(film.capacity-film.tickets_sold))


