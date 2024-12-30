import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ImagesComponent } from 'src/app/components/images/images.component';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss'],
})
export class SlideshowComponent {
  @ViewChild(ImagesComponent) modal!: ImagesComponent;
  constructor(private dialog: MatDialog) {

  }
  slides = [
    {
      id:1,
      image: '../../../assets/images/doorfinal.jpg',
      alt: 'Central Perk',
      caption: 'The One Where I Saw You',
      message: 'The moment that started it all.',
      imgs:[
        '../../../assets/images/saw-you/f805c352046ee323275c176ad68d37bf.jpg',
        '../../../assets/images/saw-you/IMG-20190917-WA0002.jpg',
        '../../../assets/images/saw-you/IMG-20190928-WA0017.jpg',
        '../../../assets/images/saw-you/IMG_20190904_205844.jpg',
        '../../../assets/images/saw-you/IMG_20190904_210126.jpg',
        '../../../assets/images/saw-you/IMG_20191017_182035-01.jpeg.jpg',
        '../../../assets/images/saw-you/IMG_20191118_181525-01.jpeg',
        '../../../assets/images/saw-you/IMG_20200129_135024.jpg',
        '../../../assets/images/saw-you/IMG_20200615_173659.jpg',
      ]
    },
    {
      id:2,
      image: '../../../assets/images/quirky.jpg',
      alt: 'Friends Logo',
      caption: 'The One Where You Were Weird',
      message: 'And I realized I love your quirks more than anything.',
      imgs:[
        '../../../assets/images/weird/IMG-20191005-WA0017.jpg',
        '../../../assets/images/weird/IMG-20191006-WA0028.jpg',
        '../../../assets/images/weird/IMG-20191015-WA0011.jpg',
        '../../../assets/images/weird/IMG-20200217-WA0019.jpg',
        '../../../assets/images/weird/IMG_20200109_154118.jpg',
        '../../../assets/images/weird/IMG_20200109_155103.jpg',
        '../../../assets/images/weird/IMG_20210109_130419.jpg',
        '../../../assets/images/weird/IMG_20211218_200333.jpg',
        '../../../assets/images/weird/Screenshot_2020-03-07-22-39-32-985_com.whatsapp.jpg',
        '../../../assets/images/weird/Screenshot_2020-05-19-17-19-31-797_com.android.incallui.jpg',
      ]
    },
    {
      id:3,
      image: '../../../assets/images/laugh.jpg',
      alt: 'Fountain Scene',
      caption: 'The One Where You Made Me Laugh',
      message: 'My favorite episodes are always the funny ones.',
      imgs:[
        '../../../assets/images/laugh/IMG-20200323-WA0015.jpg',
        '../../../assets/images/laugh/IMG_20200109_153702.jpg',
        '../../../assets/images/laugh/IMG_20210204_133350.jpg',
        '../../../assets/images/laugh/InShot_20200109_193414147.jpg',
        '../../../assets/images/laugh/Screenshot_2020-04-20-13-58-46-564_com.whatsapp.jpg'
      ]
    },
    {
      id:4,
      image: '../../../assets/images/central-perk.jpg',
      alt: 'Fountain Scene',
      caption: 'The One With All the Food',
      message: 'Because great love stories always involve snacks.',
      imgs:[
        '../../../assets/images/food/IMG_20201121_120712.jpg',
        '../../../assets/images/food/IMG_20201220_170238.jpg',
        '../../../assets/images/food/IMG_20201223_192754.jpg',
        '../../../assets/images/food/IMG_20201231_132851.jpg',
        '../../../assets/images/food/IMG_20201231_133222.jpg',
        '../../../assets/images/food/IMG_20201231_135315.jpg',
        '../../../assets/images/food/IMG_20210102_140802.jpg',
        '../../../assets/images/food/IMG_20210129_134934.jpg',
        '../../../assets/images/food/IMG_20220317_125740.jpg',
      ]
    },
    {
      id:5,
      image: '../../../assets/images/silly.jpg',
      alt: 'Fountain Scene',
      caption: 'The One Where We Took Silly Photos',
      message: 'Because those moments deserve a spot in our highlight reel.',
      imgs:[
        '../../../assets/images/silly/IMG-20200221-WA0009.jpg',
        '../../../assets/images/silly/IMG_20210128_155237.jpg',
        '../../../assets/images/silly/IMG_20210216_144759.jpg',
        '../../../assets/images/silly/IMG_20211118_143720.jpg',
        '../../../assets/images/silly/IMG_20211231_160858.jpg',
      ]
    },
    {
      id:6,
      image: '../../../assets/images/justus.jpg',
      alt: 'Fountain Scene',
      caption: 'The One Where We Were Just Us',
      message: 'No filters, no pretenses—just our beautiful chaos.',
      imgs:[
        '../../../assets/images/justus/IMG-20191018-WA0005.jpg',
        '../../../assets/images/justus/IMG-20191117-WA0014.jpg',
        '../../../assets/images/justus/IMG-20200221-WA0009.jpg',
        '../../../assets/images/justus/IMG_20200109_152401.jpg',
        '../../../assets/images/justus/IMG_20201225_143402.jpg',
        '../../../assets/images/justus/IMG_20210128_155307.jpg',
        '../../../assets/images/justus/IMG_20210213_153645.jpg',
        '../../../assets/images/justus/IMG_20210216_145007.jpg',
        '../../../assets/images/justus/IMG_20210218_152334.jpg',
        '../../../assets/images/justus/IMG_20210307_165655.jpg',
        '../../../assets/images/justus/IMG_20210410_154007.jpg',
        '../../../assets/images/justus/IMG_20220211_151714.jpg',
      ]
    },
    {
      id:7,
      image: '../../../assets/images/hugsy.jpg',
      alt: 'Fountain Scene',
      caption: 'The One With the Big Hug',
      message: 'Because your hugs make everything better.',
      imgs:[
        '../../../assets/images/hug/IMG-20191117-WA0026.jpg',
        '../../../assets/images/hug/IMG_20200109_155038.jpg',
        '../../../assets/images/hug/IMG_20201225_140656.jpg',
        '../../../assets/images/hug/IMG_20201225_165506.jpg',
        '../../../assets/images/hug/IMG_20210204_133353.jpg',
        '../../../assets/images/hug/IMG_20211118_142117.jpg',
        '../../../assets/images/hug/IMG_20211220_151634.jpg',
      ]
    },
    {
      id:8,
      image: '../../../assets/images/amazing.jpg',
      alt: 'Fountain Scene',
      caption: 'The One Where You Looked Amazing',
      message: 'But really, when don’t you?',
      imgs:[
        '../../../assets/images/amazing/IMG-20200129-WA0019.jpg',
        '../../../assets/images/amazing/IMG_20200615_172449.jpg',
        '../../../assets/images/amazing/IMG_20201225_140936.jpg',
        '../../../assets/images/amazing/IMG_20210218_152156.jpg',
        '../../../assets/images/amazing/IMG_20211030_150052.jpg',
        '../../../assets/images/amazing/IMG_20211118_142914.jpg',
        '../../../assets/images/amazing/IMG_20211220_151339.jpg',
        '../../../assets/images/amazing/IMG_20211225_171648.jpg',
        '../../../assets/images/amazing/IMG_20220316_174502.jpg',
        '../../../assets/images/amazing/Screenshot_2019-12-05-20-52-42-869_com.whatsapp.jpg',
        '../../../assets/images/amazing/Screenshot_2020-03-07-22-33-04-996_com.android.incallui.jpg',
      ]
    },
    {
      id:9,
      image: '../../../assets/images/ilu.jpg',
      alt: 'Fountain Scene',
      caption: 'The One Where I Said I Love You',
      message: 'And meant it with all my heart.',
      imgs:[
        '../../../assets/images/loveu/IMG-20190925-WA0012.jpg',
        '../../../assets/images/loveu/IMG-20190930-WA0021.jpg',
        '../../../assets/images/loveu/IMG-20191002-WA0090.jpg',
        '../../../assets/images/loveu/IMG-20191018-WA0009.jpg',
        '../../../assets/images/loveu/IMG-20191120-WA0066.jpg',
        '../../../assets/images/loveu/IMG-20200120-WA0024.jpg',
        '../../../assets/images/loveu/IMG_20200109_155058.jpg',
        '../../../assets/images/loveu/IMG_20210218_154729.jpg',
        '../../../assets/images/loveu/IMG_20211118_143722.jpg',
        '../../../assets/images/loveu/IMG_20211225_170952.jpg',
        '../../../assets/images/loveu/Screenshot_2020-02-11-00-25-51-849_lockscreen.jpg',
      ]
    },
    {
      id:10,
      image: '../../../assets/images/ilu.jpg',
      alt: 'Fountain Scene',
      caption: 'Happy Birthday to the most incredible person I know! Your kindness, warmth, and genuine heart light up every room you enter. You have a way of making everyone around you feel special, and I’m so lucky to call you mine. Here’s to celebrating you today and always, because the world—and my life—is so much better with you in it. Love you endlessly!',
      message: 'And meant it with all my heart.',
      imgs:[
        
      ]
    },
  ];

  customOptions = {
    loop: false,
    autoplay: false,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    items: 1,
    dots: true,
  };

  activeMessage: string | null = null;

  

  closeMessage(): void {
    this.activeMessage = null;
  }

  modalImages: string[] = [];  // This array will store images for the modal
  isModalOpen = false; 
  // Method to open modal and pass the images
  onImageClick(slide: any): void {
    console.log('open');
    this.modalImages = []
    this.modalImages = slide.imgs;

    if(slide.imgs.length>0){
      this.isModalOpen = true;  // Set to true to open the modal
      this.modal.openModal();

    }
    
  }

  closeModal() {
    this.isModalOpen = false;
  }
}
