//  -------------Кроссбраузерность IE 9< -------------
// var html5Tags = ['section', 'article', 'main', 'aside', 
//                  'header', 'footer', 'nav', 'figure', 
//                  'figcaption', 'address', 'canvas', 
//                  'details', 'summary', 'audio', 'video',
//                  'source', 'datalist', 'meter', 'progress',
//                  'output', 'time', 'mark'];
// for (var i = 0; i < html5Tags.length; i++) {
//     document.createElement(html5Tags[i]);
// }

// Кнопка наверх
const upBtn = (() => {
	let goTop = document.querySelector('[button-up]')
	const trackScroll = () => {
		let scrolled = window.scrollY
		let coords = document.documentElement.clientHeight
		let scrollBottom = document.documentElement.scrollHeight - document.documentElement.scrollTop - document.documentElement.clientHeight
		
		if (scrolled > coords) {
			goTop.classList.add('button-up-show')
		}
		if (scrolled < coords || scrollBottom < 20) {
      	    goTop.classList.remove('button-up-show')
		}
  }
  const backToTop = () => {
    if (window.scrollY > 0) {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      })
    }
  }
  window.addEventListener('scroll', trackScroll)
  goTop.addEventListener('click', backToTop)
})()