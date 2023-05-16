import { Component } from "react";

class ImageSlider extends Component{
    
    imageInterval=0; 
    constructor(){
        super();
        this.state = {
            imageSource : [
                './assets/1.jpg',
                './assets/2.jpg',
                './assets/3.jpg',
                './assets/4.jpeg',
              ],
              current :0
        }
    }
   
    
    
      nextImg=()=> {
        if (this.state.current < this.state.imageSource.length - 1)         
        this.setState({current:this.state.current+1});
      }
       prevImg= () =>{
        if (this.state.current > 0)
        this.setState({current:this.state.current-1});
      }
    
       startSlide= ()=> {
        this.imageInterval = setInterval(() => {
          if (this.state.current >= this.state.imageSource.length - 1)
          this.setState({current:0});
          else 
          this.setState({current:this.state.current+1});
        }, 1000);
      }
       stopSlide= ()=> {
        clearInterval(this.imageInterval);
      }
 render(){
    return(
        <div class="card-body my-2 py-3 border border-primary p-5 ">
        <h2 class="fw-bold text-center text-info my-2">PART 2</h2>
      
        <div class="wrapper text-center">
          <img height={200} width={600} src={this.state.imageSource[this.state.current]} alt="img" />
        </div>
      
        <div class="d-flex justify-content-center mt-4">
          <input
            type="button"
            class="btn btn-info mx-2"
            value="Prev"
            onClick={this.prevImg}
          />
          <input
            type="button"
            class="btn btn-info mx-2"
            value="Next"
            onClick={this.nextImg}
          />
          <input
            type="button"
            class="btn btn-info mx-2"
            value="Slide"
            onClick={this.startSlide}
          />
          <input
            type="button"
            class="btn btn-info mx-2"
            value="Stop"
            onClick={this.stopSlide}
          />
        </div>
      </div>
    )
    }
}


export default ImageSlider;