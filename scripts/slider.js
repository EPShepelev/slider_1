const sliderConstruct = {
	createNewSlider: function() {
				const sliderNew = {
			//create array for images
			imagesSrcs: [],
			//start parameters
			currentImageIndex: 0,
			showPrevSlideBtn: null,
			showNextSlideBtn: null,
			slideImg: null,
			
			//methods
			init: function (element) {

				const that = this; //It is need for correct work 'this' in button on click

				//find elements
				this.showPrevSlideBtn = element.querySelector('.prew-btn');
				this.showNextSlideBtn = element.querySelector('.next-btn');
				this.slideImg = element.querySelector('.slide-item');

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
		return sliderNew;
	}
}

/*
const sliderOne = {
	//create array for images
	imagesSrcs: [],
	//start parameters
	currentImageIndex: 0,
	showPrevSlideBtn: null,
	showNextSlideBtn: null,
	slideImg: null,
	
	//methods
	init: function (element) {

		const that = this; //It is need for correct work 'this' in button on click

		//find elements
		this.showPrevSlideBtn = element.querySelector('.prew-btn');
		this.showNextSlideBtn = element.querySelector('.next-btn');
		this.slideImg = element.querySelector('.slide-item');

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
*/






