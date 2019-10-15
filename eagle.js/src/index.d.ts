declare module "eagle.js" {
  import { Vue, Prop, Component } from "vue-property-decorator";

  export default Eagle;
  
  const Eagle: {
    install: (vue: any, options: any) => void;
    use: (it: any, options?: any) => void;
  };

  @Component({
    components: {Slide}
  })
  export class Slideshow extends Vue {
    /**
     * @default 1
     */
    @Prop() firstSlide: number;
    /**
     * @default null
     */
    @Prop() lastSlide: number | null;
    /**
     * @default 1
     */
    @Prop() startStep: number;
    /**
     * Navigate with mouse click or scroll event
     * @default true
     */
    @Prop() mouseNavigation: boolean;
    /**
     * Navigate with keyboard
     * @default true
     */
    @Prop() keyboardNavigation: boolean;
    /**
     * @default false
     */
    @Prop() embedded: boolean;
    /**
     * @default false
     */
    @Prop() inserted: boolean;
    /**
     * event callback for exiting slideshow through first slide
     * @default null
     */
    @Prop() onStartExit: (() => void) | null;
    /**
     * event callback for exiting slideshow through last slide
     * @default null
     */
    @Prop() onEndExit: (() => void) | null;
    /**
     * slideshow navigates back by step by default
     * @default false
     */
    @Prop() backBySlide: boolean;
    /**
     * go to first slide automatically when reaching the last one
     * @default false
     */
    @Prop() repeat: boolean;
    /**
     * alt + click can zoom on slide
     * @default true
     */
    @Prop() zoom: boolean;

    currentSlideIndex: number;
    currentSlide: number | null;
    step: number;
    slideshowTimer: number;
    slideTimer: number;
    slides: any[];
    active: boolean;

    findSlides(): void;
    nextStep(): void;
    previousStep(): void;
    nextSlide(): void;
    previousSlide(): void;
    changeDirection(direction: "prev" | "next"): void;
  }

  @Component
  export class Slide extends Vue {
    /**
     * @default false
     */
    @Prop() skip: boolean;
    /**
     * Default enter animation
     * @default null
     */
    @Prop() enter: string | null;
    /**
     * Enter animation for prev direction
     * @default null
     */
    @Prop() enterPrev: string | null;
    /**
     * Enter animation for next direction
     * @default null
     */
    @Prop() enterNext: string | null;
    /**
     * Default leave animation
     * @default null
     */
    @Prop() leave: string | null;
    /**
     * Leave animation for prev direction
     * @default null
     */
    @Prop() leavePrev: string | null;
    /**
     * Leave animation for next direction
     * @default null
     */
    @Prop() leaveNext: string | null;
    /**
     * Total steps for this slide
     * @default 1
     */
    @Prop() steps: number;
    /**
     * Navigate with mouse click or scroll event
     * @default true
     */
    @Prop() mouseNavigation: boolean;
    /**
     * Navigate with keyboard
     * @default true
     */
    @Prop() keyboardNavigation: boolean;
  }
}