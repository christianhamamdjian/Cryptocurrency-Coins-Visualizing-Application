
let data = [];


// Get the data from the Json file, assign it to a data variable and call the render function:

fetch('the_object.json')
    .then(function(response) {
    return response.json();
    })
        .then(function(myJson) {
        data = myJson;
        renderPage(data)
        });
    


// Create a function to render the page elements:
let textFilter;

function renderPage(data){


// Prepare the app's UI elements:

// Create elements and assign them to variables:
            const app = document.getElementById('container');
            const header = document.createElement('div');
            const filter = document.createElement('div');
            const myInput = document.createElement('input');
            const gallery = document.createElement('div');
            const sortBox = document.createElement('div');
            const sortByName = document.createElement('button');
            const sortByPrice = document.createElement('button');
            const sortByRank = document.createElement('button');
			let coinCard;
// Give Css attributes to the elements:
            header.setAttribute('id', 'my-header');
            filter.setAttribute('id', 'my-filter');
            myInput.setAttribute('id', 'my-input');
            myInput.setAttribute('type', 'search');
            gallery.setAttribute('id', 'my-gallery');
            sortBox.setAttribute('id', 'sort-box');
            sortByName.setAttribute('id', 'sort-by-name');
            sortByPrice.setAttribute('id', 'sort-by-price');
            sortByRank.setAttribute('id', 'sort-by-rank');
// Give values to elements:
            header.innerHTML = '<h1>Cryptocurrency Coins Visualizing</h1>'; 
		    myInput.setAttribute('placeholder', 'Search for your coins');	
            sortByName.innerText = 'Sort By Name' ;
            sortByPrice.innerText = 'Sort By Price';
            sortByRank.innerText = 'Sort By Rank';
// Append the elements to the app Dom element:
            app.appendChild(header);
            app.appendChild(filter);
            filter.appendChild(myInput);
            filter.appendChild(sortBox);
            sortBox.appendChild(sortByName);
            sortBox.appendChild(sortByPrice);
            sortBox.appendChild(sortByRank);
            app.appendChild(gallery);	
			
// Display the coin cards in the gallery:

// Use the data result to build the coin card:
		data.forEach(function (element) {
// Prepare the coin cards elements:
// Create the coin card elements and assign them to variables:
	        let name = document.createElement('div');
	        let rank = document.createElement('div');
	        let priceUsd = document.createElement('div');
	        let priceBtc = document.createElement('div');
	        let availableSupply = document.createElement('div');
	        let percentChange1h = document.createElement('div');
	        let percentChange24h = document.createElement('div');
			let percentChange7d = document.createElement('div');
			coinCard = document.createElement('div');
// Give Css attributes to the coin card elements:
	        name.setAttribute('class', 'name');
	        rank.setAttribute('class', 'rank');
	        priceUsd.setAttribute('class', 'price-usd');
	        priceBtc.setAttribute('class', 'price-btc');
	        availableSupply.setAttribute('class', 'available-supply');
	        percentChange1h.setAttribute('class', 'percent-change-1h');
	        percentChange24h.setAttribute('class', 'percent-change-24h');
	        percentChange7d.setAttribute('class', 'percent-change-7d');
	        coinCard.setAttribute('class', 'my-coin-card');
// Append the elements to the coin card Dom element:
			coinCard.appendChild(availableSupply);
	        coinCard.appendChild(name);
	        coinCard.appendChild(priceUsd);
	        coinCard.appendChild(priceBtc);
	        coinCard.appendChild(rank);
	        coinCard.appendChild(percentChange1h);
	        coinCard.appendChild(percentChange24h);
	        coinCard.appendChild(percentChange7d);
// Give values to elements:
	        name.innerHTML = element.name;
	        rank.innerHTML = '<strong>Rank: </strong>' + element.rank;
	        priceUsd.innerHTML = '<strong>Price in USD: </strong>' + element.price_usd;
	        priceBtc.innerHTML = '<strong>Price in Bitcoin: </strong>' + element.price_btc;
	        availableSupply.innerHTML = '<strong>Available Supply: </strong>' + element.available_supply;
	        percentChange1h.innerHTML = '<strong>Percent Change 1h: </strong>' + element.percent_change_1h;
	        percentChange24h.innerHTML = '<strong>Percent Change 24h: </strong>' + element.percent_change_24h;
	        percentChange7d.innerHTML = '<strong>Percent Change 7d: </strong>' + element.percent_change_7d;
//	Add the coin card to the gallery:
			gallery.appendChild(coinCard);
//	End of foreach iteration:
			})



// Filter the data:
// Add an event listener to the filter input to get its value:  
			myInput.addEventListener('input', function (event){	
// Convert the input text to lower case and assign it to a variable:
			let inputValue = event.target.value.toLowerCase();
// Filter data by the input value and assign it to a variable:
			textFilter = data.filter(function (element){
				return element.name.includes(inputValue);
			});
			while (gallery.hasChildNodes()) {
				gallery.removeChild(gallery.lastChild);
			}
// //	Add the coin card to the gallery:
			textFilter.forEach(function (element) {
// Prepare the coin cards elements:
// Create the coin card elements and assign them to variables:
			let name = document.createElement('div');
			let rank = document.createElement('div');
			let priceUsd = document.createElement('div');
			let priceBtc = document.createElement('div');
			let availableSupply = document.createElement('div');
			let percentChange1h = document.createElement('div');
			let percentChange24h = document.createElement('div');
			let percentChange7d = document.createElement('div');
			coinCard = document.createElement('div');

// Give Css attributes to the coin card elements:
			name.setAttribute('class', 'name');
			rank.setAttribute('class', 'rank');
			priceUsd.setAttribute('class', 'price-usd');
			priceBtc.setAttribute('class', 'price-btc');
			availableSupply.setAttribute('class', 'available-supply');
			percentChange1h.setAttribute('class', 'percent-change-1h');
			percentChange24h.setAttribute('class', 'percent-change-24h');
			percentChange7d.setAttribute('class', 'percent-change-7d');
			coinCard.setAttribute('class', 'my-coin-card');
	
// Append the elements to the coin card Dom element:
			coinCard.appendChild(availableSupply);	
			coinCard.appendChild(name);
			coinCard.appendChild(priceUsd);
			coinCard.appendChild(priceBtc);
			coinCard.appendChild(rank);
			coinCard.appendChild(percentChange1h);
			coinCard.appendChild(percentChange24h);
			coinCard.appendChild(percentChange7d);
	
// Give values to elements:
			name.innerHTML = element.name;
			rank.innerHTML = '<strong>Rank: </strong>' + element.rank;
			priceUsd.innerHTML = '<strong>Price in USD: </strong>' + element.price_usd;
			priceBtc.innerHTML = '<strong>Price in Bitcoin: </strong>' + element.price_btc;
			availableSupply.innerHTML = '<strong>Available Supply: </strong>' + element.available_supply;
			percentChange1h.innerHTML = '<strong>Percent Change 1h: </strong>' + element.percent_change_1h;
			percentChange24h.innerHTML = '<strong>Percent Change 24h: </strong>' + element.percent_change_24h;
			percentChange7d.innerHTML = '<strong>Percent Change 7d: </strong>' + element.percent_change_7d;

//	Add the coin card to the gallery:
			gallery.appendChild(coinCard);
	//	End of foreach iteration:
			})
// End of event listener:
		 });
		 
		

// Sort the filtered result:
sortByName.addEventListener('click', function (event){
	let inputValue = event.target.value.toLowerCase();
	if (inputValue === ''){
		textFilter = data;
	}
	let sortName = textFilter.sort(function(a, b) {
		if(a.name < b.name) return -1;
		if(a.name > b.name) return 1;
		return 0;
	});
	while (gallery.hasChildNodes()) {
		gallery.removeChild(gallery.lastChild);
	}
		//	Add the coin card to the gallery:
			sortName.forEach(function (element) {
				// Prepare the coin cards elements:
				// Create the coin card elements and assign them to variables:
							let name = document.createElement('div');
							let rank = document.createElement('div');
							let priceUsd = document.createElement('div');
							let priceBtc = document.createElement('div');
							let availableSupply = document.createElement('div');
							let percentChange1h = document.createElement('div');
							let percentChange24h = document.createElement('div');
							let percentChange7d = document.createElement('div');
							coinCard = document.createElement('div');
				
				// Give Css attributes to the coin card elements:
							name.setAttribute('class', 'name');
							rank.setAttribute('class', 'rank');
							priceUsd.setAttribute('class', 'price-usd');
							priceBtc.setAttribute('class', 'price-btc');
							availableSupply.setAttribute('class', 'available-supply');
							percentChange1h.setAttribute('class', 'percent-change-1h');
							percentChange24h.setAttribute('class', 'percent-change-24h');
							percentChange7d.setAttribute('class', 'percent-change-7d');
							coinCard.setAttribute('class', 'my-coin-card');
					
				// Append the elements to the coin card Dom element:
							coinCard.appendChild(availableSupply);	
							coinCard.appendChild(name);
							coinCard.appendChild(priceUsd);
							coinCard.appendChild(priceBtc);
							coinCard.appendChild(rank);
							coinCard.appendChild(percentChange1h);
							coinCard.appendChild(percentChange24h);
							coinCard.appendChild(percentChange7d);
					
				// Give values to elements:
							name.innerHTML = element.name;
							rank.innerHTML = '<strong>Rank: </strong>' + element.rank;
							priceUsd.innerHTML = '<strong>Price in USD: </strong>' + element.price_usd;
							priceBtc.innerHTML = '<strong>Price in Bitcoin: </strong>' + element.price_btc;
							availableSupply.innerHTML = '<strong>Available Supply: </strong>' + element.available_supply;
							percentChange1h.innerHTML = '<strong>Percent Change 1h: </strong>' + element.percent_change_1h;
							percentChange24h.innerHTML = '<strong>Percent Change 24h: </strong>' + element.percent_change_24h;
							percentChange7d.innerHTML = '<strong>Percent Change 7d: </strong>' + element.percent_change_7d;
				
				//	Add the coin card to the gallery:
							gallery.appendChild(coinCard);
					//	End of foreach iteration:

			});

});

sortByPrice.addEventListener('click', function (event){
	let inputValue = event.target.value.toLowerCase();
	if (inputValue === ''){
		textFilter = data;
	}
	let sortPrice = textFilter.sort(function(a, b) {
		return a.price_btc - b.price_btc;
	});
	while (gallery.hasChildNodes()) {
		gallery.removeChild(gallery.lastChild);
	}
		//	Add the coin card to the gallery:
		sortPrice.forEach(function (element) {
			// Prepare the coin cards elements:
			// Create the coin card elements and assign them to variables:
						let name = document.createElement('div');
						let rank = document.createElement('div');
						let priceUsd = document.createElement('div');
						let priceBtc = document.createElement('div');
						let availableSupply = document.createElement('div');
						let percentChange1h = document.createElement('div');
						let percentChange24h = document.createElement('div');
						let percentChange7d = document.createElement('div');
						coinCard = document.createElement('div');
			
			// Give Css attributes to the coin card elements:
						name.setAttribute('class', 'name');
						rank.setAttribute('class', 'rank');
						priceUsd.setAttribute('class', 'price-usd');
						priceBtc.setAttribute('class', 'price-btc');
						availableSupply.setAttribute('class', 'available-supply');
						percentChange1h.setAttribute('class', 'percent-change-1h');
						percentChange24h.setAttribute('class', 'percent-change-24h');
						percentChange7d.setAttribute('class', 'percent-change-7d');
						coinCard.setAttribute('class', 'my-coin-card');
				
			// Append the elements to the coin card Dom element:
						coinCard.appendChild(availableSupply);	
						coinCard.appendChild(name);
						coinCard.appendChild(priceUsd);
						coinCard.appendChild(priceBtc);
						coinCard.appendChild(rank);
						coinCard.appendChild(percentChange1h);
						coinCard.appendChild(percentChange24h);
						coinCard.appendChild(percentChange7d);
				
			// Give values to elements:
						name.innerHTML = element.name;
						rank.innerHTML = '<strong>Rank: </strong>' + element.rank;
						priceUsd.innerHTML = '<strong>Price in USD: </strong>' + element.price_usd;
						priceBtc.innerHTML = '<strong>Price in Bitcoin: </strong>' + element.price_btc;
						availableSupply.innerHTML = '<strong>Available Supply: </strong>' + element.available_supply;
						percentChange1h.innerHTML = '<strong>Percent Change 1h: </strong>' + element.percent_change_1h;
						percentChange24h.innerHTML = '<strong>Percent Change 24h: </strong>' + element.percent_change_24h;
						percentChange7d.innerHTML = '<strong>Percent Change 7d: </strong>' + element.percent_change_7d;
			
			//	Add the coin card to the gallery:
						gallery.appendChild(coinCard);
				//	End of foreach iteration:
		});

});

sortByRank.addEventListener('click', function (event){
	let inputValue = event.target.value.toLowerCase();
	if (inputValue === ''){
		textFilter = data;
	}
	let sortRank = textFilter.sort(function(a, b) {
		return a.rank - b.rank;
	});
	while (gallery.hasChildNodes()) {
		gallery.removeChild(gallery.lastChild);
	}
		//	Add the coin card to the gallery:
		sortRank.forEach(function (element) {
			// Prepare the coin cards elements:
			// Create the coin card elements and assign them to variables:
						let name = document.createElement('div');
						let rank = document.createElement('div');
						let priceUsd = document.createElement('div');
						let priceBtc = document.createElement('div');
						let availableSupply = document.createElement('div');
						let percentChange1h = document.createElement('div');
						let percentChange24h = document.createElement('div');
						let percentChange7d = document.createElement('div');
						coinCard = document.createElement('div');
			
			// Give Css attributes to the coin card elements:
						name.setAttribute('class', 'name');
						rank.setAttribute('class', 'rank');
						priceUsd.setAttribute('class', 'price-usd');
						priceBtc.setAttribute('class', 'price-btc');
						availableSupply.setAttribute('class', 'available-supply');
						percentChange1h.setAttribute('class', 'percent-change-1h');
						percentChange24h.setAttribute('class', 'percent-change-24h');
						percentChange7d.setAttribute('class', 'percent-change-7d');
						coinCard.setAttribute('class', 'my-coin-card');
				
			// Append the elements to the coin card Dom element:
						coinCard.appendChild(availableSupply);	
						coinCard.appendChild(name);
						coinCard.appendChild(priceUsd);
						coinCard.appendChild(priceBtc);
						coinCard.appendChild(rank);
						coinCard.appendChild(percentChange1h);
						coinCard.appendChild(percentChange24h);
						coinCard.appendChild(percentChange7d);
				
			// Give values to elements:
						name.innerHTML = element.name;
						rank.innerHTML = '<strong>Rank: </strong>' + element.rank;
						priceUsd.innerHTML = '<strong>Price in USD: </strong>' + element.price_usd;
						priceBtc.innerHTML = '<strong>Price in Bitcoin: </strong>' + element.price_btc;
						availableSupply.innerHTML = '<strong>Available Supply: </strong>' + element.available_supply;
						percentChange1h.innerHTML = '<strong>Percent Change 1h: </strong>' + element.percent_change_1h;
						percentChange24h.innerHTML = '<strong>Percent Change 24h: </strong>' + element.percent_change_24h;
						percentChange7d.innerHTML = '<strong>Percent Change 7d: </strong>' + element.percent_change_7d;
			
			//	Add the coin card to the gallery:
						gallery.appendChild(coinCard);
				//	End of foreach iteration:
		});
});

}


