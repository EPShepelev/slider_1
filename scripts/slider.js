
const sliderOne = {
	//create array for images
	imagesSrcs: [],
	//find elements
	showPrevSlideBtn: document.getElementById('prew-btn'),
	showNextSlideBtn: document.getElementById('next-btn'),
	slideImg: document.getElementById('slide-item'),
	//start parameters
	currentImageIndex: 0,

	//methods
	init: function () {
		let that = this; //variable 'that' is inside the function! It is need for correct work 'this'  

		//subscribe to events
		this.showPrevSlideBtn.addEventListener('click', function(e) {
			that.onShowPrevSlideBtnClick(e);
		});
		this.showNextSlideBtn.addEventListener('click', function(e) {
			that.onShowNextSlideBtnClick(e);
		});
		//start parameters
		this.imagesSrcs = ['images/slide_1.jpg','images/slide_2.jpg','images/slide_3.jpg','images/slide_4.jpg','images/slide_5.jpg', 'images/slide_6.jpg'];
		this.slideImg.src = this.imagesSrcs[this.currentImageIndex];
	},

	 onShowPrevSlideBtnClick: function (e) {
		this.currentImageIndex--;
		if (this.currentImageIndex < 0) {
			this.currentImageIndex = this.imagesSrcs.length-1;
			this.slideImg.src = this.imagesSrcs[this.currentImageIndex];
		}
		else{
			this.slideImg.src = this.imagesSrcs[this.currentImageIndex];
		}
	},

	 onShowNextSlideBtnClick: function(e) {
		this.currentImageIndex++;
		if (this.currentImageIndex === this.imagesSrcs.length) {
			this.currentImageIndex = 0;
			this.slideImg.src = this.imagesSrcs[this.currentImageIndex];
		}
		else{
			this.slideImg.src = this.imagesSrcs[this.currentImageIndex];
		}
	}
}







