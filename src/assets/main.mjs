const content = null || document.getElementById("content");

const url = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCsFjINquwqc-2L_yd-UKGZA&part=snippet%2Cid&order=date';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4813563bc4msh378932eabec037cp10a404jsnbf5456e3636f',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

(async ()=>{
	try {
		const response = await fetch(url, options);
		const result = await response.json();
		const items = result.items.map(element => {
			let id = element.id
			let video = element.snippet;
			let thumbnails = video.thumbnails;
			let view = `<a href="https://youtube.com/watch?v=${id.videoId}" target="_blank">
			<div class="group relative">
			<div
			  class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
			  <img src="${thumbnails.high.url}" alt="${video.description}" class="w-full">
			</div>
			<div class="mt-4 flex justify-between">
			  <h3 class="text-sm text-gray-700">
				<span aria-hidden="true" class="absolute inset-0"></span>
				${video.title}
			  </h3>
			</div>
		  </div>
		  </a>`;
		  return view
		});
		items.forEach(element => {
			content.innerHTML += element
		});
	} catch (error) {
		console.error(error);
	}
})()

